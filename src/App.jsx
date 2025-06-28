import { Route, Routes, useParams } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Region from "./components/main/Region"
import Error from "./components/error/Error"
import Details from "./components/main/Details"

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/region/:continent" element={<Region />} />
        <Route path="/details/:name" element={<Details />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
