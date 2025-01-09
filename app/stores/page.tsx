import Link from "next/link";
import MainLayout from "@/components/layout/layout";

export default function StoresPage() {
  const stores = [
    { id: 1, name: "Tech Haven" },
    { id: 2, name: "Fashion Fiesta" },
    { id: 3, name: "Gadget Galaxy" },
    { id: 4, name: "Home Essentials" },
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
                className="bg-[#f68cba] py-2 px-4 text-white rounded hover:bg-[#e678a6]"
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
