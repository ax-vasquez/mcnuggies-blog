import { PortableText, PortableTextReactComponents } from '@portabletext/react'
import { FunctionComponent } from 'react'
import { PageLayout } from '../../components/layout/PageLayout'
import client from '../../sanity/client'
import { Article } from '../../types/sanity'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import Link from 'next/link'

interface BlogPostProps {
  article: Article & {
    imageUrl?: string
    authorName?: string
  }
}

const blogPostComponents = {
  types: {
    code: (props) => {
      const { language, code } = props.value
      return (
        <SyntaxHighlighter theme="" language={language}>{code}</SyntaxHighlighter>
      )
  },
  },
  marks: {
    highlight: ({ children }) => <span className="highlighted-text">{children}</span>,
    internalLink: ({ value, children }) => {
        const { slug } = value.reference
        return <Link href={`/blog/${slug.current}`}>{children}</Link>
    },
    link: ({ value, children }) => {
        return (
          <a href={value.url} target="_blank" rel="noreferrer">
            {children}
          </a>
        )
    },
  }
} as Partial<PortableTextReactComponents>

const BlogPost: FunctionComponent<BlogPostProps> = ({ article }) => {
  return (
    !!article && (
      <PageLayout
      pageTitle={article.title!}
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
