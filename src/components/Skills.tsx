import { Code2, Server, Database, Wrench } from "lucide-react";
import type { ComponentType } from "react";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiDotnet,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiDocker,
  SiLinux,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
import { FaJava } from "react-icons/fa";

interface TechItem {
  name: string;
  icon: ComponentType<{ className?: string }>;
  hoverColor: string;
}

interface SkillCategory {
  title: string;
  icon: typeof Code2;
  items: TechItem[];
}

const CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code2,
    items: [
      { name: "React", icon: SiReact, hoverColor: "group-hover:text-[#61DAFB]" },
      { name: "TypeScript", icon: SiTypescript, hoverColor: "group-hover:text-[#3178C6]" },
      { name: "JavaScript", icon: SiJavascript, hoverColor: "group-hover:text-[#F7DF1E]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, hoverColor: "group-hover:text-[#06B6D4]" },
      { name: "HTML5 & CSS3", icon: SiHtml5, hoverColor: "group-hover:text-[#E34F26]" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    items: [
      { name: "C#", icon: TbBrandCSharp, hoverColor: "group-hover:text-[#9B4993]" },
      { name: ".NET / ASP.NET", icon: SiDotnet, hoverColor: "group-hover:text-[#512BD4]" },
      { name: "Java", icon: FaJava, hoverColor: "group-hover:text-[#ED8B00]" },
    ],
  },
  {
    title: "Bases de Datos",
    icon: Database,
    items: [
      { name: "SQL Server", icon: DiMsqlServer, hoverColor: "group-hover:text-[#CC292B]" },
      { name: "PostgreSQL", icon: SiPostgresql, hoverColor: "group-hover:text-[#4169E1]" },
      { name: "MySQL", icon: SiMysql, hoverColor: "group-hover:text-[#4479A1]" },
    ],
  },
  {
    title: "Herramientas",
    icon: Wrench,
    items: [
      { name: "Git", icon: SiGit, hoverColor: "group-hover:text-[#F05032]" },
      { name: "Docker", icon: SiDocker, hoverColor: "group-hover:text-[#2496ED]" },
      { name: "Linux", icon: SiLinux, hoverColor: "group-hover:text-[#FCC624]" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="w-full flex flex-col gap-4 sm:gap-6 scroll-mt-16 sm:scroll-mt-20 py-2 xl:min-h-[85vh] xl:py-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-extrabold tracking-tight text-[#e76f00] dark:text-purple-400 sm:text-5xl min-[1600px]:text-6xl">
          Stack Tecnológico
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((category) => {
          const CategoryIcon = category.icon;

          return (
            <div
              key={category.title}
              className="flex flex-col gap-6 rounded-2xl border border-slate-200 dark:border-[#3e3e42] bg-white dark:bg-[#252526]/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#5382a1] dark:hover:border-slate-500 hover:shadow-lg hover:shadow-orange-500/5 dark:hover:shadow-purple-500/5 min-[1600px]:p-8 min-[1600px]:gap-6 shadow-sm"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 dark:border-[#3e3e42] pb-4 min-[1600px]:pb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/20 dark:border-purple-500/20 bg-orange-500/10 dark:bg-purple-500/10 text-[#e76f00] dark:text-purple-400 min-[1600px]:h-12 min-[1600px]:w-12">
                  <CategoryIcon className="h-5 w-5 min-[1600px]:h-6 min-[1600px]:w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white min-[1600px]:text-xl">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3 min-[1600px]:gap-3.5">
                {category.items.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      title={tech.name}
                      aria-label={tech.name}
                      className="group relative flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 dark:border-[#3e3e42] bg-slate-50 dark:bg-[#1e1e1e]/70 text-slate-500 dark:text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#5382a1] dark:hover:border-slate-500 hover:bg-white dark:hover:bg-[#2d2d2d] hover:shadow-md min-[1600px]:h-17 min-[1600px]:w-17 cursor-default"
                    >
                      <span className={`transition-colors duration-300 ${tech.hoverColor}`}>
                        <Icon className="h-6 w-6 min-[1600px]:h-7 min-[1600px]:w-7" />
                      </span>

                      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-2 py-0.5 text-[10px] font-semibold text-slate-800 dark:text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 z-10 min-[1600px]:text-xs">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}