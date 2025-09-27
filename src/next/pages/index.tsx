import type { NextPage } from 'next'
import { PageLayout } from '../components/layout/PageLayout'
import { RootPageSection } from '../components/pages/home/RootPageSection'
import TechStackList from '../components/pages/home/tech-stack/TechStackList'

const rootPageConfigs = {
  0: {
    title: `Blog`,
    href: `/blog-feed`,
    iconFileName: `bootstrap-book`,
    description: `My occasional guides, reviews and general musings`
  },
  1: {
    title: `Projects`,
    href: `/projects`,
    iconFileName: `bootstrap-hammer`,
    description: `Take a peek at some of the projects I've worked on`
  },
  2: {
    title: `About`,
    href: `/about`,
    iconFileName: `bootstrap-info-circle`,
    description: `Find out more about mcnuggies.dev and its creator`
  }
} as {
  [idx: number]: {
    title: `Blog` | `Projects` | `About`
    href: `/blog-feed` | `/projects` | `/about`
    iconFileName: `bootstrap-book` | `bootstrap-hammer` | `bootstrap-info-circle`
    description: string
  }
}

const Home: NextPage = () => {
  return (
    <PageLayout
      pageTitle='Home'
      metaDescription='Yet another dev blog & portfolio site with a focus on anything an adult observably-afflicted with ADHD might focus on.'
    >
      {/* TODO: inline-styles only due to this being a temporary area; I intend to replace this, but not sure with what yet */}
      <div
        style={{
          display: `flex`,
          justifyContent: `center`,
          marginTop: `1rem`,
          marginBottom: `2rem`
        }}
      >
        <h1>
          mcnuggies.dev
        </h1>
      </div>
      {Object.keys(rootPageConfigs).map(idx => {
        const i = parseInt(idx)
        const {
          title,
          iconFileName,
          href,
          description
        } = rootPageConfigs[i]
        return (
          <RootPageSection
            key={`root-item-${idx}`}
            title={title}
            iconFileName={iconFileName}
            href={href}
            description={description}
          />
        )
      })}

      <TechStackList
        label={(
          <>
            <h2>
              Tech stack
            </h2>
            <div>
              mcnuggies.dev is powered in-part by the following awesome folks!
            </div>
          </>
        )}
        integrations={[
          {
            provider: `Next.js`,
            homePage: `https://nextjs.org/`,
            iconFileName: `nextjs-icon-dark`,
            description: `Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.`
          },
          {
            provider: `Vercel`,
            homePage: `https://vercel.com/`,
            iconFileName: `logo-vercel`,
            description: `Vercel combines the best developer experience with an obsessive focus on end-user performance.`
          },
          {
            provider: `Sanity`,
            homePage: `https://www.sanity.io/`,
            iconFileName: `logo-sanity`,
            description: `Sanity.io is the unified content platform that powers better digital experiences`
          }
        ]}
      />
      <TechStackList
        label={`And was developed using these fine tools and packages`}
        integrations={[
          {
            provider: `ESLint`,
            homePage: `https://eslint.org/`,
            iconFileName: `logo-eslint`,
            description: `Find and fix problems in your JavaScript code`
          },
          {
            provider: `React Bootstrap`,
            homePage: `https://react-bootstrap.github.io/`,
            iconFileName: `logo-react-bootstrap`,
            description: `The most popular front-end framework rebuilt for React.`
          },
          {
            provider: `Redux`,
            homePage: `https://redux.js.org/`,
            iconFileName: `logo-redux`,
            description: `A Predictable State Container for JS Apps`
          },
          {
            provider: `Sass`,
            homePage: `https://sass-lang.com/`,
            iconFileName: `logo-sass`,
            description: `Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.`
          },
        ]}
      />
    </PageLayout>
  )
}

export default Home
