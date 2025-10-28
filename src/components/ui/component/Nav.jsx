import { motion } from "framer-motion";
import { body, path } from "framer-motion/client";
import { useEffect } from "react";
import React from "react";
import { LiquidGlass } from "@liquidglass/react";

export default function Nav() {
  return (
    <div className="page">

          <div className="nav">
            <div className="nav-icons">
              <a href="/home"><img src="../src/assets/svg/paperclip.svg" alt="" /></a>
              <div className="vertical-separation"></div>
              <div className="pages-nav">
                <a className="footer-icon" href="/about-me">
                  about me
                </a>
                <a className="footer-icon" href="/projects">
                  projects
                </a>
              </div>
            </div>
            <img className="menu" src="../src/assets/svg/menu.svg" alt="" />
          </div>

    </div>
  );
}
