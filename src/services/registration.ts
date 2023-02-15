import request from "utils/request";

interface RegistrationInterface {
  name: string;
  email: string;
  password: string;
}

export const registrationService = async ({
  name,
  email,
  password
}: RegistrationInterface) => {
  const { data } = await request.post(
    "auth/signup",
    {
      name,
      email,
      password,
    }
  );

  return data;
};
