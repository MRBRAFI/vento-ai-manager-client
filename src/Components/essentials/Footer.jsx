import { Link } from "react-router";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 py-12 px-4">
      <div className="mx-auto glass-effect rounded-[3rem] p-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <span className="text-4xl font-black gradient-text mb-4 inline-block">
              VENTO
            </span>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs mx-auto md:mx-0">
              The ultimate platform for managing and exploring next-generation
              AI assets.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <Link
              to="https://github.com/MRBRAFI/vento-ai-manager-client"
              target="_blank"
              className="w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:-translate-y-1"
            >
              <FaGithub size={20} />
            </Link>
            <Link
              to="#"
              className="w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:-translate-y-1"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              to="#"
              className="w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:-translate-y-1"
            >
              <FaLinkedin size={20} />
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm font-bold mb-2">
              © {new Date().getFullYear()} VENTO
            </p>
            <p className="text-xs text-gray-500">
              Built for the future of AI management.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
