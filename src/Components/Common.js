import React from 'react'
import {NavLink} from "react-router-dom";

function Common(props) {
  return (
    <>
      <section id="header" className="home-main d-flex align-items-center my-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  {props.name}{" "}<br/>
                  <strong className="brand-name">{props.strong}</strong>
                </h1>
                <h2 className="desc my-3">
                  {props.msg}
                </h2>

                <div className="mt-3">
                  <NavLink className="btn btn-primary" to={props.visit}>
                    {props.btntext}
                  </NavLink>
                </div>
              </div>

              <div className="col-md-6 order-1 order-ig-2 header-img">
                <img src={props.imgsrc} alt="Header image" className="main-img img-fluid animated"/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Common
