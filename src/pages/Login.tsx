import { useState } from "react";
import AuthNavbar from "../components/Shared/AuthNavbar"
import { FiEye, FiEyeOff } from "react-icons/fi";
import loginImage from "../assets/login.png"
import { Link } from "react-router-dom";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };


  return (
    <div className="bg-white lg:bg-[#F9FAFE]">
      <div className="lg:block hidden">
      <AuthNavbar/>
      </div>

        <h1 className="lg:hidden block text-secondaryColor text-[24px] font-Poppins font-semibold text-center pt-[108px] pb-[47px]">Tailor Management</h1>
      
      <div className="max-w-[1920px] mx-auto">
       
       <div className="bg-white rounded-[12px] lg:m-[30px] 2xl:h-[920px] lg:h-[920px] h-[600px]">
      
           <div className="2xl:p-[50px] lg:p-[30px] p-4 flex 2xl:gap-[115px] lg:gap-16">
              <div className="2xl:w-[670px] lg:w-[550px] 2xl:h-[508px] lg:h-[500px] w-full rounded-[10px] border-[1px] border-[#E5E5E5] 2xl:p-[50px] lg:p-[40px] p-4">
                 
                  <h1 className="text-secondaryColor lg:text-[24px] text-[18px] font-Poppins font-semibold leading-[31.2px ]">Sign In Your Account</h1>
                  <p className="text-[#888] lg:text-[18px] text-[14px] mt-[5px] font-Poppins font-normal leading-[23.4px]">Enter your basic information to sign in</p>


                  <form className="lg:mt-[30px] mt-[24px]">

                    <div className="flex flex-col gap-[10px]">
                      <label className="text-[#666] text-[18px] font-Poppins font-normal leading-[23.4px]" htmlFor="Phone or Email">Phone or Email</label>

                       <input className="w-full h-[51px] rounded-[6px] border-[1px] border-[#E5E5E5] bg-white outline-0 pl-5 text-[18px] font-Poppins font-normal  placeholder-secondaryColor" type="text" placeholder="programmer15@gmail.com" />
                    </div> 
                    
                    <div className="flex flex-col gap-[10px] lg:mt-[30px] mt-[24px] relative">
                      <label className="text-[#666] text-[18px] font-Poppins font-normal leading-[23.4px]" htmlFor="Password">Password</label>

                       <input className="w-full h-[51px] rounded-[6px] border-[1px] border-[#E5E5E5] bg-white outline-0 pl-5 text-[18px] font-Poppins font-normal  placeholder-secondaryColor" type={isPasswordVisible ? 'text' : 'password'} />

                       <div className="absolute top-[46px] right-4 cursor-pointer" onClick={togglePasswordVisibility}>
                       {isPasswordVisible ? <FiEye size={24} /> : <FiEyeOff size={24} />}
                      </div>

                    </div>


                     <div className="mt-[10px] flex justify-between items-center">
                        <span className="flex gap-[10px] items-center">
                          <input className="size-6 rounded-[4px] border-[1px] border-[#E5E5E5]" type="checkbox" name="" id="" />
                          <p className="text-[#666] lg:text-[18px] text-[14px] font-Poppins font-normal leading-[23.4px]">Remember me</p>
                        </span>

                         <Link to={"/forgot-password"} className="text-primaryColor lg:text-[18px] text-[14px] font-Poppins font-normal leading-[23.4px] cursor-pointer">
                         Forgot password?
                         </Link>
                     </div>

                      <button className="bg-[#F6F6F6] rounded-[6px] lg:mt-[30px] mt-[24px] w-full h-[51px] text-btnColor text-[18px] text-center font-Poppins font-medium leading-[18px] hover:bg-btn-hover hover:duration-300 hover:text-white ease-in">Sign In</button>

                  </form>


              </div>

               <div className="2xl:w-[975px] 2xl:h-[696px] lg:w-[660px] lg:h-[500px] lg:block hidden">
                 <img className="w-full h-full" src={loginImage} alt="" />
               </div>
           </div>
         </div>
       </div>
    
</div>
  
  )
}

export default Login