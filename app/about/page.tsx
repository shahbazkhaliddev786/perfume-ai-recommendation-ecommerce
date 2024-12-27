
const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          About Us
        </h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Our Passion for Luxury Perfumes
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At <span className="font-bold">Perfume Elegance</span>, we celebrate the art of fragrance, offering a curated
              selection of luxury perfumes crafted by world-renowned perfumers. Each scent tells a story, weaving timeless
              notes that evoke memories, emotions, and aspirations. Our commitment is to provide you with an unparalleled
              sensory journey through the world of fine fragrances.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              AI Personalized Recommendation System
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We understand that finding the perfect fragrance can be a deeply personal experience. That's why we leverage
              cutting-edge <span className="font-bold">AI technology</span> to offer tailored recommendations based on your
              unique preferences and lifestyle. By analyzing scent profiles, preferences, and trends, our system ensures that
              every suggestion aligns with your individuality, making the journey to discovering your signature scent effortless
              and delightful.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Why Choose Us?
            </h2>
            <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed space-y-2">
              <li>Extensive collection of premium fragrances from top brands and niche houses.</li>
              <li>Innovative AI-powered system to match scents with your personality and preferences.</li>
              <li>Exceptional customer service dedicated to helping you make informed choices.</li>
            </ul>
          </section>
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-700 text-lg">
            Join us on a journey to redefine the way you discover and experience luxury perfumes. Whether you’re a seasoned
            connoisseur or new to the world of fragrances, we’re here to guide and inspire you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
