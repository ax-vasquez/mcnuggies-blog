# Sanity.io - BlockContent and Serializers

In Sanity, "rich text" fields are implemented in the schema as an array of blocks (which is all defined and stored internally at Sanity.io). 

When consuming the data from Sanity, the application needs to know how to serialize the blocks to the correct content. This document covers the "how" and "why" of serializers in this repository.

In the context of the `creators-blog`, one such field is the article `body` field. **Although you can query the `body` field in GraphQL, you should always use the `_raw` version of the text field. In our case, this is `_rawBody`.**

## Why `_raw`?
In short, because it's way harder to use the non-raw version of the field for a number of reasons:
* There is no "convenience" logic to interpret each block as the correct type (e.g., `p`, `strong`, `span`, etc.)
    * In some cases, there are fields you can use to achieve the same result, but you have to perform a lot of manual logic to extract only the necessary/usable fields
* Sanity uses the [Portable Text](https://github.com/portabletext/portabletext) specification
    * Because of this, we can use the provided [`@sanity/block-content-to-react`](https://www.sanity.io/docs/portable-text-to-react) package to simply consume the `_rawBody` field and convert the blocks to site content

## Portable Text and `@sanity/block-content-to-react`
The `@sanity/block-content-to-react` provides the `BlockContent` component, which requires the `blocks` field - this is where we pass the raw body. For example:
```tsx
<BlockContent blocks={_rawBody} serializers={serializers}/>
```

There is no need to manually process **any** of the body content because `BlockContent` handles that for you. **You will need to create serializers for any "custom" or non-default fields that the target block content has**. Some examples that this repository uses:
1. `types.code` - Tells `BlockContent` how to render code blocks
2. `marks.highlight` - Tells `BlockContent` how to render highlighted text
3. `marks.internalLink` - Tells `BlockContent` what to do when an internal link is encountered*
    * _Internal links are not supported in Gatsby sites out-of-the-box; the Sanity GraphQL API doesn't return any slug data, which is required to link the internal resources on the Gatsby side of things_
4. `marks.link` - Tells `BlockContent` what to do when an internal link is encountered

> NOTE: Don't leave empty, yet supported, fields in the serializers object. For example, `list` is a supported field on a serializer object for Sanity, but if you were have this in your serializer object while set to `{}`, your site will not build (and the error isn't really clear). I assume the same goes for any other supported field in serializers. **TL;DR: only add what you need to the serializers object**

### Generating unique `key` fields on child blocks
By default, if you have a Block Content field with several child blocks, none of the child blocks will be assigned a unique `key`. This will lead to errors in the console saying that child elements need to have a unique `key` identifier.

Fortunately, this is pretty easy to fix using serializers. Simply add a `container` field to the serializer object and define it like so:
```ts
const serializer = {
    container: ({ children }) => {
        return (
            children.map(block => {
                return (<div key={`${block.key}`}>{block}</div>)
            })
        )
    },
    // Rest of the serializer...
}
```
* `container` is a top-level field in the `serializer` object
* This simply wraps each child block in a `div` and gives it the `key` value from the given block (each of which is a unique identifier, provided by Sanity)
    * *Room for improvement: we could make these keys more readable, but it may not be a big deal*

### Handling internal links
When choosing how to handle internal links, you pretty much only need to consider whether or not you'd like to open the link in the current window, or a new tab. 

**When opening in the current window...** you should leverage the Gatsby `Link` API, which utilizes the site cache to link you to the target location way faster than a simple `<a>` ever could. If you don't need to preserve the user's location in the original document, then you should always use Gatsby `Link` (something, something "blazing fast"...). _The only reason you **wouldn't** want to do this is if you need the link to open in a new tab._

**When opening in a new tab...** you should just use an `<a>` tag and set `target` to `"_blank"` - this sets the link to open in a new tab, thus preserving the user's location where the link is located. _Only do this for links that you need to open in a new tab._

#### What `creators-blog` does
This Gatsby site uses Gatsby `Link` for internal links. This makes it so that you can link articles together in the Sanity studio and have the articles be linked in the Gatsby site, _and_ do so by leveraging Gatsby's crazy-fast site cache.

Here is our serializer for internal links:
```ts
const serializer = {
    // Rest of the serializer...
    marks: {
        // Other marks...
        internalLink: ({ mark, children }) => {
            const { slug } = mark.reference
            return <Link to={`/blog/${slug.current}`}>{children}</Link>
        },
    },
    // Rest of the serializer...
}
```
* Internal links from sanity are sent through their API as `internalLink` within the `marks` field (along with `link` and `highlight`, among others)
* We destructure the `props` field since we only need `mark` and `children`
    * We then pull the value for `slug` out of `mark.reference`
    * From there, it's just a matter of setting up a rather "plain" Gatsby `Link`

##### But wait... `slug` is undefined!
This is a bit of a tricky part - first and foremost, _it's not a bug_. The issue is that, by default, references are not resolved in the GraphQL queries for `gatsby-source-sanity`. To fix this, locate wherever you are querying for the raw data in question and alter it so it looks something like the following:
```graphql
_rawBody(resolveReferences: {maxDepth: 4})
```

**GOTCHA!** It seems there isn't really an easy way to control the size of the data queried on the reference. It pretty much seems to be an "all or nothing" approach. Unfortunately, this can potentially result in very large page sizes. Some users have reported a single page size in excess of 4MB... This is certainly a limitation and something to keep in mind when setting up internal links in your content.
* The simplest way to avoid over-inflated page sizes seems to simply be to not have many references
* https://github.com/sanity-io/gatsby-source-sanity/issues/86
