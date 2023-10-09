import React from 'react'
import tech from "../Images/about.png"
import Common from './Common';

function About(props) {
  document.title = `${props.name}`;  return (
    <>
      <Common 
      name ='Empowering Tomorrow: Unveiling the Journey of'
      strong="UZ infotech"
      imgsrc={tech}
      msg="UZ Infotech is a dynamic IT company at the forefront of innovation. With a passion for technology and a commitment to excellence, we specialize in delivering cutting-edge solutions. Our expert team thrives on challenges, crafting tailored IT solutions that empower businesses to succeed in today's fast-paced digital landscape. At SSV Infotech, we blend creativity, expertise, and dedication to drive technological advancement for our clients. Your goals are our inspiration, and together, we turn visions into reality."
      btntext="Contact Now"
      visit="/contact"
      
      />
    </>
  )
}

export default About
