import React from "react";

function GenderCheckbox({ onCheckboxChange, selectedGender }) {
  return (
    <div className="flex gap-4">
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className={`checkbox border-slate-900 ${
              selectedGender === "male" ? "selected" : ""
            }`}
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className={`checkbox border-slate-900 ${
              selectedGender === "female" ? "selected" : ""
            }`}
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
}

export default GenderCheckbox;
