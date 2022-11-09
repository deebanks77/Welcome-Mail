import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>Follow US ON SOCIAL MEDIA</p>
      <div className="socialIcons">
        <FaInstagram className="icons" />
        <FaTwitter className="icons" />
        <FaLinkedin className="icons" />
        <FaFacebook className="icons" />
        <FaYoutube className="icons" />
      </div>
      <p>12B Admiralty, Lekki. Lagos, Nigeria</p>
      <p>CopyKart is a trademark and/or registered trademark of XCOD Ltd</p>
      <div>
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Support Desk</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Earning Disclaimer</a>
          </li>
          <li>
            <a href="#">Unsubscribe</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
