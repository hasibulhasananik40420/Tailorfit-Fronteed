import { IoCloseOutline } from "react-icons/io5";
import DashBoardLogo from "../ui/DashBoardLogo/DashBoardLogo"
import DashboardFooter from "../ui/DashBoardLogo/DashboardFooter"

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar = ({isOpen,onClose}:MobileSidebarProps) => {
 
   

  return (
    <div className="">
         

      <div className={`fixed top-0 left-0 h-screen w-[252px] md:w-[320px] z-50 sidebarColor p-4 text-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
     
      <div className="flex items-center gap-5">
      <DashBoardLogo />
      <IoCloseOutline onClick={onClose} className="size-6 text-white"/>
      </div>


     {/*!!!!!!!!!!!!!!!! main content !!!!!!!!!!!!!!!!!1  */}
     





      <DashboardFooter />
    </div>
    </div>
  )
}

export default MobileSidebar