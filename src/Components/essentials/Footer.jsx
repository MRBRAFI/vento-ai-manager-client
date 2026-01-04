import { Link } from "react-router";
import { FaGithub, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-20 py-12 px-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[150px] rounded-full -z-10 pointer-events-none"></div>

      <div className="mx-auto w-full glass-effect rounded-[3rem] p-12 md:p-16 border border-white/10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-4xl font-black gradient-text mb-4 inline-block">
              VENTO
            </span>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed max-w-xs">
              The ultimate platform for managing and exploring next-generation neural assets. Empowering the AI revolution.
            </p>
            <div className="flex gap-4">
              <Link
                to="https://github.com/MRBRAFI/vento-ai-manager-client"
                target="_blank"
                className="w-10 h-10 rounded-full glass-effect border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:-translate-y-1"
              >
                <FaGithub size={18} />
              </Link>
              <Link
                to="https://www.facebook.com/m.r.b.rafi.2025"
                target="_blank"
                className="w-10 h-10 rounded-full glass-effect border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:-translate-y-1"
              >
                <FaFacebookF size={18} />
              </Link>
              <Link
                to="https://www.linkedin.com/in/mrbrafi2005"
                target="_blank"
                className="w-10 h-10 rounded-full glass-effect border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:-translate-y-1"
              >
                <FaLinkedin size={18} />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 opacity-80 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/all_models" className="hover:text-primary transition-colors">Explore Models</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm opacity-80">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1 shrink-0" />
                <span>Panchagarh Sadar, Panchagarh</span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <FaEnvelope className="text-primary mt-1 shrink-0" />
                <span>devmrbrafi@gmail.com</span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <FaPhone className="text-primary mt-1 shrink-0" />
                <span>+8801971789176</span>
              </li>
            </ul>
          </div>

           {/* Column 4: Legal */}
           <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-6">Legal</h4>
            <ul className="space-y-3 opacity-80 text-sm">
              <li><Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-50 font-medium">
          <p>© {new Date().getFullYear()} VENTO AI. All rights reserved.</p>
          <p>Designed for the future.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
