import React from 'react'
import {client, urlFor} from '../../lib/client'
import Link from 'next/link';

import { AiOutlinePlus, AiOutlineStar, AiFillStar, AiOutlineMinus } from 'react-icons/ai'
const ProductDetails = ({product, products}) => {

  const {image, name, details, price} = product


  return (
    <div>
       <div className='product-detail-container'>
        <div>
          <div className="image-container">
            <img
            className='w-200 h-200'
            src={urlFor(image && image[0])}
            >
            </img>
          </div>
          {/* <div className='small-images-container '>
            {image?.map((item,i) => (
              <img src={urlFor(item)}
              className='image'
              onMouseEnter=''
              >
              </img>
            ))}
          </div> */}
        </div>
        <div className='product-details-desc'>
          <h1 className='text-5xl text-gray-800 '>{name}</h1>
          <h4 className="text-xl">{`\$${price}`}</h4>
          <p>{details}</p>
          <Link href={`https://api.whatsapp.com/send?phone=81565789&text=*12323*%20*123132*%20*1313*`}> 
            <div className='flex'>
              <div className='p-6 '>
                <button className="bg-red-500 px-5 py-1 bg-opacity-30 hover:-translate-1xl hover:scale-110">
                  <p className=" text-xl text-red-700 ">
                    Add to Cart
                  </p>
                </button>
            </div>
            </div>
            
          </Link>

          {/* {Adress%3A%20akjfo%20ajhxk%20ajbsksh%0D%0AName%3A%20Najib%20Mansour%0D%0AItem%20Ids%3A%20%7B1625%7D%20%7B19286e%7D%20%7B28386r%7D} */}
          
        </div>
        
      </div>
      
    </div>
  )
}

export const getStaticPaths = async () => {
  const productsQuery = `*[_type == "product"]{
    slug {
      current
    }
  }`;

  const products = await client.fetch(productsQuery);
  const paths = products.map(product => ({
    params: {
      slug: product.slug.current
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({params: {slug}}) => {

  const query = `*[_type == "product" && slug.current == "${slug}"][0]`
  const productsQuery = `*[_type == "product"]`

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product)

  return {
    props: {products, product}
  }
}




export default ProductDetails