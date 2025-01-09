import { arrowRight } from "../assets/icons"
import Button from "../Components/Button"
const Hero = () => {
  return (
    <section id="home"
          className=" w-full flex xl:flex-row flex-col justify-center
                      gap-10 max-container min-h-screen"
    >
      <div className="relative bg-red-100 w-full xl:w-2/5 flex flex-col
                      justify-center items-start max-xl:padding-x pt-28 ">
        <p>Our Collection</p>
        <h1>
          <span>The New Arrival</span>
          <br />
          <span>Nike</span>Shoes
        </h1>
        <p>Get the best quality shoes at the best prices</p>
        <Button label="Shop Now"
                iconUrl={arrowRight}/>
      </div>
    </section>
  )
}

export default Hero