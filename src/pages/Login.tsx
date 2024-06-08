import { ChangeEvent, useState } from "react";
import AuthNavbar from "../components/Shared/AuthNavbar";
import { FiEye, FiEyeOff } from "react-icons/fi";
import loginImage from "../assets/login.png";
import { Link } from "react-router-dom";
import { GrFormCheckmark } from "react-icons/gr";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handlePasswordChange = (e:ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="bg-white lg:bg-[#F9FAFE]">
      <div className="lg:block hidden">
        <AuthNavbar />
      </div>

      <h1 className="lg:hidden block text-secondaryColor text-[24px] font-Poppins font-semibold text-center pt-[108px] pb-[47px]">
        Tailor Management
      </h1>

      <div className="max-w-[1920px] mx-auto">
        <div className="bg-white rounded-[12px] lg:m-[30px] 2xl:h-full lg:h-full md:h-full h-[600px]">
          <div className="2xl:p-[50px] lg:p-[30px] md:p-[50px] p-4 flex 2xl:gap-[115px] lg:gap-16">
            <div className="2xl:w-[670px] lg:w-[550px] 2xl:h-[508px] lg:h-[500px] w-full rounded-[10px] border-[1px] border-[#E5E5E5] 2xl:p-[50px] lg:p-[40px] md:p-[50px] p-4">
              <h1 className="text-secondaryColor lg:text-[24px] md:text-[24px] text-[18px] font-Poppins font-semibold leading-[31.2px ]">
                Sign In Your Account
              </h1>
              <p className="text-[#888] lg:text-[18px] md:text-[18px] text-[14px] mt-[5px] font-Poppins font-normal leading-[23.4px]">
                Enter your basic information to sign in
              </p>

              <form className="lg:mt-[30px] mt-[24px]">
                <div className="flex flex-col gap-[10px]">
                  <label
                    className="text-[#666] lg:text-[18px] md:text-[18px] text-[14px] font-Poppins font-normal leading-[23.4px]"
                    htmlFor="Phone or Email"
                  >
                    Phone or Email
                  </label>

                  <input
                    className="w-full h-[51px] rounded-[6px] border-[1px] border-[#E5E5E5] bg-white outline-0 pl-5 text-[18px] font-Poppins font-normal placeholder-secondaryColor"
                    type="text"
                    placeholder="programmer15@gmail.com"
                  />
                </div>

                <div className="flex flex-col gap-[10px] lg:mt-[30px] mt-[24px] relative">
                  <label
                    className="text-[#666] lg:text-[18px] md:text-[18px] text-[14px] font-Poppins font-normal leading-[23.4px]"
                    htmlFor="Password"
                  >
                    Password
                  </label>

                  <input
                    className="w-full h-[51px] rounded-[6px] border-[1px] border-[#E5E5E5] bg-white outline-0 pl-5 text-[18px] font-Poppins font-normal placeholder-secondaryColor"
                    type={isPasswordVisible ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
                  />

                  <div
                    className="absolute top-[46px] right-4 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {isPasswordVisible ? (
                      <FiEye size={24} />
                    ) : (
                      <FiEyeOff size={24} />
                    )}
                  </div>
                </div>

                <div className="mt-[10px] flex justify-between items-center">
                  <span className="flex gap-[10px] items-center">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      className="hidden peer"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    <label
                      htmlFor="rememberMe"
                      className={`lg:w-6 lg:h-6 md:w-6 md:h-6 w-[20px] h-[20px] border-[1px] border-[#E5E5E5] rounded-[4px] flex items-center justify-center cursor-pointer relative ${
                        isChecked
                          ? "bg-btn-hover"
                          : ""
                      }`}
                    >
                      {isChecked && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <GrFormCheckmark className="lg:size-6 md:size-6 size-4 text-white" />
                        </div>
                      )}
                    </label>

                    <p className="text-[#666] lg:text-[18px] md:text-[18px] text-[14px] font-Poppins font-normal leading-[23.4px]">
                      Remember me
                    </p>
                  </span>

                  <Link
                    to={"/forgot-password"}
                    className="text-primaryColor lg:text-[18px] md:text-[18px] text-[14px] font-Poppins font-normal leading-[23.4px] cursor-pointer"
                  >
                    Forgot password?
                  </Link>
                </div>

                <button
                  className={`rounded-[6px] lg:mt-[30px] mt-[24px] w-full h-[51px] text-white lg:text-[18px] md:text-[18px] text-[14px] text-center font-Poppins font-medium leading-[18px] ease-in ${
                    password
                      ? "bg-btn-hover"
                      : "bg-[#F6F6F6] text-[#333] cursor-not-allowed"
                  }`}
                  disabled={!password}
                >
                  Sign In
                </button>
              </form>
            </div>

            <div className="2xl:w-[975px] 2xl:h-[696px] lg:w-[660px] lg:h-[500px] lg:block hidden">
              <img className="w-full h-full" src={loginImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
