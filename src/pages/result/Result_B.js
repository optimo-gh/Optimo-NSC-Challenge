import React from "react";
import "./style.css";
import chart from "../../images/result_chart.jpg";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import linkedin from "../../images/linkedin.png";
import Card from "../../components/card/Card";
import logo from "../../images/OptimoLogo.png";
import { NavLink } from "react-router-dom";

function Result_B() {
  const cards = [1, 2, 3, 4, 5];

  return (
    <div className='result'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='logo-top' />
      </NavLink>
      <div className='title'>
        <h2>You have obtained 80% skills of being an Library Assisstant</h2>
        <img src={chart}></img>
        <div className='social-container'>
          <ul className='social-media'>
            <li>
              <p>Share My Result</p>
            </li>
            <li>
              <a href='http://www.facebook.com'>
                <img src={facebook} width='20' height='20' alt='facebook' />
              </a>
            </li>
            <li>
              <a href='http://www.twitter.com'>
                <img src={twitter} width='20' height='20' alt='twitter' />
              </a>
            </li>
            <li>
              <a href='http://www.linkedin.com'>
                <img src={linkedin} width='20' height='20' alt='linkedin' />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='recommend'>
        <h2>Here are some jobs fit for you for a transition:</h2>
        <div className='container'>
          {cards.map((index) => {
            return <Card key={index} no={index} title='Job' />;
          })}
        </div>
      </div>
      <div className='recommend'>
        <h2>If you seek a higher position of your current job, you need:</h2>
        <div className='container'>
          {cards.map((index) => {
            return <Card key={index} no={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Result_B;
