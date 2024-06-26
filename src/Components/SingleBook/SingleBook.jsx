import React from 'react';
import { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { themeContext } from '../../context/ThemeContextProvider';
import { SelectContext } from '../../context/SelectContextProvider';
import './SingleBook.css'
import { useNavigate } from 'react-router-dom';

export default function BookCard({bookData}) {
    const {title, price, category, img, asin} = bookData;

    // const  [ selected, setSelected ]  = useState(false);
    const {theme} = useContext(themeContext);
    const {selected, setSelected} = useContext(SelectContext);
    const navigate = useNavigate();

    function handleSelect() {
      setSelected(asin);
    }

    function navigateSelect () {
      navigate(`/datails/${asin}`);
      setSelected(asin)
    }


  return (
    <>
        <Card id={asin} data-testid="card-container" className={theme === "dark" ? "bg-dark card col-md-3 col-6 pt-2 mb-4 border-3 text-light" : "bg-light card col-md-3 col-6 pt-2 mb-4 border-3"} border={(selected === asin) ? `danger` : ""} style={{ width: '18rem' }}>
          <Card.Img variant="top" onClick={handleSelect} className='image' src={img} />
          <Card.Body >
            <Card.Title>{title}</Card.Title>
            <div className='info-box'>
              <Card.Text>
                  <strong>Categoria: </strong> {category}
              </Card.Text>
              <Card.Text>
                <strong>Prezzo: </strong> €{price}
              </Card.Text>
              
            </div>
            <Button variant="outline-primary" onClick={navigateSelect} >Dettagli</Button>
          </Card.Body>
          {/* {selected && 
          <Card.Footer>
            <CommentArea bookId={asin} />
          </Card.Footer>
          } */}
        </Card>
    </>
  )
}
