import AuthNavbar from "../components/Shared/AuthNavbar";

const SetNewPassword = () => {
   
  return (
    <div>
      <AuthNavbar />
      <div className="max-w-[1920px] mx-auto">
        <div className="bg-white rounded-[12px] m-[30px] h-[920px]">
          <div className="2xl:p-[50px] lg:p-[30px] flex justify-center items-center">
            <div className="2xl:w-[710px] lg:w-[710px] 2xl:h-[564px] lg:h-[564px] rounded-[10px] border-[1px] border-[#E5E5E5] p-[70px] 2xl:mt-[150px] lg:mt-[50px]">
              <h1 className="text-secondaryColor text-[24px] font-Poppins font-semibold leading-[31.2px ]">
                Set a new password
              </h1>
              <p className="text-[#888] text-[18px] mt-[5px] font-Poppins font-normal leading-[23.4px]">
                Create a new password. Ensure it differs from <br />
                previous ones for security
              </p>

              <form className="mt-[30px]">
                <div className="flex flex-col gap-[10px]">
                  <label
                    className="text-[#666] text-[18px] font-Poppins font-normal leading-[23.4px]"
                    htmlFor=" Password"
                  >
                   Password
                  </label>

                  <input
                    className="w-full h-[51px] rounded-[6px] border-[1px] border-[#E5E5E5] bg-white outline-0 pl-5 text-[18px] font-Poppins font-normal  placeholder-secondaryColor"
                    type="password"
                    placeholder="Enter your new password"
                  />
                 </div>

                <div className="flex flex-col gap-[10px] mt-[30px] relative">
                  <label
                    className="text-[#666] text-[18px] font-Poppins font-normal leading-[23.4px]"
                    htmlFor="Password"
                  >
                    Confirm Password
                  </label>

                  <input
                    className="w-full h-[51px] rounded-[6px] border-[1px] border-[#E5E5E5] bg-white outline-0 pl-5 text-[18px] font-Poppins font-normal  placeholder-secondaryColor"
                     type="password"
                    placeholder="Re-enter password"
                  />

                  <div
                    className="absolute top-[46px] right-4 cursor-pointer"
                  
                  >
                   
                  </div>
                </div>

               

                <button className="bg-[#F6F6F6] rounded-[6px] mt-[30px] w-full h-[51px] text-btnColor text-[18px] text-center font-Poppins font-medium leading-[18px] hover:bg-btn-hover hover:duration-300 hover:text-white ease-in">
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetNewPassword;
