import { CiSearch } from "react-icons/ci";
import belIcon from '../../assets/belIcon.png'
import userIcon from '../../assets/userIcon.png'
import { HiMenuAlt2 } from "react-icons/hi";
import { useState } from "react";
import MobileSidebar from "../layout/MobileSidebar";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
  <div className="lg:mb-[30px] mb-4">
    
    <div className="flex justify-between items-center w-full">
   <div className="w-auto flex items-center gap-[10px]">
    <HiMenuAlt2 onClick={toggleSidebar} className="size-6 text-secondaryColor lg:hidden block"/>
    <h1 className="lg:text-[32px] text-[18px] text-secondaryColor font-Poppins font-semibold">Dashboard</h1>
  </div>

  <div className="w-auto  flex items-center gap-[30px]">
   <div className="relative lg:block hidden">
   <input
      className="w-[380px] h-[50px] bg-white rounded-[40px] outline-0 pl-12 text-[#999] text-[18px] font-normal font-Poppins placeholder-[#999] placeholder:text-[18px] placeholder:font-Poppins placeholder:font-normal"
      type="text"
      placeholder="Search Customer"
      style={{ border: '1px solid rgba(0, 0, 0, 0.10)', boxShadow: '0px 0px 25px 0px rgba(25, 93, 142, 0.05)' }}
    />
     <span className=" absolute top-4 lg:top-4 2xl:top-[14px] left-5">
     <CiSearch className="text-[#999999] size-6"/>
     </span>
   </div>

    <div className="flex items-center gap-5">
        <span className="bg-white lg:w-[50px] lg:h-[50px] w-[35px] h-[35px] rounded-full flex justify-center items-center cursor-pointer" style={{boxShadow:'(0px 0px 25px rgba(25, 93, 142, 0.05)'}}>
          <img className="lg:w-6 lg:h-6 w-5 h-5" src={belIcon} alt="belIcon" />
        </span> 
        
         <span className="bg-white lg:w-[50px] lg:h-[50px] w-[35px] h-[35px] rounded-full flex justify-center items-center cursor-pointer" style={{boxShadow:'(0px 0px 25px rgba(25, 93, 142, 0.05)'}}>
          <img className="lg:w-6 lg:h-6 w-5 h-5" src={userIcon} alt="userIcon" />
        </span>
    </div>


   

  </div>
  
</div>

<div className="relative lg:hidden block mt-[8px]">
   <input
      className="w-full h-[45px] bg-white rounded-[40px] outline-0 pl-12 text-[#999] text-[14px] font-normal font-Poppins placeholder-[#999] placeholder:text-[14px] placeholder:font-Poppins placeholder:font-normal"
      type="text"
      placeholder="Search Customer"
      style={{ border: '1px solid rgba(0, 0, 0, 0.10)', boxShadow: '0px 0px 25px 0px rgba(25, 93, 142, 0.05)' }}
    />
     <span className=" absolute top-3 left-5">
     <CiSearch className="text-[#999999] size-5"/>
     </span>
   </div>


    <div className="lg:hidden block">
    <MobileSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </div>
  </div>

 
  )
}

export default Navbar