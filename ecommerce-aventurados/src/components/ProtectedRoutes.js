import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export function ProtectedRoutes({ children }) {
  const { currentUser, loading } = useAuth();

  if (loading) return <h1>loading...</h1>;

  if (!currentUser) return <Navigate to="/login" />;

  return <>{children}</>;
}
