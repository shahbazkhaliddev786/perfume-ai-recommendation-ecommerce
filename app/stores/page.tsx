import Link from "next/link";
import MainLayout from "@/components/layout/layout";

export default function StoresPage() {
  const stores = [
    { id: 1, name: "Tech Haven" },
    { id: 2, name: "Fashion Fiesta" },
    { id: 3, name: "Gadget Galaxy" },
    { id: 4, name: "Home Essentials" },
    { id: 5, name: "Book World" },
    { id: 6, name: "Fitness Gear" },
    { id: 7, name: "Toy Treasure" },
    { id: 8, name: "Pet Paradise" },
    { id: 9, name: "Music Mania" },
    { id: 10, name: "Artistic Vibes" },
    { id: 11, name: "Outdoor Oasis" },
    { id: 12, name: "Kitchen Delights" },
  ];

  return (
    <MainLayout>
      <section className="px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">Stores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stores.map((store) => (
            <div
              key={store.id}
              className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <h3 className="text-lg font-semibold mb-4">{store.name}</h3>
              <Link
                href="/shop-now"
                className=" py-2 px-4 text-white bg-gradient-to-r from-purple-500 to-red-500 rounded-lg shadow-md hover:from-purple-600 hover:to-red-600 focus:outline-none focus:ring-4 focus:ring-purple-300"
              >
                Shop Now
              </Link>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
