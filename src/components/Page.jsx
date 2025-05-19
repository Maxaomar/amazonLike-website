import { ProductsLayout } from "./ProductsLayout"

export function Page() {
    const productList = productsData.map((product) => {
        return(
            <ProductsLayout />
        )
    })

    return(
        <main>
            {productList}
        </main>
    )
}