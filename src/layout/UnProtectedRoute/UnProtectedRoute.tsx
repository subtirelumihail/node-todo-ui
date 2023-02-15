import { useRecoilValue } from "recoil";
import { Navigate, Outlet } from "react-router-dom";

import authState from "atoms/auth.atom";

interface UnProtectedRouteProps {
  redirectPath?: string;
  children?: JSX.Element;
}

const UnProtectedRoute = ({
  redirectPath = "/",
  children,
}: UnProtectedRouteProps) => {
  const auth = useRecoilValue(authState);

  if (auth.isAuth) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default UnProtectedRoute;
