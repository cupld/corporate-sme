import React from "react";

function Stages() {
  return (
    <div>
      <div className="step1">
        <img
          className="stepimg"
          src="https://cdn-icons-png.flaticon.com/512/3564/3564180.png"
        />
        <hr
          style={{
            height: "5px",
            backgroundColor: "#c4c4c4",
            width: "150px",
            border: "none",
            position: "relative",
            bottom: "35px",
            left: "79px",
            borderRadius: "10px",
          }}
        />
      </div>

      <div className="step2">
        <img
          className="stepimg"
          src="https://cdn-icons-png.flaticon.com/512/3179/3179247.png"
        />
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
        <img
          className="stepimg"
          src="https://cdn-icons-png.flaticon.com/512/3179/3179243.png"
        />
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
        <img
          className="stepimg"
          src="https://cdn-icons-png.flaticon.com/512/3179/3179234.png"
        />
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

export default Stages;
