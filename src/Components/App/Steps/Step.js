import React, { useState } from "react";
import { Col, Form, Row, FormGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyDropzone from "../../pages/DropZone";

function Step() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className="kyc">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h3>Customer Information Update Form(KYC) </h3>
        <h4>Company Details 1</h4>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Max 60 Characters"
              className="inputCName"
            />
          </Form.Group>
          <Form.Label>Type Of Entity</Form.Label>
          <select className="selection">
            <option>---- Select ----</option>
            <hr />
            <option>Establishment</option>
            <option>Health Center/ Medical Clinic</option>
            <option>Engineering office</option>
            <option>Clubs/NGO/Co-/Charities</option>
            <option>Hospital/Private Clinic</option>
            <option>Others(specify type)</option>
          </select>

          <Form.Control
            required
            type="text"
            placeholder="Company type"
            className="inputCName"
          />

          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Does the Company Have branches</Form.Label>
            <div className="radio">
              <Form.Check type="radio" aria-label="option 1" label="Yes" />
              <Form.Check type="radio" aria-label="option 2" label="No" />
            </div>

            <Form.Control
              type="number"
              className="numbersInput"
              placeholder=" Number of branches "
            />
          </Form.Group>
        </Row>
        <Link to={"/AppSteps/Step1/Step2"}>
          <Button className="next" type="submit">
            Next Step
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Step;
