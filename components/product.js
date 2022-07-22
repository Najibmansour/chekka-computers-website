import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';


const  Product = ({product: {image, name,slug, price, id}}) => {
  return (
        <Link href={`/product/${slug.current}`} z-0>
            <div key={ id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={ urlFor(image && image[0])}
                  className="w-full  h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <div>
                      <span aria-hidden="true" className="absolute inset-0" />
                      { name}
                    </div>
                  </h3>
                  
                </div>
                <p className="text-sm font-medium text-gray-900">{ price}</p>
              </div>
            </div>
          </Link>
    
  )
}

export default Product