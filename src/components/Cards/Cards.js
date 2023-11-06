import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cards.module.scss";
const Cards = ({ results, page }) => {
  let display;
  
  if (results) {
    display = results.map((item) => {
      let { id, name, image, location, status } = item;
      return (
        <Link 
        style={{textDecoration: 'none'}}
        to={`${page}${id}`}
        className="col-lg-4 col-md-6 col-12 position-relative mb-5 text-black" key={id}>
          <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
            <img src={image} alt="" className={`img-fluid ${styles.image}`} />
            <div style={{ padding: "10px" }} className="content">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="fs-6">
                Last Location
                <br />
                {location.name}
              </div>
              {(() => {
                if (status === "Alive") {
                  return (
                    <div
                      className={`${styles.badge} badge text-bg-success position-absolute`}
                    >
                      {status}
                    </div>
                  );
                } else if (status === "Dead") {
                  return (
                    <div
                      className={`${styles.badge} badge text-bg-danger position-absolute`}
                    >
                      {status}
                    </div>
                  );
                } else {
                  return (
                    <div
                      className={`${styles.badge} badge text-bg-secondary  position-absolute`}
                    >
                      {status}
                    </div>
                  );
                }
              })()}
            </div>
          </div>
        </Link>
      );
    });
  } else {
    display = "No Characters Found :/";
  }

  return <>{display}</>;
};

export default Cards;
