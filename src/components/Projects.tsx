import ProjectCard from "./ProjectCard";

const technologies = [
  "html",
  "css",
  "javascript",
  "sass",
  "react",
  "nextjs",
  "astro",
  "typescript",
  "php",
  "tailwind",
  "bootstrap",
];

const Projects = () => {
  return (
    <>
      <section
        className="container h-full mx-auto gap-5 min-h-screen flex flex-col lg:px-3 px-5 relative z-20 pb-80 pt-10 lg:pt-0"
        id="projects"
      >
        <h4 className="mt-24 font-black text-transparent text-3xl lg:text-5xl bg-clip-text bg-gradient-to-r from-primary-1 to-primary-2">
          MIS PROYECTOS
        </h4>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-10 lg:gap-5">
          <ProjectCard
            image="/projects/edsu.png"
            title="EDSU"
            description="Venta de madera mayorista y productos de madera minorista."
            technologies={["react", "nextjs", "tailwind", "typescript"]}
            url="https://patrickwebsdev.github.io/NescafeTemplate/"
          />
          <ProjectCard
            image="/projects/nescafe.png"
            title="Nescafe Gold"
            description="Creacion de una plantilla para Nescafe GOLD."
            technologies={["html", "css", "javascript", "sass"]}
            url="https://patrickwebsdev.github.io/NescafeTemplate/"
          />
          <ProjectCard
            image="/projects/visitorchat.png"
            title="Template"
            description="Plantilla sobre ChatBots con IA"
            technologies={["html", "css", "javascript", "sass"]}
            url="https://patrickwebsdev.github.io/visitorchat/"
          />
          <ProjectCard
            image="/projects/encriptador-oracle-next-education.png"
            title="Encriptador"
            description="Desafío de ONE (Oracle Next Education)"
            technologies={["html", "css", "javascript", "sass"]}
            url="https://patrickwebsdev.github.io/Encriptador-Oracle-Alura/"
          />
          <ProjectCard
            image="/projects/ride-4-clon.png"
            title="Ride 4 Clon"
            description="Clon de la pagina del juego Ride 4 de motocicletas"
            technologies={["html", "css", "javascript", "sass"]}
            url="https://patrickwebsdev.github.io/ride-4-clon/"
          />
          <ProjectCard
            image="/projects/box-shadow-generator.png"
            title="Box shadow generator"
            description="Generador de sombras con interfaz personalizable (fondo del sitio, fondo de contenedor y color de sombra)"
            technologies={["html", "css", "javascript", "sass"]}
            url="https://patrickwebsdev.github.io/shadow-generator/"
          />
          <ProjectCard
            image="/projects/biginfluence-template.png"
            title="BigInfluence Template"
            description="Plantilla para servicios de influencers"
            technologies={["html", "css", "javascript", "sass"]}
            url="https://patrickwebsdev.github.io/biginfluence/"
          />
        </div>
      </section>
      {technologies.map((tech) => (
        <div
          key={tech}
          id={`tooltip-${tech}`}
          role="tooltip"
          className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-primary-2 rounded-lg shadow-sm opacity-0 tooltip uppercase"
        >
          {tech}
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      ))}
    </>
  );
};
export default Projects;
