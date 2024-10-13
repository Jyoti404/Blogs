import React from 'react'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Button } from 'react-bootstrap';


const Cards = ({img,title,description,category}) => {
  return (
    <div>
      
          <Card>
            <Card.Img variant="top" src={img} style={{height:'40vh', objectFit:'cover'}}/>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Badge bg="primary">{category}</Badge>
              <Card.Text>
                {description.slice(0,200)}...
              </Card.Text>
            </Card.Body>
            <Card.Footer>
               <Button className="mx-auto d-block" >View More</Button>
            </Card.Footer>
          </Card>
      
    </div>
  )
}

export default Cards
