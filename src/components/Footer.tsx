import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t z-10 from-slate-900 to-slate-500  text-white p-1 text-center fixed bottom-0 flex flex-col md:flex-row-reverse  justify-around right-[50%] translate-x-[50%] w-full mx-auto">
        <p className="mb-2">© 2023 Mohamed Zouig  All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <Link to="/" className="hover:text-gray-500">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-500">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-gray-500">
            Contact
          </Link>
          <Link to="/policy" className="hover:text-gray-500">
            Privacy Policy & Terms of Use
          </Link>
        </div>
    </footer>
  );
};

export default Footer;
