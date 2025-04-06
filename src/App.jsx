import { TopBar } from "./components/TopBar"
import { BottomBar } from "./components/BottomBar"
import { ProductLayout } from "./components/Products"
import { Footer } from "./components/Footer"


export default function App() {
  return(
    <main>
      <TopBar />
      <BottomBar />
      <ProductLayout />
      <Footer />
    </main>
  )
}

