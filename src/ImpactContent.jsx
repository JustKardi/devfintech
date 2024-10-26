import React from 'react';
import './ImpactContent.css';

const chaptersData = [
  { name: 'Chapter 1', school: 'School A', state: 'California', country: 'USA' },
  { name: 'Chapter 2', school: 'School B', state: 'Texas', country: 'USA' },
  // Add additional chapters here
];

const getImpactStats = (data) => {
  const countries = new Set(data.map(chapter => chapter.country));
  return {
    totalChapters: data.length,
    uniqueCountries: countries.size,
    estimatedStudents: 1200
  };
};

function ImpactContent() {
  const impactStats = getImpactStats(chaptersData);

  return (
    <div className="impact-page">
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
              <h4>{chapter.name}</h4>
              <p>{chapter.school}</p>
              <p>{chapter.state}, {chapter.country}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImpactContent;
