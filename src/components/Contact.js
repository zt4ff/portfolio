import React from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

const ContactForm = () => {
  return (
    <Form className="w-100">
      <Form.Group className="mb-4" controlId="formBasicText">
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicTest">
        <Form.Control type="text" placeholder="Subject" />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicText">
        <textarea rows={5} className="form-control" placeholder="Message"></textarea>
      </Form.Group>
      <Button variant="primary" type="submit">
        Send Message
      </Button>
    </Form>
  );
};

const Contact = () => {
  return (
    <div style={{ color: "red", border: "1px solid red" }} className="height-100 d-flex justify-content-center align-items-center">
      {/* <div className="row h-100"> */}
        <div className="col-lg-9 h-100 d-flex justify-content-center align-items-center">
          <ContactForm />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Contact