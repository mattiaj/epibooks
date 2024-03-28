import React, { useContext } from 'react';
import NavBar from '../MyNav/Navbar';
import AllTheBooks from '../AllTheBooks/AllTheBooks';
import Footer from '../MyFooter/Footer';
import { useState } from 'react';
import fantasy from '../../data/fantasy.json'
import { themeContext } from '../../context/ThemeContextProvider';

export default function AllTheBooksHome() {

    const fantasyBooks = fantasy;
    const [inputName, setInputName] = useState("");
    const {theme} = useContext(themeContext);
  
  return (
    <>
      <main className={theme === "dark" ? "bg-secondary" : ""}>
        <NavBar setInput={setInputName} />
          <AllTheBooks books={fantasyBooks} input={inputName} />
        <Footer />
      </main>
    </>
  )
}
