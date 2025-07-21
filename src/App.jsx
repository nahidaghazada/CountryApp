import { Route, Routes, useParams } from "react-router-dom"
import Main from "./components/main/Main"
import Region from "./components/main/Region"
import Error from "./components/error/Error"
import Details from "./components/main/Details"
import HomeLayout from "./layout/HomeLayout"
import AdminLayout from "./layout/AdminLayout"
import { useState } from "react"
import Table from "./admin/components/Table"

function App() {
  const [auth, setAuth] = useState(false)
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="" element={<Main />} />
          <Route path="region/:continent" element={<Region />} />
          <Route path="details/:name" element={<Details />} />
        </Route>

        {
          auth &&
          <Route>
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="" element={<Table />} />
            </Route>
          </Route>
        }
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App
