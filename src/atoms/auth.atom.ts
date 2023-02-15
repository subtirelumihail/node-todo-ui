import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import variables from "config/variables";

const { persistAtom } = recoilPersist({
  key: variables.localStorage.AUTH,
  storage: localStorage,
});

export interface UserAuthInterface {
  isAuth: boolean;
}

const authState = atom({
  key: "authState",
  default: {
    isAuth: false,
  },
  effects_UNSTABLE: [persistAtom],
});

export default authState;
