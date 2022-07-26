import React, { useState } from "react";

import { client, urlFor } from "../lib/client";
import Head from "next/head";
import { list } from "postcss";

const Repair = ({ products }) => {
  const ids = products.length;
  const IDS = products.map((product) => product.docid);
  const statuses = products.map((product) => product.status);
  const [searchTerm, setsearchTerm] = useState("");

  return (
    <div>
      <main>
        <div className="flex justify-center m-9">
          <input
            className=" text-lg lg:px-2 lg:py-1 px-2 py-1   border-2 rounded-lg border-gray-600"
            type="text"
            placeholder="Search Number"
            onChange={(event) => {
              setsearchTerm(event.target.value);
            }}
          />
        </div>

        <div className="grid ls:m-9 m-6 text-md lg:grid-cols-4 grid-cols-2 lg:gap-8 gap-4">
          {IDS.filter((val, id) => {
            if (searchTerm == "") {
              return [val, id];
            } else if (val.includes(searchTerm)) {
              return [val, id];
            }
          }).map((ID, key) => (
            <div className="lg:p-8 px-3 py-2 border-2 m-36` border-gray-200 rounded-lg inline-flex justify-between max-w-sm">
              <p>{ID}</p>
              <div>
                {statuses[IDS.indexOf(ID)] == true ? (
                  <p className="text-green-700 font-bold">Done</p>
                ) : (
                  <p className="text-red-700 font-bold">Not done</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "device"]';
  const products = await client.fetch(query);
  console.log(products);
  return {
    props: { products },
  };
};

export default Repair;
