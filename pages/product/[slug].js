import React, { useState } from "react";
import { client, urlFor } from "../../lib/client";
import Link from "next/link";
import ProductMoving from "../../components/ProductMoving";

import {
  AiOutlinePlus,
  AiOutlineStar,
  AiFillStar,
  AiOutlineMinus,
} from "react-icons/ai";
const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;

  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="lg:flex md:flex gap-10 m-10 mt-16 text-gray-600 ">
        <div>
          <div className="rounded-2xl bg-gray-100 lg:w-400 lg:h-400 cursor-pointer ">
            <img src={urlFor(image && image[index])} className="w-79"></img>
          </div>
          <div className="small-images-container ">
            {image?.map((item, i) => (
              <img
                src={urlFor(item)}
                className={
                  i === index
                    ? "rounded-lg w-17 h-17 cursor-pointer bg-red-600"
                    : "rounded-lg bg-gray-100 w-17 h-17 cursor-pointer"
                }
                onMouseEnter={() => setIndex(i)}
              ></img>
            ))}
          </div>
        </div>
        <div className="product-details-desc">
          <h1 className="text-5xl text-gray-900 mb-5 mt-7 lg:mt-0">{name}</h1>
          <p className="font-bold text-2xl pt-2">Details:</p>
          <p className="pt-1">{details}</p>
          <div className="sm:flex sm:justify-end sm:pr-12">
            <h4 className="text-3xl mt-5  text-red-800">{`\$${price}`}</h4>
          </div>
        </div>
      </div>

      <div className="text-center  text-gray-700 text-3xl ">
        <h2 className="text-center m-9 mt-4 text-gray-700 text-3xl">
          You may also like
        </h2>
        <div className="relative h-40 lg:h-400 w-1/1 overflow-x-hidden">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <ProductMoving key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const productsQuery = `*[_type == "product"]{
    slug {
      current
    }
  }`;

  const products = await client.fetch(productsQuery);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]`;
  const productsQuery = `*[_type == "product" ]`;

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
