import React from "react";
import {Navigate} from "react-router-dom"
import "./style.css";

export const AboutUs = () => {
  const [goToMenu, setGoToMenu] = React.useState(false);
  const [goToCYO, setGoToCYO] = React.useState(false);
  const [goToAG, setGoToAG] = React.useState(false);
  const [goToAboutUs, setGoToAboutUs] = React.useState(false);
  const [goToLogin, setGoToLogin] = React.useState(false);
  const [goToSignUp, setGoToSignUp] = React.useState(false);
  const [goToHome, setGoToHome] = React.useState(false);
  const [goToReservations, setGoToReservations] = React.useState(false);

  if (goToReservations){
    return<Navigate to="/reservations" />;
  }
  if (goToSignUp){
    return<Navigate to="/signup" />;
  }
  if (goToLogin){
    return<Navigate to="/login" />;
  }
  if (goToHome){
    return<Navigate to="/" />;
  }
  if (goToAboutUs){
    return<Navigate to="/aboutus" />;
  }
  if (goToAG){
    return<Navigate to="/allergenguide" />;
  }
  if (goToMenu){
    return<Navigate to="/menu" />;
  }
  if (goToCYO){
    return<Navigate to="/createyourown" />;
  }


  return (
    <div className="about-us">
      <div className="div">
        <div className="overlap">
          <div className="background" />
          <div className="text-wrapper">About US</div>
          <div className="tabs">
            <div className="overlap-group">
              <div className="login-signup">
                <div className="overlap-group-2">
                  <div className="rectangle" />
                  <div className="rectangle-2" />
                  <div className="text-wrapper-2">
                    <button onClick={() => {setGoToLogin(true)}} className="button" >
                      Login
                    </button>
                    </div>
                  <div className="text-wrapper-3">
                    <button onClick={() => {setGoToSignUp(true)}} className="button" >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
              <div className="contact-info">
                <div className="overlap-2">
                  <div className="rectangle-3" />
                  <p className="contact-us">
                    Contact Us: 155-555-5551
                    <br />
                    123 South St. Canada, 
                    <br />
                    Canada
                  </p>
                </div>
              </div>
              <div className="menu-top">
                <div className="overlap-3">
                  <div className="text-wrapper-4">
                  <button onClick={() => {setGoToMenu(true)}} className="button"> 
                    Menu
                  </button>
                  </div>
                </div>
              </div>
              <div className="about-us-top">
                <div className="overlap-4">
                  <div className="text-wrapper-5">
                    <button onClick={() => {setGoToAboutUs(true)}} className="button" >
                      Our Company
                    </button>
                  </div>
                </div>
              </div>
              <div className="services-top">
                <div className="overlap-5">
                  <div className="text-wrapper-6">
                    <button onClick={() => {setGoToReservations(true)}} className="button" >
                      Services
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-wrapper-7">
                <button onClick={() => {setGoToHome(true)}} className="button" >
                  Mayaki Pizza
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className="about-mayaki-pizza">
          About Mayaki Pizza:
          <br />
          Welcome to Mayaki Pizza, where a passion for pizza and a vision of delicious innovation have come together to
          create a pizzeria like no other. Founded by the culinary genius, Cameron Achorn, Mayaki Pizza has quickly
          become a beloved destination for pizza aficionados seeking a truly unique and unforgettable dining experience.
          <br />
          <br />
          <br />
          Our Story:
          <br />
          Mayaki Pizza was founded by Cameron Achorn, a pizza enthusiast with a mission to redefine the art of
          pizza-making. Cameron&#39;s journey began with a dream of crafting the perfect pizza that would not only
          satisfy the taste buds but also ignite the imagination. His commitment to quality and creativity laid the
          cornerstone of Mayaki Pizza&#39;s success.
        </p>
      </div>
    </div>
  );
};
