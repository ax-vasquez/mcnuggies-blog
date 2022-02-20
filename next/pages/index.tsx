import type { NextPage } from 'next'
import Link from 'next/link'
import { PageLayout } from '../components/layout/PageLayout'

const Home: NextPage = () => {
  return (
    <PageLayout
      pageTitle='Home'
    >
      <h1>Creator's Blog Starter</h1>
    </PageLayout>
  )
}

export default Home
