import React from "react";

export default function About() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-white bg-gradient-to-b from-black via-gray-900 to-black min-h-screen animate-fade-in-up">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-blue-400 drop-shadow-[0_0_0.3rem_#38bdf8]">
        About BizSites
      </h1>

      <p className="text-lg mb-6 text-gray-300">
        <strong className="text-blue-300">BizSites</strong> is a nonprofit initiative dedicated to helping small businesses thrive by providing them with professional, user-friendly websites—completely free of charge. We believe that every local business deserves a strong digital presence, regardless of their budget.
      </p>

      <p className="text-lg mb-6 text-gray-300">
        Our mission is simple: create beautiful, effective websites for small businesses to boost their visibility, connect with customers, and grow their revenue. Research shows that small businesses with optimized websites grow revenue up to <span className="text-blue-300 font-semibold">2.8×</span> faster.
      </p>

      <p className="text-lg mb-6 text-gray-300">
        We ask for nothing in return. There are no contracts, hidden fees, or expectations. If someone chooses to donate, <span className="text-green-400 font-semibold">100%</span> of those donations go to impactful charities—such as <strong className="text-pink-400">St. Jude Children’s Research Hospital</strong>—supporting causes we care deeply about.
      </p>

      <p className="text-lg text-gray-300">
        Whether you're a mom-and-pop shop, a new food truck, or a community service, BizSites is here to help you get online, stay competitive, and make a lasting impact. <span className="text-purple-400">Together, we can build something meaningful</span>—for your business and the world.
      </p>
    </div>
  );
}