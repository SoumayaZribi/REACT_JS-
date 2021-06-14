
import './App.css';
import { Form,Button,Row,Col } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
       <Form>
         <h1>Contact Us</h1>
       <Row>
    <Col>
     <Form.Label>First Name</Form.Label>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
    <Form.Label>Last Name</Form.Label>
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Phone</Form.Label>
      <Form.Control type="phone" placeholder="Enter phone" />
    </Form.Group>
    <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group> 
  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Zip Code</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Country</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group> 
  </Form.Row>
  <Form.Label>Subject</Form.Label>
      <Form.Control placeholder="subject" />
      <Form.Label>Message</Form.Label>
      <Form.Control placeholder="message"  />
  <div className="mb-3">
    <Form.File id="formcheck-api-regular">
      <Form.File.Label> file input</Form.File.Label>
      <Form.File.Input />
    </Form.File>
  </div>

    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
    </div>
  );
}

export default App;
