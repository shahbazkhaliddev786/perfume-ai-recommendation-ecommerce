import Link from "next/link";

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




export default function Featured() {
    return (
        <>
            <section className="p-6">
                <h2 className="text-3xl font-semibold">Featured Products</h2>
                <div className="flex flex-col gap-6 items-end">
                    <div><Link href="/shop-now" className="hover:underline">Show more</Link></div>
                    <div className="flex gap-4 flex-wrap">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {perfumeData.map((card:any) => (
                                <div key={card.id} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                                    <div className="h-56 w-full">
                                        <a href="#">
                                            <img className="mx-auto h-full dark:hidden" src={card.imageUrl} alt="" />
                                            <img className="mx-auto hidden h-full dark:block" src={card.imageUrl} alt="" />
                                        </a>
                                    </div>

                                    <div className="pt-6">
                                        <div className="mb-4 flex items-center justify-between gap-4">
                                            <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800">
                                                {card.discount}
                                            </span>

                                            <div className="flex items-center justify-end gap-1">
                                                <button
                                                    type="button"
                                                    data-tooltip-target="tooltip-quick-look"
                                                    className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                                >
                                                    <span className="sr-only text-gray-800">Quick look</span>
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
                                                    <span className="sr-only text-gray-800">Add to Favorites</span>
                                                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        <a href="#" className="text-lg font-semibold leading-tight text-gray-800 hover:underline">
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
                                            <p className="text-sm font-medium text-gray-700">{card.rating}</p>
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

                                        <p className="text-lg font-semibold text-gray-700">{card.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}