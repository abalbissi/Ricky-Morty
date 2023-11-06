import React from "react";

const FilterBTN = ({ index, name, item, task, setPageNumber }) => {
  return (
    <div>
      <style jsx>
        {`input[type="radio"]{
                    display:none`}
      </style>

      <div className="form-check">
        <input
        onClick={()=>{
           setPageNumber(1)
            task(item) 
            
        }}
    
          className="form-check-input"
          type="radio"
          name={name}
          id={`${name} - ${index}`}
        />
        <label className="btn btn-outline-primary" for={`${name} - ${index}`}>
          {item}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
