"use client";

import React, { useState } from 'react';
import { FaDribbble, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Data Analytics');
  const [budget, setBudget] = useState('Under $100');
  const [projectDetails, setProjectDetails] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Collect form data
    const formData = {
      name,
      email,
      service,
      budget,
      projectDetails,
      additionalInfo,
    };

    // Handle the form submission logic here, such as sending an email or API call
    console.log('Form submitted:', formData);

    // Reset form fields after submission
    setName('');
    setEmail('');
    setService('Data Analytics');
    setBudget('Under $100');
    setProjectDetails('');
    setAdditionalInfo('');
  };

  return (
    <footer className="bg-[#F5F3EF] py-12 px-6 md:px-12 lg:px-24">
      <form onSubmit={handleSubmit} className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg shadow-lg shadow-black focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <input
              type="email"
              placeholder="itsramakrushna@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg shadow-lg shadow-black focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4">
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg shadow-lg shadow-black focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              <option>Data Analytics</option>
              <option>Data Science</option>
              <option>Python & SQL</option>
            </select>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg shadow-lg shadow-black focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              <option>Under $100</option>
              <option>$100 - $500</option>
              <option>$1000+</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Yes"
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg shadow-lg shadow-black mb-4 mt-4 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <textarea
            placeholder="Project details, context, how can I help..."
            value={projectDetails}
            onChange={(e) => setProjectDetails(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg shadow-lg shadow-black mb-4 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
            rows={3}
          />
          <button
            type="submit"
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition-all w-full md:w-auto"
          >
            Get in touch
          </button>
        </div>
      </form>
      <div className="mt-12 text-center">
        <p className="text-gray-700 mb-2">Follow</p>
        <div className="flex justify-center gap-4">
          <a href="https://instagram.com/techwith.ram" className="text-gray-700 hover:text-gray-900 text-2xl">
            <FaInstagram />
          </a>
          <a href="https://x.com/codewith_ram" className="text-gray-700 hover:text-gray-900 text-2xl">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com/in/ramakrushnamohapatra" className="text-gray-700 hover:text-gray-900 text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Ramakm" className="text-gray-700 hover:text-gray-900 text-2xl">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

