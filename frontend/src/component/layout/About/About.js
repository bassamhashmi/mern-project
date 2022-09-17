import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
const About = () => {
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/bassamhashmi/image/upload/v1663428147/products/Bassam_new_sjxmvr.jpg"
              alt="Developer"
            />
            <Typography>Bassam Hashmi</Typography>

            <span>This is a E-commerce Store built with MERN Stack.</span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">More about me</Typography>
            <span>
              Full Stack Web Developer specializing in Technologies like React,
              Node.js, Express.js, MongoDB and MySQL. Proficient in skills other
              than Development are WordPress, Shopify and Wix Website Designing,
              Digital Marketing (SEO and SMM), Data Structures, Data Science,
              Data Communication and Networks.
            </span>{" "}
            <br />
            <a href="https://github.com/bassamhashmi" target="blank">
              <GitHubIcon className="githubSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
