import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-semibold text-center text-blue-600">Contact Us</h1>
      <form className="max-w-md mx-auto mt-6">
        <div className="mb-4">
          <label className="block text-lg font-medium" htmlFor="name">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium" htmlFor="email">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            className="w-full p-3 border border-gray-300 rounded-md"
            rows="4"
            placeholder="Your message"
          ></textarea>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md w-full">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
