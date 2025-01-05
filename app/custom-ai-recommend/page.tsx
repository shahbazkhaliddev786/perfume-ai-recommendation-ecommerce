'use client'
import MainLayout from "@/components/layout/layout";
import { useState } from "react";

const perfumeData = [
  {
      "id": 1,
      "imageUrl": "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
      "title": "Chanel No. 5 Eau de Parfum",
      "discount": "Up to 20% off",
      "rating": 4.8,
      "reviews": 5678,
      "isBestSeller": true,
      "price": "$150"
  },
  {
      "id": 2,
      "imageUrl": "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
      "title": "Dior Sauvage Eau de Toilette",
      "discount": "Up to 15% off",
      "rating": 4.7,
      "reviews": 4321,
      "isBestSeller": false,
      "price": "$130"
  },
  {
      "id": 3,
      "imageUrl": "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400",
      "title": "Tom Ford Black Orchid Eau de Parfum",
      "discount": "Up to 10% off",
      "rating": 4.9,
      "reviews": 2345,
      "isBestSeller": true,
      "price": "$200"
  }
];

export default function CustomAIRecommendations() {
    const [show, setShow] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent)=>{
      e.preventDefault();
      setShow(true);
    }

    return (
      <MainLayout>
        <section className="flex flex-col items-center justify-center px-6 py-16 bg-gray-50 text-center md:px-12 lg:py-20 lg:px-24">
        <h1 className="text-3xl font-extrabold text-gray-800 sm:text-4xl lg:text-5xl">
          Get Custom AI Perfume Recommendations
        </h1>
        <form className="mt-8 w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-left text-gray-700 font-medium" htmlFor="fragrance">
              Preferred Fragrance
            </label>
            <input
              id="fragrance"
              type="text"
              placeholder="E.g., Floral, Woody, Fresh"
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-gray-700 font-medium" htmlFor="type">
              Perfume Type
            </label>
            <select
              id="type"
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500"
            >
              <option value="eau-de-parfum">Eau de Parfum</option>
              <option value="eau-de-toilette">Eau de Toilette</option>
              <option value="body-spray">Body Spray</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-left text-gray-700 font-medium" htmlFor="gender">
              Gender Preference
            </label>
            <select
              id="gender"
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500"
            >
              <option value="unisex">Unisex</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-left text-gray-700 font-medium" htmlFor="intensity">
              Fragrance Intensity
            </label>
            <input
              id="intensity"
              type="range"
              min="1"
              max="10"
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left text-gray-700 font-medium" htmlFor="budget">
              Budget (in USD)
            </label>
            <input
              id="budget"
              type="number"
              placeholder="E.g., 50"
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="mt-4 w-full px-6 py-3 text-white bg-gradient-to-r from-pink-500 to-yellow-500 rounded-lg shadow-md hover:from-pink-600 hover:to-yellow-600 focus:outline-none focus:ring-4 focus:ring-pink-300"
          >
            Get AI Recommendations
          </button>
        </form>
      </section>
      {show &&  <section>
      <section>
                <div className="flex gap-4 flex-wrap p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {perfumeData.map((card: any) => (
                            <div key={card.id} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                                <div className="h-56 w-full">
                                    <a href="#">
                                        <img className="mx-auto h-full dark:hidden" src={card.imageUrl} alt="" />
                                        <img className="mx-auto hidden h-full dark:block" src={card.imageUrl} alt="" />
                                    </a>
                                </div>

                                <div className="pt-6">
                                    <div className="mb-4 flex items-center justify-between gap-4">
                                        <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                            {card.discount}
                                        </span>

                                        <div className="flex items-center justify-end gap-1">
                                            <button
                                                type="button"
                                                data-tooltip-target="tooltip-quick-look"
                                                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                            >
                                                <span className="sr-only">Quick look</span>
                                                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                                                    <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                </svg>
                                            </button>

                                            <button
                                                type="button"
                                                data-tooltip-target="tooltip-add-to-favorites"
                                                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                            >
                                                <span className="sr-only">Add to Favorites</span>
                                                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">
                                        {card.title}
                                    </a>

                                    <div className="mt-2 flex items-center gap-2">
                                        <div className="flex items-center">
                                            {/* Render stars based on rating */}
                                            {[...Array(5)].map((_, index) => (
                                                <svg key={index} className={`h-4 w-4 ${index < card.rating ? 'text-yellow-400' : 'text-gray-300'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="text-sm font-medium text-gray-900 dark:text-white">{card.rating}</p>
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">({card.reviews})</p>
                                    </div>

                                    <ul className="mt-2 flex items-center gap-4">
                                        {card.isBestSeller && (
                                            <li className="flex items-center gap-2">
                                                <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                                                </svg>
                                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Best Seller</p>
                                            </li>
                                        )}
                                    </ul>

                                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{card.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
      </section>}
      </MainLayout>
    );
  }
  