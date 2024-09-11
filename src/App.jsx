import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AuthForm from './components/AuthForm';
//import Inbox from './components/Inbox';  
import NavBar from './components/NavBar'; 
import Sidebar from './components/SideBar'; 
//import AllMails from './components/AllMails';
import MailPreview from './components/MailPreview';
import MailList from './components/MailList';
//import Main from './components/Main';
import EmailContent from './components/EmailContent';
//import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if a token exists in localStorage (indicating the user is authenticated)
    const token = localStorage.getItem('jwtToken');
    if (token) {
      setIsAuthenticated(true); // User is authenticated
    }
  }, []);

  // Protected Route: Redirect to login if the user is not authenticated
  const ProtectedRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/" />;
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<AuthForm />} />
        <Route path="/callback" element={<AuthForm />} />

        {/* Protected Routes */}
        <Route path="/inbox" element={
          <ProtectedRoute 
            element={
              <div className="flex">
              {/* Sidebar here */}
              <Sidebar />
  
              {/* Main content area with NavBar */}
              <div className="flex-1">
                <NavBar> 
                  
                </NavBar>
                {/* <Main /> */}
                
                <MailList />
              </div>
            </div>
            }
          />
          
        } />
      </Routes>
      


      
    </Router>
  );
};

export default App;