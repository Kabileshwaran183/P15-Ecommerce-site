import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../Components/Button"
import ShoeCard from "../Components/ShoeCard"
import { shoes, statistics } from "../Constants"
import { useState } from "react"
const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
    <section id="home"
      className=" w-full flex xl:flex-row flex-col justify-center
                      gap-10 max-container max-xl:padding min-h-screen max-sm:px-1"
    >
      <div className="relative  w-full xl:w-2/5 flex flex-col
                      justify-center items-start  xl:pt-28 sm:pt-8 max-xl:padding-l">
        <p className="text-xl text-coral-red font-montserrat mt-5">Our Collection</p>
        <h1 className="font-palanquin max-sm:text-4xl mt-10 max-xl:mt-6 text-8xl max-sm:text-[72px] max-sm:leading-[60px] xl:leading-[120px] font-bold ">
          <span className="xl:bg-white  xl:whitespace-nowrap relative z-10 pr-10 ">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3 max-sm:mt-0">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray mb-14 max-xl:mb-9 mt-6 text-lg leading-8 sm:max-w-sm ">Get the Best Quality Shoes from the Most Branded Company.</p>
        <div className="mt-4 flex flex-wrap gap-4">
          <Button label="Shop Now"
            iconUrl={arrowRight} />
          <Button label="Learn More" bgColor="bg-white"
            borderColor="border-slate-gray" textColor="text-slate-gray" />
        </div>
        <div className="flex w-full justify-start items-start flex-wrap mt-10  L:gap-20 gap-10 ">
          {statistics.map((stat) => (
            <div key={stat.label} className=" ">
              <p className="max-sm:text-3xl text-4xl  font-palanquin font-bold">{stat.value}</p>
              <p className="font-montserrat leading-8 text-xl max-sm:text-sm text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
     {/* Shoe  */}
      <div className=" relative flex flex-1  justify-center items-center xl:max-h-screen  max-xl:max-h-[500px] max-L:max-h-[50px]
                      max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoeImg}
          alt="shoe1"
          width={500}
          height={430}
          className=" relative
            object-contain z-10 max-xl:max-h-[300px] max-sm:max-h-[200px]" />
        <div className="flex absolute justify-center items-center  bottom-[-5%]
                        gap-4 sm:6 max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={shoe}>
              <ShoeCard
                imgUrl={shoe}
                changeBigShoeImg={(shoe) => {
                  setBigShoeImg(shoe)
                }}
                bigShoeImg={bigShoeImg} />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Hero