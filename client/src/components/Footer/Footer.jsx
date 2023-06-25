import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Comapre</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            inventore, debitis beatae fugit perferendis aliquid ipsam libero in
            officia repudiandae quae adipisci iure totam odio nulla eveniet odit
            suscipit blanditiis.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            accusamus cupiditate. Consequatur, dolorem quasi. Corrupti labore
            neque deserunt natus accusantium maxime ullam obcaecati laboriosam
            possimus molestiae dolorum impedit, a quod.X
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Manodeepstore</span>
          <span className="copyright">
            @ copyright 2023. All Rights Reserves.
          </span>
        </div>
        <div className="right">
          <img src="image/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
