import React from "react";
import {Navigate} from "react-router-dom";
import {BackToHome, LargeCheck, GrayRectangle} from "../../assets";
import "./style.css";

export const Reservations = () => {
  const [goToHome, setGoToHome] = React.useState(false);
  const [image, setImage] = React.useState(GrayRectangle);


  if (goToHome){
    return<Navigate to="/home" />;
  }



  const changeImage = () => {
    let value = image;

    if (value === GrayRectangle) {
      setImage(LargeCheck);

    } else {
      setImage(GrayRectangle);
    }
  };

  
  return (
    <div className="reservations">
      <div className="imageChange">
        <button onClick={changeImage} className="imageButton"> <img src={image} /> </button>
      </div>
      <div className="div">
        <div>
          <button onClick={() => {setGoToHome(true)}} className="button" >
            <img className="BackToHome" alt="Back To Home" src={BackToHome}/>
          </button>
        </div>
        <div className="rectangle" />
        <p className="p">Click the box to make a Reservation</p>
      </div>
    </div>
  );
};
