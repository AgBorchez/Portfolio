import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProjectCard } from "./components/ProjectCard";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { PROJECTS } from "./data";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#1e1e1e] text-slate-800 dark:text-[#d4d4d4] antialiased selection:bg-[#e76f00] dark:selection:bg-purple-500 selection:text-white transition-colors duration-300">
      <Navbar />

      <main className="mx-auto flex max-w-[89vw] flex-col gap-12 min-[1600px]:gap-24 px-6 pt-6 pb-0 min-[1600px]:py-10">
        <Hero />

        <section
          id="proyectos"
          className="w-full flex flex-col gap-4 sm:gap-6 scroll-mt-16 sm:scroll-mt-20 py-2 xl:min-h-[85vh] xl:py-6"
        >
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#e76f00] dark:text-purple-500 xl:text-5xl">
              Proyectos
            </h2>
            <p className="max-w-2xl text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Una selección de aplicaciones en las que implementé arquitecturas escalables, interfaces interactivas y buenas prácticas.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <Skills />
      </main>

      <Footer />
    </div>
  );
}