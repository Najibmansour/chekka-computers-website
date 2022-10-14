import React from "react";
import { client, urlFor } from "../lib/client";

const Contact = ({ bannerData }) => {
  return (
    <div className="">
      <div>
        <img
          src={urlFor(bannerData.length && bannerData[0].bannerImage)}
          className=""
        />
      </div>
      <div className="grid grid-rows-2 flex p-5">
        <div className="text-2xl inline-flex py-11">
          Contact us:
          <div>03565789</div>
        </div>
        <div className="text-2xl inline-flex">
          Location:
          <div>chekka</div>
        </div>
      </div>
      <div className="min-h-full "></div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  console.log(bannerData);
  return {
    props: { bannerData },
  };
};

export default Contact;
