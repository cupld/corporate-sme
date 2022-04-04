import React from "react";
import { Table } from "react-bootstrap";

import GulfBankImage from "./GulfBankImage";

export default function Req() {
  return (
    <div>
      <div className="reqPage">
        <GulfBankImage />
        <h3>Welcome To Gulf Bank!</h3>
        <h4>First step </h4>
        <h4 className="makeSure">
          Make sure the below requirments are available
        </h4>
        <Table responsive="sm">
          <thead>
            <tr>
              <h3>
                List of Documents required for obtaining approval to open SME
                account
              </h3>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                1-Company Article of Association And All deed of amendment.
              </td>
            </tr>
            <tr>
              <td>2-Signiture Authintication for the Company </td>
            </tr>
            <tr>
              <td>3-Commercial Civil Id</td>
            </tr>
            <tr>
              <td>4-Comercial Registeration</td>
            </tr>
            <tr>
              <td>5-Civil Id (for all partners and representitives)</td>
            </tr>
            <tr>
              <td>
                6- Authorization Certificate from Ministry of Commerce (ensure
                that date is not more than 10 days)
              </td>
            </tr>
            <tr>
              <td>7-Commercial License</td>
            </tr>
            <tr>
              <td>8- Account Statment (six months) if available</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
