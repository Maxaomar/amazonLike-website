export function ProductsLayout(props) {
  return(
      <main className="product-container">
        <article className="product-container-box">
              <div className="product-image">
                  <img src="src/assets/images/products/athletic-cotton-socks-6-pairs.jpg" alt="2-pair of trouser" />
              </div>

              <h2 className=''>{props.name}</h2>

          <div className="flex gap-5 items-center">
              <div><img src="src/assets/images/ratings/rating-05.png" alt="" /></div>
              <span>87</span>
          </div>

          <div className=''>{props.priceCents}</div>

          <div className=''>
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

          <div className='flex'>
               <button className="add-button">Add to cart</button>
          </div>

   </article>
</main>
  )
}
