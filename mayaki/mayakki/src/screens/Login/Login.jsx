import React from "react";
import {Navigate} from "react-router-dom"
import "./style.css";

export const Login = () => {
  const [goToHome, setGoToHome] = React.useState(false);
  
  if (goToHome){
    return<Navigate to="/" />;
  }

  return (
    <div className="login">
      <div className="div">
        <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/EBdaYzMw/img/rectangle-9@2x.png" />
        <div className="text-wrapper">LOG IN</div>
        <div className="text-wrapper-2">Username</div>
        <div className="overlap-group">
          <div className="username">
            <label class="user-text">
              <input type="text" placeholder="Enter Username"/>
            </label>
          </div>
          <div className="password">
            <label class="pass-text">
              <input type="text" placeholder="Enter Password"/>
            </label>
          </div>
          <div className="text-wrapper-3">Password</div>
        </div>
        <div className="overlap">
          <div className="rectangle-4" />
          <div className="text-wrapper-4">
          <button onClick={() => {setGoToHome(true)}} className="button" >
              Submit
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};
