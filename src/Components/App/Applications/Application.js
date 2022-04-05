import React from "react";
import Stages from "../Stages/Stages";
import Step from "../Steps/Step";

function Application({ setApplication, application }) {
  return (
    <div>
      <Stages />
      <Step setApplication={setApplication} application={application} />
    </div>
  );
}

export default Application;
