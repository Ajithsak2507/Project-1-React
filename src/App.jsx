import {

} from "react-icons/fa"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Article from "./components/Article"
import Table from "./components/Table"
import Aside from "./components/Aside"
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Hero />
      <div className="container flex flex-col mx-auto p-6 gap-6 md:flex-row">
        <main className="flex-1">
          <Article />
          <Table />
        </main>
        <Aside />
      </div>
      <Footer />
    </>
  )
}

export default App
