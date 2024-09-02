// components/Footer.tsx

import React from 'react';
import { FaDribbble, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#F5F3EF] py-12 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">Tell me about your project</h2>
          <p className="text-gray-700 mb-6">
            Any project starts with goal setting. If you have a vision, I can design it.
            After the inquiry, I will reply within 2-3 working days, with an approximate quote
            for the project or with questions for more details. After that, we can have an intro call
            to discuss your project and see if it's a match.
          </p>
          <p className="text-gray-700 mb-2">Email me at</p>
          <a href="mailto:hi@kristi.digital" className="text-lg text-black font-semibold hover:underline">
            itsramakrushna@gmail.com
          </a>
        </div>
        <div className="flex flex-col items-start md:items-end">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <input
              type="text"
              placeholder="Ram"
              className="p-3 border border-gray-300 rounded-lg shadow-lg shadow-black focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <input
              type="email"
              placeholder="itsramakrushna@gmail.com"
              className="p-3 border border-gray-300 rounded-lg shadow-lg shadow-black focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4">
            <select className="p-3 border border-gray-300 rounded-lg shadow-lg shadow-black focus:outline-none focus:ring-2 focus:ring-gray-400">
              <option>Data Analytics</option>
              <option>Data Science</option>
              <option>Python & SQL</option>
            </select>
            <select className="p-3 border border-gray-300 rounded-lg shadow-lg shadow-black focus:outline-none focus:ring-2 focus:ring-gray-400">
              <option>Under $100</option>
              <option>$100 - $500</option>
              <option>$1000+</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Yes"
            className="p-3 border border-gray-300 rounded-lg shadow-lg shadow-black mb-4 mt-4 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <textarea
            placeholder="Project details, context, how can I help..."
            className="p-3 border border-gray-300 rounded-lg shadow-lg shadow-black mb-4 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
            rows={3}
          />
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition-all w-full md:w-auto">
            Get in touch
          </button>
        </div>
      </div>
      <div className="mt-12 text-center">
        <p className="text-gray-700 mb-2">Follow</p>
        <div className="flex justify-center gap-4">
          <a href="#" className="text-gray-700 hover:text-gray-900 text-2xl"><FaDribbble /></a>
          <a href="https://instagram.com/techwith.ram" className="text-gray-700 hover:text-gray-900 text-2xl"><FaInstagram /></a>
          <a href="https://x.com/codewith_ram" className="text-gray-700 hover:text-gray-900 text-2xl"><FaTwitter /></a>
          <a href="https://linkedin.com/in/ramakrushnamohapatra" className="text-gray-700 hover:text-gray-900 text-2xl"><FaLinkedin /></a>
          <a href="https://github.com/Ramakm" className="text-gray-700 hover:text-gray-900 text-2xl"><FaGithub /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
