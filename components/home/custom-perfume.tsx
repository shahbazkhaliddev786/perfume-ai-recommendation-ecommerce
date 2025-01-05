'use client'
import { useRouter } from 'next/navigation';

export default function CustomPerfumeRequestSection() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/custom-perfume-request');
  };

  return (
    <section className="flex flex-col items-center justify-center px-6 py-16 bg-white text-center md:px-12 lg:py-20 lg:px-24">
      <h2
        className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 sm:text-4xl lg:text-5xl"
      >
        Create Your Signature Perfume
      </h2>
      <p className="mt-4 text-base text-gray-600 max-w-xl sm:text-lg lg:text-xl">
        Imagine a fragrance that perfectly captures your personality. Request a custom perfume and let us craft a scent that’s uniquely yours.
      </p>
      <button
        onClick={handleButtonClick}
        className="mt-8 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-red-500 rounded-lg shadow-md hover:from-purple-600 hover:to-red-600 focus:outline-none focus:ring-4 focus:ring-purple-300 sm:text-base lg:text-lg lg:px-8 lg:py-4"
      >
        Request Custom Perfume
      </button>
    </section>
  );
}
