import MainLayout from "@/components/layout/layout";

export default function CustomAIRecommendations() {
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
            type="submit"
            className="mt-4 w-full px-6 py-3 text-white bg-gradient-to-r from-pink-500 to-yellow-500 rounded-lg shadow-md hover:from-pink-600 hover:to-yellow-600 focus:outline-none focus:ring-4 focus:ring-pink-300"
          >
            Get AI Recommendations
          </button>
        </form>
      </section>
      </MainLayout>
    );
  }
  