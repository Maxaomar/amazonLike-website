
export function ProductsLayout(props) {
  return(
      <section className="product-container">
        <main className="product-container-box">
              <div className="product-image-container">
                  <img src={props.images} className="product-image" alt="2-pair of trouser" />
              </div>

              <h2 className=''>{props.names}</h2>

          <div className="flex gap-5 items-center">
              <div>
                   <img src="src/images/ratings/rating-05.png" alt="" />
              </div>
              <span>{props.counts}</span>
          </div>

          <div className=''>{props.price}</div>

          <div className=''>
              <select className="">
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

   </main>
</section>
  )
}
