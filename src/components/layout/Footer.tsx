import React from 'react';
import { siteConfig } from '../../config/siteConfig';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="mb-4">
            Built with React & Tailwind CSS by {siteConfig.name}
          </p>
          <p className="text-sm">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}