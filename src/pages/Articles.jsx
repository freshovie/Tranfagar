import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BloodTest, Micro, Mask, BlackRect, ElementBg, FourEyes } from "../assets";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Articles = () => {
  return (
    <React.Fragment>
      <h2 className="text-center">Check out our latest article</h2>
      <center>
        <img src={BlackRect} alt="" />
      </center>

      <div className="articles">
        <img src={ElementBg} alt="" className="ban"/>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4">
             <div className="card">
             <img src={BloodTest} alt="" className="art-side" />
              <div className="card-body">
              <h4>Disease detection, check up in the laboratory
              <hr />
              </h4>
              <p>
                In this case, the role of the health laboratory is very
                important to do a disease detection
                <br />...
              </p>
              <a href="#">
                Read more <FontAwesomeIcon icon={faArrowRight} />{" "}
              </a>
              </div>
             </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="card">
              <img src={Micro} alt="" className="art-side" />
                <div className="card-body">
              <h4>Herbal medicines that are safe for consumption
              <hr />
              </h4>
              <p>
                Herbal medicine is very widely used at this time because of its
                very good for your health...
              </p>
              <a href="#">
                Read more <FontAwesomeIcon icon={faArrowRight} />{" "}
              </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="card">
              <img src={Mask} alt="" className="art-side" />
                <div className="card-body">
                
              <h4>Natural care for healthy facial skin
                <hr />
              </h4>
              <p>
                A healthy lifestyle should start from now and also for your skin
                health. <br />There are some...
              </p>
              <a href="#">
                Read more <FontAwesomeIcon icon={faArrowRight} />{" "}
              </a>
                </div>
              </div>
            </div>
          </div>
          <center>
          <button className="btn learn">View all</button>
            </center>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
      <img src={FourEyes} alt="" className="betes" />
      </div>
    </React.Fragment>
  );
};

export default Articles;
