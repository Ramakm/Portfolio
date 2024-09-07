import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div id="header" className="bg-[#F5F3EF] py-12 px-6 md:px-12 lg:px-24 min-h-screen flex flex-col md:flex-row justify-center items-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-2xl mb-2">Hi, my name is Ramakrushna.</h1>
        <h2 className="text-5xl font-bold mb-4">I MOSTLY ANALYSE & PREDICT GROWTH.</h2>
        <p className="text-lg text-gray-600 mb-6">
          I'm a Senior Data Analyst & NLP Engineer with a 7+yrs of experience in same background,
          AI Mentor/Founder at Growtechie and Career Coach. Taught more than 2k+ students & professionals both offline & online.
        </p>
        <a href="https://calendly.com/ramakrushna" className="bg-yellow-400 text-black font-bold py-2 px-4 rounded shadow-md hover:shadow-lg">
          Book for a demo
        </a>
      </div>

      <div className="md:w-1/2 relative flex items-center justify-center">
        <div className="bg-pink-300 rounded-3xl p-4 relative flex flex-col items-center">
          <div className="image-container">
            <Image
              src="/Ram.png"
              alt="Ramakrushna"
              width={400}
              height={400}
              className="rounded-2xl mb-4"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="absolute top-0 right-0 bg-blue-300 text-white px-3 py-1 rounded-full -mt-2 -mr-2">
            Ramakrushna
          </div>
          <div className="absolute bottom-0 left-0 bg-green-500 text-white px-3 py-1 rounded-full -mb-2 -ml-2">
            Available for Freelance
          </div>
          <div className="absolute top-4 -left-4 bg-teal-500 p-3 rounded-full">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div className="absolute bottom-4 -right-4 bg-yellow-400 p-3 rounded-full">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
