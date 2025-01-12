'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';

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
             <Link href='/custom-ai-recommend'>
             <button
                    onClick={handleButtonClick}
                    className="mt-8 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-yellow-500 rounded-lg shadow-md hover:from-pink-600 hover:to-yellow-600 focus:outline-none focus:ring-4 focus:ring-pink-300 sm:text-base lg:text-lg lg:px-8 lg:py-4"
                >
                    Get AI Recommendation
                </button>
             </Link>



            </section>
           
        </>
    )
}