// src/components/Home.jsx
import profile from '../img/profile.png'
import React from "react";

export default function Home() {
  return (
    <section
      className="min-h-screen py-20 md:py-0 flex items-center px-4 md:px-20 bg-gradient-to-b from-gray-900 to-black text-white"
      id="home"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:ml-20 animate-fade-in-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6">
            Hi, I'm <span className="text-red-500">Vivekanand </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto md:mx-0 mb-6 md:mb-8">
            Creative Video Editor | Storyteller | Visual Artist
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-2xl bg-gray-700 hover:bg-gray-600 transition shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-center md:-ml-60 animate-fade-in-right">
          <img 
            src={profile} 
            alt="Vivekanand Profile" 
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-[500px] md:h-[500px] rounded-full border-4 border-red-500 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
