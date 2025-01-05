import MainLayout from "@/components/layout/layout";

export default function CustomPerfumeRequestForm() {
    return (
    <MainLayout>
          <section className="flex flex-col items-center justify-center min-h-screen px-6 py-16 bg-gray-50 md:px-12 lg:px-24">
        <h1 className="text-3xl font-extrabold text-gray-800 sm:text-4xl lg:text-5xl">Get Your Custom Perfume</h1>
        <p className="mt-4 text-base text-gray-600 sm:text-lg lg:text-xl">
          Fill out the form below, and let us craft the perfect fragrance for you.
        </p>
        <form className="w-full max-w-lg mt-8 space-y-6 bg-white p-6 rounded-lg shadow-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700">Fragrance Preference</label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              placeholder="e.g., Floral, Woody, Citrus"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Perfume Type</label>
            <select
              className="mt-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
            >
              <option value="">Select Type</option>
              <option value="eau-de-parfum">Eau de Parfum</option>
              <option value="eau-de-toilette">Eau de Toilette</option>
              <option value="eau-de-cologne">Eau de Cologne</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender Preference</label>
            <select
              className="mt-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="unisex">Unisex</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Intensity</label>
            <input
              type="range"
              min="1"
              max="10"
              className="mt-1 w-full h-2 bg-gray-200 rounded-lg focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Budget</label>
            <input
              type="number"
              className="mt-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              placeholder="e.g., 50, 100"
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-red-500 rounded-lg shadow-md hover:from-purple-600 hover:to-red-600 focus:outline-none focus:ring-4 focus:ring-purple-300"
          >
            Submit Request
          </button>
        </form>
      </section>
    </MainLayout>
    );
  }
  