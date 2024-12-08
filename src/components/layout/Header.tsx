import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';
import { siteConfig } from '../../config/siteConfig';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-2xl font-bold text-gray-800 cursor-pointer"
          >
            {siteConfig.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <div className="flex items-center space-x-4">
              <a
                href="/blog"
                className="text-gray-600 hover:text-gray-900"
              >
                Blog
              </a>
              <a
                href="/login"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Login
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-6">
            <div className="flex flex-col space-y-4">
              <NavLinks />
              <div className="flex flex-col space-y-2">
                <a
                  href="/blog"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Blog
                </a>
                <a
                  href="/login"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function NavLinks() {
  return (
    <>
      <Link
        to="about"
        smooth={true}
        duration={500}
        className="text-gray-600 hover:text-gray-900 cursor-pointer"
      >
        About
      </Link>
      <Link
        to="experience"
        smooth={true}
        duration={500}
        className="text-gray-600 hover:text-gray-900 cursor-pointer"
      >
        Experience
      </Link>
      <Link
        to="projects"
        smooth={true}
        duration={500}
        className="text-gray-600 hover:text-gray-900 cursor-pointer"
      >
        Projects
      </Link>
      <Link
        to="contact"
        smooth={true}
        duration={500}
        className="text-gray-600 hover:text-gray-900 cursor-pointer"
      >
        Contact
      </Link>
    </>
  );
}