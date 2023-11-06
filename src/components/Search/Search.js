import React from "react";
import styles from "./Search.module.scss";
const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form className="d-flex flex-sm-row flex-column align-items-center gap-4 justify-content-center my-5">
      <input
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        type="text"
        placeholder="search for character"
        className={`${styles.input}`}
      />
      <button onClick={(e)=>{
        e.preventDefault()
      }} type="submit" className={`btn btn-primary fs-5 ${styles.btn1}`}>
        Search
      </button>
    </form>
  );
};

export default Search;
