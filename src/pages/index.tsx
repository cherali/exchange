import type { GetServerSideProps, NextPage } from 'next'
import HomePage from 'domains/Home/Home'
import { store } from 'store'
import { homeApi } from 'domains/Home/Home.services'
import { Market } from 'domains/Home/index.d'

interface HomeProps {
  marketsList?: Array<Market>;
}

const Home: NextPage<HomeProps> = ({ marketsList }) => {
  return (
    <HomePage marketsList={marketsList} />
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const { data: marketsList } = await store.dispatch(homeApi.endpoints.getMarketsList.initiate({}))

  return {
    props: {
      marketsList
    }
  }
}


export default Home
