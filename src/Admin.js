import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/Admin/LoginPage";
import SignupPage from "./pages/Admin/SignupPage";
import { useAuth } from "./context/AuthContext";
import ProtectedRoute from "./auth/ProtectedRoute";
import { AdminLayout } from "./layouts/admin/AdminLayout";
import MessageListPage from "./pages/Admin/App/MessageListPage";
import { Logout } from "./pages/Admin/Logout";

const Admin = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/logout" element={<Logout />} />
       <Route
        path="/"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <AdminLayout>
              <MessageListPage />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/admin/" />} />
    </Routes>
  );
};

export default Admin;
