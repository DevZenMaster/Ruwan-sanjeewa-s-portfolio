interface SectionHeadingTypes {
  title: string
  subtitle?: string
  className?: string
}

const SectionHeading: React.FC<SectionHeadingTypes> = ({ title, subtitle, className }) => {
  return (
    /* SPACE FIX: Removed lg:max-w-[50dvw] to allow better center alignment 
       and centered the text container. */
    <div className={`max-w-[700px] ${className}`}>
      <h2 className="text-neutral text-2xl md:text-3xl font-bold tracking-tight">
        {title}
      </h2>
      
      {subtitle && (
        /* SPACE FIX: Changed mt-5 to mt-2 to pull the subtitle closer to the title. */
        <p className="text-neutral/60 mt-2 text-sm md:text-base leading-relaxed text-pretty">
          {subtitle}
        </p>
      )}
      
      {/* Visual Accent: Optional small line to show section start */}
      <div className="mt-4 h-1 w-12 bg-accent rounded-full mx-auto md:mx-0" />
    </div>
  )
}

export default SectionHeading