import React from "react";
import HomeLogo from "../../utils/img/pratik.jpeg";

export const HomePage = () => {
  return (
    <>
      <div className="outside">
        <div className="container">
          <div className="imgDiv">
            <img className="imgSize" src={HomeLogo} />
          </div>
          <h2 className="center">Welcome,User</h2>
          <div className="hometext">
            <p>
              <span>&#9679; </span> GTPL HD offers you advanced High Definition
              picture quality for your HD TVs.
            </p>
            <p>
              <span>&#9679; </span> Select from a range of packeges channels to
              suit your viewing requirements.
            </p>
            <p>
              <span>&#9679; </span> Access to GTPL local channels and city
              specific channels
            </p>
          </div>
          <div className="HomeBtnMain">
            <button className="HomeBtn">GET START</button>
          </div>
        </div>
      </div>
    </>
  );
};
