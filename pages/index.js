import React from 'react'

import {client, urlFor} from '../lib/client';


import Product from '../components/product.js';
import NavBar from '../components/navbar.js';
import Head from 'next/head';

const Home = ({products, bannerData}) => {

  return (<div>
    
      <main>
        <div className="z-0 max-w-2xl mx-auto py-16 px-4 sm:py-103 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                {products?.map((product)=> <Product key={product.id} product={product}/>)}
          </div>
        </div>
      </main>
      
      

  </div>)
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {products, bannerData}
  }

}

export default Home