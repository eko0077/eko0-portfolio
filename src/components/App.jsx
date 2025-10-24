import { motion } from "framer-motion";
import ThemeToggle from "./ui/items/ThemeToggle";
import { body } from "framer-motion/client";
import { useEffect } from "react";


export default function App() {
  useEffect(() => {
    const handleWheel = (event) => {
      console.log(event.deltaY);

      if (event.deltaY > 0) {
        window.location.href = "/home";
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => window.removeEventListener("wheel", handleWheel);
  }, []);
  return (
    <div className="page">
      <a className="first-page" href="/home">
        <img class="eko0" src="../src/assets/svg/eko0.svg" alt="" />
        <div className="accion">
          <p className="accion-text"> scroll or click </p>
          <img src="../src/assets/svg/arrow-bottom.svg" alt="" />
        </div>
      </a>
    </div>
  );
}
