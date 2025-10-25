import { motion } from "framer-motion";
import { body, path } from "framer-motion/client";
import { useEffect } from "react";
import React from "react";
import { LiquidGlass } from '@liquidglass/react';

export default function Nav() {
  return (
    <div className="page">
      <div className="nav">
            <LiquidGlass
        borderRadius={20}
        blur={0.5}
        contrast={1.2}
        brightness={1.1}
        saturation={1.2}
      >
        <div className="nav-icons">
          <img src="../src/assets/svg/paperclip.svg" alt="" />
          <div className="vertical-separation"></div>
          <div className="pages-nav">
            <a className="footer-icon" href="">
              about me
            </a>
            <a className="footer-icon" href="">
              projects
            </a>
          </div>
        </div>
        <img className="menu" src="../src/assets/svg/menu.svg" alt="" />
        </LiquidGlass>
      </div>
    </div>
  );
}
