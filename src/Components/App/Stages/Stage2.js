import React from "react";
import { Link } from "react-router-dom";

function Stage2() {
  return (
    <div className="stepping">
      <div className="step1">
        <Link to={`/AppSteps/Step1`}>
          <img
            className="stepimg"
            src="https://cdn-icons-png.flaticon.com/512/3564/3564180.png"
          />
        </Link>
        <hr
          style={{
            height: "5px",
            backgroundColor: "#dd3e3e",
            width: "150px",
            border: "none",
            position: "relative",
            bottom: "35px",
            left: "79px",
            borderRadius: "10px",
          }}
        />
      </div>

      <div className="step2Red">
        <Link to={"/AppSteps/Step1/Step2/"}>
          <img
            className="stepimg"
            src="https://cdn-icons-png.flaticon.com/512/3564/3564186.png"
          />
        </Link>
        <hr
          style={{
            height: "5px",
            backgroundColor: "#c4c4c4",
            width: "180px",
            border: "none",
            position: "relative",
            bottom: "35px",
            left: "79px",
            borderRadius: "10px",
          }}
        />
      </div>

      <div className="step3">
        <Link to={`/AppSteps/Step1/Step2/Step3`}>
          <img
            className="stepimg"
            src="https://cdn-icons-png.flaticon.com/512/3179/3179243.png"
          />
        </Link>
        <hr
          style={{
            height: "5px",
            backgroundColor: "#c4c4c4",
            width: "180px",
            border: "none",
            position: "relative",
            bottom: "35px",
            left: "79px",
            borderRadius: "10px",
          }}
        />
      </div>

      <div className="step4">
        <Link to={`/AppSteps/Step1/Step2/Step3/Step4`}>
          <img
            className="stepimg"
            src="https://cdn-icons-png.flaticon.com/512/3179/3179234.png"
          />
        </Link>
      </div>

      {/* <div className="step5">
    <img
      className="stepimg"
      src="https://cdn-icons.flaticon.com/png/512/2946/premium/2946636.png?token=exp=1648545452~hmac=528630d972bffcf8ef3a06226c43cea0"
    />
  </div> */}
    </div>
  );
}

export default Stage2;
