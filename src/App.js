// // src/App.js
// import React, { useState } from 'react';
// import Home from './components/Home';
// import ProductList from './components/ProductList';
// import Cart from './components/Cart';
// import Payment from './components/Payment';
// import './App.css';

// const App = () => {
//     const [currentPage, setCurrentPage] = useState('home');
//   const [showProducts, setShowProducts] = useState(false);
//   const [cart, setCart] = useState([]);
//   const [showPayment, setShowPayment] = useState(false);

//   const products = [
//     { id: 1, name: 'Men\'s Shirt', price: 500,quantity: 10, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS3-pgogiZL2BFYZCsFPCZBj_n2hjXxIT2k4f960XerHLAE0dX8r5HSVy8Q6GQ0mtgL2vuGP7a43uSJBPCci1VKTcibX8oWRJaOq8S_tUKb90XDnxwyIMk1', category: 'Men\'s Clothing' },
//     { id: 2, name: 'Men\'s Pants', price: 700,quantity: 10, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcReDtdBYEbKBFqgHg-P6pogF7x_d4dUt2UtMkVGr1Qv02pLgy4-4rZLDGNbwfU2JiKYZDJBRvfp-D0otbTSf6vrGqwvTnnKPQ', category: 'Men\'s Clothing' },
//     { id: 3, name: 'Men\'s Kurta', price: 1500,quantity: 10, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSBItbO-MRIpZxZRevF2F28bek6JDASWMvASu1Id9E_-M5m8IpJAtSoS-1xoumQIq5dcAoA7ysDzwhBNKa8pVQf5JBe9qBv', category: 'Men\'s Clothing'},
//     { id: 4, name: 'Women\'s Kurtis', price: 1000,quantity: 10, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSkp_nc3oXRZ-k1X_2fuUiZTcSdXhYTkwrrifiofuHWIYfxmGQfU40-C-5CQ-z4WNTN9gsNR2XSEmVgKd7f-hHKxLWfRY6FoA', category: 'Women\'s Clothing' },
//     { id: 5, name: 'Women\'s Pants', price: 1000,quantity: 10, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQooDWOMrOF2mdfevT7VUSUEuyU5l57eatEdow2o4z3sRXKaT73IXnGarNnw45J7oD_yA9UxOJ4gZGqv-l9ZBa1N_CrIemeWe4NLEgc_ffQpkITpOpmYalQ', category: 'Women\'s Clothing'},
//     { id: 6, name: 'Women\'s Jeans', price: 2000,quantity: 10, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQbrc7oQ49CWDF_J51lyVo5vo5RM_ocZVvOyHN1YHrGjIxSTp59EXpvoLzRsXxsIc2FV5FTk6Ksc9JGmPM6Akm6ecV9_L_1OG6S3ZQHrbZlbO3dzCvlkOCPBQ', category: 'Women\'s Clothing'},
//     { id: 7, name: 'Kid\'s Wear - Frock', price: 2500,quantity: 10, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRbaMAS3_UHi2_hRPOWZOVozfBVZJE3s5utcUQfBZmoVj6uyNsmsl77Dsushg0KCUSd8ydv2afnMgXVnSQLixCjhf-tzPx9c0AiJGyhtENVkx60MXi8mQk2pCaIdrG4TPIYZXgvZw&usqp=CAc', category: 'Kid\'s Wear'},
//     { id: 8, name: 'Kid\'s Wear - T-Shirt and Lounge Pant', price: 3500,quantity: 10, image: 'https://cdn.fcglcdn.com/brainbees/images/products/438x531/15244336a.webp', category: 'Kid\'s Wear'},
//     { id: 9, name: 'Kid\'s Wear - CaterPillar Dress', price: 2500,quantity: 10, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcThWVZTbHemHLX2L9NfQVyRwKBJsYfNaazqw9QiSyrES0cVu9eDq-pbMXe3OCKJH7cUDRptDEdnpSEjf57oRUiphd6-5AhF6MLT0YOf2oFkUhzIjHsgmt9-oPhY-0dVMvMOL5mFGXV97juj&usqp=CAc', category: 'Kid\'s Wear'},
    
//   ];

//   const startSelling = () => {
//     setShowProducts(true);
//   };

//   const addToCart = product => {
//     setCart([...cart, product]);
//   };

//   const proceedToPayment = () => {
//     setShowPayment(true);
//   };

//   const onCompletePayment = () => {
//     setShowPayment(false);
//   };
//   const goBack = () => {
//     if (currentPage === 'productList') {
//       setCurrentPage('home');
//     } else if (currentPage === 'cart') {
//       setCurrentPage('productList');
//     } else if (currentPage === 'payment') {
//       setCurrentPage('cart');
//     }
//   };


//   return (
//     <div>
      
//       {!showProducts && !showPayment && (
//         <Home startSelling={startSelling} />
//       )}
//       {showProducts && !showPayment && (
//         <>
//           <ProductList products={products} addToCart={addToCart} />
//           <Cart cart={cart} proceedToPayment={proceedToPayment} />
//         </>
//       )}
//       {showPayment && (
//         <Payment onCompletePayment={onCompletePayment} />
//       )}
//       {currentPage === 'productList' && <ProductList goBack={goBack} />}
//       {currentPage === 'cart' && <Cart goBack={goBack} />}
//       {currentPage === 'payment' && <Payment onCompletePayment={onCompletePayment} goBack={goBack} />}
//     </div>
//   );
// };

