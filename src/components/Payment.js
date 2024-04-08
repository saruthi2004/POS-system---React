// src/components/Payment.js
import React, { useState } from 'react';
import Receipt from './Receipt';
import './Payment.css'; 

const Payment = ({ onCompletePayment, goBack}) => {
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentMode, setPaymentMode] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [validity, setValidity] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = () => {
    // Perform payment processing logic here
    setPaymentSuccess(true);
    // Remove onCompletePayment() here to prevent redirecting back to the previous page
  };

  return (
    <div>
      {paymentSuccess ? (
        <Receipt
          customerInfo={{ customerName, phoneNumber }}
          paymentInfo={{ paymentMode, cardNumber, validity, cvv }}
          cart={[]} // Pass the cart data here
        />
      ) : (
        <div>
          <h2>Payment Details</h2>
          <div>
            <h3>Customer Details</h3>
            <label>Customer Name:</label>
            <input type="text" value={customerName} onChange={e => setCustomerName(e.target.value)} />
            <label>Phone Number:</label>
            <input type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
          </div>
          <div>
            <h3>Payment Options</h3>
            <input type="radio" id="cash" name="paymentMode" value="cash" onChange={() => setPaymentMode('cash')} />
            <label htmlFor="cash">Cash</label><br />
            <input type="radio" id="card" name="paymentMode" value="card" onChange={() => setPaymentMode('card')} />
            <label htmlFor="card">Card</label><br />
            <input type="radio" id="upi" name="paymentMode" value="upi" onChange={() => setPaymentMode('upi')} />
            <label htmlFor="upi">UPI</label><br />
            {paymentMode === 'card' && (
              <div>
                <label>Card Number:</label>
                <input type="text" value={cardNumber} onChange={e => setCardNumber(e.target.value)} />
                <label>Validity:</label>
                <input type="text" value={validity} onChange={e => setValidity(e.target.value)} />
                <label>CVV:</label>
                <input type="text" value={cvv} onChange={e => setCvv(e.target.value)} />
              </div>
            )}
          </div>
          <button onClick={handlePayment}>Pay Now</button>
          <button onClick={goBack}>Back</button>
        </div>
      )}
    </div>
  );
};

export default Payment;
