import AuthNavbar from "../components/Shared/AuthNavbar";
import successIcon from "../assets/success.png"
import { Link } from "react-router-dom";


const SuccessMessage = () => {
 

  return (
    <div className="bg-white lg:bg-[#F9FAFE]">
      <div className="lg:block hidden">
        <AuthNavbar />
      </div>

      <div className="max-w-[1920px] mx-auto pt-[186px] lg:pt-0">
        <div className="bg-white rounded-[12px] lg:m-[30px] 2xl:h-full lg:h-full md:h-full h-[600px]">
          <div className="2xl:p-[50px] lg:p-[30px] md:p-[50px] p-4 flex justify-center items-center">
            <div className="2xl:w-[710px] lg:w-[710px] 2xl:h-[439px] lg:h-[439px] w-full h-full rounded-[10px] border-[1px] border-[#E5E5E5] lg:p-[70px] md:p-[70px] p-4 2xl:mt-[150px] lg:mt-[50px]">
             
              <div className="flex flex-col justify-center items-center">
              <img className="md:w-[100px] md:h-[100px] w-[70px] h-[70px] rounded-full object-contain " src={successIcon} alt="succes icon" />
               
              <h1 className="md:mt-[30px] mt-6 text-secondaryColor md:text-[24px] text-[18px] font-Poppins font-semibold md:leading-[31.2px] leading-[18px]">
                Forgot password
              </h1>

              <p className="text-[#888] md:text-[18px] text-[14px] text-center md:mt-[10px] mt-2 font-Poppins font-normal md:leading-[23.4px] leading-[18px] w-[222px] md:w-full">
              Congratulation! Your password has been changed. Click continue to sing in
              </p>

              <Link to="/login"
                  className={`bg-btn-hover rounded-[6px] lg:mt-[30px] mt-[24px] w-full h-[51px] text-white lg:text-[18px] md:text-[18px] text-[14px] font-Poppins font-medium leading-[18px] flex justify-center items-center
                   `}
                  
                >
                 Continue
                </Link>

              </div>
              
                  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
