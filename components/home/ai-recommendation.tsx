'use client'

import { useRouter } from 'next/navigation';

export default function AIRecommendations() {

    const router = useRouter();

    const handleButtonClick = () => {
      router.push('/custom-ai-recommend');
    };

    return (
        <>
            <section className="flex flex-col items-center justify-center px-6 py-16 bg-white text-center md:px-12 lg:py-20 lg:px-24">
                <h2
                    className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 sm:text-4xl lg:text-5xl"
                >
                    Discover Your Signature Scent
                </h2>
                <p className="mt-4 text-base text-gray-600 max-w-xl sm:text-lg lg:text-xl">
                    Let our AI-powered tool match you with the perfect fragrance that suits your style and personality. Say goodbye to guesswork and hello to your new favorite scent!
                </p>
                <button
                    onClick={handleButtonClick}
                    className="mt-8 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-yellow-500 rounded-lg shadow-md hover:from-pink-600 hover:to-yellow-600 focus:outline-none focus:ring-4 focus:ring-pink-300 sm:text-base lg:text-lg lg:px-8 lg:py-4"
                >
                    Get AI Recommendation
                </button>
            </section>
        </>
    )
}