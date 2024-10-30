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
  "hotjar",
	"contentful",
];

const Projects = () => {
  return (
    <>
      <section
        className="container h-full mx-auto gap-4 min-h-screen flex flex-col md:px-12 px-5 relative z-20 pb-80 pt-10 lg:pt-0"
        id="projects"
      >
        <h4 className="mt-24 mb-4 font-black text-transparent text-3xl lg:text-5xl bg-clip-text bg-gradient-to-r from-primary-1 to-primary-2 w-fit">
          MIS PROYECTOS
        </h4>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-10 lg:gap-5">
          <ProjectCard
						video="/projects/project.mp4"
            image="/projects/project"
            title="Tu sitio web"
            description="Contáctame y obtén tu propio sitio web"
            technologies={[]}
            url="#contact"
          />
          <ProjectCard
						video="/projects/miwa.mp4"
            image="/projects/miwa"
            title="MIWA"
            description="Poda y servicios forestales"
            technologies={[
              "nextjs",
              "tailwind",
              "typescript",
							"contentful"
            ]}
            url="https://miwa.com.ar/"
						urlGit="https://github.com/patrickwebsdev/miwa/"
          />
          <ProjectCard
						video="/projects/edsu.mp4"
            image="/projects/edsu"
            title="EDSU"
            description="Venta de madera mayorista y productos de madera minorista"
            technologies={["react", "nextjs", "tailwind", "typescript"]}
            url="https://edsu.net/"
						urlGit="https://github.com/patrickwebsdev/edsu/"
          />
          <ProjectCard
						video="/projects/ride-4-clon.mp4"
            image="/projects/ride-4-clon"
            title="Ride 4 Clon"
            description="Clon de la página del juego Ride 4 de motocicletas"
            technologies={["html", "css", "javascript", "sass"]}
            url="https://patrickwebsdev.github.io/ride-4-clon/"
						urlGit="https://github.com/patrickwebsdev/ride-4-clon/"
          />
          <ProjectCard
						video="/projects/box-shadow-generator.mp4"
            image="/projects/box-shadow-generator"
            title="Box shadow generator"
            description="Generador de sombras con interfaz personalizable (fondo del sitio, fondo de contenedor y color de sombra)"
            technologies={["html", "css", "javascript", "sass"]}
            url="https://patrickwebsdev.github.io/shadow-generator/"
						urlGit="https://github.com/patrickwebsdev/shadow-generator/"
          />
          <ProjectCard
						video="/projects/biginfluence-template.mp4"
            image="/projects/biginfluence-template"
            title="BigInfluence Template"
            description="Plantilla para servicios de influencers"
            technologies={["html", "css", "javascript", "sass"]}
            url="https://patrickwebsdev.github.io/biginfluence/"
						urlGit="https://github.com/patrickwebsdev/biginfluence/"
          />
        </div>
  <div
    className="w-full justify-center items-center absolute bottom-12 left-0 hidden lg:flex"
  >
    <a
      href="#aboutme"
      aria-label="Ir a seccion sobre mí"
      className="animate-bounce py-1 px-1 text-white bg-primary-3 hover:bg-primary-2 transition-all duration-300 items-center border-primary-2 border-2 rounded-full"
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ffffff"
          d="m12 19.164l6.207-6.207l-1.414-1.414L12 16.336l-4.793-4.793l-1.414 1.414L12 19.164Zm0-5.65l6.207-6.207l-1.414-1.414L12 10.686L7.207 5.893L5.793 7.307L12 13.514Z"
        ></path>
      </svg>
    </a>
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
