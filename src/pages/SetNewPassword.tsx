// import { useState } from "react";
// import AuthNavbar from "../components/Shared/AuthNavbar";
// import { FiEye, FiEyeOff } from "react-icons/fi";

// const SetNewPassword = () => {


//    //show hide pssword
//    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//    const [isPasswordConfirmVisible, setIsPasswordConfirmVisible] = useState(false);
  
//    const togglePasswordVisibility = () => {
//     setIsPasswordVisible(!isPasswordVisible);
//   };

//    //show hide confirm pssword
//    const togglePasswordConfirmVisibility = () => {
//     setIsPasswordConfirmVisible(!isPasswordConfirmVisible);
//   };



   
//   return (
//     <div className="bg-white lg:bg-[#F9FAFE]">
//       <div className="lg:block hidden">
//         <AuthNavbar />
//       </div>

//       <div className="max-w-[1920px] mx-auto pt-[186px] lg:pt-0">
//         <div className="bg-white rounded-[12px] lg:m-[30px] 2xl:h-full lg:h-full md:h-full h-[600px]">
//           <div className="2xl:p-[50px] lg:p-[30px] md:p-[50px] p-4 flex justify-center items-center">
//             <div className="2xl:w-[710px] lg:w-[710px] 2xl:h-[564px] lg:h-[564px] rounded-[10px] border-[1px] border-[#E5E5E5] lg:p-[70px] md:p-[70px] p-4 2xl:mt-[150px] lg:mt-[50px]">
//               <h1 className="text-secondaryColor md:text-[24px] text-[18px] font-Poppins font-semibold md:leading-[31.2px] leading-[18px]">
//                 Set a new password
//               </h1>
//               <p className="text-[#888] md:text-[18px] text-[14px] mt-[5px] font-Poppins font-normal md:leading-[23.4px] leading-[18px]">
//                 Create a new password. Ensure it differs from <br />
//                 previous ones for security
//               </p>

//               <form className="md:mt-[30px] mt-6">
//                 <div className="flex flex-col gap-[10px] relative">
//                   <label
//                     className="text-[#666] md:text-[18px] text-[14px] font-Poppins font-normal md:leading-[23.4px] leading-[18px]"
//                     htmlFor=" Password"
//                   >
//                    Password
//                   </label>

//                   <input
//                     className=" w-full h-[51px] rounded-[6px] border-[1px] border-[#E5E5E5] bg-white outline-0 pl-5 md:text-[18px] text-[14px] font-Poppins font-normal  placeholder-secondaryColor"
//                     type={isPasswordVisible ? "text" : "password"}
//                     placeholder="Enter your new password"
//                   />
                   
//                    <div
//                     className="absolute md:top-[46px] top-[41px] right-4 cursor-pointer"
//                     onClick={togglePasswordVisibility}
//                   >
//                     {isPasswordVisible ? (
//                       <FiEye size={24} />
//                     ) : (
//                       <FiEyeOff size={24} />
//                     )}
//                   </div>

//                  </div>

//                 <div className="flex flex-col gap-[10px] md:mt-[30px] mt-4 relative">
//                   <label
//                     className="text-[#666] md:text-[18px] text-[14px] font-Poppins font-normal md:leading-[23.4px] leading-[18px]"
//                     htmlFor="Password"
//                   >
//                     Confirm Password
//                   </label>

//                   <input
//                     className="w-full h-[51px] rounded-[6px] border-[1px] border-[#E5E5E5] bg-white outline-0 pl-5 md:text-[18px] text-[14px] font-Poppins font-normal  placeholder-secondaryColor"
//                     type={isPasswordConfirmVisible ? "text" : "password"}
//                     placeholder="Re-enter password"
//                   />

//                      <div
//                     className="absolute md:top-[46px] top-[41px] right-4 cursor-pointer"
//                     onClick={togglePasswordConfirmVisibility}
//                   >
//                     {isPasswordConfirmVisible ? (
//                       <FiEye size={24} />
//                     ) : (
//                       <FiEyeOff size={24} />
//                     )}
//                   </div>
//                 </div>

               

//                 <button className="bg-[#F6F6F6] rounded-[6px] md:mt-[30px] mt-6  w-full h-[51px] text-btnColor md:text-[18px] text-[14px] text-center font-Poppins font-medium leading-[18px]">
//                 Update Password
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SetNewPassword;






