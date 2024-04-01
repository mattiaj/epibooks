import React, { useContext } from 'react';
import { themeContext } from '../../context/ThemeContextProvider';


export default function Welcome() {

  const {theme} = useContext(themeContext)

  return (
    
    <div className={theme === "light" ? "bg-secondary container  text-center py-3 " : "bg-dark container  text-center py-3 text-light "}>
        <h1>Welcome User</h1>
        <p>Welcome back on Epibooks</p>
    </div>
  )
}
