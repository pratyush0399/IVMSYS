import React from 'react';

const StudentCard = ({ student }) => (
  <div className="student-card">
    <h2>{student.name}</h2>
    <p>Email: {student.email}</p>
    <p>Phone: {student.phone}</p>
    <button>Edit</button>
    <button>Delete</button>
  </div>
);

export default StudentCard;
