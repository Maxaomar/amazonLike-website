import { ProductsLayout } from "./ProductsLayout"
import productsData from '../productsData.js'

export function Page() {
    const productList = productsData.map((product) => {
        return(
            <ProductsLayout
               price={product.priceCents}
               names={product.name}

            />
        )
    })

    return(
        <main>
            {productList}
        </main>
    )
}