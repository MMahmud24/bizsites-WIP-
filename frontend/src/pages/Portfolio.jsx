import React from "react";

const projects = [
  {
    title: "Personal Website",
    description: "A portfolio site showcasing my work, resume, and contact info.",
    image: "/images/personalweb.png",
    link: "https://mmahmud24.github.io/Personal_Website/"
  },
  {
    title: "Notes University",
    description: "A clean, responsive website for note sharing designed for college students across the United States",
    image: "/images/notesUniv.png",
    link: "https://notes-university-frontend.onrender.com/"
  },
  {
    title: "Affordable Restaurants Website",
    description: "Modern layout with an integrated gallery with affordable restaurants around New York City",
    image: "/images/foodinnyc.png",
    link: "https://mmahmud24.github.io/Affordable-Food-Blog/"
  }
];

export default function Portfolio() {
  return (
    <div className="p-6 max-w-6xl mx-auto text-white bg-gradient-to-b from-black via-gray-900 to-black min-h-screen animate-fade-in-up">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-blue-400 drop-shadow-[0_0_0.3rem_#38bdf8]">
        Portfolio
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a
            href={project.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-blue-500 rounded-lg shadow-xl hover:shadow-blue-500/40 transition-transform transform hover:scale-105 bg-black overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-h-64 object-contain border-b border-blue-500"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-blue-300 mb-2">{project.title}</h2>
              <p className="text-gray-300">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
