import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const [fetchingData, setFetchingData] = useState([]);
  let { name, image, gender, location, status, species, origin, type } =
    fetchingData;
  console.log(fetchingData);
  let { id } = useParams();
  const api = `https://rickandmortyapi.com/api/character/${id}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchingData(data);
    })();
  }, [api]);
  return (
    <div className="container d-flex justify-content-center ">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1> 
        <img src={image} alt="Character Image" className="img-fluid" />
        {(() => {
                if (status === "Alive") {
                  return (
                    <div
                      className="badge text-bg-success fs-5"
                    >
                      {status}
                    </div>
                  );
                } else if (status === "Dead") {
                  return (
                    <div
                      className="badge text-bg-danger fs-5"
                    >
                      {status}
                    </div>
                  );
                } else {
                  return (
                    <div
                      className="badge text-bg-secondary fs-5"
                    >
                      {status}
                    </div>
                  );
                }
              })()}
        <div className="content">
            <div >
                <span className="fw-bold">Gender : </span>
                {gender}
            </div>
            <div >
                <span className="fw-bold">Location : </span>
                {location?.name}
            </div>
            <div >
                <span className="fw-bold">Origin : </span>
                {origin?.name}
            </div>
            <div >
                <span className="fw-bold">Gender : </span>
                {gender}
            </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
