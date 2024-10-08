import React from "react";
import "./About.css";
const About = (props) => {
  return (
    <div className="container about">
      <h2>About Us</h2>
      <span className="seprator" />
      <div className="aboutSection">
        <p className="aboutPara">
          Shree Ganesh is the first to be worshipped before beginning any new
          project or venture as he is the destroyer of obstacles (Vighnaharta).
          This is Shree Siddhivinayak Ganapati Temple at Prabhadevi in Mumbai, a
          two-century-old Temple that fulfills the desires of the worshipers.
          The city of Mumbai is a mute witness to places of worship & historical
          interest, which are not only popular but also of archaeological
          importance. Arguably the most popular & significant places of worship
          are the Shree Siddhivinayak Ganapati Mandir situated at Prabhadevi.
          This temple was first consecrated on Thursday 19th November 1801, a
          fact that is noted in government records. The temple then was a small
          structure housing the black stone idol of Shree Siddhivinayak, which
          was two and half feet wide. The outstanding feature of this deity is
          the tilt of the trunk to the right side. The idol has four hands
          (Chaturbhuj), which contains a lotus in upper right, a small axe in
          upper left, holy beads in the lower right and a bowl full of Modaks (a
          delicacy which is a perennial favorite with Shree Siddhivinayak).
          Flanking the deity on both sides are Riddhi & Siddhi, goddesses
          signifying sanctity, fulfillment, prosperity and riches. Etched on the
          forehead of the deity is an eye, which resembles the third eye of Lord
          Shiva.
        </p>
        <div className="aboutImage">
          <img src="https://picsum.photos/id/100/200/300" />
        </div>
      </div>
    </div>
  );
};

export default About;
