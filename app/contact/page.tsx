"use client";
import React from 'react';


const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-grow flex flex-col items-center bg-gradient-to-br from-[#531e3e] via-[#724956] to-[#31092f] text-white text-center p-12">
        <section className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto bg-transparent">
          <div className="flex flex-col justify-center items-center bg-black/80 rounded-l-lg shadow-lg p-8 space-y-4 w-full lg:w-1/2">
            <h2 className="text-2xl font-bold">Get In Touch!</h2>
            <p className="border-2 border-purple-700 rounded-lg p-4">
              Email: <a href="mailto:iqraabdulqadir05@gmail.com" className="text-purple-300 hover:text-purple-500">Iqraabdulqadir05@gmail.com</a>
            </p>
            <p className="border-2 border-purple-700 rounded-lg p-4">
              Phone: <a href="tel:+923212825290" className="text-purple-300 hover:text-purple-500">+923212825290</a>
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="https://github.com/IqraAbdulQadir" target="_blank" rel="noopener noreferrer">
                <img src="/Github.svg" alt="Github" className="w-8 h-8 bg-purple-700 rounded-full" />
              </a>
              <a href="https://discord.com/channels/@bookiecookie0455_66894" target="_blank" rel="noopener noreferrer">
                <img src="/Discord.svg" alt="Discord" className="w-8 h-8 border-2 border-purple-700 rounded-full" />
              </a>
              <a href="https://www.linkedin.com/in/iqra-abdul-qadir-735583301/" target="_blank" rel="noopener noreferrer">
                <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8 border-2 border-purple-700 rounded-full" />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-[#893f71] rounded-r-lg shadow-lg w-full lg:w-1/2 p-8">
            <div className="w-full max-w-md">
              <h2 className="text-2xl font-bold mb-6">Drop A Message</h2>
              <form className="bg-[#996182dc] p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <label htmlFor="name" className="block font-bold mb-2">Name</label>
                  <input type="text" id="name" name="name" required className="w-full p-3 border-2 border-purple-700 rounded-lg" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block font-bold mb-2">Email</label>
                  <input type="email" id="email" name="email" required className="w-full p-3 border-2 border-purple-700 rounded-lg" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block font-bold mb-2">Message</label>
                  <textarea id="message" name="message" rows={5} required className="w-full p-3 border-2 border-purple-700 rounded-lg"></textarea>
                </div>
                <button type="submit" className="relative bg-[#660e60] text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-[#893f71] transition duration-300 drop-shadow-lg">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
};

export default ContactPage;
