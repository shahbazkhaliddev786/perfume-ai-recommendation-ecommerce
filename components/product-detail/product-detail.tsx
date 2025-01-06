"use client";

import { useState } from "react";

export default function ProductDetail() {
  const [mainImage, setMainImage] = useState(
    "https://media.istockphoto.com/id/1962238685/photo/beautiful-woman-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=A4qCPC6h0CQ_PMZfFGuBKlbuC8-9gHgBaHXWcKteGdc="
  );

  const changeImage = (src:any) => {
    setMainImage(src);
  };

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Product Images */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img
              src={mainImage}
              alt="Product"
              className="w-full h-auto rounded-lg shadow-md mb-4"
            />
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              {[
                "https://media.istockphoto.com/id/1962238685/photo/beautiful-woman-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=A4qCPC6h0CQ_PMZfFGuBKlbuC8-9gHgBaHXWcKteGdc=",
                "https://media.istockphoto.com/id/2149954181/photo/three-luxury-perfume-bottles.webp?a=1&b=1&s=612x612&w=0&k=20&c=5gilsvwRksAj90KATyWzKgHalog9cfaZScJJl-24ch8=",
                "https://media.istockphoto.com/id/1550413996/photo/woman-testing-perfume-by-sniffing.webp?a=1&b=1&s=612x612&w=0&k=20&c=A4EWcJF_rGT-lcQte1Ghk_q-dNQNwJFsBduraMNrymQ=",
                "https://media.istockphoto.com/id/1772604575/photo/fragrance-spray-man-and-perfume-applying-cologne-scent-water-skin-care-beauty-product-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=5FIidS40BeICkG0swLERiQ2N47iD33eGIevjHKkeJnM=",
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  onClick={() => changeImage(src)}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-2">Premium Perfume</h2>
            <p className="text-gray-600 mb-4">SKU: WH1000XM4</p>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">$349.99</span>
              <span className="text-gray-500 line-through">$399.99</span>
            </div>
            <div className="flex items-center mb-4">
              {Array(5)
                .fill("")
                .map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-yellow-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
            </div>
            <p className="text-gray-700 mb-6">
              Experience premium quality and industry-leading perfumes.
               Perfect for music lovers and frequent travelers.
            </p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Color:</h3>
              <div className="flex space-x-2">
                <button className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
                <button className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
                <button className="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

