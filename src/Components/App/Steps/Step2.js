import React, { useState } from "react";
import { Col, Form, Row, FormGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyDropzone from "../../pages/DropZone";

function Step2() {
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
        <FormGroup>
          <h4>Company Details 2</h4>
          <Form.Label>Comercial Registeration No.</Form.Label>
          <Form.Control
            className="inputs"
            required
            type="text"
            placeholder="1234"
          />

          <Form.Label>MOSAL No.</Form.Label>
          <Form.Control
            className="inputs"
            required
            type="text"
            placeholder="1234"
          />
          <Form.Label>License No.</Form.Label>
          <Form.Control
            className="inputs"
            required
            type="text"
            placeholder="1234"
          />
        </FormGroup>

        <Form.Label>Expiry date</Form.Label>
        <Form.Control
          className="inputs"
          required
          type="text"
          placeholder="01/01/2099"
        />
        <Form.Label>License Issued By:</Form.Label>
        <Form.Control
          className="inputs"
          required
          type="text"
          placeholder="Ex :Min of Commerce"
        />

        <Form.Label>Establishment Date</Form.Label>
        <Form.Control
          className="inputs"
          required
          type="text"
          placeholder="01/01/2099"
        />
        <FormGroup>
          <Form.Label>Address</Form.Label>
          <Form.Control
            className="inputs"
            required
            type="text"
            placeholder="Country"
          />
          <Form.Control
            className="inputs"
            required
            type="text"
            placeholder="Block"
          />
          <Form.Control
            className="inputs"
            required
            type="text"
            placeholder="Avenue"
          />
          <Form.Control
            className="inputs"
            required
            type="text"
            placeholder="Street"
          />
          <Form.Control
            className="inputs"
            required
            type="text"
            placeholder="Building"
          />
          <Form.Control
            className="inputs"
            required
            type="text"
            placeholder="Shop No"
          />
          <Form.Control
            className="inputs"
            required
            type="text"
            placeholder="Mobile No"
          />
        </FormGroup>
        <Form.Label>Company Info.</Form.Label>
        <Form.Control
          className="inputs"
          required
          type="text"
          placeholder="P.O.BOX"
        />
        <Form.Control
          className="inputs"
          required
          type="email"
          placeholder="Email Address"
        />
        <Form.Control
          className="inputs"
          required
          type="text"
          placeholder="Official Website"
        />
        <Form.Control
          className="inputs"
          required
          type="text"
          placeholder="Social Media Account"
        />
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nature of Business</Form.Label>

          <select className="selection">
            <option>---- Select ----</option>
            <hr />
            <option>Auto Dealer/Leasing/Spare Part</option>
            <option>Exchange Company/Money Changer</option>
            <option>Hotel/Resturant/Catering</option>
            <option>Retail Shops/Salon/Laundry</option>
            <option>Banking/Stocks/Insurance</option>
            <option>General Trading/Wholesale/Imp/Exp</option>
            <option>Jewelry/Gems/Precious Metals/Watches</option>
            <option>Real Estate/Rental and Leasing</option>
            <option>Charities/Societies/Clubs</option>
            <option>Oil/Gas/Energy</option>
            <option>Travel/Transportation/Logistics</option>
            <option>Others(specify type)</option>
          </select>
          <Form.Control
            className="inputs"
            required
            type="text"
            placeholder="Others"
          />
          <Form.Control
            className="inputs"
            required
            type="text"
            placeholder="Nature of the Product"
          />
        </Form.Group>

        <Link to={"/AppSteps/Step1/Step2/Step3"}>
          <Button className="next" type="submit">
            Next Step
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Step2;
