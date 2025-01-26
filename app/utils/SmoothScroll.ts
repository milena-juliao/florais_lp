"use client"
import { useEffect } from "react";

const SmoothScroll = () => {
    useEffect(() => {
        const handleSmoothScroll = (e: Event) => {
            const target = e.target as HTMLAnchorElement;

            if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
                e.preventDefault();

                const targetElement = document.querySelector(target.getAttribute("href")!);

                targetElement?.scrollIntoView({ behavior: "smooth" })
            };
        }

        document.addEventListener("click", handleSmoothScroll);

        return () => {
            document.removeEventListener("click", handleSmoothScroll);
        };

    }, []);

    return null;
}

export default SmoothScroll;