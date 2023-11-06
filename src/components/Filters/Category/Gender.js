import React from "react";
import FilterBTN from "../FilterBTN";

const Gender = ({ setPageNumber, setGender }) => {
  let gender = ["male", "female", "genderless", "unknown"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3 ">
          {gender.map((item, index) => (
            <FilterBTN
              key={index}
              name="Gender"
              index={index}
              item={item}
              task={setGender}
              setPageNumber={setPageNumber}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gender;
