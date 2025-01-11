import ReviewCard from "../Components/ReviewCard"
import { reviews } from "../Constants"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h2 className="font-palanquin font-bold text-center text-4xl">
        What Our
        <span className="text-coral-red"> Customers </span>
        Say ?
      </h2>
      <p className='m-auto mt-4 max-w-lg  text-center info-text'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="flex flex-1 justify-evenly mt-24 items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            {...review} />
        ))}
      </div>

    </section>
  )
}

export default CustomerReviews