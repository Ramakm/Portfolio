// components/Services.tsx

import React from 'react';

const services = [
  {
    title: 'Data Analysis',
    description: `As a Data Analysis Freelancer, I offer expert insights and actionable strategies to help businesses make data-driven decisions.
                With 7+ years of experience in data analysis and NLP, I specialize in uncovering patterns, predicting trends, and optimizing performance.
                Whether you need data visualization, predictive modeling, or detailed reports, I deliver tailored solutions to drive your growth and success.`,
    action: 'Let\'s chat',
    icon: '📊', // Replace with actual icons or images as needed
  },
  {
    title: 'AI/ML Projects',
    description: `As an AI/ML Freelancer, I provide cutting-edge solutions that leverage artificial intelligence and machine learning to solve complex problems and enhance business processes. 
                With expertise in building predictive models, natural language processing, and data-driven algorithms, I help clients unlock the full potential of their data, optimize operations, and drive innovation with customized AI/ML strategies tailored to their unique needs.`,
    action: 'Let\'s chat',
    icon: '🧠',
  },
  {
    title: 'Python, SQL & PowerBI Mentorship',
    description: `As a Python, SQL, and PowerBI Mentor, I guide aspiring data professionals in mastering these essential tools for data analysis and visualization. 
                With personalized mentorship, I help you build strong foundations, develop practical skills, and tackle real-world projects. 
                Whether you're a beginner or looking to refine your expertise, my mentorship provides the support and knowledge you need to excel in data-driven roles.`,
    action: 'Let\'s chat',
    icon: '👨‍💻',
  },
];

const Services: React.FC = () => {
  return (
    <section className="services-section py-12 bg-[#F5F3EF]">
      <h2 className="text-3xl font-bold text-center mb-8">What I Can Do For You</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card p-6 border rounded-lg bg-white shadow-sm transition-shadow duration-300 hover:shadow-md hover:shadow-black"
          >
            <div className="service-icon text-4xl mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700 mb-4">{service.description}</p>
            <a href="https://calendly.com/ramakrushna" className="text-blue-500 hover:underline">{service.action} →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
