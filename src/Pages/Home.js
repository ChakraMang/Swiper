import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import "./Home.css";

const HomePage = () => {
  return (
    <div className="container">
      <div className="content">
        <h1>Welcome to Swiper Components</h1>
        <p>
            Here you can get few swiper components that we have created you can use these in your website, for copying code. send us a DM here!
        </p>
      </div>
      <div className="buttons">
        <Link to="/slick" className="button">
          Slick carousel
        </Link>
        <Link to="/awesome" className="button">
          Awesome
        </Link>
        <Link to="/swiper" className="button">
          Swiper
        </Link>
        <Link to="/swiper-react" className="button">
          Swiper-React
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
