import { star } from "../assets/icons"

const ProductCard = ({ imgURL, name, price }) => {
  return (
    <>
      <div className="flex flex-1 flex-col w-full max-sm:w-full ">
        <img src={imgURL} alt={name}
          className="w-[280px] h-[280px] items-center" />
        <div className="flex justify-start mt-8 gap-2.5">
          <img src={star} alt="rating" className="w-[24px] h-[24px]" />
          <p className="font-montserrat leading-normal text-xl text-slate-gray">(4.5)</p>
        </div>
        <h3 className="mt-2 font-palanquin font-semibold text-2xl leading-normal">{name}</h3>
        <p className="mt-2 font-montserrat font-semibold text-2xl leading-normal text-coral-red">{price}</p>
      </div>

    </>
  )
}

export default ProductCard