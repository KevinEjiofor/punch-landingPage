import React from "react";
import style from "./index.module.css";
import DropDown from "../../reuseable/LandingPage/DropDown";

export default function FourthHeroComponent() {
  return (
    <div className={style.mainDiv}>
      <div>
        <h1>How we ensure you’re in good hands.</h1>
        <p>
          With our comprehensive screening process, we hand-pick highly skilled
          candidates so you can onboard them in a matter of days.
        </p>
      </div>
      <div className={style.DropDownContainer}>
        <DropDown
        header="Step 1: Resume Screening"
        text="Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit."
        />
          <DropDown
        header="Step 2: Video Interview"
        text="Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit."
        />
        
        <DropDown
        header="Step 3: Technical Evaluation"
        text="Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit."
        />
          <DropDown
        header="Step 4: Application Review"
        text="Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit."
        />
          <DropDown
        header="Step 5: Lets get to work"
        text="Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit."
        />
        

      </div>

    </div>
  );
}
