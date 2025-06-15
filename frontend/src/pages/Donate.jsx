import React from "react";

const donationOptions = [
  {
    name: "PayPal",
    handle: "https://paypal.me/yourusername",
    display: "paypal.me/yourusername",
    icon: "/donate/paypal.png"
  },
  {
    name: "CashApp",
    handle: "$YourCashTag",
    icon: "/donate/cashapp.png"
  },
  {
    name: "Venmo",
    handle: "@YourVenmo",
    icon: "/donate/venmo.png"
  },
  {
    name: "Zelle",
    handle: "your.email@example.com",
    icon: "/donate/zelle.png"
  }
];

export default function Donate() {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied: " + text);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto text-white bg-gradient-to-b from-black via-gray-900 to-black min-h-screen animate-fade-in-up">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-blue-400 drop-shadow-[0_0_0.3rem_#38bdf8]">
        Support BizSites with a Donation
      </h1>
      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
        100% of donations go to charity. Choose your preferred method below:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {donationOptions.map((option, index) => (
          <div
            key={index}
            className="border border-blue-500 rounded-lg bg-black shadow-xl p-6 text-center hover:bg-blue-950 transition-transform transform hover:scale-105"
          >
            <img
              src={option.icon}
              alt={option.name}
              className="mx-auto w-16 h-16 mb-4"
            />
            <h2 className="text-xl font-semibold text-blue-300 mb-2">
              {option.name}
            </h2>
            <p className="text-gray-300 break-words mb-4">
              {option.display || option.handle}
            </p>
            <button
              onClick={() => handleCopy(option.handle)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-full text-sm shadow-lg"
            >
              Copy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
