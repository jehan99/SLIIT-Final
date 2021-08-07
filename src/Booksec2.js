import React, { Component } from 'react'
import { Card , Button} from 'react-bootstrap';





export default class Booksec2 extends Component {
    render() {
        return (
            <div>
                
<div className="BooksBody">
    <h2 className="mm">Most Veiwed Books</h2>
    <div className="booksimg">

   
    <Card style={{ width: '30rem',backgroundColor:' rgb(172, 184, 243)',  alignItems:'center'}}>
  <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNK0DdMaYHmpNVDgp6uyjTSBsnltkodqkyeoctVj3fArLzXmSW9f4PYcASsZ_MpGn60Mc&usqp=CAU" style={{height:'270px',width:'230px',margin:'10px'}} />
  <Card.Body>
  <Card.Text>
  <h5>Book Name: The Book God </h5>
<h5>Author: Walter Wangering  </h5>
<h5>Price:35.77$ </h5>
<h5>ISBN:9900076 </h5>
</Card.Text>
    
    <Button variant="primary">Add to Cart</Button>
  </Card.Body>
</Card>





 
<Card style={{ width: '30rem',backgroundColor:' rgb(172, 184, 243)', height:'' , alignItems:'center'}}>
  <Card.Img variant="top" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_3Rd5Si_crgQv6jS8Akb1onHPhxpGEKAexL84kRnv3XKyn74Yn1B18SPnOpad0ddkVQ&usqp=CAU" style={{height:'270px',width:'230px',margin:'10px'}} />
  <Card.Body>
  <Card.Text>
  <h5>Book Name: Short Stories </h5>
<h5>Author: K.L Dickson </h5>
<h5>Price:38.00$ </h5>
<h5>ISBN: 2342664</h5>
</Card.Text>
   
    <Button variant="primary">Add to Cart</Button>
  </Card.Body>
</Card>

   
<Card style={{ width: '30rem',backgroundColor:'rgb(172, 184, 243)', height:'' ,alignItems:'center'}}>
  <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdI3U-FLTjIvYdz1z7Ydm2T0HFhZVBOFqpRLfLRt3Ro-uTuMoLUHSoreJr-AAXyN6yQS4&usqp=CAU" style={{height:'270px',width:'230px',margin:'10px'}} />
  <Card.Body>
  <Card.Text>
  <h5>Book Name:The Wedding Data </h5>
<h5>Author:Jasmine Guillory </h5>
<h5>Price:34.23$ </h5>
<h5>ISBN:3342233 </h5>
</Card.Text>
    <Button variant="primary"> Add to Cart</Button>
  </Card.Body>
</Card>

 
<Card style={{ width: '30rem',backgroundColor:'rgb(172, 184, 243)', height:'', alignItems:'center'}}>
  <Card.Img variant="top" src="https://www.oberlo.com/media/1603897585-image12-1.jpg?w=1824&fit=max" style={{height:'270px',width:'230px',margin:'10px'}} />
  <Card.Body>
  <Card.Text>
  <h5>Book Name:Lord of the Rings</h5>
<h5>Author:J.R Tolking </h5>
<h5>Price:38.00$ </h5>
<h5>ISBN:4450098 </h5>
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
