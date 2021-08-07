import React, { Component } from 'react'
import { Card, Button,Spinner } from 'react-bootstrap';


import firebase from './Config/Fbconfig';

const db = firebase.firestore();
const booksRef = db.collection('books');




export default class Booksec3 extends Component {

state={
books : []

}
componentDidMount(){
   booksRef.get().then(data=>{
data.forEach(doc =>{
this.setState({
  books : [...this.state.books, doc.data()]
})

});
    
})

  }

    render() {
        return (
            <div>
                
<div className="add">
    <h2 className="mm">Recently Added Books</h2>


    <div>

 
 


    {this.state.books.length ===0 ? (  <Spinner animation="grow" />
): (null)



}
    {this.state.books.map(element => {
return(


  



<div>






  <Card style={{ width: '30rem',backgroundColor:'  rgb(172, 243, 222)',  alignItems:'center'}}>
  <Card.Img variant="top" src="https://www.oberlo.com/media/1603897577-image22-1.jpg?w=1824&fit=max" style={{height:'270px',width:'230px',margin:'10px'}} />
  <Card.Body>
  <Card.Text>
  <h5>Book Name: {element.name}</h5>
<h5>Author: {element.author}</h5>
<h5>Price: {element.price}</h5>
<h5>ISBN: {element.isbn}</h5>
</Card.Text>
    <Button variant="primary">Add to Cart</Button>
  </Card.Body>
</Card>

</div>




)

})}




</div>





</div>






            </div>
        )
    }
}
