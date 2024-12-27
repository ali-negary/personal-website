import { Link } from "react-scroll";
import { siteConfig } from "../../config/siteConfig";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, This is {siteConfig.name.split(" ")[0]}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            {siteConfig.title}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Get in Touch
            </Link>
            <a
              href="/resume.pdf"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <img
            src={siteConfig.heroImage}
            alt="Professional headshot"
            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
