import React from 'react'
import Navigation from '../components/Navigation'
import Cards from '../components/Cards';
import Container from 'react-bootstrap/Container';
import './Home.css'
import Form from 'react-bootstrap/Form';
import  InputGroup  from 'react-bootstrap/InputGroup';
import {FiSearch} from 'react-icons/fi'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Home = () => {
    const sample = [
        {
            title: "v dfj vkj",
            description: "bdkec,",
            img: "ckjcenes",
            category: "cpp"
        },
        {
            title: "v dfj vkj",
            description: "bdkec,",
            img: "ckjcenes",
            category: "java"
        },
        {
            title: "v dfj vkj",
            description: "bdkec,",
            img: "ckjcenes",
            category: "java"
        },
    ];
    
  return (
    <div>
      <Navigation/>
      <Container  fluid className="bg bg-primary landing_wrapper text-light">
       
        <h1 className="text-xl">Welcome to Jojo Blogs</h1>
        <p>Explore blogs from various categories</p> 
       
        <InputGroup className="mb-3 w-50">
        <InputGroup.Text id="basic-addon1" className="icon-wrapper">
        <FiSearch/>
        </InputGroup.Text>
        <Form.Control type='search'className="searchInput" placeholder="Search your blogs here"/>
      </InputGroup>
      </Container>
      <Container>
        <h1 className='text-center mt-5'>All Blogs</h1>
        <Row xs={1} md={2} className="g-4">
        {sample.map((item, key) => (
  <Col key={key}>
    <Cards {...item} />
  </Col>
))}

    </Row>  
      </Container>
     
    </div>
   
    
  )
}

export default Home
