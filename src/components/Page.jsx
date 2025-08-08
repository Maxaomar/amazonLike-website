import { ProductsLayout } from "./ProductsLayout"
import productsData from '../productsData.js'

export function Page() {
    const productList = productsData.map((product) => {
        return(
            <ProductsLayout
               images={product.image}
               price={product.priceCents}
               names={product.name}
               counts={product.rating.count}

            />
        )
    })

    return(
        <main className="page">
            {productList}
        </main>
    )
}