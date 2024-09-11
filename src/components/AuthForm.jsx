import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from "../assets/login/Logo.png"

// AuthForm Component
const AuthForm = () => {
  const navigate = useNavigate();

  // Function to handle Google Login
  const handleGoogleLogin = async () => {
    try {
      // Redirect user to Google login API
      window.location.href = "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:5173/callback";
    } catch (error) {
      console.error("Error during Google login", error);
    }
  };

  // Check for the token in the URL after redirection from Google API
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    
    if (token) {
      // Store token in localStorage
      localStorage.setItem('jwtToken', token);

      // Remove token from URL after storing it to avoid showing sensitive data
      window.history.replaceState(null, null, window.location.pathname);

      // Redirect to the main inbox or home page
      navigate('/inbox');
    }
  }, [navigate]);

    return (
      <div className="min-h-screen flex flex-col items-center justify-between bg-black">
        
        {/* Header Section */}
        <header className="w-full h-[54px] px-[100px] py-[10px] border-b border-gray-600 flex justify-center items-center">
          <img src={logo} alt="logo" className="w-[120px] h-[18px]" />
        </header>

  
        {/* Form Section */}
        <main className="flex-grow flex items-center justify-center w-full">
          <div className="bg-[#121212] rounded-[20px] p-[48px] shadow-[0_4px_40px_rgba(0,0,0,0.5)] w-[460px] border border-[rgba(52,58,64,1)]">
            
            {/* Form Heading */}
            <h2 className="text-white text-center text-[20px] font-semibold mb-[24px] leading-[31px]">
              Create a new account
            </h2>
  
            {/* Google Sign Up Button */}
            <button 
              className="flex items-center justify-center w-full py-[12px] mb-[16px] border border-gray-600 bg-[#111213] text-white rounded-[8px] hover:bg-gray-900"
              onClick={handleGoogleLogin}  // <-- Fixed here
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt="Google Logo"
                className="w-[20px] h-[20px] mr-2"
              />
              Sign Up with Google
            </button>
  
            {/* Create an Account Button */}
            <button className="w-full py-[12px] text-white text-[20px] leading-[31px] font-semibold rounded-[4px] bg-gradient-to-r from-[#415ad9] to-[#0826bf] hover:from-[#365ACF] hover:to-[#1A2D8C]">
              Create an Account
            </button>
  
            {/* Bottom Text */}
            <p className="mt-[40px] text-center text-[rgba(77,78,80,255)]">
              Already have an account?{' '}
              <span className="text-white hover:underline cursor-pointer">Sign In</span>
            </p>
          </div>
        </main>
  
        {/* Footer Section */}
        <footer className="w-full h-7 py-1 flex justify-center bg-[#181819]">  {/* <-- Fixed here */}
          <p className="text-gray-500 text-[14px]">
            © 2023 Reachinbox. All rights reserved.
          </p>
        </footer>
      </div>
    );
  };
  
  export default AuthForm;