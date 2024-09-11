import { useState } from 'react';
import Sidebar from './SideBar';
import EmailContent from './EmailContent';
import LeadDetails from './LeadDetails';
import NavBar from './NavBar';

const InboxPage = () => {
  const [selectedThreadId, setSelectedThreadId] = useState(null);

  return (
    <div className="flex">
      <Sidebar setSelectedThread={setSelectedThreadId} />
      <div className="flex-1 bg-black">
        <NavBar />
        <EmailContent selectedThreadId={selectedThreadId} />
      </div>
      <LeadDetails selectedThreadId={selectedThreadId} />
    </div>
  );
};

export default InboxPage;
