import React, { useState } from "react";

import { client, urlFor } from "../lib/client";
import Head from "next/head";

const Repair = ({ products }) => {
  const ids = products.length;
  const IDS = products.map((product) => product.docid);

  return (
    <div>
      <div>
        <input className="ass" type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "device"]';
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};

export default Repair;
