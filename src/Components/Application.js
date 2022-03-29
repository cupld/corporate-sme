import React from "react";

function Application() {
  return (
    <div>
      {/* <img className="linning" src="https://freesvg.org/img/dotted-line.png" /> */}
      <hr
        style={{
          height: "5px",
          backgroundColor: "#c4c4c4",
          width: "20%",
          border: "none",
          position: "absolute",
          top: "250px",
          left: "150px",
        }}
      />
      <hr
        style={{
          height: "5px",
          backgroundColor: "#c4c4c4",
          width: "18%",
          border: "none",
          position: "absolute",
          top: "250px",
          left: "400px",
        }}
      />
      <hr
        style={{
          height: "5px",
          backgroundColor: "#c4c4c4",
          width: "18%",
          border: "none",
          position: "absolute",
          top: "250px",
          left: "650px",
        }}
      />
      {/* <hr
        style={{
          height: "5px",
          backgroundColor: "#c4c4c4",
          width: "10%",
          border: "none",
          position: "absolute",
          top: "250px",
          left: "850px",
        }}
      /> */}
      <div className="step1">
        <img
          className="stepimg"
          src="https://cdn-icons-png.flaticon.com/512/3564/3564180.png"
        />
      </div>
      <div className="step2">
        <img
          className="stepimg"
          src="https://cdn-icons-png.flaticon.com/512/3179/3179247.png"
        />
      </div>
      <div className="step3">
        <img
          className="stepimg"
          src="https://cdn-icons-png.flaticon.com/512/3179/3179243.png"
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

export default Application;
