import React,{useContext} from 'react'
import { ThemeContext } from '../Context/ThemeProvider'
export const Button = () => {
    const {changeTheme}=useContext(ThemeContext)
  return (
    <button onClick={changeTheme}>Button</button>
  )
}