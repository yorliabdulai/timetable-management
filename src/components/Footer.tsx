import React from 'react';

type FooterLink = {
  label: string;
  href: string;
};

type FooterProps = {
  links?: FooterLink[];
  companyName?: string;
};

const defaultLinks: FooterLink[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' }
];

const Footer: React.FC<FooterProps> = ({
  links = defaultLinks,
  companyName = 'UniTime'
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Container for vertical spacing on mobile */}
        <div className="flex flex-col items-center space-y-6">
          {/* Links - horizontal on desktop, vertical on mobile */}
          <nav className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8" 
               aria-label="Footer navigation">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 
                         transition-colors duration-200 text-sm font-medium
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                         dark:focus:ring-offset-gray-800 rounded-md px-2 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright notice */}
          <div className="text-gray-500 dark:text-gray-400 text-sm text-center">
            © {currentYear} {companyName}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;