import React from "react";
import {Navigate} from "react-router-dom"
import "./style.css";

export const Menu = () => {
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
    <div className="menu">
      <div className="div">
        <div className="overlap">
          <div className="background" />
          <div className="cheese-lover">
            <div className="overlap-group">
              <img className="image" alt="Image" src="https://c.animaapp.com/b1r64fOS/img/image-2.png" />
              <div className="rectangle" />
              <div className="text-wrapper">Cheese Lover</div>
              <div className="traditional-cheese">
                Traditional cheese pizza
                <br />
                $9.99
              </div>
            </div>
          </div>
          <div className="cookie-pizza">
            <div className="overlap-2">
              <img className="img" alt="Image" src="https://c.animaapp.com/b1r64fOS/img/image-9.png" />
              <div className="rectangle-2" />
              <p className="large-chocolate-chip">
                {" "}
                Large Chocolate Chip Cookie in Pizza form
                <br />
                $17.99
              </p>
              <div className="text-wrapper-2">Cookie Pizza</div>
            </div>
          </div>
          <div className="tabs">
            <div className="overlap-3">
              <div className="login-signup">
                <div className="overlap-group-2">
                  <div className="rectangle-3" />
                  <div className="rectangle-4" />
                  <div className="text-wrapper-3">
                    <button onClick={() => {setGoToLogin(true)}} className="button" >
                      Login
                    </button>
                  </div>
                  <div className="text-wrapper-4">
                  <button onClick={() => {setGoToSignUp(true)}} className="button" >
                    Sign Up
                  </button>
                  </div>
                </div>
              </div>
              <div className="contact-info">
                <div className="overlap-4">
                  <div className="rectangle-5" />
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
                <div className="overlap-5">
                  <div className="text-wrapper-5">
                  <button onClick={() => {setGoToMenu(true)}} className="button"> 
                    Menu
                  </button>
                  </div>
                </div>
              </div>
              <div className="about-us-top">
                <div className="overlap-6">
                  <div className="text-wrapper-6">
                    <button onClick={() => {setGoToAboutUs(true)}} className="button" >
                      Our Company
                    </button>
                  </div>
                </div>
              </div>
              <div className="services-top">
                <div className="overlap-7">
                  <div className="text-wrapper-7">
                    <button onClick={() => {setGoToReservations(true)}} className="button" >
                      Services
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-wrapper-8">
                <button onClick={() => {setGoToHome(true)}} className="button" >
                  Mayaki Pizza
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-8">
          <div className="hawaiian">
            <div className="overlap-group-4">
              <img className="image-2" alt="Image" src="https://c.animaapp.com/b1r64fOS/img/image-5.png" />
              <div className="rectangle-6" />
              <p className="pineapple-and-ham-on">
                Pineapple and Ham on a premium crust
                <br />
                $15.99
              </p>
              <div className="hawaiian-2">Hawaiian Pizza</div>
            </div>
          </div>
          <div className="taco-pizza">
            <div className="overlap-9">
              <img className="image-3" alt="Image" src="https://c.animaapp.com/b1r64fOS/img/image-7.png" />
              <div className="rectangle-7" />
              <p className="p">
                Lettuce, Salsa, Ground Beef, and Shredded Cheese added
                <br />
                $17.99
              </p>
              <div className="hawaiian-3">Taco Pizza</div>
            </div>
          </div>
        </div>
        <div className="overlap-10">
          <div className="meat-lovers">
            <div className="overlap-11">
              <img className="image-4" alt="Image" src="https://c.animaapp.com/b1r64fOS/img/image-6.png" />
              <div className="rectangle-8" />
              <p className="sausage-pepperoni">
                Sausage, Pepperoni, Bacon, and Hamburger
                <br />
                $15.99
              </p>
              <div className="text-wrapper-9">Meat Lovers</div>
            </div>
          </div>
          <div className="mayo-olive-ham">
            <div className="overlap-12">
              <img className="image-5" alt="Image" src="https://c.animaapp.com/b1r64fOS/img/image-1.png" />
              <div className="rectangle-2" />
              <p className="text-wrapper-10">
                Mayo, Olives, and Ham cooked with crispiness in mind with an easy burn on the edges
                <br />
                $15.99
              </p>
              <div className="text-wrapper-2">Mayo Olive Ham</div>
            </div>
          </div>
        </div>
        <div className="overlap-13">
          <div className="ultimate-pepperoni">
            <div className="overlap-14">
              <img className="image-6" alt="Image" src="https://c.animaapp.com/b1r64fOS/img/image-3.png" />
              <div className="rectangle-9" />
              <div className="text-wrapper-11">Ultimate Pepperoni</div>
              <p className="pepperoni-under-and">
                Pepperoni under and on top of the cheese
                <br />
                $12.99
              </p>
            </div>
          </div>
          <div className="chocolate-pizza">
            <div className="overlap-15">
              <img className="image-7" alt="Image" src="https://c.animaapp.com/b1r64fOS/img/image-10.png" />
              <div className="rectangle-2" />
              <p className="text-wrapper-10">
                Cake like crust, chocolate frosting, and M&amp;Ms
                <br />
                $8.99
              </p>
              <div className="text-wrapper-2">Chocolate Pizza</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
