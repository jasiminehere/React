import React from 'react'
import CocktailList from '../components/CocktailList'
import Loading from '../components/Loading'
import SearchForm from '../components/SearchForm'
import { useGlobalContext } from '../context'

const Home = () => {
  const {cocktails, loading} = useGlobalContext()


  return (
    <main>
    <SearchForm />
    <CocktailList />
    </main>
  )
}

export default Home
