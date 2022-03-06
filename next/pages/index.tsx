import type { NextPage } from 'next'
import { PageLayout } from '../components/layout/PageLayout'

const Home: NextPage = () => {
  return (
    <PageLayout
      pageTitle='Home'
      imgSrc='/building-blocks.jpg'
    >
      <h1>Creator's Blog Starter</h1>
    </PageLayout>
  )
}

export default Home
