import './App.css';
import NavBar from './Components/MyNav/Navbar';
import Welcome from './Components/Welcome/Welcome';
import Footer from './Components/MyFooter/Footer';
import AllTheBooks from './Components/AllTheBooks/AllTheBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import fantasy from './data/fantasy.json';



function App() {
  const fantasyBooks = fantasy;
  // console.log(fantasyBooks)
  return (
    <>
      <main className='body bg-secondary'> 
        <NavBar />
        <Welcome />
        <AllTheBooks books={fantasyBooks} />
        <Footer />
      </main>
    </>
  );
}

export default App;
