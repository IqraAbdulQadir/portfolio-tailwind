'use client';

import React from 'react';

const skills = [
  { name: 'HTML', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg', proficiency: 90 },
  { name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg', proficiency: 85 },
  { name: 'Tailwind CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', proficiency: 80 },
  { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', proficiency: 75 },
  { name: 'TypeScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg', proficiency: 80 },
  { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', proficiency: 75 },
  { name: 'Next.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg', proficiency: 85 },
  { name: 'AI & Robotics', logo: '/ai logo.png', proficiency: 65 },
];

const About: React.FC = () => {
  return (
    
      
      <main className="bg-gradient-to-br from-[#531e3e] via-[#724956] to-[#31092f] text-white">
        <section className="py-12 px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Get To Know Me</h1>
          <div className="bg-black bg-opacity-80 rounded-lg p-6 mx-auto max-w-4xl">
          <p className="text-lg leading-relaxed">
              Hello! I&apos;m Iqra Abdul Qadir, a dedicated student specializing in Agentic AI and Robotics. My passion lies in exploring the realms of artificial intelligence and cutting-edge technology. With a strong foundation in these fields, I am committed to pushing the boundaries of innovation and contributing to the future of AI and robotics.
            </p>
            <p className="mt-4">
              I am fluent in Urdu, Arabic, and English, which allows me to communicate effectively in diverse environments. I possess excellent leadership and teamwork skills, honed through various collaborative projects and initiatives. I hold a degree in Islamic Sciences and am currently studying at GIAIC. Additionally, I am a professional writer with a knack for crafting engaging and informative content.
            </p>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-semibold text-center mb-8">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center bg- border-4 border-black rounded-lg p-6">
                <img src={skill.logo} alt={`${skill.name} logo`} className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-medium mb-4">{skill.name}</h3>
                <div className="relative w-24 h-24">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      className="text-gray-700"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.8"
                    />
                    <path
                      className="text-purple-500"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.8"
                      strokeDasharray={`${(skill.proficiency / 100) * 100}, 100`}
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold">
                    {skill.proficiency}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    
    
  );
};

export default About;
