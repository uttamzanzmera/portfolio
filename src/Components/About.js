import React from 'react'
import tech from "../Images/about.png"
import Common from './Common';

function About(props) {
  document.title = `${props.name}`;  return (
    <>
      <Common 
      name ='Hello,I am from'
      imgsrc={tech}
      msg="ddddd"
      btntext="Contact Now"
      visit="/contact"
      
      />
    </>
  )
}

export default About
