'use client';

import React from 'react';

interface CardProps {
  id: number;
  title: string;
  imageUrl: string;
  price: string;
  discount: string;
  rating: number;
  reviews: number;
}

const Featured: React.FC = () => {
  const cards: CardProps[] = [
    {
      id: 1,
      title: 'Ambassader',
      imageUrl: '/2.jpg',
      price: '$19.99',
      discount: '10% OFF',
      rating: 4.5,
      reviews: 123,
    },
    {
      id: 2,
      title: 'Noble Notes',
      imageUrl: '/5.jpg',
      price: '$29.99',
      discount: '15% OFF',
      rating: 4.2,
      reviews: 89,
    },
    {
      id: 3,
      title: 'Envision',
      imageUrl: '/1.jpg',
      price: '$39.99',
      discount: '20% OFF',
      rating: 4.8,
      reviews: 45,
    },
  ];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-2xl font-bold text-gray-900">Featured Products</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div key={card.id} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="h-56 w-full">
                <a href="#">
                  <img className="mx-auto h-full dark:hidden" src={card.imageUrl} alt={card.title} />
                  <img className="mx-auto hidden h-full dark:block" src={card.imageUrl} alt={card.title} />
                </a>
              </div>
              <div className="pt-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800">
                    {card.discount}
                  </span>
                </div>
                <a href="#" className="text-lg font-semibold leading-tight text-gray-800 hover:underline">
                  {card.title}
                </a>
                <div className="mt-2 flex items-center gap-2">
                  {/* Rating and Reviews */}
                  <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className={`h-4 w-4 ${index < Math.round(card.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-gray-700">{card.rating}</p>
                  <p className="text-sm font-medium text-gray-500">({card.reviews})</p>
                </div>
                <p className="text-lg font-medium text-gray-800 mt-2">{card.price}</p>
                <button
                  className="mt-4 w-full rounded bg-[#f68cba] py-2 text-white hover:bg-[#e678a6]"
                  type="button"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;

