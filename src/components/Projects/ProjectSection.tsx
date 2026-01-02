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

      {/* See More Projects Button */}
      <div className="mt-10 text-center">
        <a
          href="https://github.com/DevZenMaster"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white font-medium text-base px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          See More Projects
        </a>
      </div>
    </section>
  )
}

export default ProjectSection
