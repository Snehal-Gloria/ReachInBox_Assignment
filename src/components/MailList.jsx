import React, { useState, useEffect } from 'react';

export default function MailList() {
  const [emails, setEmails] = useState([]); // To store the list of emails
  const [selectedEmail, setSelectedEmail] = useState(null); // To store the details of the selected email

  // Fetch emails from the API when the component is mounted
  useEffect(() => {
    const fetchEmails = async () => {
        try {
          // Retrieve the token from localStorage
          const token = localStorage.getItem('jwtToken');
      
          if (!token) {
            console.error('Token not found');
            return;
          }
      
          const response = await fetch('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
            headers: {
              'Authorization': `Bearer ${token}`, // Use the token retrieved from localStorage
            }
          });
      
          // Check if the response is JSON before parsing
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            const data = await response.json();
            setEmails(data.data); // Set the emails state with the fetched data
            setSelectedEmail(data.data[0]); // Set the first email as the selected one by default
          } else {
            console.error("Received non-JSON response:", await response.text());
          }
        } catch (error) {
          console.error('Error fetching emails:', error);
        }
      };
      
      

    fetchEmails();
  }, []);

  // Function to handle email click and show details
  const handleEmailClick = (email) => {
    setSelectedEmail(email);
  };

  return (
    <div className="flex h-screen text-gray-200 bg-gray-900">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Content */}
        <div className="flex-1 flex">
          {/* Email List */}
          <div className="w-80 border-r border-gray-800 overflow-y-auto">
            <div className="p-4">
              <div className="bg-gray-800 rounded-md p-2 mb-4">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M5 11a6 6 0 1112 0 6 6 0 01-12 0z"></path>
                </svg>
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <span className="mr-2 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">{emails.length}</span>
                  <span className="font-semibold">New Replies</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="mr-2">Newest</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
              {/* Email items */}
              {emails.map((email, index) => (
                <div
                  key={index}
                  className={`p-3 mb-2 rounded-md ${selectedEmail?.id === email.id ? 'bg-blue-900' : 'bg-gray-800'}`}
                  onClick={() => handleEmailClick(email)}
                >
                  <div className="text-sm font-semibold">{email.fromEmail}</div>
                  <div className="text-xs text-gray-400">{email.subject}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 p-6 overflow-y-auto">
            {selectedEmail && (
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">{selectedEmail.fromName || selectedEmail.fromEmail}</h3>
                <div className="flex justify-between items-center mb-8">
                  <span className="text-sm text-gray-400">{selectedEmail.subject}</span>
                  <span className="text-sm text-gray-400">{new Date(selectedEmail.sentAt).toLocaleDateString()}</span>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Message</h4>
                  <div dangerouslySetInnerHTML={{ __html: selectedEmail.body }}></div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">Details</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">From Email</div>
                      <div>{selectedEmail.fromEmail}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">To Email</div>
                      <div>{selectedEmail.toEmail}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Message ID</div>
                      <div>{selectedEmail.messageId}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">References</div>
                      <div>{selectedEmail.references}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Reply</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
