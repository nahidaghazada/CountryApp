import { Outlet } from "react-router-dom"
import Header from "../admin/components/Header"
import Footer from "../admin/components/Footer"

function AdminLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default AdminLayout
