import ProductCard from "../Components/ProductCard"
import { products } from "../Constants"

const PopularProducts = () => {
  return (
    <section id="products"
      className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Products</h2>
        <p className="text-slate-gray lg:max-w-4xl mt-2 font-montserrat">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, corporis iure! Voluptatem aliquid vitae tempora! Optio aut dignissimos iure quos pariatur sunt hic, quod ipsam nostrum iste. Quasi, provident fugit!</p>
      </div>
      <div className="mt-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1
                      sm:gap-4 gap-14">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts