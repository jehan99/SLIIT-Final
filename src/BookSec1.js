import React, { Component } from 'react'
import { Button,Card } from 'react-bootstrap';


export default class Allbooks extends Component {
    render() {
        return (
            <div>
                
<div className="BooksBody">
    <h2 className="mm">Most Selling Books</h2>
    <div className="booksimg">
    <Card style={{ width: '30rem',backgroundColor:' rgb(172, 238, 243)', height:'', alignItems:'center'}}>
  <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStkU59wlkq9GrsVUjVRBE4rsVZJESmw0WTvw&usqp=CAU" style={{height:'270px',width:'230px',margin:'10px'}} />
  <Card.Body>
  <Card.Text>
  <h5>Book Name: The perfect family</h5>
<h5>Author: Robin Harding</h5>
<h5>Price:25.00$ </h5>
<h5>ISBN:34674323 </h5>
</Card.Text>
    
    <Button variant="primary">Add to Cart</Button>
  </Card.Body>
</Card>





 
<Card style={{ width: '30rem',backgroundColor:'rgb(172, 238, 243)', height:'' , alignItems:'center'}}>
  <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlU28PTTK3Tckck3UTO-W_bOPLJoOc-uhllQ&usqp=CAU" style={{height:'270px',width:'230px',margin:'10px'}} />
  <Card.Body>
    
  <Card.Text>
  <h5>Book Name:Steohen King </h5>
<h5>Author:Billy Summer </h5>
<h5>Price:30.00$ </h5>
<h5>ISBN:334354</h5>
</Card.Text>
    <Button variant="primary">Add to Cart</Button>
  </Card.Body>
</Card>

   
<Card style={{ width: '30rem',backgroundColor:'rgb(172, 238, 243)', height:'' ,alignItems:'center'}}>
  <Card.Img variant="top" src="https://template.canva.com/EADaoqykhsg/2/0/256w-MpULnt2suok.jpg" style={{height:'270px',width:'230px',margin:'10px'}} />
  <Card.Body>
  <Card.Text>
  <h5>Book Name:Love Eliote </h5>
<h5>Author:John Hukker </h5>
<h5>Price: 30.00$</h5>
<h5>ISBN:7563430 </h5>
</Card.Text>
    <Button variant="primary"> Add to Cart</Button>
  </Card.Body>
</Card>

 
<Card style={{ width: '30rem',backgroundColor:'rgb(172, 238, 243)', height:'', alignItems:'center'}}>
  <Card.Img variant="top" src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1607103555-51wmv-2LokL.jpg?crop=1xw:0.993xh;center,top&resize=480:*" style={{height:'270px',width:'230px',margin:'10px'}} />
  <Card.Body>
    
  <Card.Text>
  <h5>Book Name:What Come After </h5>
<h5>Author:Joann Topkings </h5>
<h5>Price:33.00$ </h5>
<h5>ISBN:2334532 </h5>
</Card.Text>
    <Button variant="primary">Add to Cart</Button>
  </Card.Body>
</Card>



</div>
</div>



            </div>
        )
    }
}
