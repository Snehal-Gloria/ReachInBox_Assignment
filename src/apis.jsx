import axios from 'axios';

// Base API URL
const API_BASE_URL = 'https://hiring.reachinbox.xyz/api/v1/onebox';

// Set the Bearer token (replace with actual token)
const token = localStorage.getItem('jwtToken');
const config = {
  headers: { Authorization: `Bearer ${token}` }
};

// Fetch list of email threads
export const fetchEmailThreads = async () => {
  const response = await axios.get(`${API_BASE_URL}/list`, config);
  return response.data;
};

// Fetch a single email thread
export const fetchEmailThread = async (threadId) => {
  const response = await axios.get(`${API_BASE_URL}/${threadId}`, config);
  return response.data;
};

// Reply to an email
export const replyToEmail = async (threadId, replyData) => {
  const response = await axios.post(`${API_BASE_URL}/reply/${threadId}`, replyData, config);
  return response.data;
};

// Reset the inbox
export const resetInbox = async () => {
  const response = await axios.get(`${API_BASE_URL}/reset`, config);
  return response.data;
};
