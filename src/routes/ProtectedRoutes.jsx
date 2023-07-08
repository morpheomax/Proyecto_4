import { Outlet } from "react-router";

export const ProtectedRoutes = ({ children, isValidPermissions }) => {
  if (!isValidPermissions) {
    <Navigate to="/"/>
  }

  return children ? children : <Outlet />;
};
