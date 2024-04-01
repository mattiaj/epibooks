import React, { useContext } from 'react';
import AllTheBooks from '../AllTheBooks/AllTheBooks';
import Footer from '../MyFooter/Footer';
import fantasy from '../../data/fantasy.json'
import { themeContext } from '../../context/ThemeContextProvider';

export default function AllTheBooksHome({input}) {

    const fantasyBooks = fantasy;
    const {theme} = useContext(themeContext);
  
  return (
    <>
      <main className={theme === "dark" ? "bg-secondary" : ""}>
        <AllTheBooks books={fantasyBooks} input={input} />
        <Footer />
      </main>
    </>
  )
}
