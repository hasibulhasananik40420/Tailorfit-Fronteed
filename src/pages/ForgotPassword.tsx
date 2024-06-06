import AuthNavbar from "../components/Shared/AuthNavbar"

const ForgotPassword = () => {
  return (
    <div>
    <AuthNavbar/>
   <div className="max-w-[1920px] mx-auto">
    
    <div className="bg-white rounded-[12px] m-[30px] h-[920px]">
   
        <div className="2xl:p-[50px] lg:p-[30px] flex justify-center items-center">
           <div className="2xl:w-[710px] lg:w-[710px] 2xl:h-[392px] lg:h-[392px] rounded-[10px] border-[1px] border-[#E5E5E5] p-[70px] 2xl:mt-[150px] lg:mt-[50px]">
              
               <h1 className="text-secondaryColor text-[24px] font-Poppins font-semibold leading-[31.2px ]">Forgot password</h1>
               <p className="text-[#888] text-[18px] mt-[5px] font-Poppins font-normal leading-[23.4px]">Please enter your email to reset the password</p>


               <form className="mt-[30px]">

                 <div className="flex gap-[30px] items-center">
                 <div className="flex items-center gap-[10px]">
                     <input className="size-[20px]" type="radio" name="" id="" />
                      <p className="text-[#666] text-[18px font-Poppins font-normal leading-[23.4px]">Your Email </p>
                  </div>
                
                  <div className="flex items-center gap-[10px]">
                     <input className="size-[20px]" type="radio" name="" id="" />
                      <p className="text-[#666] text-[18px font-Poppins font-normal leading-[23.4px]">Phone </p>
                  </div>
                 </div>

                  <p className="mt-[30px] text-[#888] text-[18px font-Poppins font-normal leading-[23.4px]">We will send the OTP in your email <span className="text-secondaryColor">example@email.com</span></p>
                


                  

                   <button className="bg-[#F6F6F6] rounded-[6px] mt-[30px] w-full h-[51px] text-btnColor text-[18px] text-center font-Poppins font-medium leading-[18px] hover:bg-btn-hover hover:duration-300 hover:text-white ease-in">Send Code</button>

               </form>


           </div>

            
        </div>
      </div>
    </div>
 
</div>
  )
}

export default ForgotPassword