import type { NextPage } from 'next'
import { Card } from 'react-bootstrap'
import { PageLayout } from '../components/layout/PageLayout'
import { RootPageSection } from '../components/pages/home/RootPageSection'
import { TechStackIntegration } from '../components/pages/home/TechStackIntegration'

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Card
        className='tech-stack'
      >
        <h1>mcnuggies.dev</h1>
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
        <div className='welcome-message'>
          <h2>Welcome!</h2>
          <p>
            My name is Armando Vasquez and I created this site as a personal blog and digital portfolio. I will update this site on a semi-regular basis, but as someone who is frequently-engaged
            in a variety of random projects, I don't have much time to maintain this site. <b>My site is not dead, it's just sleepy. 🙂</b>
          </p>
          <h3>Coding</h3>
          <p>
            Part of the reason I created this blog is because I explore so many different languages, frameworks and tools that I can't possibly employ them all in my
            personal projects. While I certainly will write about things related to my day job, I also intend to write exploratory pieces on things I may or may not ever utilize in a complete project.
            From regular 'ole JavaScript web dev to automating modeling tasks in parametric modeling software such as FreeCAD; if it's code-related and I'm interested in it, odds are good it will
            end up here in one of my blog posts.
          </p>
          <h3>Gaming</h3>
          <p>
            As an avid gamer, I have no shortage of thoughts on the gaming industry. However, I certainly don't consider myself a "pro", which is a little sad given the sheer amount of time I've spent
            playing video games. As such, I will never write about "being good" at a game. That's just not me. I'm the guy repeatedly getting blown to pieces and posting nonsense in all-chat. But I'm
            having fun while doing it.
          </p>
          <p>
            What I <i>will</i> write about are more-technical pieces about game performance, setting up servers, or general observations about company and industry moves. While I lack in raw gaming skill,
            I make up for it in technical know-how. I've dabbled in Unity, Unreal and Godot and have years of experience with JavaScript, Python, C++ and more. At a more end-user level, I've set up a variety of 
            different game servers both self-hosted and through paid providers and have gained a wide range of experience in networking architecture through my day job as a full stack web developer.
          </p>
          <h3>3D Modeling</h3>
          <p>
            Some of my personal projects are more than pure software projects. As such, I've been a user of difficult-to-use, but free modeling software to aid in designing some of my projects. On the more
            creative side of 3D modeling, I've used Blender for creating and animating organic character models. For projects that require mathematical precision (at least, more so than Blender can easily 
            provide out-of-the-box), I use FreeCAD. Both Blender and FreeCAD are incredibly difficult to use coming from a place of no experience - as was the case for me. I intend to write a variety of
            guides to help others get through issues I had to faceplant my way through. Hopefully, with minimal faceplanting of their own.
          </p>
          <h3>Miscellaneous Projects</h3>
          <p>
            As mentioned before, I take on a lot of projects. These projects are quite varied; from stock-market analysis tools to botanical automation to game development. It's pretty much impossible for me to
            encapsulate all categories of my interests. With that said, all of these projects are very exciting to me and I will, no doubt, write about them at length.
          </p>
        </div>
        
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
          provider='Vercel'
          homePage='https://vercel.com/'
          iconFileName='logo-vercel'
          description='Vercel combines the best developer experience with an obsessive focus on end-user performance.'
        />
        <TechStackIntegration
          provider='Sanity'
          homePage='https://www.sanity.io/'
          iconFileName='logo-sanity'
          description='Sanity.io is the unified content platform that powers better digital experiences'
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
