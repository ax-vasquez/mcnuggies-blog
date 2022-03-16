import type { NextPage } from 'next'
import { Card } from 'react-bootstrap'
import { PageLayout } from '../components/layout/PageLayout'
import { RootPageSection } from '../components/pages/home/RootPageSection'
import { TechStackIntegration } from '../components/pages/home/TechStackIntegration'

const Home: NextPage = () => {
  return (
    <PageLayout
      pageTitle='Home'
      imgSrc='/building-blocks.jpg'
    >
      <Card
        className='tech-stack'
      >
        <br />
        <RootPageSection
          title='Blog'
          iconFileName='bootstrap-book'
          href='/blog-feed'
          description="My occasional guides, reviews and general musings"
        />
        <br />
        <RootPageSection
          title='About'
          iconFileName='bootstrap-info-circle'
          href='/about'
          description="Find out more about mcnuggies.dev and its creator"
        />
        <br />
        <br />
        <div className='title-container'>
          <h2>
            Tech stack
          </h2>
          <div>
            mcnuggies.dev is powered in-part by the following awesome folks!
          </div>
        </div>
        <TechStackIntegration
          provider='Next.js'
          homePage='https://nextjs.org/'
          iconFileName='nextjs-icon-dark'
          description='Next.js gives you the best developer experience with all
          the features you need for production: hybrid static & server
          rendering, TypeScript support, smart bundling, route pre-fetching,
          and more. No config needed.'
        />
        <TechStackIntegration
          provider='Sanity'
          homePage='https://www.sanity.io/'
          iconFileName='logo-sanity'
          description='Sanity.io is the unified content platform that powers better digital experiences'
        />
        <TechStackIntegration
          provider='Nelify'
          homePage='https://www.netlify.com/'
          iconFileName='logo-netlify-light'
          description='Netlify unites an entire ecosystem of modern tools and services into a
          single, simple workflow for building high performance sites and apps.'
        />
        <br />
        <div className='title-container'>
          And was developed using these fine tools and packages
        </div>
        <TechStackIntegration
          provider='Cypress'
          homePage='https://www.cypress.io/'
          iconFileName='logo-cypress'
          description='Fast, easy and reliable testing for anything that runs in a browser.'
        />
        <TechStackIntegration
          provider='ESLint'
          homePage='https://eslint.org/'
          iconFileName='logo-eslint'
          description='Find and fix problems in your JavaScript code'
        />
        <TechStackIntegration
          provider='React Bootstrap'
          homePage='https://react-bootstrap.github.io/'
          iconFileName='logo-react-bootstrap'
          description='The most popular front-end framework rebuilt for React.'
        />
        <TechStackIntegration
          provider='Redux'
          homePage='https://redux.js.org/'
          iconFileName='logo-redux'
          description='A Predictable State Container for JS Apps'
        />
        <TechStackIntegration
          provider='Sass'
          homePage='https://sass-lang.com/'
          iconFileName='logo-sass'
          description='Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.'
        />
      </Card>
    </PageLayout>
  )
}

export default Home
