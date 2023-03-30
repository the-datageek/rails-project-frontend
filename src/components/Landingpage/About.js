import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h2>About Us</h2>
      <div className="about-content">
        <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="About Us" className="about-image" />
        <div className="about-text">
        <p>We are a recipe website dedicated to providing delicious and healthy meal ideas.</p>
          <p>Our team of expert chefs and nutritionists work hard to ensure that each recipe is not only tasty, but also packed with nutrients.</p>
          <p>Whether you're a beginner or a seasoned cook, our recipes are easy to follow and guaranteed to satisfy your taste buds.</p>
          <p>At our website, we believe that eating healthy should not mean sacrificing taste. That's why we strive to create recipes that are both nutritious and delicious.</p>
          <p>We understand that life can get busy, and sometimes it's hard to find the time to cook. That's why we offer a variety of quick and easy recipes that can be prepared in under 30 minutes.</p>
          <p>In addition to our recipes, we also offer a wealth of information on nutrition and healthy eating. Our blog features articles on topics such as meal planning, food prep, and healthy eating habits.</p>
          <p>Thank you for visiting our website, and we hope that our recipes and resources can help you on your journey towards a healthier and happier life!</p>
        </div>
      </div>
    </div>
  );
}

export default About;
