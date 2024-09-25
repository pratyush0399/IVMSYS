import React from 'react';

const OrganizerCard = ({ organizer }) => (
  <div className="organizer-card">
    <h2>{organizer.name}</h2>
    <p>Contact: {organizer.contact}</p>
    <button>Edit</button>
    <button>Delete</button>
  </div>
);

export default OrganizerCard;
