import { PortableText } from '@portabletext/react'
import { NextPage } from 'next'
import React from 'react'
import { PageLayout } from '../components/layout/PageLayout'
import CreatorImage from '../components/pages/about/CreatorImage'
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
  imageBase64: string
}
interface AboutPageProps {
  creators: CreatorProps[]
  employers: EmployerProps[]
}

const About: NextPage<AboutPageProps> = (props) => {
  const { creators, employers } = props

  const creator = creators[0]

    return (!!creator &&
      <PageLayout
                pageTitle='About'
                metaDescription={`Learn more about the creator & curator of ${process.env.HOST}`}
            >
        <br />
        <div className='creator-bio'>
          <CreatorImage
            imageUrl={creator.imageUrl}
            base64Image={creator.imageBase64}
          />
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
