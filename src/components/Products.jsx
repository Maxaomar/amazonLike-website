import { products } from "../products.js"

export function ProductLayout() {
  const productList = products.map((product) => {
  })

  return(
    <main className="flex">
        <article className="">
            <img src="src/assets/images/products/athletic-cotton-socks-6-pairs.jpg" alt="2-pair of trouser" />
            <h2>Black and Gray Athletic Cotton Socks - 6 Pairs</h2>

              <div className="flex gap-5 items-center">
                <div><img src="src/assets/images/ratings/rating-05.png" alt="" /></div>
                <span>87</span>
              </div>

              <div>$10.90</div>

              <button>Add to cart</button>
         </article>
    </main>
  )
}
