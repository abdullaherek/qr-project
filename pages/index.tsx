import type { NextPage } from 'next'
import HomePage from '../components/HomePage/HomePage';
import Layout from '../components/Layout/Layout'
const Home: NextPage = () => {
  return (
    <div >
      <Layout />
      <HomePage />
    </div>
  )
}

export default Home;
