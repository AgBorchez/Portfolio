import { useState, useEffect } from "react";
import { FileDown, Menu, X, Sun, Moon } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // 1. Inicializa el estado leyendo localStorage o por defecto 'dark'
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
    }
    return "dark";
  });

  // 2. Aplica o remueve la clase 'dark' en <html> y guarda la elección
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 3. Función del botón para alternar entre claro y oscuro
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const navLinks = [
    { name: "Proyectos", href: "#proyectos" },
    { name: "Habilidades", href: "#skills" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-[#3e3e42] bg-white/80 dark:bg-[#1e1e1e]/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex max-w-* items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-slate-900 dark:text-white transition-colors hover:text-[#e76f00] dark:hover:text-purple-400"
        >
          AB<span className="text-[#e76f00] dark:text-purple-400">.</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-[#d4d4d4]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-[#e76f00] dark:hover:text-purple-400"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            className="rounded-lg border border-slate-300 dark:border-[#3e3e42] bg-slate-100 dark:bg-[#252526] p-2 text-slate-600 dark:text-slate-300 transition-colors hover:border-[#e76f00] dark:hover:border-purple-400 hover:text-[#e76f00] dark:hover:text-purple-400 cursor-pointer"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <a
            href="/CV Agustín Borchez.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-[#3e3e42] bg-slate-100 dark:bg-[#252526] px-3.5 py-2 text-xs font-semibold text-slate-800 dark:text-white transition-colors hover:border-[#e76f00] dark:hover:border-purple-400"
          >
            <FileDown className="h-3.5 w-3.5 text-[#e76f00] dark:text-purple-400" />
            <span>CV</span>
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            className="rounded-lg p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-[#252526]"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            aria-label="Abrir menú de navegación"
            className="rounded-lg p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-[#252526]"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-b border-slate-200 dark:border-[#3e3e42] bg-white dark:bg-[#1e1e1e] px-6 pt-2 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 text-sm font-medium text-slate-700 dark:text-[#d4d4d4]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-1 transition-colors hover:text-[#e76f00] dark:hover:text-purple-400"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="/CV Agustín Borchez.pdf"
                download
                onClick={() => setIsOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-200 dark:bg-[#252526] py-2.5 text-xs font-semibold text-slate-800 dark:text-white transition-colors"
              >
                <FileDown className="h-4 w-4 text-[#e76f00] dark:text-purple-400" />
                <span>Descargar CV</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}