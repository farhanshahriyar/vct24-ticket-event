import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"


const Root = () => {
  return (
    <div>
        <Header/>
        <div className="max-w-6xl mx-auto font-sara">
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Root
