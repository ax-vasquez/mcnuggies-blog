import { PortableText } from '@portabletext/react'
import { NextPage } from 'next'
import React from 'react'
import { PageLayout } from '../components/layout/PageLayout'
import CreatorImage from '../components/pages/about/CreatorImage'
// import CreatorSocials from '../components/pages/about/CreatorSocials'
import { EmployerDetails } from '../components/pages/about/EmployerDetails'
import client from '../sanity/client'
import { Creator, Employer, JobTitle } from '../types/sanity'
import kebabCase from '../util/kebabCase'
import styles from './About.module.scss'

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

const getYearsExperience = (startDate: Date) => {
  var ageDifMs = Date.now() - startDate;
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
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
        <div className='creator-bio'>
          <CreatorImage
            imageUrl={creator.imageUrl}
            base64Image={creator.imageBase64}
          />
          {/* TODO: Make this an "at-a-glance" section */}
          <div className='creator-details'>
            <h2 className='creator-name' data-cy='author-name'>
              {creator.name!}
            </h2>
            <div className={styles.yearsExperience}>
              <span>{creator.profession}</span>
              <p>{getYearsExperience(new Date(creator.careerStartDate!))} years experience</p>
            </div>
            {creator.openToWork && <span>I'm currently open to work!</span>}
          </div>
        </div>
        <div className={styles.bioSection}>
          <PortableText
            data-cy='author-description'
            value={creator.bio!}
          />
        </div>
        {/* TODO: Use these in the new bio area */}
        {/* <CreatorSocials
          githubUrl={creator.githubUrl}
          linkedInUrl={creator.linkedInUrl}
        /> */}
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
    const creators = await client.fetch(`
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
