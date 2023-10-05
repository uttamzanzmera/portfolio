import React from "react";
import tech from "../Images/tech.png"
import Common from "./Common";
import Testonomial from './Testonomial'

function Home() {
  document.title = "Home";
  return (
    <>
     <Common 
      name ='Grow your business with'
      imgsrc={tech}
      msg="We are the team of talented devleoper making proper ITsolutions"
      btntext="Get Started"
      visit="/experince"
      />
      <Testonomial />
    </>
  );
}

export default Home;
