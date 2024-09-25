import React, { useEffect, useState } from 'react';
import apiService from '../services/apiService';
import OrganizerCard from '../components/OrganizerCard';

const OrganizersPage = () => {
  const [organizers, setOrganizers] = useState([]);

  useEffect(() => {
    apiService.getOrganizers().then(response => {
      setOrganizers(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Organizers</h1>
      {organizers.length > 0 ? (
        organizers.map(organizer => <OrganizerCard key={organizer._id} organizer={organizer} />)
      ) : (
        <p>No organizers found.</p>
      )}
    </div>
  );
};

export default OrganizersPage;
