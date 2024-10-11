import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/containers/theme-context";
import { Moon, Sun } from "lucide-react";

interface SwitchProps {
  setActiveButton: () => void;
}

export default function Switch({ setActiveButton }: SwitchProps) {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <motion.button
        className={`bg-white dark:bg-gray-800 w-[3rem] h-[3rem] drop-shadow 
        backdrop-blur-[0.5rem] transition duration-300 ease-in-out 
        hover:scale-110 flex items-center justify-center`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={setActiveButton}
      >
        {theme === "light" ? (
          isHovered ? (
            <span className="text-sm font-semibold text-gray-900 dark:text-gray-200">
              <Moon />
            </span>
          ) : (
            <span className="font-semibold text-gray-900 dark:text-gray-200">
              <Sun />
            </span>
          )
        ) : isHovered ? (
          <span className="text-sm font-semibold text-gray-900 dark:text-gray-200">
            <Sun />
          </span>
        ) : (
          <span className="font-semibold text-gray-900 dark:text-gray-200">
            <Moon />
          </span>
        )}
      </motion.button>
    </div>
  );
}
