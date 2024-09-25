import React from 'react';

const VisitCard = ({ visit }) => (
  <div className="visit-card">
    <h2>{visit.name}</h2>
    <p>Date: {visit.date}</p>
    <p>Location: {visit.location}</p>
    <p>Organizer: {visit.organizer}</p>
    <button>Edit</button>
    <button>Delete</button>
  </div>
);

export default VisitCard;
