import { TopBar } from "./components/TopBar"
import { BottomBar } from "./components/BottomBar"
import { Page } from "./components/Page"
import { Footer } from "./components/Footer"


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

