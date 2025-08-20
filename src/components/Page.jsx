import { ProductsLayout } from "./ProductsLayout"
import productsData from '../productsData.js'

export function Page() {
    const productList = productsData.map((product) => {
        return(
            <ProductsLayout
                {...product}
                key={product.id}
            />
        )
    })

    return(
        <main className="page">
            {productList}
        </main>
    )
}