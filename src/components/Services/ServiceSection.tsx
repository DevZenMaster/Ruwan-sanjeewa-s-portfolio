'use client'

import { serviceData } from '../../appData'
import SectionHeading from '../SectionHeading/SectionHeading'
import ServiceCard from './ServiceCard'

const ServiceSection = () => {
  return (
    <section id="services" className="py-16 max-w-7xl mx-auto px-6">
      <SectionHeading
        className="text-center mx-auto mb-16"
        title="What I Do Best"
        subtitle="Technical expertise in development, security, and deployment."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            index={index}
            icon={service.icon}
            title={service.title}
            shortDescription={service.shortDescription}
          />
        ))}
      </div>
    </section>
  )
}

export default ServiceSection