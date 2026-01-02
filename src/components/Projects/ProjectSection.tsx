import { projectData } from '../../appData/projectData'
import SectionHeading from '../SectionHeading/SectionHeading'
import ProjectCard from './ProjectCard'

const ProjectSection = () => {
  return (
    <section id="projects" className="my-14">
      <SectionHeading
        className="text-center mx-auto mb-12"
        title="My Projects"
        subtitle="These are some of my recent works, showcasing skills, results, and reliable solutions."
      />

      <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 md:mt-[3.75rem] md:grid-cols-3">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            cover={project.cover}
            title={project.title}
            shortDescription={project.shortDescription}
            stack={project.stack}
            livePreview={project.link}
          />
        ))}
      </div>

      {/* See More Projects Text Link */}
      <div className="mt-8 text-center">
        <a
          href="https://github.com/DevZenMaster"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-medium hover:underline text-base"
        >
          See more projects on GitHub
        </a>
      </div>
    </section>
  )
}

export default ProjectSection
