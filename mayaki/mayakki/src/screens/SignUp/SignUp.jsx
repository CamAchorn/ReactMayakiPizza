import React from "react";
import {Navigate} from "react-router-dom"
import "./style.css";

export const SignUp = () => {
  const [goToHome, setGoToHome] = React.useState(false);
  
  if (goToHome){
    return<Navigate to="/" />;
  }

  return (
    <div className="sign-up">
      <div className="div">
        <div className="text-wrapper">Sign Up</div>
        <div className="text-wrapper-2">Create Username</div>
        <div className="rectangle" />
        <div className="overlap-group">
          <div className="text-wrapper-3">Max: 25 Character</div>
        </div>
          <div className="username">
            <label class="text">
              <input type="text" placeholder="Enter Username"/>
            </label>
          </div>
          <div className="password">
            <label class="text">
              <input type="text" placeholder="Enter Password"/>
            </label>
          </div>
          <div className="re-password">
            <label class="text">
              <input type="text" placeholder="Enter Password"/>
            </label>
          </div>
        <div className="overlap">
          <div className="rectangle-4" />
          <div className="text-wrapper-4">
            <button onClick={() => {setGoToHome(true)}} className="button" >
              Proceed To Log In
            </button>
          </div>
        </div>
        <div className="text-wrapper-5">Max: 25 Character</div>
        <div className="text-wrapper-6">Max: 25 Character</div>
        <div className="text-wrapper-7">Create Password</div>
        <div className="text-wrapper-8">Re-Enter Password</div>
      </div>
    </div>
  );
};
