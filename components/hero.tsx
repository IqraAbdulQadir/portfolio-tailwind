"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Hero: React.FC = () => {
  const router = useRouter();

  const goToProjects = () => {
    router.push("/Projects");
  };

  const goToContact = () => {
    router.push("/Contact");
  };

  return (
    <section className="hero min-h-screen bg-gradient-to-br from-[#531e3e] via-[#724956] to-[#31092f] text-white text-center flex flex-col md:flex-row justify-between items-center p-5 md:p-10 overflow-hidden">
      <div className="hero-content max-w-full md:max-w-4xl text-center mx-auto md:mx-0 p-5 font-serif">
        <h1 className="text-xl md:text-5xl font-bold md:font-normal mb-4 typing-animation">
          HI, I AM IQRA ABDUL QADIR
        </h1>
        <h2 className="text-lg md:text-3xl mb-5">
          Certified Robotic & Agentic AI Engineering Student
        </h2>
        <p className="text-base md:text-lg mb-8">
          Passionate about growth and innovation, I specialize in Agentic AI and
          robotics. Fluent in multiple languages and a professional content
          writer, I thrive on turning complex challenges into impactful
          solutions. Let&apos;s connect and create something extraordinary!
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          <button
            onClick={goToContact}
            className="cta-button relative bg-[#660e60] text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-[#893f71] transition duration-300"
          >
            Contact Me
          </button>
          <button
            onClick={goToProjects}
            className="cta-button relative bg-[#660e60] text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-[#893f71] transition duration-300"
          >
            View My Work
          </button>
        </div>
      </div>

      <div className="image flex justify-center md:justify-end items-center bg-black/80 border-4 border-[#460741] rounded-xl shadow-lg w-full md:w-auto max-w-sm md:max-w-none">
        <Image
          src="/pp.png"
          alt="robot"
          width={500}
          height={550}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Typing Animation Keyframes */}
      <style jsx>{`
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        @keyframes blink-caret {
          50% {
            border-color: transparent;
          }
        }
        .typing-animation {
          white-space: nowrap;
          overflow: hidden;
          border-right: 2px solid black;
          animation: typing 3s steps(30, end), blink-caret 0.5s step-end infinite;
        }
          
}
      `}</style>
    </section>
  );
};

export default Hero;
