import React, { useState } from "react";

import { client, urlFor } from "../lib/client";

import Product from "../components/product.js";
import NavBar from "../components/navbar.js";
import Head from "next/head";

const Home = ({ products }) => {
  const totalNumOfProducts = products.length;
  const productsShown = 8;
  const [page, setPage] = useState(0);
  const numOfPages = Array.from(
    Array(Math.ceil(totalNumOfProducts / productsShown)).keys()
  );
  const prods = products.slice(
    0 + productsShown * page,
    productsShown + productsShown * page
  );

  const changePage = (e) => {
    setPage(2);
  };

  console.log(numOfPages);

  return (
    <div>
      <main>
        <div className="z-0 max-w-2xl mx-auto py-16 px-4 sm:py-103 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {prods?.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="">
            <button
              className="px-4 py-2 border-gray-200 border-l-2  border-y-2 rounded-l-lg"
              onClick={() => {
                page == 0 ? null : setPage(page - 1);
              }}
            >
              {"<"}
            </button>

            {[numOfPages[1]].map((product) => (
              <button
                className="px-4 py-2 border-gray-200 border-l-2  border-y-2"
                onClick={() => setPage(product)}
              >
                {product}
              </button>
            ))}

            {page >= 5
              ? numOfPages.slice(page - 2, page).map((product) => (
                  <button
                    className="px-4 py-2 border-gray-200 border-l-2  border-y-2"
                    onClick={() => setPage(product)}
                  >
                    {product}
                  </button>
                ))
              : numOfPages.slice(2, 4).map((product) => (
                  <button
                    className="px-4 py-2 border-gray-200 border-l-2  border-y-2"
                    onClick={() => setPage(product)}
                  >
                    {product}
                  </button>
                ))}

            <button className="px-4 py-2 border-gray-200 border-l-2  border-y-2">
              ...
            </button>

            {numOfPages
              .slice(numOfPages.length - 2, numOfPages.length)
              .map((product) => (
                <button
                  className="px-4 py-2 border-gray-200 border-l-2  border-y-2"
                  onClick={() => setPage(product)}
                >
                  {product}
                </button>
              ))}

            <button
              className="px-4 py-2 border-gray-200 border-l-2  border-y-2 border-r-2  rounded-r-lg"
              onClick={() => {
                page == numOfPages.length - 1 ? null : setPage(page + 1);
              }}
            >
              {">"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
