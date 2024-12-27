import { Mail, Linkedin, Github } from "lucide-react";
import { siteConfig } from "../../config/siteConfig";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600">
              I'm always interested in hearing about new projects and
              opportunities. Feel free to reach out through any of the following
              channels:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Mail size={32} className="text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600 text-center">{siteConfig.email}</p>
            </a>

            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Linkedin size={32} className="text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-600 text-center">Connect with me</p>
            </a>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Github size={32} className="text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="text-gray-600 text-center">Check out my code</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
