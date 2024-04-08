// // src/components/ProductList.js
// import React, { useState } from 'react';
// import './ProductList.css';


// const ProductList = ({ products, addToCart, goBack }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   // Function to handle search query change
//   const handleSearchChange = event => {
//     setSearchQuery(event.target.value);
//   };

//   // Function to handle category filter change
//   const handleCategoryChange = event => {
//     setSelectedCategory(event.target.value);
//   };

//   // Filter products based on search query and selected category
//   const filteredProducts = products.filter(product =>
//     (product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//      selectedCategory === 'All' ||
//      product.category === selectedCategory)
//   );

//   // Get unique categories from products
//   const categories = ['All', ...new Set(products.map(product => product.category))];

//   return (
//     <div>
//       <h2>Product List</h2>
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={searchQuery}
//         onChange={handleSearchChange}
//       />
//       <select value={selectedCategory} onChange={handleCategoryChange}>
//         {categories.map(category => (
//           <option key={category} value={category}>{category}</option>
//         ))}
//       </select>
//       <ul>
//         {filteredProducts.map(product => (
//           <li key={product.id}>
//             <div>
//               <img src={product.image} alt={product.name} />
//               <p>{product.name}</p>
//               <p>{product.price} Rs</p>
//               <button onClick={() => addToCart(product)}>Add to Cart</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//       <button onClick={goBack}>Back</button>
//     </div>
//   );
// };

// export default ProductList;



// src/components/ProductList.js
import React, { useState } from 'react';
import './ProductList.css';

const ProductList = ({ products, addToCart, goBack }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Function to handle search query change
  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  // Function to handle category filter change
  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
  };

  // Filter products based on search query and selected category
  const filteredProducts = products.filter(product =>
    (product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     selectedCategory === 'All' ||
     product.category === selectedCategory)
  );

  // Get unique categories from products
  const categories = ['All', ...new Set(products.map(product => product.category))];

  // Divide products into groups of three
  const groupedProducts = [];
  for (let i = 0; i < filteredProducts.length; i += 3) {
    groupedProducts.push(filteredProducts.slice(i, i + 3));
  }

  return (
    <div>
      <h2>Product List</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <select value={selectedCategory} onChange={handleCategoryChange}>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <div className="product-list">
        {groupedProducts.map((group, index) => (
          <div key={index} className="product-group">
            {group.map(product => (
              <div key={product.id} className="product-item">
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
                <p>{product.price} Rs</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        ))}
      </div>
      <button onClick={goBack}>Back</button>
    </div>
  );
};

export default ProductList;
