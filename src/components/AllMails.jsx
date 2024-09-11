// src/components/AllMails.js
import { useState, useEffect } from 'react';

export default function AllMails() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEmails(); // Call the function to fetch emails when the component mounts
  }, []);

  const fetchEmails = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('jwtToken');
      const response = await fetch('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      // Log the response for debugging purposes
      console.log(response);
  
      if (!response.ok) {
        throw new Error('Failed to fetch emails');
      }
  
      const data = await response.json();
      console.log(data); // Log data to see the actual API response
      setEmails(data);
    } catch (err) {
      console.error('Error fetching emails:', err);
      setError('Error fetching emails. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-3xl mx-auto">
        {loading ? (
          <p>Loading emails...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : emails.length > 0 ? (
          <div>
            {emails.map(email => (
              <div key={email.id} className="bg-gray-800 rounded-lg p-4 mb-4">
                <h2 className="font-bold">{email.from}</h2>
                <p>{email.subject}</p>
                <p>{email.date}</p>
                <span>Status: {email.status}</span>
              </div>
            ))}
          </div>
        ) : (
          <p>No emails in the inbox.</p>
        )}
      </div>
    </div>
  );
}
