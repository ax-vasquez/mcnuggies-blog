import { PortableText, PortableTextReactComponents } from '@portabletext/react'
import { FunctionComponent, useState } from 'react'
import { PageLayout } from '../../components/layout/PageLayout'
import client from '../../sanity/client'
import { Article } from '../../types/sanity'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import Link from 'next/link'
import { AnchoredHeading } from '../../components/shared/AnchoredHeading'
import { ArticleBodyImage } from './ArticleBodyImage'
import styles from './article.module.scss'
import CustomIcon from '../../components/shared/CustomIcon'
import { OutlineModal } from '../../components/blog/modal/OutlineModal'
import kebabCase from '../../util/kebabCase'

interface BlogPostProps {
  article: Article & {
    imageUrl?: string
    seriesTitle?: string
    authorName?: string
  }
  outlineItems: {
    [index: number]: OutlineItem
  }
  seriesArticlesOutline: SeriesOutlineItem[]
}


const blogPostComponents = {
  types: {
    code: (props) => {
      const { language, code } = props.value
      return (
        <SyntaxHighlighter theme="" language={language}>{code}</SyntaxHighlighter>
      )
    },
    image: ({value}) => {
      return (
        <ArticleBodyImage
          imgIndex={value.asset.index}
          imgUrl={value.asset.url}
          blurImg={value.asset.blurImg}
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

const BlogPost: FunctionComponent<BlogPostProps> = ({ article, outlineItems, seriesArticlesOutline }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
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
              <div className={styles.publishDataAndSeries}>
                <div className={styles.publishAndAuthor}>
                  <div className='author-field'>By {article.authorName}</div>
                  <div className='publish-date' data-cy="article-publish-date">Published {article.publishDate}</div>
                </div>
                {article.seriesTitle && <div className={styles.seriesTitle}>Series: <i>{article.seriesTitle}</i></div>}
              </div>
            </div>
            <br />
            <div data-cy="article-body">
              <PortableText
              value={article.body}
              components={blogPostComponents}
            />
            </div>
            <button className={styles.outlineButton}
              title="See Outline View"
              onClick={() => setModalIsOpen(!modalIsOpen)}
            >
              <CustomIcon
                fileName="bootstrap-card-list"
                height={32}
                width={32}
              />
            </button>
            <OutlineModal
              isOpen={modalIsOpen}
              onClose={() => setModalIsOpen(false)}
              items={outlineItems}
              seriesOutline={seriesArticlesOutline}
            />
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

export type OutlineItem = {
  label: string
  href: string
  children?: {
    [index: number]: OutlineItem
  }
}
export type SeriesOutlineItem = {
  title: string
  slug: string
  href: string
  index: number
  isCurrent: boolean
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
      series,
      seriesIndex,
      "seriesTitle": series->seriesTitle,
      "imageUrl": image.asset->url,
      "authorName": author->name,
      body
    }
  `, { slug: slug.toLowerCase() })

  const isHeadingBlock = (block: any) => [`h2`, `h3`, `h4`].includes(block.style)
  const isSeriesArticle = () => Boolean(article.series)
  let seriesArticlesOutline: SeriesOutlineItem[] = []

  if (isSeriesArticle()) {
    const seriesArticles = await client.fetch(`
      *[_type == "article" && series._ref == $seriesRef] | order(seriesIndex asc) {
        title,
        seriesIndex,
        slug
      }
    `, { seriesRef: article.series._ref })
    seriesArticles.forEach(seriesArticle => {
      let isCurrent = Boolean(seriesArticle.seriesIndex === article.seriesIndex)
      seriesArticlesOutline.push({
        title: seriesArticle.title,
        href: ``,
        index: seriesArticle.seriesIndex,
        isCurrent,
        slug: seriesArticle.slug.current.toLowerCase()
      })
    })
  }
  const makeNestedOutline = () => {
    const nestedHeadings: {
      [index: number]: OutlineItem
    } = {}
    const headingBlocks = article.body.filter(block => isHeadingBlock(block))
    headingBlocks.forEach((headingBlock) => {

      const level = parseInt(headingBlock.style.replace(`h`, ``))
      const outlineItem = {
        label: headingBlock.children[0].text,
        href: `#${kebabCase(headingBlock.children[0].text)}`
      }

      switch (level) {
        case 2: {
          const idx = Object.keys(nestedHeadings).length ? Object.keys(nestedHeadings).length : 0
          nestedHeadings[idx] = outlineItem
          break
        }
        case 3: {
          const latestH2Idx = Object.keys(nestedHeadings).length - 1
          if (nestedHeadings[latestH2Idx].children) {
            const idx = Object.keys(nestedHeadings[latestH2Idx].children!).length
            nestedHeadings[latestH2Idx].children![idx] = outlineItem
          } else {
            nestedHeadings[latestH2Idx].children = {}
            nestedHeadings[latestH2Idx].children![0] = outlineItem
          }
          break
        }
        case 4: {
          const latestH2Idx = Object.keys(nestedHeadings).length - 1
          const latestH3Idx = Object.keys(nestedHeadings[latestH2Idx].children!).length - 1
          if (nestedHeadings[latestH2Idx].children![latestH3Idx].children) {
            const idx = Object.keys(nestedHeadings[latestH2Idx].children![latestH3Idx].children!).length
            nestedHeadings[latestH2Idx].children![latestH3Idx].children![idx] = outlineItem
          } else {
            nestedHeadings[latestH2Idx].children![latestH3Idx].children = {}
            nestedHeadings[latestH2Idx].children![latestH3Idx].children![0] = outlineItem
          }
          break
        }
      }
    })
    return nestedHeadings
  }

  let imgCount = 0
    await Promise.all(
      article.body.map(async (block, index) => {
        if (block._type === `image`) {
          imgCount++
          const embeddedImage = await client.fetch(`*[_type == "sanity.imageAsset" && _id == $ref][0]{
            metadata,
            url
        }`, { ref: block.asset._ref }) as {
            // There are more fields available here, but we only need the lqip field
            metadata: {
                lqip: string    // A 20x20, base64 encoding of the image, useful for placeholders
            },
            url: string     // The URL to the original, full-resolution asset
        }
          article.body[index] = {
            ...block,
            asset: {
              index: imgCount,
              url: embeddedImage.url,
              blurImg: embeddedImage.metadata.lqip
            }
          }
        } else {
          article.body[index] = block
        }
    })
  )

  return {
    props: {
      article,
      outlineItems: makeNestedOutline(),
      seriesArticlesOutline
    }
  }
}

export default BlogPost
