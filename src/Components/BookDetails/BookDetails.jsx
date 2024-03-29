import React, { useContext, useEffect, useState } from 'react';
import fantasy from '../../data/fantasy.json'
import { useNavigate, useParams } from 'react-router-dom';
import './BookDetails.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import CommentArea from '../CommentArea/CommentArea';
import { SelectContext } from '../../context/SelectContextProvider';
import { themeContext } from '../../context/ThemeContextProvider';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaRegSun } from "react-icons/fa";
import { LuArrowLeftFromLine } from "react-icons/lu";

export default function BookDetails() {

    const params = useParams();
    const [book, setBook] = useState([]);
    const {selected, setSelected} = useContext(SelectContext);
    const {theme, setTheme} = useContext(themeContext);
    const navigate = useNavigate();

    function home () {
        setSelected("");
        navigate("/");
    }

    
    function bookParam () {
        const books = fantasy;

        const filtered = books.filter((el) => el.asin.includes(params.asin))

        setBook(filtered);

    };
    console.log(selected)
    
    useEffect(() => {
        bookParam();
    },[params])

  return (
    <main className={theme === "dark" ? "bg-secondary" : ""}>
        <div className='btn-container'>
            <Button onClick={home} className='bg-dark border-0 me-2'><LuArrowLeftFromLine /></Button>
            <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className={theme === "dark" ? "d-none" : "bg-dark border-0"}><FaRegSun /></Button>
            <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className={theme === "dark" ? "bg-dark border-0" : "d-none"}><BsFillMoonStarsFill /></Button>
        </div>
        <Container className='d-md-flex justify-content-center align-items-center box-singleBook'>
            <Row>
                {book.map((el) => (
                    <Card key={el.asin} className={theme === "dark" ? "myCard bg-dark text-light" : "myCard"} >
                        <Row>
                            <Col className='p-0'>
                                <img src={el.img} alt='immagine libro' className='card-img myImg' />
                            </Col>
                            <Col>
                                <Row className='flex-column'>
                                    <Col md={8} className='pe-0 ps-1 w-auto'>
                                        {selected && <CommentArea /> }
                                    </Col>
                                    <Col md={4} className='pe-0 ps-1 w-auto'>
                                        <p><strong>Prezzo: </strong>€{el.price}</p>
                                        <p><strong>Categoria: </strong>{el.category}</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                ))}
            </Row>
        </Container>
    </main>
  )
}
