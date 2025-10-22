import { motion } from "framer-motion";
import ThemeToggle from "./ui/ThemeToggle";
import { body } from "framer-motion/client";
import { useEffect } from "react";

export default function Home() {
  return (
    <body>
      <div className="page">
        {/* add nav later */}
        <div className="first-section">
          <img
            className="portfolio"
            src="../src/assets/svg/portfolio.svg"
            alt=""
          />
        </div>
        <div className="separation"> </div>
      </div>
    </body>
  );
}
