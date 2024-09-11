import { useEffect, useState } from 'react';
import { fetchEmailThread } from '../apis'; // Import API function

const EmailContent = ({ selectedThreadId }) => {
  const [emailDetails, setEmailDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchEmailThread(selectedThreadId);
      setEmailDetails(data); // Assuming the API response contains email details
    };

    if (selectedThreadId) {
      fetchData();
    }
  }, [selectedThreadId]);

  if (!emailDetails) {
    return <div className="text-white">Select an email to view details.</div>;
  }

  return (
    <div className="flex-1 bg-black text-white p-4">
      <h3 className="text-lg font-bold">{emailDetails.subject}</h3>
      <p>From: {emailDetails.from}</p>
      <p>To: {emailDetails.to}</p>
      <p>{emailDetails.body}</p>
    </div>
  );
};

export default EmailContent;
