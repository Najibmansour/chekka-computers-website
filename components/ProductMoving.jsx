import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const ProductMoving = ({ product: { image, name, slug, price, id } }) => {
  return (
    <Link href={`/product/${slug.current}`} z-0>
      <div className="product-card">
        <img
          src={urlFor(image && image[0])}
          width={250}
          height={250}
          className="product-image"
        />
      </div>
    </Link>
  );
};

export default ProductMoving;
