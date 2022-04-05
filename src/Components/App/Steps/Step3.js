import React, { useState } from "react";
import { Col, Form, Row, FormGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyDropzone from "../../pages/DropZone";

function Step3() {
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
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <h4>Shareholders and Partners Details</h4>
          <Form.Label>Are You A Shareholding Company?</Form.Label>
          <div className="radio">
            <Form.Check type="radio" aria-label="option 1" label="Yes" />
            <Form.Check
              type="radio"
              aria-label="option 2"
              label="No (If No kindly skip below)"
            />
          </div>

          <Form.Label>Name of Shareholder</Form.Label>
          <Form.Control
            className="inputs"
            required
            type="text"
            placeholder="Name of Shareholder"
          />
          <Form.Label>Ownership %</Form.Label>
          <Form.Control
            className="inputs"
            required
            type="text"
            placeholder="In %"
          />
          <p></p>
          <Form.Label>Are You Politically Expossed Person ?</Form.Label>
          <div className="radio">
            <Form.Check type="radio" aria-label="option 1" label="Yes" />
            <Form.Check type="radio" aria-label="option 2" label="No" />
          </div>

          <p></p>
          <Form.Label>
            Have you issued an official Power of attorney (POA), or Internal
            Bank POA, or Authorization Letter for any person to operate the bank
            account on your behalf?
          </Form.Label>
          <div className="radio">
            <Form.Check type="radio" aria-label="option 1" label="Yes" />
            <Form.Check type="radio" aria-label="option 2" label="No" />
          </div>

          <p></p>
          <Form.Label>
            Has the legal entity/scope of the business been changed?if
            yes,provide the Commercial Registration and Amendments of the
            Article of Association?
          </Form.Label>

          <div className="radio">
            <Form.Check type="radio" aria-label="option 1" label="Yes" />
            <Form.Check type="radio" aria-label="option 2" label="No" />
          </div>

          <p></p>
          <Form.Label>
            Has the partner qoutes been modified, or partners entered or exited?
            if yes, provide the Commercial Registration and Amendments Of the
            Article of Association
          </Form.Label>
          <div className="radio">
            <Form.Check type="radio" aria-label="option 1" label="Yes" />
            <Form.Check type="radio" aria-label="option 2" label="No" />
          </div>

          <p></p>
          <Form.Label>
            Is any of the partners, executive managers or authorized signatories
            a Politically exposed person (PEP) whereby they were previously
            assigned to, or currently handle, senior public office in any
            country, as per the definitions stated in the below :
          </Form.Label>
          <Form.Group>
            <select className="selection">
              <option>---- Select ----</option>
              <hr />
              <option>Head of State or Goverment</option>
              <option>Member of a Ruling Family</option>
              <option>
                Member of Parliment/ People's Assembly/ National Assembly{" "}
              </option>
              <option>Senior Goverment Official</option>
              <option>High Military Rank(Brigadier as minimul)</option>
              <option>Diplomat/ Ambassodar/ Consel/ Secretary</option>
              <option>Judge/Cheif Justice/Prosecutore</option>
              <option>Prominent Political Party Official</option>
              <option>
                Executive Officer/ Senior Executive officer/ Board Member of
                Govermnet Owned Company/International
              </option>
              <option>Oil/Gas/Energy</option>
              <option>Travel/Transportation/Logistics</option>
              <option>Any other prominent designation (specify)</option>
            </select>
            <Form.Control
              className="inputs"
              required
              type="text"
              placeholder="Others"
            />
          </Form.Group>
          <p></p>
          <Form.Label>
            Documents any of the partners, executive managers or authorized
            signatories a Politically exposed person (PEP) whereby they were
            previously assigned to, or currently handle, senior public office in
            any country, as per the definitions stated in the below
          </Form.Label>
          <div className="radio">
            <Form.Check type="radio" aria-label="option 1" label="Yes" />
            <Form.Check type="radio" aria-label="option 2" label="No" />
          </div>

          <p></p>
          <Form.Label>
            (If yes on the previous question, please complete a Individual KYC
            from)
          </Form.Label>
          <Row>
            <Form.Label>Capital</Form.Label>
            <Form.Control
              className="numbersInput"
              required
              type="text"
              placeholder="1000 KD"
            />
          </Row>
          <Row>
            <Form.Label>Total Quarterly Income in kindly</Form.Label>
            <Form.Control
              className="numbersInput"
              required
              type="text"
              placeholder="2000 KD- 3000 KD"
            />
          </Row>
          <h4>Expected/Actual Quarterly Income</h4>
          <h5>Incoming Credit Transactions</h5>
          <Row>
            <Form.Label>Quarterly Number of Transactions</Form.Label>
            <div className="radio">
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
            </div>
            <Form.Label>Quarterly Value of Transactions</Form.Label>
            <div className="radio">
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
            </div>
          </Row>
          <h5>Account Held with other banks</h5>
          <Form.Label>Bank Name</Form.Label>
          <Form.Control
            className="inputs"
            required
            type="text"
            placeholder="bank Name"
          />
          <Form.Control
            className="inputs"
            required
            type="text"
            placeholder="Bank Name"
          />
          <Form.Control
            className="inputs"
            required
            type="text"
            placeholder="Bank Name"
          />
          <p></p>
          <Form.Label>
            Nature of Transactions Expected on the account
          </Form.Label>
          <div className="radio">
            <Form.Check type="radio" aria-label="option 2" label="Cash" />
            <Form.Check type="radio" aria-label="option 2" label="Cheques" />
            <Form.Check type="radio" aria-label="option 2" label="Transfers" />
            <Form.Check
              type="radio"
              aria-label="option 2"
              label="POS Payments"
            />
          </div>
        </Form.Group>

        <Link to={"/AppSteps/Step1/Step2/Step3/Step4"}>
          <Button className="next" type="submit">
            Next Step
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Step3;
