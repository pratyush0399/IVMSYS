import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Make sure this matches your backend URL

const getVisits = async () => {
  return await axios.get(`${API_URL}/visits`);
};

async function getStudents() {
  return await axios.get(`${API_URL}/students`);
}

const getOrganizers = async () => {
  return await axios.get(`${API_URL}/organizers`);
};

const createVisit = async (visitData) => {
  return await axios.post(`${API_URL}/visits`, visitData);
};

const updateVisit = async (id, visitData) => {
  return await axios.put(`${API_URL}/visits/${id}`, visitData);
};

const deleteVisit = async (id) => {
  return await axios.delete(`${API_URL}/visits/${id}`);
};

export default {
  getVisits,
  getStudents,
  getOrganizers,
  createVisit,
  updateVisit,
  deleteVisit
};
