import './App.css';
import { useState } from 'react';
import NavBar from './Components/MyNav/Navbar';
import Welcome from './Components/Welcome/Welcome';
import Footer from './Components/MyFooter/Footer';
import AllTheBooks from './Components/AllTheBooks/AllTheBooks';
import ThemeContextProvider from './context/ThemeContextProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import fantasy from './data/fantasy.json';



function App() {

  const fantasyBooks = fantasy;
  const [inputName, setInputName] = useState("");

  return (
    <>
    <ThemeContextProvider>
        <NavBar setInput={setInputName} />
        <Welcome />
        <AllTheBooks books={fantasyBooks} input={inputName} />
        <Footer />
    </ThemeContextProvider>
    </>
  );
}

export default App;
