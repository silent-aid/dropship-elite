import React from 'react';

const Unlock = () => {
  const handlePayment = async () => {
    // Redirect to your backend endpoint to create Stripe Checkout session
    window.location.href = "https://your-backend.com/create-checkout-session";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to Unlock?</h2>
        <p className="text-gray-600 mb-6">
          Pay once, access forever. Get instant access to daily winning products.
        </p>
        <button
          onClick={handlePayment}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full text-lg"
        >
          🔓 Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Unlock;
