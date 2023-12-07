import React from "react";
import {Navigate} from "react-router-dom";
import {BackToHome} from "../../assets";
import "./style.css";

export const AllergenGuide = () => {
  const [goToHome, setGoToHome] = React.useState(false);

  if (goToHome){
    return<Navigate to="/home" />;
  }

  return (
    <div className="allergen-guide">
      <div className="div">
        <div className="text-wrapper">Allergens</div>
        <div className="overlap">
          <p className="p">
            At Mayaki Pizza, we are dedicated to providing a delightful dining experience for all of our customers. We
            understand that food allergies and sensitivities are a significant concern for many people, and we are
            committed to helping you make informed choices when ordering from our menu. This allergen guide is designed
            to assist you in identifying potential allergens in our menu items.
          </p>
          <p className="gluten-dairy-tree">
            Gluten&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Dairy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tree
            Nuts&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Peanuts&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Soy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Eggs
          </p>
        </div>
        <div>
          <button onClick={() => {setGoToHome(true)}} className="button" >
            <img className="BackToHome" alt="Back To Home" src={BackToHome}/>
          </button>
        </div>
        <div className="overlap-group">
          <p className="cheese-pizza">
            Cheese Pizza
            <br />
            <br />
            Ultimate Pepperoni
            <br />
            <br />
            Meat Lover
            <br />
            <br />
            Hawaiian
            <br />
            <br />
            Taco Pizza
            <br />
            <br />
            Mayo Olive Ham
            <br />
            <br />
            Cookie Pizza <br />
            <br />
            Chocolate Pizza
            <br />
            <br />
            Create Your Own
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Crust)
          </p>
          <img className="image" alt="Image" src="https://c.animaapp.com/rTT3FcNT/img/image-12@2x.png" />
          <img className="img" alt="Image" src="https://c.animaapp.com/rTT3FcNT/img/image-12@2x.png" />
          <img className="image-2" alt="Image" src="https://c.animaapp.com/rTT3FcNT/img/image-12@2x.png" />
          <img className="image-3" alt="Image" src="https://c.animaapp.com/rTT3FcNT/img/image-12@2x.png" />
          <img className="image-4" alt="Image" src="https://c.animaapp.com/rTT3FcNT/img/image-12@2x.png" />
          <img className="image-5" alt="Image" src="https://c.animaapp.com/rTT3FcNT/img/image-12@2x.png" />
          <img className="image-6" alt="Image" src="https://c.animaapp.com/rTT3FcNT/img/image-12@2x.png" />
          <img className="image-7" alt="Image" src="https://c.animaapp.com/rTT3FcNT/img/image-12@2x.png" />
          <img className="image-8" alt="Image" src="https://c.animaapp.com/rTT3FcNT/img/image-12@2x.png" />
          <img className="image-9" alt="Image" src="https://c.animaapp.com/rTT3FcNT/img/image-12@2x.png" />
          <img className="image-10" alt="Image" src="https://c.animaapp.com/rTT3FcNT/img/image-12@2x.png" />
          <img className="image-11" alt="Image" src="https://c.animaapp.com/rTT3FcNT/img/image-12@2x.png" />
          <img className="image-12" alt="Image" src="https://c.animaapp.com/rTT3FcNT/img/image-12@2x.png" />
          <img className="image-13" alt="Image" src="https://c.animaapp.com/rTT3FcNT/img/image-12@2x.png" />
          <img className="image-14" alt="Image" src="https://c.animaapp.com/rTT3FcNT/img/image-12@2x.png" />
          <img className="image-15" alt="Image" src="https://c.animaapp.com/rTT3FcNT/img/image-12@2x.png" />
          <img className="image-16" alt="Image" src="https://c.animaapp.com/rTT3FcNT/img/image-12@2x.png" />
          <img className="image-17" alt="Image" src="https://c.animaapp.com/rTT3FcNT/img/image-12@2x.png" />
          <img className="image-18" alt="Image" src="https://c.animaapp.com/rTT3FcNT/img/image-12@2x.png" />
          <img className="image-19" alt="Image" src="https://c.animaapp.com/rTT3FcNT/img/image-12@2x.png" />
          <img className="image-20" alt="Image" src="https://c.animaapp.com/rTT3FcNT/img/image-12@2x.png" />
          <img className="image-21" alt="Image" src="https://c.animaapp.com/rTT3FcNT/img/image-12@2x.png" />
          <img className="image-22" alt="Image" src="https://c.animaapp.com/rTT3FcNT/img/image-12@2x.png" />
          <img className="image-23" alt="Image" src="https://c.animaapp.com/rTT3FcNT/img/image-12@2x.png" />
          <img className="image-24" alt="Image" src="https://c.animaapp.com/rTT3FcNT/img/image-31.png" />
          <img className="image-25" alt="Image" src="https://c.animaapp.com/rTT3FcNT/img/image-12@2x.png" />
          <img className="image-26" alt="Image" src="https://c.animaapp.com/rTT3FcNT/img/image-12@2x.png" />
          <img className="image-27" alt="Image" src="https://c.animaapp.com/rTT3FcNT/img/image-12@2x.png" />
          <img className="image-28" alt="Image" src="https://c.animaapp.com/rTT3FcNT/img/image-12@2x.png" />
          <img className="image-29" alt="Image" src="https://c.animaapp.com/rTT3FcNT/img/image-12@2x.png" />
          <img className="image-30" alt="Image" src="https://c.animaapp.com/rTT3FcNT/img/image-12@2x.png" />
          <img className="line" alt="Line" src="https://c.animaapp.com/rTT3FcNT/img/line-8.svg" />
          <img className="line-2" alt="Line" src="https://c.animaapp.com/rTT3FcNT/img/line-8.svg" />
          <img className="line-3" alt="Line" src="https://c.animaapp.com/rTT3FcNT/img/line-11.svg" />
          <img className="line-4" alt="Line" src="https://c.animaapp.com/rTT3FcNT/img/line-13.svg" />
          <img className="line-5" alt="Line" src="https://c.animaapp.com/rTT3FcNT/img/line-14.svg" />
          <img className="line-6" alt="Line" src="https://c.animaapp.com/rTT3FcNT/img/line-14.svg" />
          <img className="line-7" alt="Line" src="https://c.animaapp.com/rTT3FcNT/img/line-16.svg" />
          <img className="line-8" alt="Line" src="https://c.animaapp.com/rTT3FcNT/img/line-8.svg" />
        </div>
        <img className="line-9" alt="Line" src="https://c.animaapp.com/rTT3FcNT/img/line-10.svg" />
      </div>
    </div>
  );
};
