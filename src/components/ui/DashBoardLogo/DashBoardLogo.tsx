import logo from "../../../assets/dashbardLogo.png";

const DashBoardLogo = () => {
  return (
    <div className="flex items-center gap-[20px]">
        <div className="2xl:w-[60px] 2xl:h-[60px] w-[50px] h-[50px] rounded-[10px] bg-logoBg flex justify-center items-center">
          <img
            className="w-[28px] 2xl:h-[50px] h-[40px] object-contain"
            src={logo}
            alt="logo"
          />
        </div>
        <div>
          <h1 className="text-white 2xl:text-[24px] lg:text-[18px] font-semibold font-Poppins">
            Raid & Tailor
          </h1>
        </div>

        
      </div>
  )
}

export default DashBoardLogo