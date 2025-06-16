import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#505052] text-gray-300 py-8 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo & Copyright */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-[#C37D35]">
            Invoice Generator
          </h2>
          <p className="text-sm mt-1">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C37D35] transition"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/chhavipaliwal/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C37D35] transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/chhavipaliwal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C37D35] transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
