

import { useState, ChangeEvent } from "react";
import AuthNavbar from "../components/Shared/AuthNavbar";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [isEmail, setIsEmail] = useState(false);
  const [isPhone, setIsPhone] = useState(false);

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsEmail(e.target.checked);
    setIsPhone(false);
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsPhone(e.target.checked);
    setIsEmail(false);
  };

  const isButtonEnabled = isEmail || isPhone;

  return (
    <div className="bg-white lg:bg-[#F9FAFE]">
      <div className="lg:block hidden">
        <AuthNavbar />
      </div>
      <div className="max-w-[1920px] mx-auto pt-[186px] lg:pt-0">
        <div className="bg-white rounded-[12px] lg:m-[30px] 2xl:h-full lg:h-full md:h-full h-[600px]">
          <div className="2xl:p-[50px] lg:p-[30px] md:p-[50px] p-4 flex justify-center items-center">
            <div className="2xl:w-[710px] lg:w-[710px] 2xl:h-[392px] lg:h-[392px] w-full h-full rounded-[10px] border-[1px] border-[#E5E5E5] lg:p-[70px] md:p-[70px] p-4 2xl:mt-[150px] lg:mt-[50px]">
              <h1 className="text-secondaryColor md:text-[24px] text-[18px] font-Poppins font-semibold md:leading-[31.2px] leading-[18px]">
                Forgot password
              </h1>
              <p className="text-[#888] md:text-[18px] text-[14px] mt-[5px] font-Poppins font-normal md:leading-[23.4px] leading-[18px] w-[222px] md:w-full">
                Please enter your email to reset the password
              </p>

              <form className="md:mt-[30px] mt-6">
                <div className="flex justify-start ml-[-33px] gap-[30px] items-center">
                  <div className="flex items-center gap-[10px]">
                    <input
                      className="size-[20px] appearance-none"
                      type="radio"
                      name="radioGroup"
                      id="radioButton"
                      checked={isEmail}
                      onChange={handleRadioChange}
                    />
                    <label
                      htmlFor="radioButton"
                      className={`w-[20px] h-[20px] rounded-full border-[2px] bg-white flex items-center justify-center cursor-pointer ${
                        isEmail ? "border-[#F00C89]" : "border-[#E5E5E5]"
                      }`}
                    >
                      {isEmail && (
                        <div className="w-3 h-3 rounded-full bg-[#F00C89]"></div>
                      )}
                    </label>

                    <p className="text-[#666] md:text-[18px] text-[14px] font-Poppins font-normal leading-[23.4px]">
                      Your Email
                    </p>
                  </div>

                  <div className="flex items-center gap-[10px]">
                    <input
                      className="size-[20px] appearance-none"
                      type="radio"
                      name="radioGroup"
                      id="PhoneButton"
                      checked={isPhone}
                      onChange={handlePhoneChange}
                    />
                    <label
                      htmlFor="PhoneButton"
                      className={`w-[20px] h-[20px] rounded-full border-[2px] bg-white flex items-center justify-center cursor-pointer ${
                        isPhone ? "border-[#F00C89]" : "border-[#E5E5E5]"
                      }`}
                    >
                      {isPhone && (
                        <div className="w-3 h-3 rounded-full bg-[#F00C89]"></div>
                      )}
                    </label>
                    <p className="text-[#666] md:text-[18px] text-[14px] font-Poppins font-normal leading-[23.4px]">
                      Phone
                    </p>
                  </div>
                </div>

                <p className="mt-[30px] text-[#888] md:text-[18px] text-[14px] font-Poppins font-normal md:leading-[23.4px] leading-[18px]">
                  We will send the OTP to your{" "}
                  <span className="text-secondaryColor">
                    {isEmail ? "example@email.com" : "+88 01xxxxxxxxx"}
                  </span>
                </p>

                <Link to="/verify-code">
                <button
                  className={`rounded-[6px] md:mt-[30px] mt-6 w-full h-[51px] md:text-[18px] text-[14px] text-center font-Poppins font-medium leading-[18px] ease-in ${
                    isButtonEnabled
                      ? "bg-btn-hover text-white"
                      : "bg-[#F6F6F6] text-[#333] cursor-not-allowed"
                  }`}
                  disabled={!isButtonEnabled}
                >
                  Send Code
                </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

