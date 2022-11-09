import React from "react";
import introverseIcon from "../images/introverseLogo.svg";
import flowerIcon from "../images/flower.svg";
import arrow from "../images/arrow.png";
import Footer from "./Footer";

function Mail() {
  return (
    <>
      <div className="img">
        <img src={introverseIcon} alt="introverse" className="logo" />
      </div>
      <div className="thankYou">
        <img src={flowerIcon} alt="flower" className="flower" />
        <p>
          Thanks for choosing IntroVerse. We are excited to have you onboard
          with us.
        </p>
      </div>
      <div className="message">
        <p>Hey [First Name],</p>
        <p>Welcome to Introverse! </p>
        <p>We are excited to have you onboard. Are you excited? </p>
        <p>
          Your log in details should be appearing in your inbox before too long!
        </p>
        <p>
          Remember, you are not to share any information via social media or any
          other outlet. If they do, you will be banned from the test, your
          account will be blocked, and may face legal charges or penalties.{" "}
        </p>
        <p>
          In the meantime, we thought you might like to get to know Introverse a
          little better-so we put together a quick video demo of what it is all
          about.
        </p>
        <p className="link">
          https://www.loom.com/share/55e9ae418c3543868c3dd80e507ae483
        </p>
        <p>
          Of course, that's just a quick overview of what the software is all
          about and pretty soon, you'll be taking Introverse for a spin
          yourself!
        </p>
        <p>Looking forward to get your honest reviews/feedback...</p>
        <p>Cheers,</p>
      </div>
      <div className="Ps">
        <p>PS: Want to get a head start?</p>
        <button className="white">
          Create your first logo/intro video here
          <img src={arrow} alt="arrow" className="arrow" />
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Mail;
