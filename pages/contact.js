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
      <div className="grid drop-shadow-md mb-0 grid-flow-row auto-rows-max lg:m-12 m-8 mt-16 lg:gap-12 gap-8 lg:text-4xl text-2xl">
        <div className="inline-flex justify-between">
          <div>Contact Us:</div>
          <div>03230477</div>
        </div>
        <div className="">
          <div className=" mb-6">Location: </div>
          <iframe
            className="rounded-xl shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6590.089784123986!2d35.7272562!3d34.3238761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1521e4a89dda3909%3A0xa88a1236301a51ae!2sShekka%20Computers!5e0!3m2!1sen!2slb!4v1665938117058!5m2!1sen!2slb"
            width="330"
            height="200"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
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
