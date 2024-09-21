import React from 'react';
import './OtherMembers.css'; // Import the CSS file

const otherMembers = [
  { name: 'Ahren Kapadia', role: 'Web Dev' },
  { name: 'Jishnu Ganisetti', role: 'Web Dev' },
  { name: 'Karthick Ponkali', role: 'Web Dev' },
  { name: 'Chimay Bhat', role: 'DevFintech Ambassador' },
  { name: 'Arav Kanyal', role: 'Curriculum Developer' },
  { name: 'Jonathan Win', role: 'Curriculum Developer' },
  { name: 'Ritvik Mangire', role: 'Curriculum Developer' },
  { name: 'Aryan Anarkat', role: 'Curriculum Dev Project Manager' },
  { name: 'Rishi Anarkat', role: 'Curriculum Dev Project Manager' },
  { name: 'Siddharth K.', role: 'Curriculum Developer and Outreach Team' },
  { name: 'Adhit Eswarmoorthi', role: 'Curriculum Developer and Outreach Team' },
  { name: 'Ankit Satpathy', role: 'Curriculum Developer' },
  { name: 'Dustin Nyugen', role: 'Curriculum Developer' },
  { name: 'Fatih Jauhar', role: 'Curriculum Developer' },
  { name: 'Jasper Leal', role: 'Curriculum Developer' },
  { name: 'Luyang Cheng', role: 'Curriculum Developer' },
  { name: 'Malhar Desai', role: 'Curriculum Developer' },
  { name: 'Saiyan Tabrej', role: 'Curriculum Developer' },
  { name: 'Sowmiya Dev', role: 'Curriculum Developer' },
  { name: 'William Zhang', role: 'Curriculum Developer' },
  { name: 'Aarav Ashwani', role: 'Outreach Lead' },
  { name: 'Ishmeet S.', role: 'Outreach Team' },
  { name: 'Sashwanth', role: 'Outreach Team' },
  { name: 'Bhargav Nemani', role: 'Outreach Team' },
  { name: 'Dhruva Patel', role: 'Outreach Team' },
  { name: 'Jefferey Li', role: 'Outreach Team' },
  { name: 'Naithik V.', role: 'Outreach Team' },
  { name: 'Shriya Jagwayan', role: 'Outreach Team' },
  { name: 'Utkeresh', role: 'Outreach Team' },
  { name: 'Abhinav K.', role: 'Stockmarket Simulation Lead' },
  { name: 'Shriya Jagwayan', role: 'Stockmarket Simulation Developer' },
  { name: 'Yongjing Li', role: 'StockMarket Simulation Developer' }
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
    left: '10%',
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
    top: '200%',
    left: '25%',
  },
  circle4: {
    width: '100px',
    height: '100px',
    top: '125%',
    left: '10%',
  },
  circle5: {
    width: '100px',
    height: '100px',
    top: '385%',
    left: '80%',
  },
  smallCircle1: {
    width: '50px',
    height: '50px',
    top: '30%',
    left: '80%',
  },
  smallCircle2: {
    width: '60px',
    height: '60px',
    top: '260%',
    left: '40%',
  },
  smallCircle3: {
    width: '40px',
    height: '40px',
    top: '300%',
    left: '70%',
  },
  smallCircle4: {
    width: '40px',
    height: '40px',
    top: '330%',
    left: '50%',
  },
  smallCircle5: {
    width: '60px',
    height: '60px',
    top: '360%',
    left: '20%',
  }
};

const OtherMembers = () => {
  return (
    <div className="other-members-container">
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

      <h1 className="other-members-title">Other Members</h1>
      <table className="members-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {otherMembers.map((member, index) => (
            <tr key={index}>
              <td>{member.name}</td>
              <td>{member.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OtherMembers;
