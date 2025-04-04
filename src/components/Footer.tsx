
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-softBlack text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          <div>
            <Link to="/" className="inline-block mb-4">
              <h3 className="font-serif text-2xl font-bold">Adejola & Sons</h3>
            </Link>
            <p className="text-white/70 mb-6 max-w-xs">
            Are you looking for a reliable way to get Fanice products? We've got you covered! We deliver a wide variety of Fanice products throughout Nigeria.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/70 hover:text-white transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white/70">
                  plot 5, block 3, ivory garden estate, makogi, ogun state, Nigeria.
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <a href="tel:08051531723" className="text-white/70 hover:text-white transition-colors duration-200">
                  +234 8051531723
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                <a href="mailto:adejolaomowunmi@gmail.com" className="text-white/70 hover:text-white transition-colors duration-200">
                  adejolaomowunmi@gmail.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-white/70">Weekdays</span>
                <span>09:00 AM - 09:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/70">Weekends</span>
                <span>10:00 AM - 10:00 PM</span>
              </li>
            </ul>
            <div className="mt-5 pt-5 border-t border-white/10">
              <h5 className="font-medium mb-2">Subscribe to our newsletter</h5>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white/10 text-white rounded-l-md px-4 py-2 w-full focus:outline-none focus:bg-white/20 transition-colors"
                />
                <button 
                  type="submit" 
                  className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary/80 transition-colors"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="pt-8 text-center text-white/60 text-sm">
          <p>© {currentYear} Adejola & Sons, All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
