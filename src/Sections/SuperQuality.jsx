import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
import Button from "../Components/Button"

const SuperQuality = () => {
  return (
    <section id="Super-quality"
      className="flex justify-between gap-10 items-center w-full max-container max-lg:flex-col animate-fadeIn">

      <div className="flex flex-1 flex-col animate-slideInUp">

        <h2 className="font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
          We Provide you
          <span className="text-coral-red"> Super</span>
          <span className="text-coral-red"> Quality</span> Shoes
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde praesentium nesciunt corrupti sit recusandae! Id, ad illo sit officiis laborum explicabo nisi soluta perferendis corporis ipsum voluptatum qui repellendus repudiandae?Get the best best best best quality shoes at the best prices</p>
        <div className="mt-4">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8}
          alt="shoe8"
          height={522}
          width={570}
          loading="lazy" />
      </div>


    </section>
  )
}

export default SuperQuality