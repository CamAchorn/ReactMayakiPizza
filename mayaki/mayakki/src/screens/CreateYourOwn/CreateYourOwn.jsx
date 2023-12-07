import React from "react";
import {Navigate} from "react-router-dom"
import "./style.css";

export const CreateYourOwn = () => {
  const [goToMenu, setGoToMenu] = React.useState(false);
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



  return (
    <div className="create-your-own">
      <div className="div">
        <div className="overlap">
          <div className="background" />
          <div className="text-wrapper">Create your own Pizza</div>
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
              <div className="menu-top">
                <div className="overlap-2">
                  <div className="text-wrapper-4">
                    
                  <button onClick={() => {setGoToMenu(true)}} className="button"> 
                    Menu
                    </button>
                    
                    </div>
                </div>
              </div>
              <div className="about-us-top">
                <div className="overlap-3">
                  <div className="text-wrapper-5">
                    
                  <button onClick={() => {setGoToAboutUs(true)}} className="button" >
                    Our Company
                  </button>

                    </div>
                </div>
              </div>
              <div className="services-top">
                <div className="overlap-4">
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
              <div className="contact-info">
                <div className="overlap-5">
                  <div className="rectangle-3" />
                  <p className="contact-us">
                    Contact Us: 155-555-5551
                    <br />
                    123 South St. Canada, Canada
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-wrapper-8">Choose Your Size</div>
        <div className="text-wrapper-9">Choose Your Topping</div>
        <div className="personal">Personal&nbsp;&nbsp; 12’’</div>
        <div className="text-wrapper-10">Medium 14’’</div>
        <div className="text-wrapper-11">Large 16’’</div>
        <div className="text-wrapper-12">X-Large 20’’</div>
        <div className="overlap-6">
          <div className="sausage-ham-grilled">
            Sausage
            <br />
            Ham
            <br />
            Grilled chicken
            <br />
            Ground beef
            <br />
            Bacon
          </div>
          <div className="onions-mushrooms">
            Onions
            <br />
            Mushrooms
            <br />
            Black olives
            <br />
            Green olives
            <br />
            Tomatoes
            <br />
            Spinach
          </div>
          <p className="oregano-red-pepper">
            Oregano
            <br />
            Red pepper flakes
            <br />
            Garlic
            <br />
            Italian seasoning
            <br />
            Freshly ground black pepper
          </p>
        </div>
      </div>
    </div>
  );
};
