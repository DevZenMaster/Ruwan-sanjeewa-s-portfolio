import Image from 'next/image'

interface ProjectCardProps {
  title: string
  shortDescription: string
  stack?: string[]
  livePreview?: string
  cover: any // Imported image
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, shortDescription, stack, livePreview, cover }) => {
  return (
    <div className="bg-secondary border-border flex flex-col rounded-2xl border overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Website Image */}
      <div className="relative w-full h-48 md:h-56">
        <Image
          src={cover}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <h5 className="text-accent text-center text-lg font-semibold">{title}</h5>

        <p className="text-primary-content text-center text-sm md:text-base">
          {shortDescription}
        </p>

        {/* Stack Tags */}
        {stack && stack.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {stack.map((tech, idx) => (
              <span
                key={idx}
                className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Live Preview */}
        {livePreview && (
          <a
            href={livePreview}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-blue-600 font-medium text-sm text-center hover:underline"
          >
            Live Preview
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
