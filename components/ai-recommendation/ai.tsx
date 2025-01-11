'use client';
import MainLayout from "@/components/layout/layout";
import React, { useState } from "react";
import Select, { MultiValue } from "react-select";

type Option = {
  value: string;
  label: string;
};

const perfumeData = [
  {
    id: 1,
    imageUrl: "/2.jpg",
    title: "Ambassador",
    discount: "Up to 20% off",
    rating: 4.8,
    reviews: 5678,
    isBestSeller: true,
    price: "$150",
  },
  {
    id: 2,
    imageUrl: "/3.jpg",
    title: "Aurum Noir",
    discount: "Up to 15% off",
    rating: 4.7,
    reviews: 4321,
    isBestSeller: false,
    price: "$130",
  },
  {
    id: 3,
    imageUrl: "/1.jpg",
    title: "Envision",
    discount: "Up to 10% off",
    rating: 4.9,
    reviews: 2345,
    isBestSeller: true,
    price: "$200",
  },
];

export default function CustomAIRecommendations() {
  const [show, setShow] = useState(false);
  const [field3Selected, setField3Selected] = useState<MultiValue<Option>>([]);
  const [field4Selected, setField4Selected] = useState<MultiValue<Option>>([]);

  const field3Options: Option[] = [
    { value: "fresh", label: "Fresh" },
    { value: "woody", label: "Woody" },
    { value: "floral", label: "Floral" },
    { value: "oriental", label: "Oriental" },
    { value: "fruity", label: "Fruity" },
    { value: "spicy", label: "Spicy" },
    { value: "aquatic", label: "Aquatic" },
    { value: "musk", label: "Musk" },
    { value: "gourmand", label: "Gourmand (Sweet Scents)" },
    { value: "green", label: "Green (Earthy/Natural)" },
  ];

  const field4Options: Option[] = [
    { value: "bold", label: "Bold" },
    { value: "introvert", label: "Introvert" },
    { value: "extrovert", label: "Extrovert" },
    { value: "calm", label: "Calm" },
    { value: "outgoing", label: "Outgoing" },
    { value: "professional", label: "Professional" },
    { value: "romantic", label: "Romantic" },
  ];

  const handleField3Change = (selected: MultiValue<Option>) =>
    setField3Selected(selected);

  const handleField4Change = (selected: MultiValue<Option>) =>
    setField4Selected(selected);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <MainLayout>
      <section className="flex flex-col items-center justify-center px-6 py-16 text-center md:px-12 lg:py-20 lg:px-24">
        <h1 className="text-3xl font-extrabold text-gray-800 sm:text-4xl lg:text-5xl">
          Get AI Recommended Perfume
        </h1>
        <form
          className="mt-8 w-full max-w-lg bg-white p-6 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >

<div className="mb-4">
            <label className="block text-left text-gray-700 font-medium" htmlFor="age">
              Age
            </label>
            <select
              id="age"
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500"
            >
              <option value="16-25">16-25</option>
              <option value="26-35">26-35</option>
              <option value="36-50">36-50</option>
              <option value="50-65">50-65</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-left text-gray-700 font-medium" htmlFor="gender">
              Gender
            </label>
            <select
              id="gender"
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="female">Unisex</option>

            </select>
          </div>

          {/* Field 3 */}
          <div className="mb-4">
            <label htmlFor="field3" className="text-left block mb-2 font-medium">
              Preferred Fragrance Types
            </label>
            <Select
              id="field3"
              isMulti
              options={field3Options}
              value={field3Selected}
              onChange={handleField3Change}
              placeholder="Select fragrance types"
              className="w-full"
            />
          </div>

          {/* Field 4 */}
          <div className="mb-4">
            <label htmlFor="field4" className="text-left block mb-2 font-medium">
              Personality Type
            </label>
            <Select
              id="field4"
              isMulti
              options={field4Options}
              value={field4Selected}
              onChange={handleField4Change}
              placeholder="Select personality types"
              className="w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-left text-gray-700 font-medium" htmlFor="event-type">
              Event Type
            </label>
            <select
              id="event-type"
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500"
            >
              <option value="casual">Casual</option>
              <option value="office">Office/Work</option>
              <option value="date">Date</option>
              <option value="party">Party</option>
              <option value="outdoor">Outdoor/Sports</option>
              <option value="formal">Formal Event</option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-4 w-full px-6 py-3 text-white bg-gradient-to-r from-pink-500 to-yellow-500 rounded-lg shadow-md hover:from-pink-600 hover:to-yellow-600 focus:outline-none focus:ring-4 focus:ring-pink-300"
          >
            Get AI Perfume
          </button>
        </form>
      </section>

      {show && (
        <section className="w-ful flex justify-center">
          <div className="flex gap-4 flex-wrap p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {perfumeData.map((card) => (
                <div
                  key={card.id}
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="h-56 w-full">
                    <img
                      className="mx-auto h-full"
                      src={card.imageUrl}
                      alt={card.title}
                    />
                  </div>
                  <div className="pt-6">
                    <h3 className="text-lg font-bold">{card.title}</h3>
                    <p>{card.discount}</p>
                    <p>{card.price}</p>
                  </div>
                  <div>
                    <button
                      className="mt-4 w-full rounded py-2 text-white bg-gradient-to-r from-purple-500 to-red-500 shadow-md hover:from-purple-600 hover:to-red-600 focus:outline-none focus:ring-4 focus:ring-purple-300"
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
      )}
    </MainLayout>
  );
}


