"use client";
import { useTheme } from "@/containers/theme-context";
import { Moon, Sun } from "lucide-react";
import Switch from "./switch";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="fixed bottom-5 right-5">
      <Switch setActiveButton={toggleTheme} />
    </div>
  );
}
