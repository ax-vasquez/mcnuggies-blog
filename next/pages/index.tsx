import type { NextPage } from 'next'
import Link from 'next/link'
import { PageLayout } from '../components/layout/PageLayout'

const Home: NextPage = () => {
  return (
    <PageLayout
      pageTitle='Home'
    >
      <Link href='/demo/component-demo'>
        <a>Component Demo</a>
      </Link>
      
    </PageLayout>
  )
}

export default Home
