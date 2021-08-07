
import React, { Component} from 'react'
import { Button, Form , Row, Col,Container } from 'react-bootstrap';


import firebase from './Config/Fbconfig';

const db = firebase.firestore();
const booksRef = db.collection('books');

const initialState ={
  user :'',
  userError: '',
  password : '',
  passwordError: '',
    author :'',
    price:'',
    isbn:''

}

export default class Addbook extends Component {
state = initialState;

    
handleChange =event =>{
const isCheckbox = event.target.type ==="checkbox";
this.setState({
[event.target.name]:isCheckbox
?event.target.checked
:event.target.value


})


}

handleUser = (event) =>{
  this.setState({
      user : event.target.value
                           
     

      
  })
}

handlePassword = (event) =>{

  this.setState({
      password : event.target.value

      
  })
}

    
    handleName = (event) =>{
      this.setState({
          name : event.target.value
      })
  }

  handleAuthor = (event) =>{
    this.setState({
        author : event.target.value
    })
}

handlePrice = (event) =>{
  this.setState({
      price : event.target.value
  })
}

handleIsbn = (event) =>{
  this.setState({
      isbn : event.target.value
  })
}



validate =() =>{
let userError= "";                        
if (!this.state.user.includes("kamal")){
  userError = "invalid user name";
}
let passwordError= "";  
if (!this.state.user.includes("12345")){
  passwordError = "invalid password";
}


if(userError || passwordError){
this.setState({userError,passwordError});
return false

}
return true;

};
handleSubmite = (event) =>{
      event.preventDefault();
      const  isvalid = this.validate ();
      if (isvalid)
      console.log(this.state);
      //clear form
this.setState(initialState);

      booksRef.add({
        name: this.state.name,
        author: this.state.author,
        price: this.state.price,
        isbn: this.state.isbn


      })
    
  }









    render() {
        return (


            <div className="ffx">

<h1 className="ggh">ADD BOOKS TO THE STORE</h1>



<div className="hhh">

<Container>
  
                        <Row >
                            <Col md={{ span: 5, offset: 3 }} >
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicUser">
                                        <Form.Label> User Name </Form.Label>
                                        <Form.Control type="user" placeholder="Enter User Name" onChange={this.handleUser} value={this.state.user}/>
                                        <div style={{color:"red"}}>{!this.state.userError} </div>

                                    </Form.Group>

                                    
                               
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" onChange={this.handlePassword}  value={this.state.password}/>
                                    </Form.Group>

                                    <div style={{color:"red"}}> {this.state.passwordError} </div>



                                </Form>
                               

                            </Col>
                        </Row>
                    </Container>

                    </div>

    









   <Form>
   <div className="hhh">

   <Col md={{ span: 4, offset: 4 }} >
    <Row className="mb-4">
    <Form.Group as={Col} controlId="formBasicUser">
      <Form.Label>Book Name</Form.Label>
      <Form.Control onChange={this.handleName}/>
    </Form.Group>
    </Row>
</Col>

    <Col md={{ span: 4, offset: 4 }} >
    <Row className="mb-4">

    <Form.Group as={Col} controlId="formGridAuthor">
      <Form.Label>Author</Form.Label>
      <Form.Control onChange={this.handleAuthor}/>
      </Form.Group>

     </Row>
</Col>


      <Col md={{ span: 4, offset: 4 }} >
    <Row className="mb-3">

    <Form.Group as={Col} controlId="formGridPrice">
      <Form.Label >Price</Form.Label>
      <Form.Control placeholder="$" onChange={this.handlePrice} />
      </Form.Group>
    
  
    <Form.Group as={Col} controlId="formGridISBN">
      <Form.Label>ISBN</Form.Label>
      <Form.Control  placeholder="ex: 
      00112" onChange={this.handleIsbn}/>
    </Form.Group>
    

  </Row>
  </Col>

  </div>

 

  <Button variant="primary"  size="lg" type="submit" className="ggg" onClick={this.handleSubmite}>
ADD BOOK  </Button>

</Form>








            </div>
        )
    }
}

