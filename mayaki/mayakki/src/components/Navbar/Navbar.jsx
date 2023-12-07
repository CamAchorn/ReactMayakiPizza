import React from 'react';
import "./style.css";

export default function Navbar () {
  return (
    <div className="tabs">
      <div className="overlap-6">
        <div className="overlap-7">
          <div className="login-signup">
            <div className="overlap-group-2">
              <img className="sign-up" alt="Sign up" src="https://c.animaapp.com/bN2rqwyo/img/signup.png" />
              <img className="login" alt="Login" src="https://c.animaapp.com/bN2rqwyo/img/login.png" />
            </div>
          </div>
          <div className="about-us-top">
            <div className="overlap-8">
              <div className="text-wrapper-6">Our Company</div>
              <div className="drop-down">
                <div className="overlap-group-3">
                  <img className="line-5" alt="Line" src="https://c.animaapp.com/bN2rqwyo/img/line-2-1.svg" />
                  <img className="line-6" alt="Line" src="https://c.animaapp.com/bN2rqwyo/img/line-1-1.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="services-top">
            <div className="overlap-9">
              <div className="text-wrapper-7">Services</div>
              <div className="overlap-group-wrapper">
                <div className="overlap-group-3">
                  <img className="line-5" alt="Line" src="https://c.animaapp.com/bN2rqwyo/img/line-2-1.svg" />
                  <img className="line-6" alt="Line" src="https://c.animaapp.com/bN2rqwyo/img/line-1-1.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="text-wrapper-8">Mayaki Pizza</div>
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
            <img
              className="drop-down-2"
              alt="Drop down"
              src="https://c.animaapp.com/bN2rqwyo/img/dropdown1.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};