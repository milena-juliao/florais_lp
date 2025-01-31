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
        { href: "#contact", label: "Entrar em contato" }
    ];

    return (
        <header className="fixed top-0 w-full z-50 bg-theme text-theme dark:text-beige shadow-md">
            <div className="container relative mx-auto flex items-center justify-between px-standard-mobile py-1 lg:px-standard-lg">
                <Link href="/">
                    <img 
                        src="/logo.png" 
                        alt="Priscilla Piccin - Radiestesista Terapêutica" 
                        className="h-20" 
                    />
                </Link>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-4 lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="transition-all duration-300 focus:outline-none text-theme"
                    >
                        <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
                    </button>
                    <DarkModeToggle />
                </div>

                {/* Desktop Menu */}
                <nav className="hidden items-center gap-4 lg:flex">
                    <ul className="flex space-x-6">
                        {menuItems.map((item) => (
                            <li key={item.href}>
                                <Link 
                                    href={item.href} 
                                    className="text-theme hover:underline hover:underline-offset-8"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <DarkModeToggle />
                </nav>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="absolute right-0 mt-2 rounded-lg bg-transparente p-4 lg:hidden"
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
                                    className="rounded-lg bg-beige bg-opacity-50 p-2 text-center shadow-md"
                                >
                                    <Link 
                                        href={item.href} 
                                        className="p-1 font-semibold text-theme"
                                        onClick={closeMenu}
                                    >
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
