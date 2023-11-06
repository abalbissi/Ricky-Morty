import React, { useState, useEffect } from "react";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filters/Category/InputGroup";

const Episodes = () => {
  const [id, setID] = useState(1);
  const [info, setInfo] = useState([]);
  const [results, setResults] = useState([])
  const { air_date, name } = info;
  const api = `https://rickandmortyapi.com/api/episode/${id}`;
 
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((x)=>{
          return fetch(x).then((res)=>res.json());
        })
      );
      setResults(a)
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center mb-4">Episode :
        <span className="text-primary">
        {name === ""? "unknown" : name}
        </span>
        </h1>
        <h5 className="text-center">Air Date {air_date === ""? "unknown" : air_date}</h5>
      </div>
      <div className="row">
      <div className='col-3'>
       <h4 className="text-center mb-4">
         Pick Episodes
       </h4>
       <InputGroup total={51} setID={setID}/>
      </div>
        <div className='col-8'>
          <div className='row'>
          <Cards page="/episode/" results={results} />
          </div>
         </div>
      </div>
    </div>
  );
};

export default Episodes;
