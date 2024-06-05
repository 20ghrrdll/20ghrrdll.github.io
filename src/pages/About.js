import React from 'react';
import Footer from '../components/Footer';
import TimelineCard from '../components/TimelineCard';
import './About.css';

const experience = [
  {
    title: "Figma",
    date: "June 2022 - December 2023",
    description: "Full-Stack Software Engineer",
    responsibilities: [
     "Built ratings and reviews for Community resources using React, Ruby and Sinatra, enabling over 10k reviews across resources and a statistically significant increase in resource usage.",
      "Built purchase management and creator stats tools for the Community Monetization release using React, Ruby and Sinatra, earning over 500K for creators in first 6 months.",
      "Collaborated closely with Product, Design and GTM stakeholders to prioritize quality user experience"
    ],
  },
  {
    title: "Squarespace",
    date: "August 2019 - April 2022",
    description: "Front-End Software Engineer",
    responsibilities: [
      "Built and refactored features on the Styling System team using Javascript, React and Redux; testing with Jest and Cypress.",
      "Led the Buttons workstream, a 6 month project overhauling the styling capabilities of buttons on Squarespace sites",
      "Worked on the Trial Experience team building and iterating on the Assistant feature in the CMS"
    ],
  },
  {
    title: "Stanford University",
    date: "September 2014 - June 2019",
    description: "Received Bachelors and Masters degrees in Computer Science with a focus in Human-Computer Interaction",
    responsibilities: [
    "Worked as a Teaching Assistant for the 'Introduction to Human-Computer Interaction' and 'Design Thinking Studio' classes",
    "Worked as a Residential Computer Consultant doing IT support for my dorm",
    "Member of the Stanford Equestrian 2016 Nationals team, 4th place finish in Team Walk-Trot",
    ],
  },
  {
    title: "Squarespace",
    date: "Summer 2018",
    description: "Front-End Software Engineering Intern",
    responsibilities: [
      "Built an internal tool for the Content Editing and Design teams using React, Redux, Sass and Jest",
      "Restructured tool as a cross-team collaboration between Content Editing and Content Rendering teams",
      "Developed extension for internal tool in Hack Week and presented it to entire Engineering org",
    ], 
  },
  {
    title: "Stanford HCI Group",
    date: "Summer 2016 - Spring 2019",
    description: "Undergraduate and Graduate Researcher under Dr. James Landay",
    responsibilities: [
    "Developed and tested a research project crowdsourcing writing feedback from children ages 8-12",
    "Built a high fidelity prototype using Meteor JS",
    "Ran five studies on iterations of the prototype (paper and high-fi) on a total of 22 participants",
    ],
  },
  {
    title: "Facebook",
    date: "Summer 2017",
    description: "Full Stack Software Engineering Intern",
    responsibilities: [
      "Implemented reactions for the Live 360 video team using Hack and React and tested using Jest",
      "Shipped feature and monitored dogfooding with 15,000 employees",
    ],
  },
  {
    title: "Electronic Arts",
    date: "Summer 2015",
    description: "Worked as a Pathfinders intern developing a game prototype (under NDA) for the Office of the Chief Creative Officer"
  },
];

const About = () => {
  return (
    <>
      <div className="heading">
        <h2>Experience and Education</h2>
      </div>
      {experience.map((experienceContent) => {
        return (
          <TimelineCard
            key={experienceContent.date}
            {...experienceContent}
          />
        );
      })}
      <Footer/>
  </>
  );
}

export default About;