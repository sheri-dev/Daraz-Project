import React from "react";
import "./Footer3.css";
import PakFlag from "../../images/flag.png";
import BanglaFlag from "../../images/bangladesh.png";
import SriFlag from "../../images/circle.png";
import MyanFlag from "../../images/myanmar.png";
import NepFlag from "../../images/nepal.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaCopyright } from "react-icons/fa";

const Footer3 = () => {
  return (
    <>
      <div className="f-final">
        <div className="f3-col-1">
          <div className="main-head">
            <h1>
              <big>Daraz International</big>
            </h1>
          </div>
          <div className="countries">
            <div className="Pak">
              <img src={PakFlag} width="28" height="28"></img>
              <p className="Pak-iamge">Pakistan</p>
            </div>
            <div className="Bangla">
              <img src={BanglaFlag} width="28" height="28"></img>
              <p className="Pak-iamge">Bangladesh</p>
            </div>
            <div className="Srilanka">
              <img src={SriFlag} width="28" height="28"></img>
              <p className="Pak-iamge">Sri Lanka</p>
            </div>
            <div className="Myanmar">
              <img src={MyanFlag} width="28" height="28"></img>
              <p className="Pak-iamge">Myanmar</p>
            </div>
            <div className="Nepal">
              <img src={NepFlag} width="28" height="28"></img>
              <p className="Pak-iamge">Nepal</p>
            </div>
          </div>
        </div>
        <div className="f3-col-2">
          <div className="main-head">
            <h1>
              <big>Follow Us </big>
            </h1>
          </div>
          <div className="social-media">
            <FaFacebook className="Facebook" />
            <FaTwitter className="Twitter" />
            <FaInstagram className="Instagram" />
            <FaYoutube className="Youtube" />
            <TbWorld className="World" />
          </div>
        </div>
        <div className="f3-col-3">
          <div>
            <h1>
              <big className="last-col">
                <FaCopyright />
                Daraz 2024
              </big>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer3;
