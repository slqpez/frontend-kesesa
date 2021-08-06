
import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';


const Slider = () => {
  const [autoplay, setAutoplay] = useState(true);
 
  const style = {
    textAlign: "center",
    background: "teal",
    padding: "200px 0",
    fontSize: "30px"
  }

  return (
      <div>
        <Slide autoplay={autoplay}>
          <div style={style}>
            <div className="prueba">
              <img src=""alt="" />
            </div>
          </div>
          <div style={style}>
            Second Slide
          </div>
          <div style={style}>
            Third Slide
          </div>
        </Slide>
      </div>
  );
};

export default Slider;