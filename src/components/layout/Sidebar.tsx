
import { NavLink } from "react-router-dom";
import plus from "../../assets/plus.png";
import { sidebarItemsGenerator } from "../../utils/sidebarItemGenerator";
import { personPaths } from "../../routes/person.routes";
import { useEffect, useState } from "react";
import MobileSidebar from "./MobileSidebar";
import DashBoardLogo from "../ui/DashBoardLogo/DashBoardLogo";
import DashboardFooter from "../ui/DashBoardLogo/DashboardFooter";
import { TSidebarItem } from "../../types";

const Sidebar = () => {
  const userRole = {
    ADMIN: 'admin',
    USER: 'user',
    COMPANY: 'company',
  };

  // let sidebarItems;
  let sidebarItems: TSidebarItem[] = [];

  // Assuming 'person' role is hardcoded for this example
  switch ('user') {
    case userRole.USER:
      sidebarItems = sidebarItemsGenerator(personPaths, userRole.USER);
      break;
    // Add more cases if needed for other roles
    default:
      break;
  }


  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);

  useEffect(() => {
    const currentPath = location.pathname.split('/')[2]; 
    const activeItem = personPaths.find(item => item.path === currentPath);
    if (activeItem) {
      setActiveMenuItem(activeItem.name);
    }
  }, [location.pathname]);

  const handleMenuItemClick = (itemName:string) => {
    setActiveMenuItem(itemName);
  };







  

  return (
    <div>
      <div className="hidden 2xl:block lg:block 2xl:w-[320px] lg:w-[300px] px-5 pt-[30px] h-[100vh] sidebarColor text-white">
       
      <DashBoardLogo/>


      <div className="mt-[30px] flex flex-col 2xl:gap-[30px] lg:gap-5">
        <div
         
          className="bg-[#FF5151] w-full h-[60px] rounded-[6px] flex justify-center items-center gap-[6px]"
        >
          <img className="w-6 h-6" src={plus} alt="plus icon" />
          <h1 className="text-white 2xl:text-[20px] lg:text-[20px] font-medium font-Poppins">
            New Order
          </h1>
        </div>

      

          {/* {sidebarItems?.map((item) => (
          <NavLink
            key={item.key}
            to={item.label.props.to}
            className={({ isActive }) =>
              isActive
                ? 'bg-activeDhcolor w-full h-[60px] rounded-[6px] pl-[15px] flex items-center gap-[15px]'
                : 'bg-transparent w-full h-[60px] rounded-[6px] pl-[15px] flex items-center gap-[15px]'
            }
            onClick={() => handleMenuItemClick(item.key)}
          >
            {item.children ? (
              item.children.map((subItem) => (
                <div key={subItem.key} className="pl-[15px]">
                  {subItem.label}
                </div>
              ))
            ) : (
              <>
                <img
                  className="w-6 h-6"
                  src={activeMenuItem === item.key ? item.icons.active : item.icons.inactive}
                  alt="icon"
                />
                <h1
                  className={`${
                    activeMenuItem === item.key ? 'text-[#FF5151]' : 'text-white'
                  } 2xl:text-[18px] lg:text-[16px] font-medium font-Poppins leading-normal`}
                >
                  {item.label.props.children}
                </h1>
              </>
            )}
          </NavLink>
        ))} */}

        {sidebarItems.map((item) => (
            item.label && typeof item.label === 'object' && 'props' in item.label && 'to' in item.label.props ? (
              <NavLink
                key={item.key}
                to={item.label.props.to}
                className={({ isActive }) =>
                  isActive
                    ? 'bg-activeDhcolor w-full h-[60px] rounded-[6px] pl-[15px] flex items-center gap-[15px]'
                    : 'bg-transparent w-full h-[60px] rounded-[6px] pl-[15px] flex items-center gap-[15px]'
                }
                onClick={() => handleMenuItemClick(item.key)}
              >
                {item.children ? (
                  item.children.map((subItem) => (
                    subItem.label && typeof subItem.label === 'object' && 'props' in subItem.label && 'to' in subItem.label.props ? (
                      <NavLink
                        key={subItem.key}
                        to={subItem.label.props.to}
                        className="pl-[15px]"
                      >
                        {subItem.label}
                      </NavLink>
                    ) : null
                  ))
                ) : (
                  <>
                    <img
                      className="w-6 h-6"
                      src={activeMenuItem === item.key ? item.icons?.active : item.icons?.inactive}
                      alt="icon"
                    />
                    <h1
                      className={`${
                        activeMenuItem === item.key ? 'text-[#FF5151]' : 'text-white'
                      } 2xl:text-[18px] lg:text-[16px] font-medium font-Poppins leading-normal`}
                    >
                      {item.label.props.children}
                    </h1>
                  </>
                )}
              </NavLink>
            ) : null
          ))}



      </div>

      <DashboardFooter/>

    </div>


      <div className="block lg:hidden 2xl:hidden">
        <MobileSidebar isOpen={false} onClose={function (): void {
          throw new Error("Function not implemented.");
        } }/>
      </div>


    </div>
  );
};

export default Sidebar;
