import React from "react";
import tech from "../Images/tech.png"
import Common from "./Common";
import Testonomial from './Testonomial'

function Home() {
  document.title = "Home";
  return (
    <>
     <Common 
      name ='IT services Agency'
      strong='Your Ultimate IT Solutions Partner'
      imgsrc={tech}
      msg="Transforming Possibilities, Delivering Excellence: UZ Infotech - Your IT Solutions Evolution Begins Here."
      btntext="Get Started"
      visit="/experince"
      />
      <Testonomial />
    </>
  );
}

export default Home;
