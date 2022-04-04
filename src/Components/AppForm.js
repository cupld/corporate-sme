import React, { useState } from "react";
import { Col, Form, Row, FormGroup, Button } from "react-bootstrap";

function AppForm() {
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
        <h3>Customer Information Update Form(KYC) for Non-Individuals</h3>
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
          <>
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
              Bank POA, or Authorization Letter for any person to operate the
              bank account on your behalf?
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
              Has the partner qoutes been modified, or partners entered or
              exited? if yes, provide the Commercial Registration and Amendments
              Of the Article of Association
            </Form.Label>
            <div className="radio">
              <Form.Check type="radio" aria-label="option 1" label="Yes" />
              <Form.Check type="radio" aria-label="option 2" label="No" />
            </div>

            <p></p>
            <Form.Label>
              Is any of the partners, executive managers or authorized
              signatories a Politically exposed person (PEP) whereby they were
              previously assigned to, or currently handle, senior public office
              in any country, as per the definitions stated in the below :
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
              previously assigned to, or currently handle, senior public office
              in any country, as per the definitions stated in the below
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
              <Form.Check
                type="radio"
                aria-label="option 2"
                label="Transfers"
              />
              <Form.Check
                type="radio"
                aria-label="option 2"
                label="POS Payments"
              />
            </div>
          </>
        </Form.Group>
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
          Next Step
        </Button>
      </Form>
    </div>
  );
}

export default AppForm;
