import { Outlet } from "react-router-dom"
import Navbar from "../Shared/Navbar"

const MainLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
         <div>
         যেহেতু মানব পরিবারের সকল সদস্যের সমান ও অবিচ্ছেদ্য অধিকারসমূহ
         </div>
    </div>
  )
}

export default MainLayout