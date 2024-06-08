import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

const MainLayout = () => {
  return (
    <div className="flex">
        <Sidebar/>




        <Outlet/>
         <div className="mt-10">
         যেহেতু মানব পরিবারের সকল সদস্যের সমান ও অবিচ্ছেদ্য অধিকারসমূহ
         </div>
    </div>
  )
}

export default MainLayout