import { FileDown, Mail, ArrowRight } from "lucide-react";
import { GithubButton, LinkedinButton } from "./Icons";

export function Hero() {
  return (
    <header className="flex min-h-[calc(100vh-5rem)] flex-col items-start gap-6 pb-8 md:pt-10 md:pb-10">
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        Disponible para nuevos proyectos
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-7xl lg:text-6xl">
          Hola, soy <span className="text-[#e76f00] dark:text-purple-500">Agustin Borchez</span>
        </h1>
        <p className="text-xl font-semibold text-[#5382a1] dark:text-slate-300 sm:text-2xl">
          Desarrollador de Software Full-Stack
        </p>
      </div>

      <p className="max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
        Especializado en construir aplicaciones web robustas, escalables y orientadas a producto. 
        Enfocado en arquitecturas limpias, rendimiento y buenas prácticas.
      </p>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <a
          href="/CV Agustín Borchez.pdf"
          download
          className="inline-flex items-center gap-2 rounded-xl bg-[#e76f00] dark:bg-purple-800 px-5 py-3 text-sm font-semibold text-white dark:text-slate-950 shadow-lg shadow-orange-500/20 dark:shadow-purple-500/20 transition-all duration-200 hover:bg-[#d46300] dark:hover:bg-purple-700 hover:shadow-orange-500/30 dark:hover:shadow-purple-500/30 focus:outline-none focus:ring-2 focus:ring-[#e76f00] dark:focus:ring-purple-500"
        >
          <FileDown className="h-4 w-4" />
          <span>Descargar CV</span>
        </a>

        <a
          href="#proyectos"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-[#3e3e42] bg-white dark:bg-[#252526]/80 px-5 py-3 text-sm font-semibold text-slate-800 dark:text-white backdrop-blur-sm transition-colors hover:border-[#5382a1] dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-[#2d2d2d] focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          <span>Ver Proyectos</span>
          <ArrowRight className="h-4 w-4 text-[#5382a1] dark:text-slate-400" />
        </a>
      </div>

      <div className="flex items-center gap-3 pt-2 text-slate-500 dark:text-slate-400">
        <GithubButton />
        <LinkedinButton />

        <a
          href="mailto:agborchez@gmail.com"
          aria-label="Enviar correo"
          className="rounded-lg border border-slate-300 dark:border-[#3e3e42] bg-white dark:bg-[#252526]/80 p-2.5 transition-colors hover:border-[#e76f00] dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-[#2d2d2d] hover:text-[#e76f00] dark:hover:text-white"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>
    </header>
  );
}