import { products } from "../products.js"

export function ProductLayout() {
  const productList = products.map((product) => {
  })

  return(
    <section>
          <img src="src/images/products/adults-plain-cotton-tshirt-2-pack-teal.png" alt="2-pair of trouser" />
          <h2>adults-plain-cotton-tshirt-2-pack-teal</h2>

            <div>
              <div><img src="src/images/ratings/rating-05.png" alt="" /></div>
              <h4>2999</h4>

            </div>

            <div>$19.99</div>
            <button>Add to cart</button>
    </section>
  )
}









export function MainPage() {
  return (
    <>
    </>
  )
}