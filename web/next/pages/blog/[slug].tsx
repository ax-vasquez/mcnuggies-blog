import { PortableText, PortableTextReactComponents } from '@portabletext/react'
import { FunctionComponent } from 'react'
import { PageLayout } from '../../components/layout/PageLayout'
import client from '../../sanity/client'
import { Article } from '../../types/sanity'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import Link from 'next/link'
import createImageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import { AnchoredHeading } from '../../components/shared/AnchoredHeading'

const imageBuilder = createImageUrlBuilder(client)

interface BlogPostProps {
  article: Article & {
    imageUrl?: string
    authorName?: string
  }
}

const urlForImage = (source) =>
  imageBuilder.image(source).auto(`format`).fit(`max`)

const blogPostComponents = {
  types: {
    code: (props) => {
      const { language, code } = props.value
      return (
        <SyntaxHighlighter theme="" language={language}>{code}</SyntaxHighlighter>
      )
    },
    image: ({value}) => {
      const imageHeight = 600
      const imageWidth = 1200

      /**
       * NOTE: Sanity's docs on presenting images DOES NOT cover presenting images this way. When you have images embedded in body
       * content, as article images are, you do NOT have access to a normal "SanityReference" object as their docs assume. Fortunately,
       * the `image()` API accepts a `_ref` value in addition to the types discussed in the docs. Simply target `_ref` as we do here
       * in order to render images within block content.
       * 
       * @see https://www.sanity.io/docs/presenting-images
       */
      const imgUrl = urlForImage(value.asset[`_ref`]).auto(`format`).url()

      if (!imgUrl) {
        return null
      }

      return (
        <Image
          src={imgUrl}
          height={imageHeight}
          width={imageWidth}
        />
      )
    },
  },
  marks: {
    highlight: ({ children }) => <span className="highlighted-text">{children}</span>,
    internalLink: ({ value, children }) => {
        const linkText = children ? children[0] : `[internal_link]`
        const {slug = {}} = value
        return <Link href={`/blog/${slug.current}`}>{linkText}</Link>
    },
    link: ({ value, children }) => {
        return (
          <a href={value.url} target="_blank" rel="noreferrer">
            {children}
          </a>
        )
    },
  },
  block: {
    h2: ({ value, children })=> {
      return <AnchoredHeading
        component={children}
        label={value.children[0].text}
        variant='h2'
      />
    },
    h3: ({ value, children })=> {
      return <AnchoredHeading
        component={children}
        label={value.children[0].text}
        variant='h3'
      />
    },
    h4: ({ value, children })=> {
      return <AnchoredHeading
        component={children}
        label={value.children[0].text}
        variant='h4'
      />
    }
  }
} as Partial<PortableTextReactComponents>

const BlogPost: FunctionComponent<BlogPostProps> = ({ article }) => {
  console.log(article.summary)
  return (
    !!article && (
      <PageLayout
        pageTitle={article.title}
        useTitleOverlay={false}
        imgSrc={article.imageUrl}
        metaDescription={article.summary && article.summary[0].children[0].text}
      >
        {!!article && (
          <div>
            <div className='article-metadata'>
              <h1 data-cy="article-title">{article.title}</h1>
              <div className='author-field'>By {article.authorName}</div>
              <div className='publish-date' data-cy="article-publish-date">Published {article.publishDate}</div>
            </div>
            <br />
            <div data-cy="article-body">
              <PortableText
              value={article.body}
              components={blogPostComponents}
            />
            </div>

          </div>
      )}
      </PageLayout>
    )

  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "article" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug: string) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context: any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = `` } = context.params
  /**
   * Because the generated slug is lower case, the query also needs to pass a slug that's all lower-case.
   * Othwerise, no match will be found; in other words, this query syntax is case-sensitive
   */
  const article = await client.fetch(`
    *[_type == "article" && slug.current == $slug][0]{
      title,
      publishDate,
      summary,
      "imageUrl": image.asset->url,
      "authorName": author->name,
      body
    }
  `, { slug: slug.toLowerCase() })

  return {
    props: {
      article
    }
  }
}

export default BlogPost
