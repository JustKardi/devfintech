import React from 'react';
import ReactDOM from 'react-dom';
import rehaanImage from './assets/rehaan_mundy.jpg';
import ashmitImage from './assets/ashmit_sethi.png';
import mitanshImage from './assets/mitansh_mittal.png';
import ankitImage from './assets/ankit_satpathy.png';
import saiImage from './assets/sai_balu.jpg';
import './TheTeam.css'; // Import the CSS file

const teamMembers = [
  {
    name: 'Rehaan Mundy',
    role: 'Co-Founder',
    image: rehaanImage,
  },
  {
    name: 'Ashmit Sethi',
    role: 'Co-Founder & YCW President',
    image: ashmitImage,
  },
  {
    name: 'Mitansh Mittal',
    role: 'Fundraising Lead',
    image: mitanshImage,
  },
  {
    name: 'Ankit Satpathy',
    role: 'Head of Education',
    image: ankitImage,
  },
  {
    name: 'Sai Balu',
    role: 'Social Media Lead',
    image: saiImage,
  },
];

const styles = {
  // Circle styles
  circle: {
    position: 'absolute',
    borderRadius: '50%',
    backgroundColor: 'lightgrey',
    zIndex: '-1', // Position behind other elements
  },
  circle1: {
    width: '150px',
    height: '150px',
    top: '20%',
    left: '0%',
  },
  circle2: {
    width: '200px',
    height: '200px',
    top: '90%',
    left: '80%',
  },
  circle3: {
    width: '100px',
    height: '100px',
    top: '185%',
    left: '5%',
  },
  circle4: {
    width: '100px',
    height: '100px',
    top: '145%',
    left: '10%',
  },
  circle5: {
    width: '100px',
    height: '100px',
    top: '170%',
    left: '80%',
  },
  smallCircle1: {
    width: '50px',
    height: '50px',
    top: '30%',
    left: '90%',
  },
  smallCircle2: {
    width: '60px',
    height: '60px',
    top: '130%',
    left: '40%',
  },
  smallCircle3: {
    width: '40px',
    height: '40px',
    top: '180%',
    left: '50%',
  },
  smallCircle4: {
    width: '40px',
    height: '40px',
    top: '210%',
    left: '25%',
  },
  smallCircle5: {
    width: '60px',
    height: '60px',
    top: '230%',
    left: '90%',
  }
};

const TheTeam = () => {
  return (
    <div className="team-container">
      {/* Light grey circles positioned behind content */}
      <div style={{ ...styles.circle, ...styles.circle1 }}></div>
      <div style={{ ...styles.circle, ...styles.circle2 }}></div>
      <div style={{ ...styles.circle, ...styles.circle3 }}></div>
      <div style={{ ...styles.circle, ...styles.circle4 }}></div>
      <div style={{ ...styles.circle, ...styles.circle5 }}></div>
      <div style={{ ...styles.circle, ...styles.smallCircle1 }}></div>
      <div style={{ ...styles.circle, ...styles.smallCircle2 }}></div>
      <div style={{ ...styles.circle, ...styles.smallCircle3 }}></div>
      <div style={{ ...styles.circle, ...styles.smallCircle4 }}></div>
      <div style={{ ...styles.circle, ...styles.smallCircle5 }}></div>

      <h1 className="team-title">Meet the Team</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={`${member.name}'s profile`} className="team-member-image" />
            <h2 className="team-member-name">{member.name}</h2>
            <p className="team-member-role">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Render the component to the div with id "team-root"
ReactDOM.render(<TheTeam />, document.getElementById('team-root'));

export default TheTeam;
