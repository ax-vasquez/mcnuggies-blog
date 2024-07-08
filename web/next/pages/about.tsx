import { PortableText } from '@portabletext/react'
import { NextPage } from 'next'
import React from 'react'
import { PageLayout } from '../components/layout/PageLayout'
import CreatorImage from '../components/pages/about/CreatorImage'
import CreatorSocials from '../components/pages/about/CreatorSocials'
import { EmployerDetails } from '../components/pages/about/EmployerDetails'
import sanityClient from '../sanity/client'
import { Creator, Employer, JobTitle } from '../types/sanity'
import kebabCase from '../util/kebabCase'
import GitHubCalendar from 'react-github-calendar'

type EmployerProps = Employer & {
  imageUrl: string
  jobs: JobTitle[]
}

type CreatorProps = Creator & {
  imageUrl: string
  imageBase64: string
}
interface AboutPageProps {
  creators: CreatorProps[]
  employers: EmployerProps[]
}

const getYearsSinceDate = (startDate: Date) => {
  var ageDifMs = Date.now().valueOf() - startDate.valueOf()
  var ageDate = new Date(ageDifMs) // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

const About: NextPage<AboutPageProps> = (props) => {
  const { creators, employers } = props

  const creator = creators[0]

  console.log(creator)
    return (!!creator &&
      <PageLayout
                pageTitle='About'
                metaDescription={`Learn more about the creator & curator of ${process.env.HOST}`}
            >
        <br />
        <div>
          <h1>About mcnuggies.dev</h1>
          <p>
            mcnuggies.dev is a work-in-progress blog and portfolio site. Progress on it is intermittent and sporadic because life is just weird
            sometimes. Learn more about the site creator and maintainer!
          </p>
        </div>
        <div className='maintainer-name-and-title'>
          <h3 className='creator-name' data-cy='author-name'>
            {creator.name!}
          </h3>
          <div className='profession'>
            <span>{creator.profession}</span>
            <p>{getYearsSinceDate(new Date(creator.careerStartDate!))} years experience</p>
          </div>
        </div>
        <div className='creator-details'>
          <CreatorImage
            imageUrl={creator.imageUrl}
            base64Image={creator.imageBase64}
          />
          <div className='creator-details'>
            <div className='creator-bio'>
              <PortableText
                data-cy='author-description'
                value={creator.bio!}
              />
            </div>
          </div>
        </div>
        <div className='creator-socials-wrapper'>
          <CreatorSocials
            githubUrl={creator.githubUrl}
            linkedInUrl={creator.linkedInUrl}
          />
        </div>
        {creator.githubUsername && <div className='github-activity'>
          <h2>GitHub Activity</h2>
          <GitHubCalendar colorScheme="light" username={creator.githubUsername} />
        </div>}
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
      </PageLayout>
    )
}

export async function getStaticProps() {
    const creators = await sanityClient.fetch(`
      *[_type == "creator" && name == "Armando Vasquez"]{
          name,
          "imageUrl": image.asset->url,
          "imageBase64": image.asset->metadata.lqip,
          githubUrl,
          linkedInUrl,
          bio,
          careerStartDate,
          openToWork,
          profession,
          githubUsername,
      }
    `)

      const employers = await sanityClient.fetch(`*[_type == "employer"]{
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
