import { PortableText } from '@portabletext/react'
import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import { PageLayout } from '../components/layout/PageLayout'
import { ContactForm } from '../components/pages/about/ContactForm'
import { EmployerDetails } from '../components/pages/about/EmployerDetails'
import CustomIcon from '../components/shared/CustomIcon'
import client from '../sanity/client'
import { Creator, Employer, JobTitle } from '../types/sanity'
import kebabCase from '../util/kebabCase'

type EmployerProps = Employer & {
  imageUrl: string
  jobs: JobTitle[]
}

type CreatorProps = Creator & {
  imageUrl: string
}
interface AboutPageProps {
  creators: CreatorProps[]
  employers: EmployerProps[]
}

// TODO: 
// const HEALTHCHECK_ENDPOINT = `http://localhost:3001/ping`

const About: NextPage<AboutPageProps> = (props) => {
  const { creators, employers } = props

  // const showContactForm = React.useMemo(() => {
  //   try {
  //     fetch(HEALTHCHECK_ENDPOINT, {
  //       mode: `cors`,
  //       method: `GET`,
  //     })
  //     .then(res => {
  //       if (res.status === 200) return true
  //       return false
  //     })
  //     // .catch(e => false)
  //   } catch (e) {
  //     return false
  //   }
  // }, [])

  const creator = creators[0]

    return (!!creator &&
      <PageLayout
                pageTitle='About'
                metaDescription={`Learn more about the creator & curator of ${process.env.HOST}`}
            >
        <br />
        <div className='creator-bio'>
          <div className='creator-image-container'>
            <Image
              data-cy='author-avatar'
              src={creator.imageUrl}
              layout='fill'
              alt='creator-image'
            />
          </div>
          <div className='creator-details'>
            <div className='creator-name' data-cy='author-name'>
              {creator.name!}
            </div>
            <div data-cy='author-description'>
              <PortableText
                value={creator.bio!}
              />
            </div>
            <div className='creator-socials'>
              {!!creator.githubUrl && (
                <CustomIcon
              data-cy='github'
              fileName='logo-github'
              height={32}
              width={32}
              className='github-logo'
              onClick={() => window.open(creator.githubUrl!, `_blank`)}
            />
          )}
              {!!creator.linkedInUrl && (
                <CustomIcon
                data-cy='linkedin'
              fileName='logo-linkedin'
              height={32}
              width={32}
              className='linkedin-logo'
              onClick={() => window.open(creator.linkedInUrl!, `_blank`)}
            />
          )}
            </div>
          </div>
        </div>
        <div className='work-history' data-cy='work-history'>
          <div className='section-title'>
            <h2>Work history</h2>
          </div>
          {employers.map(employer => {
              return (
                <EmployerDetails
                  key={`employer-${kebabCase(employer.name!.toLowerCase())}`}
                  name={employer.name!}
                  homePage={employer.homePage!}
                  startDate={employer.startDate!}
                  endDate={employer.endDate}
                  imageUrl={employer.imageUrl}
                  jobs={employer.jobs}
                />
              )
            })}
        </div>
        {/* {showContactForm && (
          <div className='contact'>
            <div className='section-title'>
              <h2>Contact</h2>
            </div>
            <ContactForm />
          </div>
        )} */}

      </PageLayout>
    )
}

export async function getStaticProps() {
    const creators = await client.fetch(`
      *[_type == "creator" && name == "Armando Vasquez"]{
          name,
          "imageUrl": image.asset->url,
          githubUrl,
          linkedInUrl,
          bio
      }
    `)

      const employers = await client.fetch(`*[_type == "employer"]{
        name,
        endDate,
        startDate,
        homePage,
        "imageUrl": image.asset->url,
        "jobs": jobTitles[]->
      } | order(startDate desc)`)

    return {
      props: {
        creators,
        employers
      }
    }
}

export default About
