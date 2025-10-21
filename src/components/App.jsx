import { motion } from "framer-motion";
import ThemeToggle from "./ui/ThemeToggle";
import { body } from "framer-motion/client";

export default function App() {
  return (
    <body>
      <div class="first-page">
        <img class="eko0" src="../src/assets/svg/eko0.svg" alt="" />
        <div className="accion">
          <p className="accion-text"> scroll or click </p>
          <img src="../src/assets/svg/arrow-bottom.svg" alt="" />
        </div>
      </div>
    </body>
  );
}
