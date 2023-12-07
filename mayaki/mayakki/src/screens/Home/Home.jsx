import React from "react";
import {Navigate} from "react-router-dom"
import {Login, SignUp} from "../../assets";
import { FiRrCopyright1 } from "./FiRrCopyright1";
import "./style.css";

export const Home = () => {
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
    <div className="home">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="background">
            <div className="rectangle" />
          </div>
          <div className="copyright">
            <p className="text-wrapper">2023 Mayaki Pizza | All rights reserved</p>
            <FiRrCopyright1 className="fi-rr-copyright" color="black" />
          </div>
          <img className="line" alt="Line" src="https://c.animaapp.com/bN2rqwyo/img/line-4.png" />
          <div className="menu-bottom">
            <div className="overlap-group">
              <div className="div">Menu</div>
              <p className="text-wrapper-2">
                  <button onClick={() => {setGoToCYO(true)}} className="button" > 
                  Create Your Own Pizza
                  </button>
                <br />
                  <button onClick={() => {setGoToMenu(true)}} className="button">
                  Pizza Specials
                  </button>
                <br />
                  <button onClick={() => {setGoToMenu(true)}} className="button">
                  Rewards Pizza’s
                  </button>
                <br />
                  <button onClick={() => {setGoToMenu(true)}} className="button">
                  Desserts
                  </button>
              </p>
              <img className="img" alt="Line" src="https://c.animaapp.com/bN2rqwyo/img/line-7.svg" />
            </div>
          </div>
          <div className="h-s-bottom">
            <div className="overlap-2">
              <div className="div">Help &amp; Services</div>
              <img className="line-2" alt="Line" src="https://c.animaapp.com/bN2rqwyo/img/line-6.svg" />
            </div>
            <div className="text-wrapper-2">
              <br />
                <button onClick={() => {setGoToReservations(true)}} className="button">
                Reservations
                </button>
              <br />
                <button onClick={() => {setGoToAG(true)}} className="button" >
                Allergen Guide
                </button>
            </div>
          </div>
          <div className="our-company">
            <div className="overlap-3">
              <div className="div">Our Company</div>
              <div className="about-us-careers">
                  <button onClick={() => {setGoToAboutUs(true)}} className="button" >
                  About Us
                  </button>
                <br />
                  <button onClick={() => {setGoToAboutUs(true)}} className="button" >
                  Careers
                  </button>
              </div>
              <img className="line-3" alt="Line" src="https://c.animaapp.com/bN2rqwyo/img/line-5.svg" />
            </div>
          </div>
          <button onClick={() => {setGoToMenu(true)}} className="button">
          <img className="desserts" alt="Desserts" src="https://c.animaapp.com/bN2rqwyo/img/desserts.png" />
          </button>
          <button onClick={() => {setGoToMenu(true)}} className="button">
          <div className="pizza-specials">
            <div className="text-wrapper-3">Pizza Specials</div>
            <img className="pizza" alt="Pizza" src="https://c.animaapp.com/bN2rqwyo/img/pizza-1.png" />
          </div>
          </button>
          <button onClick={() => {setGoToCYO(true)}} className="button" > 
          <div className="create-pizza">
            <div className="overlap-4">
                <img
                  className="create-pizza-home"
                  alt="Create pizza home"
                  src="https://c.animaapp.com/bN2rqwyo/img/createpizzahome.png"
                />
              <div className="text-wrapper-4">Customize Pizza</div>
            </div>
          </div>
          </button>
          <img className="line-4" alt="Line" src="https://c.animaapp.com/bN2rqwyo/img/line-3.png" />
          <div className="mayo-pizza-special">
            <div className="overlap-5">
              <div className="rectangle-2" />
              <div className="text-wrapper-5">$8.99</div>
              <p className="p">TRY OUR NEW OLIVE, HAM AND MAYO PIZZA!</p>
            </div>
          </div>
          <div className="tabs">
            <div className="overlap-6">
              <div className="overlap-7">
                <div className="login-signup">
                  <div className="overlap-group-2">
                    <button onClick={() => {setGoToSignUp(true)}} className="button" >
                      <img className="sign-up" alt="Sign up" src={SignUp} />
                    </button>
                    <button onClick={() => {setGoToLogin(true)}} className="login-button" >
                      <img className="login" alt="Login" src={Login} />
                    </button>
                  </div>
                </div>
                <div className="about-us-top">
                  <div className="overlap-8">
                    <div className="text-wrapper-6">
                      <button onClick={() => {setGoToAboutUs(true)}} className="button" >
                        Our Company
                      </button>
                      </div>
                    <div className="drop-down">
                    </div>
                  </div>
                </div>
                <div className="services-top">
                  <div className="overlap-9">
                    <div className="text-wrapper-7">
                      <button onClick={() => {setGoToReservations(true)}} className="button" >
                        Services
                      </button>
                    </div>
                    <div className="overlap-group-wrapper">
                    </div>
                  </div>
                </div>
                <div className="text-wrapper-8">
                  <button onClick={() => {setGoToHome(true)}} className="button" >
                    Mayaki Pizza
                  </button>
                  </div>
                <div className="contact-info">
                  <div className="overlap-10">
                    <div className="rectangle-3" />
                    <p className="contact-us">
                      Contact Us: 155-555-5551
                      <br />
                      123 South St. Canada, Canada
                    </p>
                  </div>
                </div>
              </div>
              <div className="menu-top">
                <div className="overlap-11">
                  <div className="div">
                    <button onClick={() => {setGoToMenu(true)}} className="button"> 
                    Menu
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
