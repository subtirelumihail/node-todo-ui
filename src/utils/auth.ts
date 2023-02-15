import variables from "config/variables";

const getLocalStorageAuth = () => {
  const auth = window.localStorage.getItem(variables.localStorage.AUTH);
  if (auth) {
    const authData = JSON.parse(
      window.localStorage.getItem(variables.localStorage.AUTH) || ''
    );
    return authData?.authState;
  }
  return undefined;
};

export { getLocalStorageAuth };
