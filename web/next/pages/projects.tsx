import React from 'react'
import { PageLayout } from '../components/layout/PageLayout'

const Projects: React.FC = () => {
    return (
      <PageLayout
            metaDescription={`Projects from the creator and maintainer of ${process.env.HOST}`}
            pageTitle='Projects'
        >
        <h1>Projects</h1>
      </PageLayout>
    )
}

export default Projects
