import { TopBar } from "./components/TopBar"
import { BottomBar } from "./components/BottomBar"
import { Footer } from "./components/Footer"
import { Page } from "./components/Page"


export default function App() {
  return(
    <main>
      <TopBar />
      <BottomBar />
      <Page />
      <Footer />
    </main>
  )
}

