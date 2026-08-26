import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";
import type { Project } from "../data";
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
  SiCss,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
import { FaJava } from "react-icons/fa";

// Dentro de TECH_ICON_MAP:


const TECH_ICON_MAP: Record<
  string,
  { icon: ComponentType<{ className?: string }>; color: string }
> = {
  React: { icon: SiReact, color: "hover:text-[#61DAFB]" },
  TypeScript: { icon: SiTypescript, color: "hover:text-[#3178C6]" },
  JavaScript: { icon: SiJavascript, color: "hover:text-[#F7DF1E]" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "hover:text-[#06B6D4]" },
  HTML5: { icon: SiHtml5, color: "hover:text-[#E34F26]" },
  "C#": { icon: TbBrandCSharp, color: "hover:text-[#9B4993]" },
  ".NET": { icon: SiDotnet, color: "hover:text-[#512BD4]" },
  Java: { icon: FaJava, color: "hover:text-[#ED8B00]" },
  "SQL Server": { icon: DiMsqlServer, color: "hover:text-[#CC292B]" },
  PostgreSQL: { icon: SiPostgresql, color: "hover:text-[#4169E1]" },
  MySQL: { icon: SiMysql, color: "hover:text-[#4479A1]" },
  Docker: { icon: SiDocker, color: "hover:text-[#2496ED]" },
  Git: { icon: SiGit, color: "hover:text-[#F05032]" },
  Linux: { icon: SiLinux, color: "hover:text-[#FCC624]" },
  "CSS": { icon: SiCss, color: "hover:text-[#1572B6]" },
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, tags, githubUrl, demoUrl, image } = project;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-[#3e3e42] bg-white dark:bg-[#252526]/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#5382a1] dark:hover:border-slate-500 hover:shadow-xl hover:shadow-orange-500/5 dark:hover:shadow-purple-500/5">

      <div className="relative flex h-34 min-[1600px]:h-58 w-full items-center justify-center overflow-hidden bg-slate-100 dark:bg-[#1e1e1e] border-b border-slate-200 dark:border-[#3e3e42]">
        {image ? (
          <img
            src={image}
            alt={`Captura de ${title}`}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <span className="text-lg font-black text-[#5382a1] dark:text-cyan-400/80 tracking-wider select-none min-[1600px]:text-2xl">
            Preview
          </span>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 dark:from-[#1e1e1e]/80 via-transparent to-transparent opacity-60" />
      </div>

      <div className="flex flex-1 flex-col justify-between p-3.5 min-[1600px]:p-6 gap-2 min-[1600px]:gap-4">
        <div className="flex flex-col gap-1 min-[1600px]:gap-2">
          <h3 className="text-sm font-bold tracking-tight text-slate-900 dark:text-white transition-colors group-hover:text-[#e76f00] dark:group-hover:text-purple-400 min-[1600px]:text-xl">
            {title}
          </h3>

          <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 min-[1600px]:text-sm min-[1600px]:line-clamp-3">
            {description}
          </p>
        </div>

        <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1.5 rounded-lg border border-slate-200/80 dark:border-slate-700/60 bg-white/90 dark:bg-slate-900/80 p-1.5 backdrop-blur-md shadow-sm">
          {tags.map((tag) => {
            const tech = TECH_ICON_MAP[tag];
            if (!tech) return null;
            const IconComponent = tech.icon;

            return (
              <div
                key={tag}
                title={tag}
                className="group/tech relative flex items-center justify-center text-slate-500 dark:text-slate-300"
              >
                <IconComponent
                  className={`h-4.5 w-4.5 min-[1600px]:h-6 min-[1600px]:w-6 transition-colors ${tech.color}`}
                />
                <span className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-1.5 py-0.5 text-[10px] font-semibold text-slate-800 dark:text-white opacity-0 shadow transition-opacity duration-200 group-hover/tech:opacity-100 z-20">
                  {tag}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-2.5 border-t border-slate-100 dark:border-[#3e3e42] pt-2.5 mt-1 min-[1600px]:pt-4 min-[1600px]:gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 dark:border-[#3e3e42] bg-slate-50 dark:bg-[#1e1e1e]/60 px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-colors hover:bg-slate-100 dark:hover:bg-[#2d2d2d] hover:text-slate-900 dark:hover:text-white min-[1600px]:px-4 min-[1600px]:py-2"
            >
              <GithubIcon className="h-3.5 w-3.5 min-[1600px]:h-4 min-[1600px]:w-4" />
              <span>Código</span>
            </a>
          )}

          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#e76f00] dark:bg-purple-600 px-3 py-1 text-xs font-semibold text-white shadow-md shadow-orange-500/20 dark:shadow-purple-600/20 transition-all hover:bg-[#d46300] dark:hover:bg-purple-500 min-[1600px]:px-4 min-[1600px]:py-2"
            >
              <ExternalLink className="h-3.5 w-3.5 min-[1600px]:h-4 min-[1600px]:w-4" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}