import { useState } from "react";
import { Mail, Send, Check, Copy } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { ScrollToTop } from "./ScrollToTop";

export function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "agborchez@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contacto" className="text-center text-xs text-slate-500 dark:text-[#858585] scroll-mt-16 min-[1600px]:scroll-mt-31 pb-0">
      <div className="mx-auto max-w-[89vw] px-6 pt-12 pb-12 mt-16 border-t border-b border-slate-200 dark:border-[#3e3e42]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          
          <div className="flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#e76f00] dark:text-purple-400">
                Contacto
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                ¿Tenés un proyecto en mente?
              </h2>
              <p className="max-w-md text-base leading-relaxed text-slate-600 dark:text-slate-400">
                Estoy disponible para nuevas oportunidades y colaboraciones. Escribime un mensaje o contactame a través de mis redes.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="inline-flex w-fit items-center gap-3 rounded-xl border border-slate-300 dark:border-[#3e3e42] bg-white dark:bg-[#252526]/60 p-2 pr-4 backdrop-blur-sm shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 dark:bg-purple-500/10 text-[#e76f00] dark:text-purple-400">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{email}</span>
                <button
                  type="button"
                  onClick={copyToClipboard}
                  aria-label="Copiar correo electrónico"
                  className="ml-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 p-2 text-slate-600 dark:text-slate-300 transition-colors hover:border-[#e76f00] dark:hover:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-400 cursor-pointer"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                <a
                  href="https://github.com/AgBorchez"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="rounded-lg border border-slate-300 dark:border-[#3e3e42] bg-white dark:bg-[#252526]/60 p-2.5 transition-colors hover:border-[#e76f00] dark:hover:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/agustinborchez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-lg border border-slate-300 dark:border-[#3e3e42] bg-white dark:bg-[#252526]/60 p-2.5 transition-colors hover:border-[#5382a1] dark:hover:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-[#0077B5] dark:hover:[#0077B5]"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-[#3e3e42] bg-white dark:bg-[#252526]/40 p-6 backdrop-blur-sm sm:p-8 shadow-sm">
            <form
              action="https://formspree.io/f/maewzdlg" 
              method="POST"
              className="flex flex-col gap-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Tu nombre"
                  className="mt-1 w-full rounded-lg border border-slate-300 dark:border-[#3e3e42] bg-slate-50 dark:bg-[#1e1e1e]/60 px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-colors focus:border-[#e76f00] dark:focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-[#e76f00] dark:focus:ring-purple-500"
                />
              </div>

              <div>
                <label
                  htmlFor="reply_to"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                >
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="_replyto"
                  id="reply_to"
                  required
                  placeholder="tu@email.com"
                  className="mt-1 w-full rounded-lg border border-slate-300 dark:border-[#3e3e42] bg-slate-50 dark:bg-[#1e1e1e]/60 px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-colors focus:border-[#e76f00] dark:focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-[#e76f00] dark:focus:ring-purple-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                >
                  Mensaje
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  placeholder="Contame sobre tu propuesta..."
                  className="mt-1 w-full resize-none rounded-lg border border-slate-300 dark:border-[#3e3e42] bg-slate-50 dark:bg-[#1e1e1e]/60 px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-colors focus:border-[#e76f00] dark:focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-[#e76f00] dark:focus:ring-purple-500"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#e76f00] dark:bg-purple-600 py-3 text-sm font-semibold text-white dark:text-slate-950 shadow-lg shadow-orange-500/20 dark:shadow-purple-500/10 transition-all hover:bg-[#d46300] dark:hover:bg-purple-500 hover:shadow-orange-500/30 dark:hover:shadow-purple-500/20 focus:outline-none focus:ring-2 focus:ring-[#e76f00] dark:focus:ring-purple-300 cursor-pointer"
              >
                <Send className="h-4 w-4" />
                <span>Enviar mensaje</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="pt-6 text-center text-xs text-slate-500 dark:text-[#858585]">
        <p>© {new Date().getFullYear()} Agustin Borchez. Diseñado y construido con React, TypeScript y Tailwind CSS.</p>
      </div>

      <div className="pt-3 flex justify-center">
        <ScrollToTop />
      </div>
    </footer>
  );
}