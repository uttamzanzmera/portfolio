import React from "react";
import { NavLink } from "react-router-dom";
import tech from "../Images/about.png";

function Card(props) {
  return (
    <>
      <div className="col-md-3 col-10 mx-auto">
        <div className="card">
          <img src={props.imgsrc} class="card-img-top" alt="..." />
          <div className="card-body">
            <div className="description">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div className="button-des">
            <NavLink to="/Contact" className="card-btn btn btn-primary">
              Let's Inquery
            </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
