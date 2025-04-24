import React from 'react'

// Array of products
const products = [
  {
    name: 'Product 1',
    description: 'This is a description of product 1.',
    price: '$19.99',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    name: 'Product 2',
    description: 'This is a description of product 2.',
    price: '$29.99',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    name: 'Product 3',
    description: 'This is a description of product 3.',
    price: '$39.99',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    name: 'Product 4',
    description: 'This is a description of product 4.',
    price: '$49.99',
    imageUrl: 'https://via.placeholder.com/300',
  },
  // You can add more products to this array
]

const Shop = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">Our Products</h1>
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
            <p className="mt-2 text-gray-600">{product.description}</p>
            <p className="mt-4 text-xl font-bold text-indigo-600">{product.price}</p>
            
            {/* Add to Cart Button */}
            <button className="mt-4 bg-indigo-600 text-white py-2 px-6 rounded-md">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop
