import React, { useState, useEffect } from "react";
import Header from "./Component/Sections/Header";
import { TopHeader } from "./Component/Sections/StyleComponent";
import "./Component/style.css";
import FadeIn from "./Component/Sections/FadeIn";
import ProfileCard from "./Component/Sections/ProfileCard";
import univLogo from "./Component/Assets/univLogo.jpg"

import ExperienceCard from "./Component/Sections/ExperienceCard";

import greetCardOne from "./Component/Assets/congratsOne.png"
import dateOne from "./Component/Assets/dateOne.jpg"

import greetCardTwo from "./Component/Assets/congratsTwo.jpg"
import dateTwo from "./Component/Assets/dateTwo.jpg"

import amazonLogo from "./Component/Assets/amazonLogo.png"
import ImageWithBorder from "./Component/Sections/ImageWithBorder";



function App() {
  const [visible, setVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80 && !hasScrolled) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setVisible(false);
  };

  if (visible) {
    return (
      <div className="App" style={{ marginTop: "15%" }}>
        <button className="button" onClick={handleClick} style={{ verticalAlign: "middle" }}>
          <span>CLICK ME</span>
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <TopHeader>{" CONGRATULATIONS CARD !!  :)"}</TopHeader>

      {/* first section */}
      <div style={{ margin: "5px", height: "250px" , display:'flex',flexDirection:'row'}}>
        <div style={{ display: "flex", marginTop: "15px", width: "70%" }}>
        <ImageWithBorder src={amazonLogo} alt="" />
<ImageWithBorder src={univLogo} alt="" />
        </div>
        <div style={{ display: "flex", marginTop: "15px", width: "30%" }}>
          <FadeIn>
            <ProfileCard />
          </FadeIn>
        </div>
      </div>

      {/* second section */}
      <div style={{ margin: "5px", height: "450px" }}>
        <FadeIn>
          <ExperienceCard 
          index ={2} 
          greetCardImage={greetCardOne}
          company={'Amazon Fulfillment Technologies & Robotics'}
          dateImage={dateOne}
          location={'Boston, Massachusetts, United States'}  
          />
        </FadeIn>
      </div>

      {/* third section */}
      <div style={{ margin: "5px", height: "450px", display: "flex", justifyContent: "flex-end" }}>
        <FadeIn>
        <ExperienceCard 
          index ={2} 
          greetCardImage={greetCardTwo}
          company={'University of Michigan - School of Information'}
          dateImage={dateTwo}
          location={'Ann Arbor, Michigan, United States'}  
          />
        </FadeIn>
      
      </div>
    </div>
  );
}

export default App;
