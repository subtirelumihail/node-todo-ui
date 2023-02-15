import request from "utils/request";

export interface LoginInputsInterface {
  email: string;
  password?: string;
}


export const loginService = async ({ email, password }: LoginInputsInterface) => {
  const { data } = await request.post(
    "auth/login",
    { email, password }
  );

  return data;
};
