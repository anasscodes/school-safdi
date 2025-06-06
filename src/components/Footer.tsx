import React from 'react';
import { Linkedin, Instagram, Facebook, Twitter, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription process
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Safdi Web</h3>
            <p className="text-gray-400 mb-6">
              Creating premium web experiences for businesses around the world.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
                { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
                { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
                { icon: <Twitter size={20} />, href: '#', label: 'Twitter' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              {['Terms of Service', 'Privacy Policy', 'Cookie Policy'].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            {subscribed ? (
              <div className="bg-green-800/30 text-green-300 p-3 rounded-md">
                Thanks for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 px-3 py-2 rounded-r-md hover:bg-blue-700 transition-colors"
                >
                  <Send size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Safdi Web. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Designed with ❤️ by Safdi Web
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;