import React, { useEffect, useState } from 'react';
import apiService from '../services/apiService';
import StudentCard from '../components/StudentCard';

const StudentsPage = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    apiService.getStudents().then(response => {
      setStudents(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Students</h1>
      {students.length > 0 ? (
        students.map(student => <StudentCard key={student._id} student={student} />)
      ) : (
        <p>No students found.</p>
      )}
    </div>
  );
};

export default StudentsPage;
