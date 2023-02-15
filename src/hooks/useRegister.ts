import { useMutation } from "@tanstack/react-query";
import { useForm, yupResolver } from "@mantine/form";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { showNotification } from "@mantine/notifications";

import { registrationService } from "services/registration";

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required").email("Invalid email"),
  password: Yup.string().required("Password is required"),
});

const errorMessageMap: any = {
  'unknown': 'Unknown error',
  'email.must.be.unique': "User already registered"
};

const useRegistration = () => {
  const navigate = useNavigate();
  const form = useForm({
    clearInputErrorOnChange: true,
    validate: yupResolver(schema),
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const { isLoading, mutate } = useMutation<any, any, any>({
    mutationFn: registrationService,
  });

  const handleRegister = async ({
    name,
    email,
    password
  }: any) =>
    await mutate(
      {
        name,
        email,
        password,
      },
      {
        onSuccess: () => {
          showNotification({
            color: "green",
            title: "Registration success",
            message: "You are now registered, please login to continue",
          });
          navigate("/");
        },
        onError: (error) => {
          showNotification({
            color: "red",
            title: "Registration failed",
            message: errorMessageMap[error?.response?.data?.key || 'unknown'],
          });
        },
      }
    );

  return {
    form,
    register: handleRegister,
    loading: isLoading,
  };
};

export default useRegistration;
