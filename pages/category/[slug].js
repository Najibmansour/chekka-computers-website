import React from "react";
import { client, urlFor } from "../../lib/client";
import Link from "next/link";

import {
  AiOutlinePlus,
  AiOutlineStar,
  AiFillStar,
  AiOutlineMinus,
} from "react-icons/ai";
import Product from "../../components/product";
const Category = ({ product, products }) => {
  console.log(products);

  return (
    <main>
      <div className="z-0 max-w-2xl mx-auto py-16 px-4 sm:py-103 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {products?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
};

export const getStaticPaths = async () => {
  const productsQuery = `*[_type == "product"]{
        tags[0] {
            value
        }
    }`;

  const productsDup = await client.fetch(productsQuery);

  const products = [...new Set(productsDup)];

  const paths = products.map((product) => ({
    params: {
      slug: product.tags.value,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: slug }) => {
  const query = `*[_type == 'product' && tags[0].value == "${slug.slug}"]`;
  const products = await client.fetch(query);

  console.log(slug.slug);
  return {
    props: { products },
  };
};

export default Category;
