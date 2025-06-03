import React from "react";

const projects = [
  {
    title: "Mahin’s Personal Website",
    description: "A portfolio site showcasing my work, resume, and contact info.",
    image: "https://via.placeholder.com/400x250",
    link: "https://yourpersonalwebsite.com"
  },
  {
    title: "Local Restaurant Site",
    description: "A clean, mobile-responsive website for a local restaurant with menu and booking info.",
    image: "https://via.placeholder.com/400x250",
    link: "#"
  },
  {
    title: "Clothing Shop Website",
    description: "Modern layout with an integrated product gallery for a small clothing brand.",
    image: "https://via.placeholder.com/400x250",
    link: "#"
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
              className="w-full h-56 object-cover border-b border-blue-500"
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
