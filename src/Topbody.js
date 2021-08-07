import React from 'react'
import { InputGroup,FormControl,Row,Col, Container } from 'react-bootstrap';




function TopBody (){
return(
<div>

<div className='section2'>




<div className="body1"> 


<div className="ggt">
<Container>
    <Row>
    <Col md={{ span: 9, offset: 1 }} >
  <InputGroup size="lg">
  <h1 className="hdd">THE BEST BOOKS YOU CAN GET IN OUR STORE</h1>
    <InputGroup.Text id="inputGroup-sizing-lg">Search</InputGroup.Text>
    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  </Col>
  </Row>
  </Container>

  </div>
   </div>

    </div>
</div>
);
}
export default TopBody;