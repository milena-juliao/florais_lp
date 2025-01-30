"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import DarkModeToggle from "../utils/DarkMode";
import { motion, AnimatePresence } from "framer-motion";
import { useMenuStore } from "../store/useMenuStore";

const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.1, duration: 0.3 }
    }),
};

const Header: React.FC = () => {
    const { isMenuOpen, toggleMenu, closeMenu } = useMenuStore();

    const menuItems = [
        { href: "#about", label: "Sobre" },
        { href: "#services", label: "Serviços" },
        { href: "#contact", label: "Agendar Consulta" }
    ];

    return (
        <header className="bg-theme fixed top-0 w-full z-50 text-theme dark:text-gray-100 shadow-md">
            <div className="container relative mx-auto flex items-center justify-between py-1 px-standard-mobile lg:px-standard-lg">
                <Link href="/">
                    <img src="/logo.png" alt="Priscilla Piccin - Radiestesista Terapêutica" className="h-20" />
                </Link>

                <div className="flex items-center gap-4 lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-theme focus:outline-none transition-all duration-300"
                    >
                        <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
                    </button>
                    <DarkModeToggle />
                </div>

                {/* Menu Desktop */}
                <nav className="lg:flex items-center gap-4 hidden">
                    <ul className="flex space-x-6">
                        {menuItems.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href} className="text-theme hover:underline hover:underline-offset-8">{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                    <DarkModeToggle />
                </nav>
            </div>

            {/* Menu Mobile */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="absolute right-0 mt-2 lg:hidden bg-transparente rounded-lg p-4"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className="space-y-4 text-right">
                            {menuItems.map((item, index) => (
                                <motion.li
                                    key={item.href}
                                    custom={index}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    variants={menuVariants}
                                    className="p-2 rounded-lg text-center shadow-md bg-beige bg-opacity-50"
                                >
                                    <Link href={item.href} className="text-theme font-semibold p-1" onClick={closeMenu}>
                                        {item.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
