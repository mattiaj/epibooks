import React, { useContext } from 'react';
import { themeContext } from '../../context/ThemeContextProvider';


export default function Footer() {
  const {theme} = useContext(themeContext);
  return (
    <>
      <footer className={theme === "dark" ? "bg-dark text-light mt-5 border-top" : "bg-light mt-5 border-top"}>
          <ul className='d-flex flex-md-row flex-column justify-content-around py-3 list-unstyled'>
              <li>P.Iva 029541223554485</li>
              <li>bcshbch@gmail.com</li>
              <li>Cose a caso</li>
          </ul>
      </footer>
    </>
  )
}
