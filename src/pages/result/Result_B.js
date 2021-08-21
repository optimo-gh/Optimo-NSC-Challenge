import React from "react";
import chart from "../../images/result_chart.jpg";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import linkedin from "../../images/linkedin.png";

function Result_B() {
  return (
    <div>
      <div>
        <h2>
          You have obtained {/*numbers of skills */}% skills of being an Library
          Assisstant
        </h2>
        <img src={chart}></img>
        <div>
          <ul>
            <li>
              <img src={facebook} width='30' height='30' alt='facebook' />
            </li>
            <li>
              <img src={twitter} width='30' height='30' alt='twitter' />
            </li>
            <li>
              <img src={linkedin} width='30' height='30' alt='linkedin' />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2>Here are some jobs might fit for you as a transition </h2>
        <div>box1</div>
        <div>box2</div>
        <div>box3</div>
        <div>box4</div>
        <div>box5</div>
      </div>
      <div>
        <h2>
          If you seek for a higher position of your current job, here are some
          skills you need:
        </h2>
        <div>box1</div>
        <div>box2</div>
        <div>box3</div>
        <div>box4</div>
        <div>box5</div>
      </div>
    </div>
  );
}

export default Result_B;
