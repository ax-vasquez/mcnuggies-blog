import type { NextPage } from 'next'
import { PageLayout } from '../components/layout/PageLayout'
import { RootPageSection } from '../components/pages/home/RootPageSection'
import TechStackList from '../components/pages/home/tech-stack/TechStackList'

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
      <RootPageSection
          title='Blog'
          iconFileName='bootstrap-book'
          href='/blog-feed'
          description="My occasional guides, reviews and general musings"
        />
      <RootPageSection
          title='About'
          iconFileName='bootstrap-info-circle'
          href='/about'
          description="Find out more about mcnuggies.dev and its creator"
        />

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
            provider: `Cypress`,
            homePage: `https://www.cypress.io/`,
            iconFileName: `logo-cypress`,
            description: `Fast, easy and reliable testing for anything that runs in a browser.`
          },
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
