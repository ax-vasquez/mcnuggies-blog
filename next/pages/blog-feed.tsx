import { NextPage } from "next"
import { PageLayout } from "../components/layout/PageLayout"
import client from "../sanity/client"
import { Article } from "../types/sanity"
import kebabCase from "../util/kebabCase"
import {PortableText} from '@portabletext/react'
import groq from 'groq'
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

/**
 * IMPORTANT - Regarding Sanity.io order logic
 * 
 * When the request is ordered in this method (getStaticProps()), it seems that the data can be 
 * unexpectedly cached. If you run `yarn dev` and don't see changes to the sort order, doing
 * something like adding a console.log statement to this method body seems to "force" it to run,
 * thereby updating the sort order.
 * 
 * This seems like something related to how Next.js does caching - this is something I need to
 * dig into and get a better idea of.
 */
export async function getStaticProps(context: any) {
    const allArticles = await client.fetch(groq`
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
