import Link from "next/link";
import React from "react";

const ProductCard = ({ url, img, title, price, tag }) => {
  return (
    <>
      <Link
        href={url}
        className="group relative overflow-hidden rounded-md bg-[#f3efe4]"
      >
        <div className="relative aspect-[5/5] w-full bg-[#e9e5da]">
          <img
            src={img}
            alt="Product Image"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />

          {tag && (
            <div className="absolute left-0 top-0 z-10 w-full bg-[#9fb6c4]/95 text-center">
              <span className="block px-3 py-2 text-[1.8rem] font-medium tracking-wide text-[#f3efe4]">
                {tag}
              </span>
            </div>
          )}
        </div>

        <div className="p-3">
          <h3 className="text-[2rem] font-medium leading-tight line-clamp-2 mb-[.8rem]">
            {title}
          </h3>
          <p className="text-[1.8rem]">₹{price}</p>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
