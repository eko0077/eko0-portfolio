import { motion } from "framer-motion";
import { body, path } from "framer-motion/client";
import { useEffect } from "react";
import React from "react";

export default function Footer() {
  return (
       <div className="page">
        <div className="footer">
         <div className="separation"></div>
           <img class="eko0-footer" src="../src/assets/svg/eko0.svg" alt="" />
           <div className="nav-footer">
            <div className="icon-footer">
                <img className="footer-icon" src="../src/assets/svg/paperclip.svg" alt="" />
                <div className="vertical-separation"></div>
                <div className="contact-footer">
                    <a href="mailto:eko00.5177@gmail.com"><img className="footer-icon" src="../src/assets/svg/mail-dark.svg" alt="" /></a>
            <a href="https://linktr.ee/eko0_zero"><img className="footer-icon" src="../src/assets/svg/linktree-dark.svg" alt="" /></a>
                </div>
            </div>
            <div className="page-footer">
                <a href="">about me</a>
                <a href="">projects</a>
            </div>
            <p className="copirite">©eko0 zero</p>
           </div>
           </div>
           </div>
  );
}
