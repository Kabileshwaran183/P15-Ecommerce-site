import { star } from "../assets/icons"

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
    return (
        <section className="flex justify-center items-center flex-col">
            <img src={imgURL} alt="Customer" className="rounded-full object-cover w-[120px] h-[120px]" />
            <p className="info-text text-center mt-6 max-w-sm">{feedback}</p>
            <div className="flex gap-2.5 items-center justify-center mt-4">
                <img src={star} 
                    alt="Star" 
                    width={24} 
                    height={24} 
                    className="object-contain " />
                    <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
            </div>
            <h3 className="text-3xl font-palanquin mt-1 text-center font-bold">{customerName}</h3>
        </section>
    )
}

export default ReviewCard