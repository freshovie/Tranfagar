import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.scss";
import { Search, Jar, Record, Record2, First, Record3 } from "../assets";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

const ServiceR = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        scale: 1,
        transition: {
          type: "spring.=",
          duration: 2,
          bounce: 0.3,
        },
      });
    } else {
      animation.start({
        scale: 0.8,
        transition: {
          duration: 2,
        },
      });
    }
  }, [inView, animation]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div>
          {/* 1st box */}
          <div className="box-1">
            <center>
              <motion.div
                ref={ref}
                animate={animation}
                initial={{ scale: 0.8 }}
              >
                <img
                  src={Search}
                  alt=""
                  className="w-40"
                  style={{ marginBottom: "30px" }}
                />
              </motion.div>
            </center>

            <h5>Search doctor</h5>
            <p>
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </p>
          </div>
        </div>
        <div>
          {/* 2nd box */}
          <div className="box-1">
            <center>
              <motion.div
                ref={ref}
                animate={animation}
                initial={{ scale: 0.8 }}
              >
                <img
                  src={Jar}
                  alt=""
                  className="w-40"
                  style={{ marginBottom: "50px" }}
                />
              </motion.div>
            </center>
            <h5>Online pharmacy</h5>
            <p>
              Buy your medicines with our mobile application with a simple
              delivery system
            </p>
          </div>
        </div>
        <div>
          {/* 3rd box */}
          <div className="box-1">
            <center>
              <motion.div
                ref={ref}
                animate={animation}
                initial={{ scale: 0.8 }}
              >
                <img
                  src={Record}
                  alt=""
                  className="w-40"
                  style={{ marginBottom: "30px" }}
                />
              </motion.div>
            </center>
            <h5>Consultation</h5>
            <p>
              Free consultation with our trusted doctors and get the best
              recommendations
            </p>
          </div>
        </div>
        <div>
          {/* 4th box */}
          <div className="box-1">
            <center>
              <motion.div
                ref={ref}
                animate={animation}
                initial={{ scale: 0.8 }}
              >
                <img
                  src={Record2}
                  alt=""
                  className="w-40"
                  style={{ marginBottom: "30px" }}
                />
              </motion.div>
            </center>
            <h5>Details info</h5>
            <p>
              Free consultation with our trusted doctors and get the best
              <br /> recomendations
            </p>
          </div>
        </div>

        <div>
          <div className="box-1">
            <center>
              <motion.div
                ref={ref}
                animate={animation}
                initial={{ scale: 0.8 }}
              >
                <img
                  src={First}
                  alt=""
                  className="w-40"
                  style={{ marginBottom: "50px" }}
                />
              </motion.div>
            </center>
            <h5>Emergency care</h5>
            <p>
              You can get 24/7 urgent care for yourself or your children and
              your lovely family
            </p>
          </div>
        </div>
        <div>
          <div className="box-1">
            <center>
              <motion.div
                ref={ref}
                animate={animation}
                initial={{ scale: 0.8 }}
              >
                <img
                  src={Record3}
                  alt=""
                  className="w-40"
                  style={{ marginBottom: "30px" }}
                />
              </motion.div>
            </center>
            <h5>Tracking</h5>
            <p>Track and save your medical history and health data</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default ServiceR;
