"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useThemeStore } from "../store/useThemeStore";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const DarkModeToggle = () => {
    const { isDarkMode, toggleTheme } = useThemeStore();

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-opacity-20 bg-slate-50 transition-colors"
        >
            {isDarkMode ? <FontAwesomeIcon icon={faSun} className="text-beige" /> : <FontAwesomeIcon icon={faMoon} className="text-black" />}
        </button>
    );
};

export default DarkModeToggle;
