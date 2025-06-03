import React, { useState } from "react";

export default function RequestWebsite() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto text-white bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-blue-400 drop-shadow-[0_0_0.3rem_#38bdf8] animate-fade-in-up">
        Request a Free Website
      </h1>

      {submitted ? (
        <div className="bg-green-900 border border-green-500 text-green-300 px-6 py-6 rounded-lg text-center shadow-lg animate-fade-in">
          <p className="text-lg font-medium">Thank you! Your request has been received.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
          <div>
            <label className="block mb-2 font-semibold text-blue-300">Business Name</label>
            <input
              type="text"
              required
              className="w-full bg-black border border-blue-500 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-blue-300">Contact Email</label>
            <input
              type="email"
              required
              className="w-full bg-black border border-blue-500 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-blue-300">Phone Number (optional)</label>
            <input
              type="tel"
              className="w-full bg-black border border-blue-500 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-blue-300">Tell us about your business</label>
            <textarea
              rows="5"
              required
              className="w-full bg-black border border-blue-500 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
          </div>

          <div>
            <label className="block mb-2 font-semibold text-blue-300">Upload logo or images (optional)</label>
            <input
              type="file"
              className="w-full text-white"
              multiple
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Submit Request
          </button>
        </form>
      )}
    </div>
  );
}
