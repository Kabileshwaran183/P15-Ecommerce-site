import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../Components/Button"

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="offer" width={773} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special</span> Offer
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">Lorem, ipsum dolor sit amet consectetu nesciunt corrupti sit recusandae! Id, ad illo sit officiis laborum explicabo nisi soluta perferendis corporis ipsum voluptatum qui repellendus repudiandae?Get the best best best best quality shoes at the best prices</p>
        <p className="info-text mt-4 lg:max-w-lg">Lorem,  quality shoes at the best prices</p>
        <div className="mt-11 mb-6 flex flex-wrap gap-4">
          <Button label="Shop Now" iconUrl={arrowRight} />
          <Button label="Learn More" bgColor="bg-white"
            borderColor="border-slate-gray" textColor="text-slate-gray" />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers