import { ProductsLayout } from "./ProductsLayout"
import productsData from '../productsData.js'

export function Page() {
    const productList = productsData.map((product) => {
        return(
            <ProductsLayout 
               priceCent={product.priceCents}
            />
        )
    })

    return(
        <main>
            {productList}
        </main>
    )
}