import { useRecoilValue } from "recoil";
import { Navigate, Outlet } from "react-router-dom";

import authState from "atoms/auth.atom";

interface ProtectedRouteProps {
  redirectPath?: string;
  children?: JSX.Element;
}

const ProtectedRoute = ({
  redirectPath = "/login",
  children,
}: ProtectedRouteProps) => {
  const auth = useRecoilValue(authState);

  if (!auth.isAuth) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
