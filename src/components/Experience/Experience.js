import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import {
  ExperienceWrapper,
  ExperienceItem,
  ExperienceTitle,
  ExperienceCompany,
  ExperienceDate,
  ExperienceDescription,
} from "./ExperienceElements";

function Experience() {
  return (
    <ExperienceWrapper>
      <ScrollAnimation animateIn="fadeInLeft">
        <div className="SectionTitle">Work Experience</div>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInLeft">
        <ExperienceItem>
          <ExperienceTitle>
            Student Intern
          </ExperienceTitle>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ExperienceCompany>Nokia, Bangalore</ExperienceCompany>
          </div>
          <ExperienceDate>Aug 2025 - Present</ExperienceDate>
        </ExperienceItem>

        <ExperienceItem>
          <ExperienceTitle>
            Platform Engineer Intern
          </ExperienceTitle>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ExperienceCompany>IBM, Bangalore</ExperienceCompany>
          </div>
          <ExperienceDate>Jun 2025 - Aug 2025</ExperienceDate>
          <ExperienceDescription>
            <li>
              Developed a full-stack, end-to-end B2B sales solution, SalesMate, using IBM Watsonx Orchestrate to automate over 90% of manual sales tasks, including inventory, billing, and upselling.
            </li>
            <li>
              Engineered a client-facing chat UI with multilingual speech-to-text (Sarvam AI) that reduced average customer query time by ~40% through natural language-driven workflows.
            </li>
            <li>
              Built robust agent tools with the Watsonx ADK for real-time CRUD operations on PostgreSQL, boosting order processing efficiency by ~30% and eliminating data entry errors.
            </li>
            <li>
              Achieved an "Exceptional" performance rating from IBM and was the sole intern in a group of six to receive this recognition for combining deep technical expertise with effective teamwork and problem-solving.
            </li>
          </ExperienceDescription>
        </ExperienceItem>
      </ScrollAnimation>
    </ExperienceWrapper>
  );
}

export default Experience;
