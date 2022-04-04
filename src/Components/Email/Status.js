import React from "react";

function Status() {
  return (
    <div className="flexStatus">
      <div className="sent">Application Sents</div>
      <div className="sendArrow">
        <img
          className="arrow"
          src="https://cdn-icons-png.flaticon.com/512/329/329344.png"
        />
      </div>
      <div className="rowStatus">
        <div className="sending">
          Approved
          <hr
            style={{
              height: "5px",
              backgroundColor: "#c4c4c4",
              width: "12px",
              border: "none",
              position: "relative",
              bottom: "25px",
              left: "255px",
              borderRadius: "10px",
            }}
          />
        </div>
        <div className="sending">comments</div>
      </div>
      <div className="sendArrow">
        <img
          className="arrow"
          src="https://cdn-icons-png.flaticon.com/512/329/329343.png"
        />
      </div>
      <div className="sending">Sent to "Area" Branch</div>
    </div>
  );
}

export default Status;
