"use client";

import React from 'react';


const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One.',
    image: '/ai.jpg',
    technologies: ['React', 'Node.js', 'CSS'],
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/username/project1',
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    image: '/ai.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveLink: 'https://example.com/project2',
    sourceLink: 'https://github.com/username/project2',
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    image: '/ai.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveLink: 'https://example.com/project2',
    sourceLink: 'https://github.com/username/project2',
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    image: '/ai.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveLink: 'https://example.com/project2',
    sourceLink: 'https://github.com/username/project2',
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    image: '/ai.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveLink: 'https://example.com/project2',
    sourceLink: 'https://github.com/username/project2',
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    image: '/ai.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveLink: 'https://example.com/project2',
    sourceLink: 'https://github.com/username/project2',
  },
  // Add more projects as needed
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#531e3e] via-[#724956] to-[#31092f] text-white font-serif">

      <main className="py-10 px-4 md:px-10">
        <section className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-lg md:text-xl mb-8">
            Here are some of the projects I&apos;ve worked on. Click on the links to view them live or check out the source code.
          </p>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-black/80 p-5 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-sm md:text-base mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-[#dbb5f1] text-[#660e60] px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#dbb5f1] text-[#660e60] px-4 py-2 rounded-lg font-bold transition hover:bg-[#f3d0a4]"
                  >
                    View Live
                  </a>
                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#dbb5f1] text-[#660e60] px-4 py-2 rounded-lg font-bold transition hover:bg-[#f3d0a4]"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

    </div>
  );
};

export default ProjectsPage;
