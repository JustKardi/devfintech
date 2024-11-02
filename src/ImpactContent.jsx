import React from 'react';
import './ImpactContent.css';

const chaptersData = [
  { lead: 'Rehaan Mundy', school: 'Summit Tahoma High School', city: 'San Jose', state: 'California' },
  { lead: 'Jaden Daniels', school: 'Roosevelt High School', city: 'Minneapolis', state: 'Minnesota' },
  { lead: 'Dheeshith Radjendran', school: 'Westwood High School', city: 'Austin', state: 'Texas' },
  { lead: 'Seri Kanj', school: 'GEMS Dubai American Academy', city: 'Dubai', state: 'United Arab Emirates' },
  { lead: 'Ismail Chaudry', school: 'Destrehan High School', city: 'Destrehan', state: 'Louisiana' },
  { lead: 'Mitansh Mittal', school: 'Adrian Wilcox high school', city: 'Santa Clara', state: 'California' },
  { lead: 'Himmet Dhaliwal', school: 'Lake Buena Vista High School', city: 'Orange County', state: 'Florida' },
  { lead: 'Tejas K. ', school: 'Chaboya Middle School', city: 'San Jose', state: 'California' },
  { lead: 'William Wang', school: 'Olentangy Liberty High School', city: 'Powell', state: 'Ohio' },
  { lead: 'Sanjay Bandaru', school: 'Alliance Academy for Innovation', city: 'Cumming', state: 'Georgia' },
  { lead: 'Jasper Leal', school: 'Alameda High School', city: 'Alameda', state: 'California' },
  { lead: 'Diego O.', school: 'Westlake High School', city: 'Austin', state: 'Texas' },
  { lead: 'Ashmit Sethi', school: 'Dublin High School', city: 'Dublin', state: 'California' },
  { lead: 'Sawyer Li', school: 'Santa Monica High School', city: 'Santa Monica', state: 'California' },
  { lead: 'Abdulrahman Nasser', school: 'Al Aqeeq International High School', city: 'Medina', state: 'Saudi Arabia' },
  { lead: 'Ayaan Ali Shaik', school: 'Metea Valley High School', city: 'DuPage County', state: 'Illinois' },
  { lead: 'Van Kanh', school: 'High School for the Gifted', city: 'Ho Chi Minh', state: 'Vietnam' },
  { lead: 'Krish Sharda', school: 'Amador Valley High School', city: 'Pleasanton', state: 'California' },
  { lead: 'Suphia Zang', school: 'Blackstone Valley Prep High School', city: 'Cumberland', state: 'Rhode Island' },
  { lead: 'Emilia Palena', school: 'Higher Polytechnic Institute', city: 'Rosario', state: 'Argentina' },
  { lead: 'Jie Xia', school: 'Lynbrook High School', city: 'San Jose', state: 'California' },
  { lead: 'Wallace Chen', school: 'Queens High School for the Sciences', city: 'Queens', state: 'New York' },
  { lead: 'Anonymous', school: 'Milpitas High School', city: 'Milpitas', state: 'California' },
  { lead: 'Anonymous', school: 'Millburn High School', city: 'Millburn', state: 'Nwe Jersey' },
  { lead: 'Saanvi Saxena', school: 'Seven Lakes High School', city: 'Katy', state: 'Texas' },
  { lead: 'Abhinav Kuriyal', school: 'Ballantyne Ridge High School', city: 'Charlotte', state: 'North Carolina' },
  { lead: 'Anonymous', school: 'Hopkins School', city: 'New Haven', state: 'Connecticut' },
  { lead: 'Yongjing Li', school: 'Troy High School', city: 'Fullerton', state: 'California' },
  { lead: 'Chloe Zheng', school: 'Newport High School', city: 'Bellevue', state: 'Washington' },
  { lead: 'Deepash Raj', school: 'GEMS - The British School - Al Rehab', city: 'New Cairo', state: 'Egypt' },
  { lead: 'Ethan Zhang', school: 'Georgia Chapter Lead', city: '', state: 'Georgia' },
  { lead: 'Julianne Xu', school: 'Canada Country Lead', city: '', state: 'Canada' },
  { lead: 'Naitik Jain', school: 'St. Gregorios Senior Secondary School', city: 'Udaipur', state: 'India' },
  { lead: 'Dheeshith Radjendran', school: 'Westwood High School', city: 'Austin', state: 'Texas' },
  { lead: 'Anjolee Jaimungal', school: 'Florida State Co-Lead', city: '', state: 'Florida' },
  { lead: 'Atkish S.', school: 'Illinois State Lead', city: '', state: 'Illinois' },
  { lead: 'Eashan Rautaray', school: 'London City Lead', city: '', state: 'London' },
  { lead: 'Himmet Dhaliwali', school: 'Florida State Co-Lead', city: '', state: 'Florida' },
  { lead: 'Ismail Chaudry', school: 'Louisiana State Lead', city: '', state: 'Louisiana' },
  { lead: 'Maanav Chittireddy', school: 'New Jersey State Lead', city: '', state: 'New Jersey' },
  { lead: 'Muari Ambati', school: 'Texas State Co-Lead', city: '', state: 'Texas' },
  { lead: 'Owen Crowley', school: 'Massachusetts State Lead', city: '', state: 'Massachusetts' },
  { lead: 'Nitesh Kanathal', school: 'California State Co-Lead', city: '', state: 'California' },
  { lead: 'Pranav Senthilkumar', school: 'Utah State Lead', city: '', state: 'Utah' },
  { lead: 'Shravaan', school: 'Texas Co-Lead', city: '', state: 'Texas' },
  { lead: 'Sahishnu Jadhav', school: 'United Kingdom Country Co-Lead', city: '', state: 'United Kingdom' },
  { lead: 'Shriya Jagwayan', school: 'India Country Co-Lead', city: '', state: 'India' },
  { lead: 'Sujay Chava', school: 'Connecticut State Lead', city: '', state: 'Connecticut' },
  { lead: 'William Zhang', school: 'Maryland State Lead', city: '', state: 'Maryland' },
  { lead: 'Mya E.', school: 'Washington Liberty High School', city: 'Arlington', state: 'Virginia' },
  { lead: 'Austin McDaniel', school: 'Winthrop Middle School', city: 'Winthrop', state: 'Massachusetts' },
  { lead: 'Harshith Sai', school: 'Horner Middle School', city: 'Fremont', state: 'California' },
  { lead: 'Adrian Johnson', school: 'McKinley Technology High School', city: 'Washington', state: 'D.C.' },
  { lead: 'Taha Yacine', school: 'Morroco International School', city: 'Casablanca', state: 'Morocco' },
  { lead: 'Ekya Dogra', school: 'Edison Academy Magnet School', city: 'Edison', state: 'New Jersey' },
  { lead: 'Nikhil B.', school: 'Vikas The Concept School - Top CBSE School', city: '', state: 'India' },
  { lead: 'Vaishnav Bourampeta', school: 'North Creek High School', city: 'Mill Creek East', state: 'Washington' },
  { lead: 'Arya Shirke', school: 'South High School', city: 'South San Francisco', state: 'California' },
  { lead: 'Suditi Chandra', school: 'Canterbury Middle School', city: 'Los Altos', state: 'California' },
  { lead: 'Dhruva Praveen', school: 'Evergreen Valley High School', city: 'San Jose', state: 'California' },
  { lead: 'Merwan Indukuri', school: 'West Windsor-Plainsboro High School North', city: 'Plainsboro', state: 'New Jersey' },
];

