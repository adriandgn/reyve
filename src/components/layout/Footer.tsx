import React from "react";
import { Mail, MapPin, Phone, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navigation = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Mission', href: '#mission' },
      { name: 'Team', href: '#team' },
      { name: 'Careers', href: '#careers' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
    contact: [
      { icon: <Mail className="h-5 w-5" />, text: 'info@re-yve.com', href: 'mailto:info@re-yve.com' },
      { icon: <Phone className="h-5 w-5" />, text: '+34 123 456 789', href: 'tel:+34123456789' },
      { icon: <MapPin className="h-5 w-5" />, text: 'Berlin, Germany', href: '#' },
    ],
    social: [
      { icon: <Instagram className="h-5 w-5" />, name: 'Instagram', href: '#' },
      { icon: <Twitter className="h-5 w-5" />, name: 'Twitter', href: '#' },
      { icon: <Linkedin className="h-5 w-5" />, name: 'LinkedIn', href: '#' },
      { icon: <Facebook className="h-5 w-5" />, name: 'Facebook', href: '#' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src="/logo-white.svg" alt="Re:YVE Logo" className="h-8 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Driving regenerative fashion where every piece tells a story and every purchase makes a difference.
            </p>
            <div className="flex space-x-4 pt-2">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={item.name}
                >
                  {React.cloneElement(item.icon, { className: 'h-5 w-5' })}
                </a>
              ))}
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-2">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-3">
              {navigation.contact.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-0.5">
                    {React.cloneElement(item.icon, { className: 'h-5 w-5' })}
                  </span>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Re:YVE. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                <span className="sr-only">Terms and Conditions</span>
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                <span className="sr-only">Privacy Policy</span>
                Privacy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
