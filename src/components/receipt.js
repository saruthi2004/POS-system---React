// src/components/Receipt.js
import React from 'react';
import './Receipt.css';

const Receipt = ({ customerInfo, paymentInfo, cart }) => {
  return (
    <div>
      <h2>Receipt</h2>
      <div>
        <h3>Customer Information</h3>
        <p>Name: {customerInfo.customerName}</p>
        <p>Mobile Number: {customerInfo.phoneNumber}</p>
      </div>
      <div>
        <h3>Payment Information</h3>
        <p>Payment Option: {paymentInfo.paymentMode}</p>
        {paymentInfo.paymentMode === 'card' && (
          <p>
            Card Number: {paymentInfo.cardNumber}, Validity: {paymentInfo.validity}, CVV: {paymentInfo.cvv}
          </p>
        )}
      </div>
      
      <button onClick={() => window.print()}>Print Receipt</button>
      <button onClick={() => { /* Add logic for emailing receipt */ }}>Email Receipt</button>
    </div>
  );
};

export default Receipt;
