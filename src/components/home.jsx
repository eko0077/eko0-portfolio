import { motion } from "framer-motion";
import ThemeToggle from "./ui/items/ThemeToggle";
import Footer from "./ui/component/Footer";
import { body, path } from "framer-motion/client";
import { useEffect } from "react";
import React from "react";


export default function Home() {
  return (
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
      <h3 className="title-about"> About me</h3>
      <div className="about-me">
        <p className="description-about">
Hi ! I’m Clara, but you can call me eko0 ! <br/> I was born in March 2008 and I'm passionate about UI/UX and graphic design. I like turning ideas into visual experiences. I'm currently learning 3D design with Blender to expand my creative skills and bring more depth and emotion to my work. My goal is to blend design, storytelling, and technology to create experiences that are both intuitive and inspiring. </p>
        <div className="logs">
          <h4 className="logiciel">software</h4>
          <div className="icons">
           <a href="https://www.figma.com/"> <img className="icon" src="../src/assets/svg/Ffigma.svg" alt="" /></a>
            <a href="https://code.visualstudio.com"><img className="icon" src="../src/assets/svg/vscode.svg" alt="" /></a>
           <a href="https://www.blender.org/"> <img className="icon" src="../src/assets/svg/blender.svg" alt="" /></a>
           <a href="http://adobe.com/ch_fr/products/illustrator.html"><img className="icon" src="../src/assets/svg/Ai.svg" alt="" /></a>
            <a href="https://www.adobe.com/products/aftereffects.html"><img className="icon" src="../src/assets/svg/Ae.svg" alt="" /></a>
            <a href="https://www.adobe.com/ch_fr/products/photoshop.html"><img className="icon" src="../src/assets/svg/Ps.svg" alt="" /></a>
          </div>
        </div>
        <div className="contact">
          <h4 className="contact-me">contact me</h4>
          <div className="icons">
            <a href="https://discord.com/users/1066304810921513000"><img className="icon" src="../src/assets/svg/discord.svg" alt="" /></a>
            <a href="https://www.instagram.com/eko0_zero"><img className="icon" src="../src/assets/svg/insta.svg" alt="" /></a>
            <a href="mailto:eko00.5177@gmail.com"><img className="icon" src="../src/assets/svg/mail.svg" alt="" /></a>
            <a href="https://linktr.ee/eko0_zero"><img className="icon" src="../src/assets/svg/linktree.svg" alt="" /></a>
          </div>
        </div>
        <div className="cv">
          <img
            className="arrow-cv"
            src="../src/assets/svg/arrow-right.svg"
            alt=""
          />
          <h4 className="see-cv">see my cv</h4>
        </div>
          <img className="eko" src="../src/assets/img/eko0-about.png" alt="" />
      </div> 
    
   
      <Footer/>
    </div>
  );
}