const getImpactStats = (data) => {
  const countries = new Set(data.map(chapter => chapter.country));
  return {
    totalChapters: data.length,
    uniqueCountries: countries.size,
    estimatedStudents: 1200
  };
};

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
    width: '150px',
    height: '150px',
    top: '80%',
    left: '60%',
  },
  smallCircle1: {
    width: '50px',
    height: '50px',
    top: '30%',
    left: '90%',
  },
};

function ImpactContent() {
  const impactStats = getImpactStats(chaptersData);

  return (
    <div className="impact-page">
      <div style={{ ...styles.circle, ...styles.circle1 }}></div>
      <div style={{ ...styles.circle, ...styles.circle2 }}></div>
      <div style={{ ...styles.circle, ...styles.smallCircle1 }}></div>
      <div className="impact-stats">
        <h2>Our Impact</h2>
        <div className="stats-item"><span>Total Chapters:</span> {impactStats.totalChapters}</div>
        <div className="stats-item"><span>Countries:</span> {impactStats.uniqueCountries}</div>
        <div className="stats-item"><span>Students:</span> Approximately {impactStats.estimatedStudents}</div>
      </div>
      <div className="chapter-list">
        <h3>Chapters</h3>
        <div className="chapters-grid">
          {chaptersData.map((chapter, index) => (
            <div key={index} className="chapter-card">
              <h4>{chapter.lead}</h4>
              <p>{chapter.school}</p>
              <p>
                {chapter.city}{chapter.city ? ', ' : ''}{chapter.state}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImpactContent;
