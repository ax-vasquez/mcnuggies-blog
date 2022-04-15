import { NextPage } from "next"
import { PageLayout } from "../components/layout/PageLayout"
import client from "../sanity/client"
import { Article } from "../types/sanity"
import kebabCase from "../util/kebabCase"
import {PortableText} from '@portabletext/react'
import FeedItem from "../components/feedItem/FeedItem"

interface NextPageProps {
    allArticles: Article[]
}

const BlogFeed: NextPage<NextPageProps> = ({ allArticles }) => {

    return (
      <PageLayout
            pageTitle="Blog"
            imgSrc="/generic-blog.jpeg"
        >
        <div className="blog-feed">
          {allArticles.map(article => {
                    const rowKey = `article-row-${kebabCase(article.title).toLowerCase()}`
                    return (
                      <FeedItem
                            title={article.title!}
                            href={`/blog/${article.slug!.current.toLowerCase()}`}
                            key={rowKey}
                            textContent={(
                              <PortableText
                                    value={article.summary!}
                                />
                            )}
                        />
                    )
                })}
        </div>
      </PageLayout>
    )
}

export async function getStaticProps() {
    const allArticles = await client.fetch(`
      *[_type == "article"]{
          title,
          slug,
          summary,
          publishDate
      } | order(publishDate desc)
    `) as Article[]

    return {
      props: {
        allArticles
      }
    }
}


export default BlogFeed
