import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content border-t dark:border-secondary border-primary mt-10">
      <div className="w-11/12 mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold not-dark:text-primary dark:text-secondary">
            VENTO
          </span>
        </div>

        <div className="flex items-center gap-6">
          <Link
            to="https://github.com/MRBRAFI/vento-ai-manager-client"
            target="_blank"
            className="flex items-center gap-2 dark:text-secondary not-dark:text-primary dark:hover:text-white hover:not-dark:text-black transition"
          >
            <FaGithub size={20} />
            <span className="text-sm">Client Repo</span>
          </Link>

          <Link
            to="https://github.com/MRBRAFI/vento-ai-manager-server"
            target="_blank"
            className="flex items-center gap-2 dark:text-secondary not-dark:text-primary dark:hover:text-white hover:not-dark:text-black transition"
          >
            <FaGithub size={20} />
            <span className="text-sm">Server Repo</span>
          </Link>
        </div>

        <p className="text-xs md:text-sm text-center md:text-right dark:text-secondary  not-dark:text-primary ">
          © {new Date().getFullYear()} VENTO — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
