import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import VerifyCode from "../pages/VerifyCode";
import SetNewPassword from "../pages/SetNewPassword";


const routes = createBrowserRouter([
    {
        path:'/',
        element:<App/>,    
    },
    
   






    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/forgot-password',
        element:<ForgotPassword/>
    },
    {
        path:'/verify-code',
        element:<VerifyCode/>
    },
    {
        path:'/new-password',
        element:<SetNewPassword/>
    }
])


export default routes