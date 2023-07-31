import { UserAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

function LogoutButton({ ...props }) {
  const { logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Button variant="contained" onClick={handleLogout} {...props}>
      Logout
    </Button>
  );
}

export default LogoutButton;
