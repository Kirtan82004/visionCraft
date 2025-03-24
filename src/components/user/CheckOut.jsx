import React, { useState } from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; 
  const total = subtotal + tax;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", 
      amount: total * 100, 
      currency: "INR",
      name: "Optical Shop",
      description: "Order Payment",
      handler: function (response) {
        console.log("Payment Successful", response);
        alert("Payment Successful!");
      },
      prefill: {
        name: formData.name,
        email: formData.email,
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Checkout</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Billing Details */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-4">Billing Details</h3>
            <form>
              {["name", "email", "address", "city", "state", "zip"].map((field) => (
                <div className="mb-4" key={field}>
                  <label className="block text-gray-700 mb-2" htmlFor={field}>
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    className="border border-gray-300 rounded px-4 py-2 w-full"
                    id={field}
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                  />
                </div>
              ))}
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="mb-4">
              {cartItems.map((item) => (
                <div className="flex justify-between mb-2" key={item._id}>
                  <span className="text-gray-700">{item.name} x {item.quantity}</span>
                  <span className="text-gray-700">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Subtotal</span>
                <span className="text-gray-700">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Tax</span>
                <span className="text-gray-700">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-700 font-bold">Total</span>
                <span className="text-gray-700 font-bold">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Payment Button */}
            <button
              onClick={handlePayment}
              className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
            >
              Pay with Razorpay
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
