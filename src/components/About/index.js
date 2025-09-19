import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container about">
      <h2>About Us</h2>
      <span className="separator" />
      <div className="aboutSection">
        <div className="aboutPara">
          <p>
            Shree Ganesh is the first to be worshipped before beginning any new
            project or venture as he is the destroyer of obstacles (Vighnaharta).
            This is Shree Siddhivinayak Ganapati Temple at Prabhadevi in Mumbai, a
            two-century-old temple that fulfills the desires of the worshipers.
          </p>
          <p>
            The city of Mumbai is a mute witness to places of worship &
            historical interest, which are not only popular but also of
            archaeological importance. Arguably the most significant is the
            Shree Siddhivinayak Ganapati Mandir situated at Prabhadevi.
          </p>
          <p>
            The idol of Shree Siddhivinayak has four hands (Chaturbhuj) holding a
            lotus, axe, holy beads, and a bowl of Modaks. Flanking the deity are
            Riddhi & Siddhi, goddesses signifying sanctity, fulfillment,
            prosperity, and riches. Etched on the forehead of the deity is an
            eye, resembling the third eye of Lord Shiva.
          </p>
        </div>
        <div className="aboutImage">
          <img src="https://picsum.photos/id/100/400/500" alt="About Foundation" />
        </div>
      </div>
    </div>
  );
};

export default About;
