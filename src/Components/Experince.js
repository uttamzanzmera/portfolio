import React from "react";
import Card from "./Card";
import Sdata from './Sdata'

function Experince(props) {
  document.title = `${props.name}`;
  return (
    <>
      <div className="container-fluid">
        <div className="my-5">
          <h1 className="text-center">Our Services</h1>
        </div>
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">

              {
                
                Sdata.Sdata.map((val,ind) => {
                  return <Card key={ind} imgsrc={val.imgsrc} title={val.title} desc={val.desc} />  
                })
              }
                   
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experince;
