export interface Project {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    title: "ZXGym",
    description: "Pagina web diseñada principalmente pensando en como " + 
    "funcionamiento de un gimnasio. Podes registrarte" +
    " o usar las credenciales del repositorio para entrar al panel de administrador.",
    tags: ["JavaScript", "C#", "CSS", "Docker"],
    githubUrl: "https://github.com/AgBorchez/ZXGym",
    demoUrl: "https://zxgym-frontend.onrender.com/",
    image: "/CapturaZXGYM.png",
  },
  {
    title: "TBot",
    description: "Un bot de respuestas automaticas hecho en Java. " 
    + "Actualmente alojado en Render, Podes probarlo a traves de la demo",
    tags: ["Java", "Docker"],
    githubUrl: "https://github.com/AgBorchez/Tbot12",
    demoUrl: "https://t.me/Prueba_12Bot",
    image: "TBotScreenshot.png",
  },
];