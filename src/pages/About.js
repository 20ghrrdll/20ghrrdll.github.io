import React from 'react';
import TimelineCard from '../components/TimelineCard';
import './About.css';

const experience = [
  {
    title: "Squarespace",
    date: "2019-present",
    description: "Working as a Front-End Software Engineer.",
    responsibilities: [
      "Building and refactoring features in the Styling System of the CMS using Javascript, React and Redux; testing with Jest and Cypress.",
    ],
  },
  {
    title: "Stanford University",
    date: "2014-2019",
    description: "Received my Bachelors and Masters degrees in Computer Science with a focus in Human-Computer Interaction.",
    responsibilities: [
    "Worked as a Teaching Assistant for the 'Introduction to Human-Computer Interaction' and 'Design Thinking Studio' classes",
    ],
  },
  {
    title: "Squarespace",
    date: "Summer 2018",
    description: "Worked as a Front-End Software Engineering Intern.",
    responsibilities: [
      "Built an internal tool for the Content Editing and Design teams using React, Redux, Sass and Jest",
    ], 
  },
  {
    title: "Stanford HCI Group",
    date: "Summer 2016 - Spring 2019",
    description: "Worked as an Undergraduate and Graduate Researcher under Dr. James Landay.",
    responsibilities: [
    "Developed and tested a research project crowdsourcing writing feedback from children ages 8-12",
    "Built a high fidelity prototype using Meteor JS",
    "Ran five studies on iterations of the prototype (paper and high-fi) on a total of 22 participants",
    ],
  },
  {
    title: "Facebook - Menlo Park, CA",
    date: "Summer 2017",
    description: "Worked as a Full Stack Software Engineering Intern",
    responsibilities: [
      "Implemented reactions for the Live 360 video team using Hack and React and tested using Jest",
      "Shipped feature and monitored dogfooding with 15,000 employees",
    ],
  },
  {
    title: "Electronic Arts",
    date: "Summer 2015",
    description: "Worked as a Pathfinders intern developping a game prototype (under NDA) for the Office of the Chief Creative Officer"
  },
];

const About = () => {
  return (
    <>
      <div className="heading">
        <h2>Education and Experience</h2>
      </div>
      {experience.map((experienceContent) => {
        return (
          <TimelineCard
            key={experienceContent.date}
            {...experienceContent}
          />
        );
      })}
  </>
  );
}

export default About;