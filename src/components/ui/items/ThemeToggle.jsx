import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            document.documentElement.setAttribute("data-theme", theme);
            localStorage.setItem("theme", theme);
        }
    }, [theme, mounted]);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="border border-[#15bc55] px-4 py-2 rounded-lg text-sm"
        >
            {theme === "light" ? "Mode sombre" : "Mode clair"}
        </button>
    )
}