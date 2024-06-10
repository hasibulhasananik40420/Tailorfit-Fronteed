import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Navbar from "../Shared/Navbar"

const MainLayout = () => {
  return (
    <div className="lg:flex">
        <Sidebar/>




       <div className="lg:p-[30px] p-4 w-full">
        <Navbar/>
        <Outlet/>
       </div>
         
    </div>
  )
}

export default MainLayout