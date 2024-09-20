import { useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthMiddlewareProps {
  children: ReactNode;
}

const AuthMiddleware: React.FC<AuthMiddlewareProps> = ({ children }) => {
  // Check if the user is authenticated by reading from localStorage
  const isAuthenticated= localStorage.getItem("isAuthenticated") === "true";
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      // If the user is not authenticated, redirect them to the login page
      navigate('/login');
    // }else if (!isOtpVerified) {
    //   // If OTP is not verified, redirect them to the OTP verification page
    //   navigate('/otp');
    // } else {
    //   // If authenticated and OTP is verified, redirect to home page
    //   navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  // If authenticated, render the children (protected component)
  return isAuthenticated? <>{children}</> : null;
}

export default AuthMiddleware;
