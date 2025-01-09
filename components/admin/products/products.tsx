'use client';
import React, { useState } from 'react';

// Define types for the product data
interface Product {
  id: number;
  name: string;
  imageLight: string;
  discount?: string | null;
  rating: number;
  reviews: number;
}

export default function ProductList() {
  // State to hold the list of products
  const [products, setProducts] = useState<Product[]>(
    [
        {
          id: 1,
          name: 'Chanel No. 5',
          imageLight: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFzv0eNkd_dUhNGQVH7tUPz-lMNM23YUnwXQ&s',
          rating: 4.7,
          reviews: 3245,
        },
        {
          id: 2,
          name: 'Dior Sauvage',
          imageLight: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFzv0eNkd_dUhNGQVH7tUPz-lMNM23YUnwXQ&s',
          rating: 4.8,
          reviews: 5200,
        },
        {
          id: 3,
          name: 'Tom Ford Black Orchid',
          imageLight: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFzv0eNkd_dUhNGQVH7tUPz-lMNM23YUnwXQ&s',
          rating: 4.5,
          reviews: 2500,
        },
      ]);

  // State to handle whether we are editing or adding a product
  const [isEditing, setIsEditing] = useState<boolean>(false);

  // State to hold the product currently being edited or added
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);

  // Function to handle adding a new product
  const handleAddProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentProduct) {
      setProducts([...products, currentProduct]);
      setIsEditing(false);
      setCurrentProduct(null);
    }
  };

  // Function to handle editing a product
  const handleEdit = (product: Product) => {
    setIsEditing(true);
    setCurrentProduct({ ...product });
  };

  // Function to handle saving the product changes
  const handleSaveProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentProduct) {
      const updatedProducts = products.map((product) =>
        product.id === currentProduct.id ? currentProduct : product
      );
      setProducts(updatedProducts);
      setIsEditing(false);
      setCurrentProduct(null);
    }
  };

  // Function to handle deleting a product
  const handleDelete = (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  // Function to handle the "Create New Product" button click
  const handleCreateNewProduct = () => {
    setIsEditing(true);
    setCurrentProduct({
      id: Date.now(), // Assign a new unique ID for the new product
      name: '',
      imageLight: '',
      rating: 0,
      reviews: 0,
    });
  };

  return (
    <div className="container mx-auto p-4">
      {/* Add Product Button */}
      <button
        onClick={handleCreateNewProduct}
        className="bg-[#f68cba] text-white px-4 py-2 rounded"
      >
        Create New Product
      </button>

      {/* Product List */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow-lg">
            <img
              src={product.imageLight}
              alt={product.name}
              className="w-full h-48 object-cover rounded"
            />
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="flex items-center mt-2">
                {/* Rating stars */}
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={index < Math.round(product.rating) ? 'currentColor' : 'none'}
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-yellow-500"
                      stroke="currentColor"
                    >
                      <path d="M2.5 0l3-3M4.5" fillRule="evenodd"></path>
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
              </div>
            </div>

            {/* Edit and Delete Buttons */}
            <div className="mt-4 flex justify-between gap-2">
              <button
                onClick={() => handleEdit(product)}
                className="bg-[#f68cba] text-white px-4 py-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Product Form */}
      {isEditing && currentProduct && currentProduct.id === Date.now() && (
        <form onSubmit={handleAddProduct} className="mt-6">
          <h2 className="text-lg font-medium mb-4">Create New Product</h2>
          <div className="mb-4">
            <label className="block">Name</label>
            <input
              type="text"
              value={currentProduct.name}
              onChange={(e) => setCurrentProduct({ ...currentProduct, name: e.target.value })}
              className="p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block">Image URL</label>
            <input
              type="text"
              value={currentProduct.imageLight}
              onChange={(e) =>
                setCurrentProduct({ ...currentProduct, imageLight: e.target.value })
              }
              className="p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block">Discount</label>
            <input
              type="text"
              value={currentProduct.discount || ''}
              onChange={(e) =>
                setCurrentProduct({ ...currentProduct, discount: e.target.value || null })
              }
              className="p-2 w-full border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block">Rating</label>
            <input
              type="number"
              value={currentProduct.rating}
              onChange={(e) =>
                setCurrentProduct({ ...currentProduct, rating: parseFloat(e.target.value) })
              }
              step="0.1"
              min="0"
              max="5"
              className="p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block">Reviews</label>
            <input
              type="number"
              value={currentProduct.reviews}
              onChange={(e) =>
                setCurrentProduct({ ...currentProduct, reviews: parseInt(e.target.value, 10) })
              }
              className="p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Add Product
          </button>
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="ml-2 bg-gray-300 text-black px-4 py-2 rounded"
          >
            Cancel
          </button>
        </form>
      )}

      {/* Edit Product Form */}
      {isEditing && currentProduct && currentProduct.id !== Date.now() && (
        <form onSubmit={handleSaveProduct} className="mt-6">
          <h2 className="text-lg font-medium mb-4">Edit Product</h2>
          <div className="mb-4">
            <label className="block">Name</label>
            <input
              type="text"
              value={currentProduct.name}
              onChange={(e) => setCurrentProduct({ ...currentProduct, name: e.target.value })}
              className="p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block">Image URL</label>
            <input
              type="text"
              value={currentProduct.imageLight}
              onChange={(e) =>
                setCurrentProduct({ ...currentProduct, imageLight: e.target.value })
              }
              className="p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block">Discount</label>
            <input
              type="text"
              value={currentProduct.discount || ''}
              onChange={(e) =>
                setCurrentProduct({ ...currentProduct, discount: e.target.value || null })
              }
              className="p-2 w-full border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block">Rating</label>
            <input
              type="number"
              value={currentProduct.rating}
              onChange={(e) =>
                setCurrentProduct({ ...currentProduct, rating: parseFloat(e.target.value) })
              }
              step="0.1"
              min="0"
              max="5"
              className="p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block">Reviews</label>
            <input
              type="number"
              value={currentProduct.reviews}
              onChange={(e) =>
                setCurrentProduct({ ...currentProduct, reviews: parseInt(e.target.value, 10) })
              }
              className="p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Save Changes
          </button>
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="ml-2 bg-gray-300 text-black px-4 py-2 rounded"
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
}


// 'use client'
// import React, { useState } from 'react';

// // Define types for the product data
// interface Product {
//   id: number;
//   name: string;
//   imageLight: string;
//   discount?: string | null;
//   rating: number;
//   reviews: number;
// }

// export default function ProductList() {
//   // State to hold the list of products
//   const [products, setProducts] = useState<Product[]>(
//     [
//         {
//           id: 1,
//           name: 'Chanel No. 5',
//           imageLight: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFzv0eNkd_dUhNGQVH7tUPz-lMNM23YUnwXQ&s',
//           rating: 4.7,
//           reviews: 3245,
//         },
//         {
//           id: 2,
//           name: 'Dior Sauvage',
//           imageLight: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFzv0eNkd_dUhNGQVH7tUPz-lMNM23YUnwXQ&s',
//           rating: 4.8,
//           reviews: 5200,
//         },
//         {
//           id: 3,
//           name: 'Tom Ford Black Orchid',
//           imageLight: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFzv0eNkd_dUhNGQVH7tUPz-lMNM23YUnwXQ&s',
//           rating: 4.5,
//           reviews: 2500,
//         },
//       ]);

//   // State to handle whether we are editing a product
//   const [isEditing, setIsEditing] = useState<boolean>(false);

//   // State to hold the product currently being edited
//   const [currentProduct, setCurrentProduct] = useState<Product | null>(null);

//   // Function to handle the addition of a new product
//   const handleAddProduct = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (currentProduct) {
//       setProducts([...products, currentProduct]);
//       setIsEditing(false);
//       setCurrentProduct(null);
//     }
//   };

//   // Function to handle editing a product
//   const handleEdit = (product: Product) => {
//     setIsEditing(true);
//     setCurrentProduct({ ...product });
//   };

//   // Function to handle saving the product changes
//   const handleSaveProduct = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (currentProduct) {
//       const updatedProducts = products.map((product) =>
//         product.id === currentProduct.id ? currentProduct : product
//       );
//       setProducts(updatedProducts);
//       setIsEditing(false);
//       setCurrentProduct(null);
//     }
//   };

//   // Function to handle deleting a product
//   const handleDelete = (id: number) => {
//     const updatedProducts = products.filter((product) => product.id !== id);
//     setProducts(updatedProducts);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       {/* Add Product Button */}
//       <button
//         onClick={() => setIsEditing(true)}
//         className="bg-green-500 text-white px-4 py-2 rounded"
//       >
//         Add New Product
//       </button>

//       {/* Product List */}
//       <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {products.map((product) => (
//           <div key={product.id} className="border p-4 rounded shadow-lg">
//             <img src={product.imageLight} alt={product.name} className="w-full h-48 object-cover rounded" />
//             <div className="mt-4">
//               <h3 className="text-lg font-semibold">{product.name}</h3>
//               <p className="text-gray-600">Discount: {product.discount}</p>
//               <div className="flex items-center mt-2">
//                 {/* Rating stars */}
//                 <div className="flex">
//                   {[...Array(5)].map((_, index) => (
//                     <svg
//                       key={index}
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill={index < Math.round(product.rating) ? 'currentColor' : 'none'}
//                       viewBox="0 0 24 24"
//                       className="w-5 h-5 text-yellow-500"
//                       stroke="currentColor"
//                     >
//                       <path d="M2.5 0l3-3M4.5" fillRule="evenodd"></path>
//                     </svg>
//                   ))}
//                 </div>
//                 <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
//               </div>
//             </div>

//             {/* Edit and Delete Buttons */}
//             <div className="mt-4 flex justify-between gap-2">
//               <button
//                 onClick={() => handleEdit(product)}
//                 className="bg-blue-500 text-white px-4 py-2 rounded"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(product.id)}
//                 className="bg-red-500 text-white px-4 py-2 rounded"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Edit Product Form */}
//       {isEditing && currentProduct && (
//         <form onSubmit={handleSaveProduct} className="mt-6">
//           <h2 className="text-lg font-medium mb-4">Edit Product</h2>
//           <div className="mb-4">
//             <label className="block">Name</label>
//             <input
//               type="text"
//               value={currentProduct.name}
//               onChange={(e) => setCurrentProduct({ ...currentProduct, name: e.target.value })}
//               className="p-2 w-full border border-gray-300 rounded"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block">Image URL</label>
//             <input
//               type="text"
//               value={currentProduct.imageLight}
//               onChange={(e) => setCurrentProduct({ ...currentProduct, imageLight: e.target.value })}
//               className="p-2 w-full border border-gray-300 rounded"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block">Discount</label>
//             <input
//               type="text"
//               value={currentProduct.discount || ''}
//               onChange={(e) =>
//                 setCurrentProduct({ ...currentProduct, discount: e.target.value || null })
//               }
//               className="p-2 w-full border border-gray-300 rounded"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block">Rating</label>
//             <input
//               type="number"
//               value={currentProduct.rating}
//               onChange={(e) =>
//                 setCurrentProduct({ ...currentProduct, rating: parseFloat(e.target.value) })
//               }
//               step="0.1"
//               min="0"
//               max="5"
//               className="p-2 w-full border border-gray-300 rounded"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block">Reviews</label>
//             <input
//               type="number"
//               value={currentProduct.reviews}
//               onChange={(e) =>
//                 setCurrentProduct({ ...currentProduct, reviews: parseInt(e.target.value, 10) })
//               }
//               className="p-2 w-full border border-gray-300 rounded"
//               required
//             />
//           </div>
//           <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//             Save Changes
//           </button>
//           <button
//             type="button"
//             onClick={() => setIsEditing(false)}
//             className="ml-2 bg-gray-300 text-black px-4 py-2 rounded"
//           >
//             Cancel
//           </button>
//         </form>
//       )}
//     </div>
//   );
// }
