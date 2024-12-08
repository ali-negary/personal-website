import React from 'react';
import { siteConfig } from '../../config/siteConfig';

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-3xl mx-auto">
          {siteConfig.experience.map((exp, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      <a href={exp.website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                        {exp.company}
                      </a>
                    </h3>
                    <p className="text-gray-600">{exp.title}</p>
                    <p className="text-gray-500 text-sm">{exp.location}</p>
                  </div>
                  <span className="text-sm text-gray-500">{exp.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}