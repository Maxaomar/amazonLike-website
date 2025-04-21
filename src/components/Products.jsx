import { products } from "../products.js"

export function ProductLayout() {
  const productList = products.map((product) => {
  })

  return(
    <main className="products">
        <article className="">
          <div className="product-image">
              <img src="src/assets/images/products/athletic-cotton-socks-6-pairs.jpg" alt="2-pair of trouser" />
          </div>


            <h2>Black and Gray Athletic Cotton Socks - 6 Pairs</h2>

              <div className="flex gap-5 items-center">
                <div><img src="src/assets/images/ratings/rating-05.png" alt="" /></div>
                <span>87</span>
              </div>

              <div>$10.90</div>

              <div>
              <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
              </select>
              </div>

              <button className="add-button">Add to cart</button>
         </article>
    </main>
  )
}
