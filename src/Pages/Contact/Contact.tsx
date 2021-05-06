import React from "react";

import './Contact.scss';

import image from './microservices.png'
const Contact = () => {
  return (
    <div className="contact-container">
        <img src='https://www.endivesoftware.com/blog/wp-content/uploads/2020/01/Spring-Boot-Application-Development.png' />
        <img src={image} className='micro'/>
      <h1>
        This website was made as a portfolio project mainly to demonstrate
        fluency in <span>Microservices architecture, Spring boot and Reactjs. </span>
        Check out my <a href='https://www.github.com/telakshan'>github</a> for more info 
      </h1>
    </div>
  );
};

export default Contact;