import { useNavigate } from 'react-router-dom';

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove authentication data from local storage
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("access_token"); // If you also stored an access token

    // Optionally clear other related data or state

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
