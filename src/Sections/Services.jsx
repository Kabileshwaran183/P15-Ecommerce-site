import ServiceCard from "../Components/ServiceCard"
import { services } from "../Constants"


const Services = () => {
  return (
    <section className="flex justify-center gap-9 max-container flex-wrap items-center">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}

    </section>
  )
}

export default Services