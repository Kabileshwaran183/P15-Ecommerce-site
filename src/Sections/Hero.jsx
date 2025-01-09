import { arrowRight } from "../assets/icons"
import Button from "../Components/Button"
import { statistics } from "../Constants"
const Hero = () => {
  return (
    <section id="home"
          className=" w-full flex xl:flex-row flex-col justify-center
                      gap-10 max-container min-h-screen"
    >
      <div className="relative  w-full xl:w-2/5 flex flex-col
                      justify-center items-start max-xl:padding-x pt-28 ">
        <p className="text-xl text-coral-red font-montserrat">Our Collection</p>
        <h1 className="font-palanquin mt-10 text-8xl max-sm:text-[72px] max-sm:leading-[80px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray mb-14 mt-6 text-lg leading-8 sm:max-w-sm ">Get the best best best best quality shoes at the best prices</p>
        <Button label="Shop Now"
                iconUrl={arrowRight}/>
        <div className="flex w-full justify-start items-start flex-wrap mt-10 gap-16">
          {statistics.map((stat)=>(
            <div key={stat.label} className=" ">
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="font-montserrat leading-8 text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Hero