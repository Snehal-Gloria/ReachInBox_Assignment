import React from 'react';

const MailPreview = ({ selectedMail }) => {
  if (!selectedMail) {
    return <div className="w-2/3 p-4">Select a mail to view its content</div>;
  }

  return (
    <div className="w-2/3 bg-white p-4">
      <h2 className="text-2xl font-bold mb-2">{selectedMail.subject}</h2>
      <p className="text-gray-600 mb-4">{selectedMail.sender}</p>
      <div className="text-gray-700">
        {selectedMail.body}
      </div>
    </div>
  );
};

export default MailPreview;
