import { ChangeEvent, useRef, useState } from "react";
import AuthNavbar from "../components/Shared/AuthNavbar";
import { Link } from "react-router-dom";

const VerifyCode = () => {
  

  const [code, setCode] = useState<string[]>(["", "", "", "", ""]);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleInputChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const newCode = [...code];
  
    if (/^[0-9]$/.test(value) || value === "") {
      newCode[index] = value;
      setCode(newCode);
      if (value !== "" && index < code.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    } else {
     
      newCode[index] = "";
      setCode(newCode);
    }
  };

  const handleInputFocus = (index: number) => () => {
    inputRefs.current[index]?.select();
  };

  const isButtonEnabled = code.every((digit) => digit !== "");
  


  return (
    <div className="bg-white lg:bg-[#F9FAFE]">
       <div className="lg:block hidden">
        <AuthNavbar />
      </div>
      <div className="max-w-[1920px] mx-auto pt-[186px] lg:pt-0">
        <div className="bg-white rounded-[12px] lg:m-[30px] 2xl:h-full lg:h-full md:h-full h-[600px]">
          <div className="2xl:p-[50px] lg:p-[30px] md:p-[50px] p-4 flex justify-center items-center">
            <div className="2xl:w-[710px] lg:w-[710px] 2xl:h-[442px] lg:h-[442px] w-full h-full rounded-[10px] border-[1px] border-[#E5E5E5] lg:p-[70px] md:p-[70px] p-4 2xl:mt-[150px] lg:mt-[50px]">
              <h1 className="text-secondaryColor md:text-[24px] text-[18px] font-Poppins font-semibold md:leading-[31.2px] leading-[18px]">
                Check your phone
              </h1>
              <p className="text-[#888] md:text-[18px] text-[14px] mt-[5px] font-Poppins font-normal md:leading-[23.4px] leading-[18px]">
                We sent a reset link to{" "}
                <span className="text-secondaryColor">
                  programmer15@gmail.com
                </span>
              </p>
              <p className="text-[#888] md:text-[18px] text-[14px] font-Poppins font-normal md:leading-[23.4px] leading-[18px]">
                enter 5 digit code that mentioned in the email
              </p>

              <form>
                <div className="md:mt-[30px] mt-6 flex justify-start items-center md:gap-[30px] gap-[12px]">
                {code.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength={1}
                      value={digit}
                      ref={(el) => (inputRefs.current[index] = el as HTMLInputElement)}
                      onChange={handleInputChange(index)}
                      onFocus={handleInputFocus(index)}
                      className={`md:w-[60px] md:h-[60px] w-[45px] h-[45px] rounded-[6px] border-[1px] ${
                        digit !== "" && !/^[0-9]$/.test(digit)
                          ? "border-[1.5px] border-[#F00C89]"
                          : digit !== ""
                          ? "border-[1.5px] border-[#F00C89]"
                          : "border-[1.5px] border-[#E5E5E5]"
                      } bg-white text-center text-[24px] text-secondaryColor font-medium font-Poppins outline-0`}
                    />
                  ))}

                  
                </div>

                <Link to="/new-password">
                <button
                  type="submit"
                  className={`rounded-[6px] mt-[30px] w-full h-[51px] md:text-[18px] text-[14px] text-center font-Poppins font-medium leading-[18px] ease-in ${
                    isButtonEnabled
                      ? "bg-btn-hover text-white"
                      : "bg-[#F6F6F6] text-[#333] cursor-not-allowed"
                  }`}
                  disabled={!isButtonEnabled}
                >
                 Verify Code
                </button>
                </Link>

                 <div className="mt-[20px]">
                  <p className="text-secondaryColor text-center md:text-[18px] text-[14px] font-normal md:leading-[23.4px] leading-[18px] font-Poppins cursor-pointer"> Haven’t got the email yet? <span className="text-primaryColor underline font-medium font-Poppins md:leading-[23.4px] leading-[18px]">Resend code</span></p>
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
