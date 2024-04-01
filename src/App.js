import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllTheBooksHome from './Components/AllTheBooksHome/AllTheBooksHome';
import BookDetails from './Components/BookDetails/BookDetails';
import ThemeContextProvider from './context/ThemeContextProvider';
import SelectContextProvider from './context/SelectContextProvider';
import NotFound from './Components/NotFound/NotFound';
import NavBar from './Components/MyNav/Navbar';



function App() {

  const [inputName, setInputName] = useState("");


  return (
    <>
      <ThemeContextProvider>
      <SelectContextProvider>
        <BrowserRouter>
          <NavBar setInput={setInputName} />  
          <Routes>
            <Route path='/' element={<AllTheBooksHome input={inputName} />} />
            <Route path='/datails/:asin' element={<BookDetails />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SelectContextProvider>
      </ThemeContextProvider>

    </>
  );
}

export default App;
