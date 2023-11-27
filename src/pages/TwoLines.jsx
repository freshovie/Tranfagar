import React from "react";
import "./style.scss";
import { SVG1, SVG2, BlackRect } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export const TwoLines = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
          <div className="other">
            <img src={SVG1} alt="" />

            <div className="toh1">
              <h4>
                Leading healthcare providers
              </h4>
              <img src={BlackRect} alt="" className="w-auto rect" />
              <p>
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone. To us, it's not
                just work. We take pride in the solutions we deliver
              </p>
              <button>Learn more</button>
            </div>
          </div>

          <div className="other4">
            <div className="toh">
              <h4>Download our mobile apps</h4>
              <img src={BlackRect} alt="" className="w-auto rect" />
              <p>
                Our dedicated patient engagement app and web portal allow you to
                access information instantaneously (no tedeous form, long calls,
                or administrative hassle) and securely
              </p>
              <button className="Download">
                Download <FontAwesomeIcon icon={faArrowDown} />{" "}
              </button>
            </div>

            <img src={SVG2} alt="" />
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </React.Fragment>
  );
};

export default TwoLines;
