import { Link, Outlet } from "react-router-dom"
import Navbar from "../Shared/Navbar"

const MainLayout = () => {
  return (
    <div>
        <Navbar/>


        <div className="mt-10 lg:flex flex flex-col gap-3">
          <Link to={'/login'} className="bg-blue-400 px-8 py-2 text-white mb-2 w-[180px]">Login page</Link>
          <Link to={'/forgot-password'} className="bg-blue-400 px-8 py-2 text-white mb-2 w-[250px]">Forgot password page</Link>
          <Link to={'/verify-code'} className="bg-blue-400 px-8 py-2 text-white mb-2 w-[180px]">Verify page</Link>
          <Link to={'/new-password'} className="bg-blue-400 px-8 py-2 text-white mb-2 w-[250px]">New Password page</Link>
        </div>




        <Outlet/>
         <div className="mt-10">
         যেহেতু মানব পরিবারের সকল সদস্যের সমান ও অবিচ্ছেদ্য অধিকারসমূহ
         </div>
    </div>
  )
}

export default MainLayout