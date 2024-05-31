import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Project(){
    return (
        <div style={{ width: '75%', height: "auto", margin: "auto", alignSelf:"center" }}>
        <h2>Projects</h2>
        <Carousel>
           <div style={{padding:"2em"}}>
            <h4 className="projectName">Retail Call List Generator</h4>
             <p className="caption">I designed, developed, and tested this C# application alone to automate the generation of a call list from customer
              data in a retail setting. This specialized software will save up to 8 hours of labour per manager per promotion. It is designed for compatibility with Cegid output.</p>
             <img className="carouselImage" src="src/photos/calllistautomation.png" />
           </div>
           <div style={{padding:"2em"}} >
             <h4 className="projectName">ECommerce Template Website</h4>
             <p className="caption">This is a template of a website created for the final assignment of my web development course. As my skills develop, I plan to continue updating it with increased
             functionality, including a shopping cart to store items and tax calculations.</p>
             <img className="carouselImage" src="src/photos/website.png" />
           </div>
           <div style={{padding:"2em"}}>
             <h4 className="projectName">Zodiac Information App</h4>
             <p className="caption">This desktop application written in C# displays information about a user's Zodiac sign after they select their birthdate on a calendar.
             I developed this alone to reinforce learning about GUI and JSON serialization, and to generate excitement about programming in my peers from other fields.</p>
             <img className="carouselImage" src="src/photos/ZodiacApp.jpg"/>
           </div>
       </Carousel>
       </div>
      );
};