import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllTheBooksHome from './Components/AllTheBooksHome/AllTheBooksHome';
import BookDetails from './Components/BookDetails/BookDetails';
import ThemeContextProvider from './context/ThemeContextProvider';
import SelectContextProvider from './context/SelectContextProvider';
import NotFound from './Components/NotFound/NotFound';



function App() {

  return (
    <>
      <ThemeContextProvider>
      <SelectContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<AllTheBooksHome />} />
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
