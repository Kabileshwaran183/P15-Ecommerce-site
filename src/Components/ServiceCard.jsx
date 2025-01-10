
const ServiceCard = ({imgURL, label,subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full shadow-3xl px-10 py-16 rounded-[20px]">
        <div className="bg-coral-red w-11 h-11 flex justify-center items-center rounded-full">
        <img src={imgURL} alt={label} height={24} width={24} />
        </div>
        <h3 className="mt-5 font-palanquin font-bold text-3xl leading-normal">{label}</h3>
        <p className="info-text break-words ">{subtext}</p>
    </div>
  )
}

export default ServiceCard