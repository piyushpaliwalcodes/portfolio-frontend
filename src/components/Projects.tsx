import ProjectCard from "./ProjectCard";
import { ProjectInfo } from "../User";
function Projects() {
  return (
    <div className="px-16 mx-20 my-5 font-mono  text-center   " id="PROJECTS">
      <h1 className="text-4xl font-bold text-white pb-2">
        <span className="text-primaryColor ">02.&nbsp;</span>Projects
      </h1>
      <div className=" flex flex-wrap justify-between gap-2">
        {ProjectInfo.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              image={project.image|| ""}
              title={project.title}
              desc={project.desc}
              live={project.live}
              technologies={project.technologies}
              link={project.link}
              sourcecode = {project.github}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
