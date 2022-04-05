import React, { useState } from "react";
import { Col, Form, Row, FormGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyDropzone from "../../pages/DropZone";

function Step({ setApplication, application }) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const handleChange = (event) => {
    if (event.target.name === "branch") {
      event.target.value = event.target.id;
    }
    setApplication({ ...application, [event.target.name]: event.target.value });
  };
  // const handleselect = (event) => {
  //   console.log("🚀 ~ file: Step.js ~ line 23 ~ handleselect ~ event", event);
  // };
  return (
    <div className="kyc">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h3>Customer Information Update Form(KYC) </h3>
        <h4>Company Details 1</h4>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              name="companyName"
              onChange={handleChange}
              value={application.companyName}
              required
              type="text"
              placeholder="Max 60 Characters"
              className="inputCName"
            />
          </Form.Group>
          <Form.Label>Type Of Entity</Form.Label>
          <select
            className="selection"
            name="typeOfEntity"
            onChange={handleChange}
            value={application.typeOfEntity}
          >
            <option>---- Select ----</option>
            <hr />
            <option value={"Establishment"}>Establishment</option>
            <option value={"HealthCenter"}>
              Health Center/ Medical Clinic
            </option>
            <option value={"Engineering"}>Engineering office</option>
            <option value={"Clubs"}>Clubs/NGO/Co-/Charities</option>
            <option value={"Hospital"}>Hospital/Private Clinic</option>
            <option value={"Others"}>Others(specify type)</option>
          </select>

          <Form.Control
            name="companyName"
            onChange={handleChange}
            value={application.companyType}
            type="text"
            placeholder="Company type"
            className="inputCName"
          />

          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Does the Company Have branches</Form.Label>
            <div className="radio">
              <Form.Check
                name="branch"
                onChange={handleChange}
                value={application.branch}
                type="radio"
                aria-label="option 1"
                label="Yes"
                id="yes"
              />
              <Form.Check
                name="branch"
                onChange={handleChange}
                value={application.branch}
                type="radio"
                aria-label="option 2"
                label="No"
                id="no"
              />
            </div>

            <Form.Control
              type="number"
              className="numbersInput"
              placeholder=" Number of branches "
            />
          </Form.Group>
        </Row>
        <Link to={"/AppSteps/Step1/Step2"}>
          <Button className="next" type="submit" onClick={handleSubmit}>
            Next Step
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Step;
