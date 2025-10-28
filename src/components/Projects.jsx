import { motion } from "framer-motion";
import ThemeToggle from "./ui/items/ThemeToggle";
import Footer from "./ui/component/Footer";
import Nav from "./ui/component/Nav";
import { body, path } from "framer-motion/client";
import { useEffect } from "react";
import React from "react";

export default function Home() {
  return (
    <div className="page">
      <Nav />
      {/* add nav later */}
      <div className="first-section">
        <img
          className="page-title"
          src="../src/assets/svg/projects.svg"
          alt=""
        />
      </div>
      <div className="separation"> </div>
      <div className="list-type-projects">
          <a  className="type-projects" href="">
          <img src="../src/assets/svg/folder.svg" alt="" /> <p>all projects</p>
        </a>
       <a  className="type-projects" href="">
          <img src="../src/assets/svg/folder.svg" alt="" /> <p>ui/ux</p>
        </a>
        <a  className="type-projects" href="">
          <img src="../src/assets/svg/folder.svg" alt="" /> <p>graphic design</p>
        </a>
       <a  className="type-projects" href="">
          <img src="../src/assets/svg/folder.svg" alt="" /> <p>all projects</p>
        </a>
      </div>
      <Footer />
    </div>
  );
}
