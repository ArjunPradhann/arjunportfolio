import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab, selectActiveTab } from "../features/tabSlice";
import "../style/Qualification.css";
import "../App.css";
import Education from "./Education";
import ProfessionalSkill from "./ProfessionalSkill";
import Achievement from "./Achievement";

function Qualification() {
  const dispatch = useDispatch();
  const activeTab = useSelector(selectActiveTab);

  const handleTabClick = (tab) => {
    dispatch(setActiveTab(tab));
  };

  return (
    <>
      <p className="heading">Qualification</p>
      <div className="Qualmain">
        <p
          onClick={() => handleTabClick("education")}
          className={activeTab === "education" ? "active" : ""}
        >
          Education
        </p>
        <p
          onClick={() => handleTabClick("profesional")}
          className={activeTab === "profesional" ? "active" : ""}
        >
          Professional skill
        </p>
        <p
          onClick={() => handleTabClick("achievement")}
          className={activeTab === "achievement" ? "active" : ""}
        >
          Achievement
        </p>
      </div>
      <div>
        {activeTab === "education" && (
          <div>
            <Education />
          </div>
        )}
        {activeTab === "profesional" && (
          <div>
            <ProfessionalSkill />
          </div>
        )}
        {activeTab === "achievement" && (
          <div>
            <Achievement />
          </div>
        )}
      </div>
    </>
  );
}
export default Qualification;
