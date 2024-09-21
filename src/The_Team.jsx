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

const TheTeam = () => {
  return (
    <div className="team-container">
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
