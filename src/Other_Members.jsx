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

const OtherMembers = () => {
  return (
    <div className="other-members-container">
      

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
