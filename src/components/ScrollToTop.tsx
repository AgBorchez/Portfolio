export function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Volver al inicio"
      className="group inline-flex items-center justify-center p-2 text-slate-400 dark:text-[#858585] transition-all duration-300 hover:-translate-y-1.5 hover:text-[#e76f00] dark:hover:text-purple-400 focus:outline-none cursor-pointer"
    >
      <svg
        className="h-7 w-7 transition-colors duration-300"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}