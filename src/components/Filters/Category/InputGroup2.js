import React from "react";

const InputGroup2 = ({ total, setID }) => {
  console.log();
  return (
    <div>
      <div class="input-group mb-3">
        <select
          onChange={(e) => setID(e.target.value)}
          class="form-select"
          id="Episode"
        >
          <option selected>Choose...</option>
          {[...Array(total).keys()].map((x) => {
            return <option value={x + 1}>Location - {x + 1}</option>;
          })}
        </select>
      </div>
    </div>
  );
};
export default InputGroup2;
