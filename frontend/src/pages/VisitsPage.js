import React, { useEffect, useState } from 'react';
import apiService from '../services/apiService';
import VisitCard from '../components/VisitCard';

const VisitsPage = () => {
  const [visits, setVisits] = useState([]);

  useEffect(() => {
    apiService.getVisits().then(response => {
      setVisits(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Industrial Visits</h1>
      {visits.length > 0 ? (
        visits.map(visit => <VisitCard key={visit._id} visit={visit} />)
      ) : (
        <p>No visits available.</p>
      )}
    </div>
  );
};

export default VisitsPage;
