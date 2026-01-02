import Image, { StaticImageData } from 'next/image'

interface TestimonialCardProps {
  name: string
  title?: string
  feedback: string
  image: string | StaticImageData
  stars: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  title,
  feedback,
  image,
  stars,
}) => {
  return (
    <div className="bg-secondary border-border p-5 rounded-2xl border flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 min-w-[280px]">
      <Image
        src={image}
        alt={name}
        width={80}
        height={80}
        className="rounded-full mb-4 object-cover border-2 border-accent"
      />
      <p className="text-primary-content mb-3">{feedback}</p>
      <div className="flex gap-1 mb-2">
        {Array.from({ length: stars }).map((_, idx) => (
          <svg
            key={idx}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-yellow-400"
          >
            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.4 8.168L12 18.896l-7.334 3.864 1.4-8.168L.132 9.21l8.2-1.192z" />
          </svg>
        ))}
      </div>
      <h5 className="text-accent font-semibold">{name}</h5>
      {title && <span className="text-sm text-neutral">{title}</span>}
    </div>
  )
}

export default TestimonialCard
