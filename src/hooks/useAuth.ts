import { useRecoilState, useResetRecoilState } from "recoil";

import authState, { UserAuthInterface} from "atoms/auth.atom";
import variables from "config/variables";

const useAuth = () => {
  const [auth, setAuth] = useRecoilState(authState);

  const handleAuth = (data: UserAuthInterface) => setAuth({ ...data, isAuth: true });
  const resetAuth = useResetRecoilState(authState);

  const logout = () => {
    resetAuth();
    window.localStorage.removeItem(variables.localStorage.AUTH);
    window.location.href = "/login"
  };

  return {
    auth,
    logout,
    setAuth: handleAuth,
  };
};

export default useAuth;
