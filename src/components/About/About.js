import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about" style={{ marginTop: '4rem', paddingTop: '2rem' }}>
      <div className="Container">
        <div className="SectionTitle" style={{ marginTop: '2rem' }}>About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Sahil Kumar Sinha</strong>. I'm a passionate B.Tech undergraduate currently in my third year at SRM Institute of Science and Technology. With a stellar academic record (CGPA: 9.54) and an unyielding enthusiasm for software development, I specialize in crafting innovative solutions to complex problems. My love for data structures and algorithms and competitive programing fuels my journey as a developer who thrives on the challenges of building robust, scalable systems.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            I aspire to carve a dynamic career as a Software Development Engineer, contributing to impactful projects and tackling intricate puzzles with cutting-edge technology. Looking ahead, my vision is to lead and empower teams at top tech companies, working on transformative solutions that push the boundaries of innovation.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            What drives me? It's the belief in the power of development and coding to solve real-world issues, uplift communities, and create lasting value. I am a dedicated and relentless learner who embraces every opportunity to expand my skill set and stay ahead in the ever-evolving tech landscape. Beyond coding, I find fulfillment in turning ideas into meaningful action and collaborating with like-minded innovators.
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInLeft">
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
