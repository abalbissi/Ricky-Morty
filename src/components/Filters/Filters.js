import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filters = ({setSpecies,setPageNumber, setStatus, setGender}) => {
  let clear = ()=>{
    setGender('')
    setPageNumber(1)
    setSpecies('')
    setStatus('')
  }
  return (
    <div className="col-lg-3 col-12 mb-4">
      <div className="text-center fw-bold fs-4 mb-4">Filter</div>
      <div
        onClick={clear}
        style={{ cursor: "pointer" }}
        className="text-center mb-4 text-decoration-underline text-primary "
      >
        Clear Filter
      </div>
      <div className="accordion" id="accordionExample">
        <Status setStatus={setStatus} setPageNumber={setPageNumber}/>
        <Species  setPageNumber={setPageNumber} setSpecies={setSpecies}/>
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
      </div>
    </div>
  );
};

export default Filters;