// export default App;


// src/App.js
import React, { useState } from 'react';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Payment from './components/Payment';
import './App.css';

const App = () => {
    const [currentPage, setCurrentPage] = useState('home');
  const [showProducts, setShowProducts] = useState(false);
  const [cart, setCart] = useState([]);
  const [showPayment, setShowPayment] = useState(false);

  const products = [
    { id: 1, name: 'Men\'s Shirt', price: 500,quantity: 10, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS3-pgogiZL2BFYZCsFPCZBj_n2hjXxIT2k4f960XerHLAE0dX8r5HSVy8Q6GQ0mtgL2vuGP7a43uSJBPCci1VKTcibX8oWRJaOq8S_tUKb90XDnxwyIMk1', category: 'Men\'s Clothing' },
    { id: 2, name: 'Men\'s Pants', price: 700,quantity: 10, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcReDtdBYEbKBFqgHg-P6pogF7x_d4dUt2UtMkVGr1Qv02pLgy4-4rZLDGNbwfU2JiKYZDJBRvfp-D0otbTSf6vrGqwvTnnKPQ', category: 'Men\'s Clothing' },
    { id: 3, name: 'Men\'s Kurta', price: 1500,quantity: 10, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSBItbO-MRIpZxZRevF2F28bek6JDASWMvASu1Id9E_-M5m8IpJAtSoS-1xoumQIq5dcAoA7ysDzwhBNKa8pVQf5JBe9qBv', category: 'Men\'s Clothing'},
    { id: 4, name: 'Women\'s Kurtis', price: 1000,quantity: 10, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSkp_nc3oXRZ-k1X_2fuUiZTcSdXhYTkwrrifiofuHWIYfxmGQfU40-C-5CQ-z4WNTN9gsNR2XSEmVgKd7f-hHKxLWfRY6FoA', category: 'Women\'s Clothing' },
    { id: 5, name: 'Women\'s Pants', price: 1000,quantity: 10, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQooDWOMrOF2mdfevT7VUSUEuyU5l57eatEdow2o4z3sRXKaT73IXnGarNnw45J7oD_yA9UxOJ4gZGqv-l9ZBa1N_CrIemeWe4NLEgc_ffQpkITpOpmYalQ', category: 'Women\'s Clothing'},
    { id: 6, name: 'Women\'s Jeans', price: 2000,quantity: 10, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQbrc7oQ49CWDF_J51lyVo5vo5RM_ocZVvOyHN1YHrGjIxSTp59EXpvoLzRsXxsIc2FV5FTk6Ksc9JGmPM6Akm6ecV9_L_1OG6S3ZQHrbZlbO3dzCvlkOCPBQ', category: 'Women\'s Clothing'},
    { id: 7, name: 'Kid\'s Wear - Frock', price: 2500,quantity: 10, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRbaMAS3_UHi2_hRPOWZOVozfBVZJE3s5utcUQfBZmoVj6uyNsmsl77Dsushg0KCUSd8ydv2afnMgXVnSQLixCjhf-tzPx9c0AiJGyhtENVkx60MXi8mQk2pCaIdrG4TPIYZXgvZw&usqp=CAc', category: 'Kid\'s Wear'},
    { id: 8, name: 'Kid\'s Wear - T-Shirt and Lounge Pant', price: 3500,quantity: 10, image: 'https://cdn.fcglcdn.com/brainbees/images/products/438x531/15244336a.webp', category: 'Kid\'s Wear'},
    { id: 9, name: 'Kid\'s Wear - CaterPillar Dress', price: 2500,quantity: 10, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcThWVZTbHemHLX2L9NfQVyRwKBJsYfNaazqw9QiSyrES0cVu9eDq-pbMXe3OCKJH7cUDRptDEdnpSEjf57oRUiphd6-5AhF6MLT0YOf2oFkUhzIjHsgmt9-oPhY-0dVMvMOL5mFGXV97juj&usqp=CAc', category: 'Kid\'s Wear'},
    
  ];

  const startSelling = () => {
    setShowProducts(true);
  };

  const addToCart = product => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      updatedCart[existingProductIndex].price += product.price; // Update price
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  

  const proceedToPayment = () => {
    setShowPayment(true);
  };

  const onCompletePayment = () => {
    setShowPayment(false);
  };
  const goBack = () => {
    if (currentPage === 'productList') {
      setCurrentPage('home');
    } else if (currentPage === 'cart') {
      setCurrentPage('productList');
    } else if (currentPage === 'payment') {
      setCurrentPage('cart');
    }
  };


  return (
    <div>
      
      {!showProducts && !showPayment && (
        <Home startSelling={startSelling} />
      )}
      {showProducts && !showPayment && (
        <>
          <ProductList products={products} addToCart={addToCart} />
          <Cart cart={cart} proceedToPayment={proceedToPayment} />
        </>
      )}
      {showPayment && (
        <Payment onCompletePayment={onCompletePayment} />
      )}
      {currentPage === 'productList' && <ProductList goBack={goBack} />}
      {currentPage === 'cart' && <Cart goBack={goBack} />}
      {currentPage === 'payment' && <Payment onCompletePayment={onCompletePayment} goBack={goBack} />}
    </div>
  );
};

export default App;








