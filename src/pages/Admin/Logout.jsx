import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CONFIG } from "../../config/Config";

export const Logout = () => {
    const navigate = useNavigate();

    const { setIsLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    localStorage.removeItem(CONFIG.TOKEN);

    setIsLoggedIn(false)
    
    navigate("/admin/login");
  }, []);

  return null;
}