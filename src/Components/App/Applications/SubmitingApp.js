import React, { useState } from "react";
import { Col, Form, Row, FormGroup, Button } from "react-bootstrap";
import MyDropzone from "../../pages/DropZone";

function SubmitingApp() {
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
        <MyDropzone />
        <Form.Group className="mb-3">
          <h4>Terms and Conditions</h4>

          <label className="check">
            <input feedbackType="invalid" required type="checkbox" /> I hereby
            the individual that is the ultimate benefecial owner (or am
            authorized to apply om behalf of the ultimate benefecial owner) of
            this account and all the income to which this form relates, or am
            using this form to document myself as an idividual that is an owner
            or account holder of financial instituation. and I herby declare
            that all the above information I have submitted to Gulf Bank respect
            to our account with the Bank, are true and correct to date when
            occurs. I hereby undertake to provide the Bank with further
            information, and a copy o the commercial/ industrial registration
            upon renewal. i assume full responsibility for failing to do
            so,whereby the Bank has the right to carry out all actions it deems
            appropriate to stop transaction on, and close my account, and I bear
            full responsibility for the consequenses thereof without liability
            on the part of the Bank
          </label>
        </Form.Group>

        <Button className="next" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default SubmitingApp;