import { useState } from "react";
import { useForm } from "react-hook-form";
import AuthNavbar from "../components/Shared/AuthNavbar";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

interface FormValues {
  password: string;
  confirmPassword: string;
}

const SetNewPassword = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordConfirmVisible, setIsPasswordConfirmVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const togglePasswordConfirmVisibility = () => {
    setIsPasswordConfirmVisible(!isPasswordConfirmVisible);
  };

  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  const isPasswordMatch = password === confirmPassword && password !== "";

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="bg-white lg:bg-[#F9FAFE]">
      <div className="lg:block hidden">
        <AuthNavbar />
      </div>

      <div className="max-w-[1920px] mx-auto pt-[186px] lg:pt-0">
        <div className="bg-white rounded-[12px] lg:m-[30px] 2xl:h-full lg:h-full md:h-full h-[600px]">
          <div className="2xl:p-[50px] lg:p-[30px] md:p-[50px] p-4 flex justify-center items-center">
            <div className="2xl:w-[710px] lg:w-[710px] 2xl:h-[537px] lg:h-[537px] w-full h-full rounded-[10px] border-[1px] border-[#E5E5E5] lg:p-[70px] md:p-[70px] p-4 2xl:mt-[150px] lg:mt-[50px]">
              <h1 className="text-secondaryColor md:text-[24px] text-[18px] font-Poppins font-semibold md:leading-[31.2px] leading-[18px]">
                Set a new password
              </h1>
              <p className="text-[#888] md:text-[18px] text-[14px] mt-[5px] font-Poppins font-normal md:leading-[23.4px] leading-[18px]">
                Create a new password. Ensure it differs from <br />
                previous ones for security
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="md:mt-[30px] mt-6">
                <div className="flex flex-col gap-[10px] relative">
                  <label
                    className="text-[#666] md:text-[18px] text-[14px] font-Poppins font-normal md:leading-[23.4px] leading-[18px]"
                    htmlFor="password"
                  >
                    Password
                  </label>

                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Enter your new password"
                    className="w-full h-[51px] rounded-[6px] border-[1px] border-[#E5E5E5] bg-white outline-0 pl-5 md:text-[18px] text-[14px] font-Poppins font-normal placeholder-secondaryColor"
                  />
                  <div
                    className="absolute md:top-[46px] top-[41px] right-4 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {isPasswordVisible ? <FiEye size={24} /> : <FiEyeOff size={24} />}
                  </div>
                  {errors.password && (
                    <span className="text-[#FF5151] md:text-[18px] text-[14px] font-normal font-Poppins">
                      {errors.password.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-[10px] md:mt-[30px] mt-4 relative">
                  <label
                    className="text-[#666] md:text-[18px] text-[14px] font-Poppins font-normal md:leading-[23.4px] leading-[18px]"
                    htmlFor="confirmPassword"
                  >
                    Confirm Password
                  </label>

                  <input
                    {...register("confirmPassword", {
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                    type={isPasswordConfirmVisible ? "text" : "password"}
                    placeholder="Re-enter password"
                    className="w-full h-[51px] rounded-[6px] border-[1px] border-[#E5E5E5] bg-white outline-0 pl-5 md:text-[18px] text-[14px] font-Poppins font-normal placeholder-secondaryColor"
                  />
                  <div
                    className="absolute md:top-[46px] top-[41px] right-4 cursor-pointer"
                    onClick={togglePasswordConfirmVisibility}
                  >
                    {isPasswordConfirmVisible ? <FiEye size={24} /> : <FiEyeOff size={24} />}
                  </div>
                  {errors.confirmPassword && (
                    <span className="text-[#FF5151] md:text-[18px] text-[14px] font-normal font-Poppins ">
                      {errors.confirmPassword.message}
                    </span>
                  )}
                </div>

                <Link to="/success">
                <button
                  className={`rounded-[6px] md:mt-[30px] mt-6 w-full h-[51px] text-[14px] md:text-[18px] text-center font-Poppins font-medium leading-[18px] ${
                    isPasswordMatch ? "bg-btn-hover text-white" : "bg-[#F6F6F6] text-btnColor cursor-not-allowed"
                  }`}
                  type="submit"
                  disabled={!isPasswordMatch}
                >
                  Update Password
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

export default SetNewPassword;
