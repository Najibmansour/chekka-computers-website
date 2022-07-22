import React from 'react'
import {client, urlFor} from '../../lib/client'

import { AiOutlinePlus, AiOutlineStar, AiFillStar, AiOutlineMinus } from 'react-icons/ai'

const ProductDetails = ({product, products}) => {

  const {image, name, details, price} = product



  return (
    <div>
       <div className='product-detail-container'>
        <div>
          <div className="image-container">
            <img
            src={urlFor(image && image[0])}
            >
            </img>
          </div>
          {/* <div className='small-images-container'>
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
          <h1>{name}</h1>
          <h4>Details:</h4>
          <p>{details}</p>
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