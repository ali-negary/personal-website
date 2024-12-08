import React from 'react';
import { siteConfig } from '../../config/siteConfig';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            {siteConfig.about}
          </p>
          
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {siteConfig.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center space-x-2">
                    <span className="text-blue-600">•</span>
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-500 text-sm">({skill.years}y)</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}