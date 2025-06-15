import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, HeartHandshake, ArrowRight } from "lucide-react";

export default function Homepage() {
  return (
    <div className="p-6 max-w-7xl mx-auto text-white bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-24 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-pulse text-blue-400 drop-shadow-[0_0_0.5rem_#38bdf8]">
          Welcome to BizSites
        </h1>
        <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto text-gray-300 animate-fade-in-up">
          Creating futuristic, user-friendly websites for small businesses—for free. 100% of donations go to charity.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
          <Link to="/request">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-medium px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105">
              Request a Website
            </button>
          </Link>
          <Link to="/donate">
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-800 text-lg font-medium px-6 py-3 rounded-full transition-transform transform hover:scale-105">
              Make A Donation
            </button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid md:grid-cols-4 gap-6 py-16 animate-fade-in-up">
        {[
          { value: "2.8×", text: "Revenue growth from optimized websites" },
          { value: "25%+", text: "Sales increase with good design" },
          { value: "5%+", text: "Conversion rate from mobile-friendly sites" },
          { value: "97%", text: "of customers influenced by websites" },
        ].map((item, index) => (
          <div
            key={index}
            className="border border-blue-500 rounded-lg shadow-lg p-6 text-center bg-black"
          >
            <p className="text-4xl font-bold text-blue-400">{item.value}</p>
            <p className="mt-2 text-gray-300">{item.text}</p>
          </div>
        ))}
      </section>

      {/* Why BizSites Section */}
      <section className="py-20 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-300 drop-shadow-[0_0_0.3rem_#38bdf8]">
          Why Choose BizSites?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-green-400 rounded-lg shadow-xl p-6 bg-black">
            <CheckCircle className="text-green-400 mb-4 w-10 h-10 mx-auto" />
            <h3 className="text-xl font-semibold text-green-300 text-center">100% Free</h3>
            <p className="mt-2 text-gray-300 text-center">No fees, no contracts, no strings attached. Ever.</p>
          </div>
          <div className="border border-pink-400 rounded-lg shadow-xl p-6 bg-black">
            <HeartHandshake className="text-pink-400 mb-4 w-10 h-10 mx-auto" />
            <h3 className="text-xl font-semibold text-pink-300 text-center">Give Back</h3>
            <p className="mt-2 text-gray-300 text-center">Optional donations go entirely to impactful charities like St. Jude.</p>
          </div>
          <div className="border border-blue-400 rounded-lg shadow-xl p-6 bg-black">
            <ArrowRight className="text-blue-400 mb-4 w-10 h-10 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-300 text-center">Real Results</h3>
            <p className="mt-2 text-gray-300 text-center">Help your business grow and connect with customers online.</p>
          </div>
        </div>
      </section>
    </div>
  );
}