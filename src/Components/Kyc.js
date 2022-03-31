import { render } from "@testing-library/react";

import React, { useState } from "react";
import { Col, Form, InputGroup, Row, Button, FormGroup } from "react-bootstrap";

export default function Kyc() {
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
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <h3>Customer Information Update Form(KYC) for Non-Individuals</h3>
      <h4>Company Details 1</h4>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Company Name</Form.Label>
          <Form.Check required type="text" placeholder="Max 60 Characters" />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Type Of Entity</Form.Label>
          <Form.Check
            type="radio"
            aria-label="option 1"
            label="Establishment"
          />
          <Form.Check
            type="radio"
            aria-label="option 1"
            label="Health Center/ Medical Clinic"
          />
          <Form.Check
            type="radio"
            aria-label="option 1"
            label="Engineering office"
          />
          <Form.Check
            type="radio"
            aria-label="option 1"
            label="Clubs/NGO/Co-/Charities"
          />
          <Form.Check type="radio" aria-label="option 1" label="Law Firm" />
          <Form.Check
            type="radio"
            aria-label="option 1"
            label="Hospital/Private Clinic"
          />
          <Form.Check
            type="radio"
            aria-label="option 1"
            label="others(specify type)"
          />
          <Form.Control required type="text" placeholder="Company type" />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Does the Company Have branches</Form.Label>
          <>
            <Form.Check type="radio" aria-label="option 1" label="Yes" />
            <Form.Check type="radio" aria-label="option 2" label="No" />
          </>

          <Form.Control placeholder=" Number of branches " />
        </Form.Group>
      </Row>

      <FormGroup>
        <h4>Company Details 2</h4>
        <Form.Label>Comercial Registeration No.</Form.Label>
        <Form.Check required type="text" placeholder="1234" />

        <Form.Label>MOSAL No.</Form.Label>
        <Form.Check required type="text" placeholder="1234" />
        <Form.Label>License No.</Form.Label>
        <Form.Check required type="text" placeholder="1234" />
      </FormGroup>

      <Form.Label>Expiry date</Form.Label>
      <Form.Check required type="text" placeholder="01/01/2099" />
      <Form.Label>License Issued By:</Form.Label>
      <Form.Check required type="text" placeholder="Ex :Min of Commerce" />

      <Form.Label>Establishment Date</Form.Label>
      <Form.Check required type="text" placeholder="01/01/2099" />

      <Form.Label>Address</Form.Label>
      <Form.Check required type="text" placeholder="Country" />
      <Form.Check required type="text" placeholder="Block" />
      <Form.Check required type="text" placeholder="Avenue" />
      <Form.Check required type="text" placeholder="Street" />
      <Form.Check required type="text" placeholder="Building" />
      <Form.Check required type="text" placeholder="Shop No" />
      <Form.Check required type="text" placeholder="Mobile No" />
      <Form.Label>Company Info.</Form.Label>
      <Form.Check required type="text" placeholder="P.O.BOX" />
      <Form.Check required type="text" placeholder="Email Address" />
      <Form.Check required type="text" placeholder="Official Website" />
      <Form.Check required type="text" placeholder="Social Media Account" />
      <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label>Nature of Business</Form.Label>
        <>
          <Form.Check
            type="radio"
            aria-label="option 1"
            label="Auto Dealer/Leasing/Spare Part"
          />
          <Form.Check
            type="radio"
            aria-label="option 2"
            label="Exchange Company/Money Changer"
          />
          <Form.Check
            type="radio"
            aria-label="option 2"
            label="Hotel/Resturant/Catering"
          />
          <Form.Check
            type="radio"
            aria-label="option 2"
            label="Retail Shops/Salon/Laundry"
          />
          <Form.Check
            type="radio"
            aria-label="option 2"
            label="Banking/Stocks/Insurance"
          />
          <Form.Check
            type="radio"
            aria-label="option 2"
            label="General Trading/Wholesale/Imp/Exp"
          />
          <Form.Check
            type="radio"
            aria-label="option 2"
            label="Jewelry/Gems/Precious Metals/Watches"
          />
          <Form.Check
            type="radio"
            aria-label="option 2"
            label="Real Estate/Rental and Leasing"
          />
          <Form.Check
            type="radio"
            aria-label="option 2"
            label="Charities/Societies/Clubs"
          />
          <Form.Check
            type="radio"
            aria-label="option 2"
            label="Oil/Gas/Energy"
          />
          <Form.Check
            type="radio"
            aria-label="option 2"
            label="Travel/Transportation/Logistics"
          />
          <Form.Check
            type="radio"
            aria-label="option 1"
            label="others(specify)"
          />
          <Form.Control required type="text" placeholder="Others" />
          <Form.Check
            required
            type="text"
            placeholder="Nature of the Product"
          />
          <h4>Shareholders and Partners Details</h4>
          <Form.Label>Are You A Shareholding Company?</Form.Label>
          <Form.Check type="radio" aria-label="option 2" label="Yes" />
          <Form.Check
            type="radio"
            aria-label="option 2"
            label="No (If No kindly skip below)"
          />
          <Form.Label>Name of Shareholder</Form.Label>
          <Form.Check required type="text" placeholder="Name of Shareholder" />
          <Form.Label>Ownership %</Form.Label>
          <Form.Check required type="text" placeholder="In %" />
          <Form.Label>Are You Politically Expossed Person ?</Form.Label>
          <Form.Check type="radio" aria-label="option 2" label="Yes" />
          <Form.Check type="radio" aria-label="option 2" label="No " />
          <Form.Label>
            Have you issued an official Power of attorney (POA), or Internal
            Bank POA, or Authorization Letter for any person to operate the bank
            account on your behalf?
          </Form.Label>
          <Form.Check type="radio" aria-label="option 2" label="Yes" />
          <Form.Check type="radio" aria-label="option 2" label="No " />
          <Form.Label>
            Has the legal entity/scope of the business been changed?if
            yes,provide the Commercial Registration and Amendments of the
            Article of Association?
          </Form.Label>
          <Form.Check type="radio" aria-label="option 2" label="Yes" />
          <Form.Check type="radio" aria-label="option 2" label="No " />
          <Form.Label>
            Has the partner qoutes been modified, or partners entered or exited?
            if yes, provide the Commercial Registration and Amendments Of the
            Article of Association
          </Form.Label>
          <Form.Check type="radio" aria-label="option 2" label="Yes" />
          <Form.Check type="radio" aria-label="option 2" label="No " />
          <Form.Label>
            Is any of the partners, executive managers or authorized signatories
            a Politically exposed person (PEP) whereby they were previously
            assigned to, or currently handle, senior public office in any
            country, as per the definitions stated in the below :
          </Form.Label>
          <Form.Check
            type="radio"
            aria-label="option 2"
            label="Head of State or Goverment"
          />
          <Form.Check
            type="radio"
            aria-label="option 2"
            label="Member of a Ruling Family "
          />
          <Form.Check
            type="radio"
            aria-label="option 2"
            label="Member of Parliment/ People's Assembly/ National Assembly "
          />
          <Form.Check
            type="radio"
            aria-label="option 2"
            label="Senior Goverment Official "
          />
          <Form.Check
            type="radio"
            aria-label="option 2"
            label="High Military Rank(Brigadier as minimul) "
          />
          <Form.Check
            type="radio"
            aria-label="option 2"
            label="Diplomat/ Ambassodar/ Consel/ Secretary "
          />
          <Form.Check
            type="radio"
            aria-label="option 2"
            label="Judge/Cheif Justice/Prosecutore "
          />
          <Form.Check
            type="radio"
            aria-label="option 2"
            label="Prominent Political Party Official"
          />
          <Form.Check
            type="radio"
            aria-label="option 2"
            label="Executive Officer/ Senior Executive officer/ Board Member of Govermnet Owned Company/International"
          />
          <Form.Check
            type="radio"
            aria-label="option 2"
            label="Any other prominent designation (specify)"
          />
          <Form.Label>
            Documents any of the partners, executive managers or authorized
            signatories a Politically exposed person (PEP) whereby they were
            previously assigned to, or currently handle, senior public office in
            any country, as per the definitions stated in the below
          </Form.Label>

          <Form.Check type="radio" aria-label="option 2" label="Yes" />
          <Form.Check type="radio" aria-label="option 2" label="No" />
          <Form.Label>
            (If yes on the previous question, please complete a Individual KYC
            from)
          </Form.Label>
          <Row>
            <Form.Label>Capital</Form.Label>
            <Form.Check required type="text" placeholder="1000 KD" />
          </Row>
          <Row>
            <Form.Label>Total Quarterly Income in kindly</Form.Label>
            <Form.Check required type="text" placeholder="2000 KD- 3000 KD" />
          </Row>
          <h4>Expected/Actual Quarterly Income</h4>
          <h5>Incoming Credit Transactions</h5>
          <Row>
            <Form.Label>Quarterly Number of Transactions</Form.Label>
            <Form.Check
              type="radio"
              aria-label="option 2"
              label="below 100 Transactions"
            />
            <Form.Check
              type="radio"
              aria-label="option 2"
              label="Between 100- 1000 Transactions"
            />
            <Form.Check
              type="radio"
              aria-label="option 2"
              label="Above 1000 Transactions"
            />
            <Form.Label>Quarterly Value of Transactions</Form.Label>
            <Form.Check
              type="radio"
              aria-label="option 2"
              label="below KD 100,000"
            />
            <Form.Check
              type="radio"
              aria-label="option 2"
              label="Between KD 100,000 - 1,000,0000 "
            />
            <Form.Check
              type="radio"
              aria-label="option 2"
              label="Above KD 1,000,000 "
            />
          </Row>
          <h5>Account Held with other banks</h5>
          <Form.Label>Bank Name</Form.Label>
          <Form.Check required type="text" placeholder="bank Name" />
          <Form.Check required type="text" placeholder="Bank Name" />
          <Form.Check required type="text" placeholder="Bank Name" />
          <Form.Label>
            Nature of Transactions Expected on the account
          </Form.Label>

          <Form.Check type="radio" aria-label="option 2" label="Cash" />
          <Form.Check type="radio" aria-label="option 2" label="Cheques" />
          <Form.Check type="radio" aria-label="option 2" label="Transfers" />
          <Form.Check type="radio" aria-label="option 2" label="POS Payments" />
        </>
      </Form.Group>

      <Form.Group className="mb-3">
        <h4>Terms and Conditions</h4>
        <Form.Label>Kindly Read before submitting</Form.Label>
        <Form.Check
          required
          label="I hereby the individual that is the ultimate benefecial owner (or am authorized to apply om behalf of the ultimate benefecial owner) of this account and all the income to which this form relates, or am using this form to document myself as an idividual that is an  owner or account holder of financial instituation. and I herby declare that all the above information I have submitted to Gulf Bank respect to our account with the Bank, are true and correct to date when occurs. I hereby undertake to provide the Bank with further information, and a copy o the commercial/ industrial registration upon renewal. i assume full responsibility for failing to do so,whereby the Bank has the right to carry out all actions it deems appropriate to stop transaction on, and close my account, and I bear full responsibility for the consequenses thereof without liability on the part of the Bank"
          feedbackType="invalid"
        />
      </Form.Group>

      <Button type="submit">Submit</Button>
    </Form>
  );
}
