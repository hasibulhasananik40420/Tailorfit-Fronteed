import AuthNavbar from "../components/Shared/AuthNavbar";

const VerifyCode = () => {
  return (
    <div>
      <AuthNavbar />
      <div className="max-w-[1920px] mx-auto">
        <div className="bg-white rounded-[12px] m-[30px] h-[920px]">
          <div className="2xl:p-[50px] lg:p-[30px] flex justify-center items-center">
            <div className="2xl:w-[710px] lg:w-[710px] 2xl:h-[442px] lg:h-[442px] rounded-[10px] border-[1px] border-[#E5E5E5] p-[70px] 2xl:mt-[150px] lg:mt-[50px]">
              <h1 className="text-secondaryColor text-[24px] font-Poppins font-semibold leading-[31.2px ]">
                Check your phone
              </h1>
              <p className="text-[#888] text-[18px] mt-[5px] font-Poppins font-normal leading-[23.4px]">
                We sent a reset link to{" "}
                <span className="text-secondaryColor">
                  programmer15@gmail.com
                </span>
              </p>
              <p className="text-[#888] text-[18px] font-Poppins font-normal leading-[23.4px]">
                enter 5 digit code that mentioned in the email
              </p>

              <form>
                <div className="mt-[30px] flex justify-start items-center gap-[30px]">
                  <input
                    type="text"
                    maxLength={1}
                    className="w-[60px] h-[60px] rounded-[6px] border-[1px] border-primaryColor bg-white text-center text-[24px] text-secondaryColor font-medium font-Poppins outline-0"
                  />

                  <input
                    type="text"
                    maxLength={1}
                    className="w-[60px] h-[60px] rounded-[6px] border-[1px] border-primaryColor bg-white text-center text-[24px] text-secondaryColor font-medium font-Poppins outline-0"
                  />

                  <input
                    type="text"
                    maxLength={1}
                    className="w-[60px] h-[60px] rounded-[6px] border-[1px] border-primaryColor bg-white text-center text-[24px] text-secondaryColor font-medium font-Poppins outline-0"
                  />

                  <input
                    type="text"
                    maxLength={1}
                    className="w-[60px] h-[60px] rounded-[6px] border-[1px] border-primaryColor bg-white text-center text-[24px] text-secondaryColor font-medium font-Poppins outline-0"
                  />

                  <input
                    type="text"
                    maxLength={1}
                    className="w-[60px] h-[60px] rounded-[6px] border-[1px] border-primaryColor bg-white text-center text-[24px] text-secondaryColor font-medium font-Poppins outline-0"
                  />
                </div>

                <button className="bg-[#F6F6F6] rounded-[6px] mt-[30px] w-full h-[51px] text-btnColor text-[18px] text-center font-Poppins font-medium leading-[18px] hover:bg-btn-hover hover:duration-300 hover:text-white ease-in">
                  Send Code
                </button>

                 <div className="mt-[20px]">
                  <p className="text-secondaryColor text-center text-[18px] font-normal leading-[23.4px] font-Poppins cursor-pointer"> Haven’t got the email yet? <span className="text-primaryColor underline font-medium font-Poppins leading-[23.4px]">Resend code</span></p>
                 </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
