import React ,{useContext} from 'react'
import { AuthContext } from '../Context/AuthContext';
export const Navbar = () => {
  const {isAuth,onLogin,onLogout}=useContext(AuthContext);
  return (
    <div>
        Navbar:{ `${isAuth}`}   
        <button onClick={()=>{
            if(isAuth){
                onLogout()
            }
            else{
                onLogin()
            }
        
        }}>{isAuth? "Logout":"Login"}</button>
    </div>
  )
}