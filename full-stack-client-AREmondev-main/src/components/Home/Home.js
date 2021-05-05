import React, { useContext } from 'react'
import './Home.css'
import AllProducts from '../Products/AllProducts/AllProducts'
import { ProductsContext } from '../context/ProductsContext'
import Loading from '../Loadin/Loading'

function Home() {
  const { products, loading, setLoading } = useContext(ProductsContext)

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="HomeArea">
          <AllProducts />
        </div>
      )}
    </>
  )
}

export default Home
