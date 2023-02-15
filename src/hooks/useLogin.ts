import { useForm, yupResolver } from "@mantine/form";
import * as Yup from "yup";
import { showNotification } from "@mantine/notifications";
import { useMutation } from "@tanstack/react-query";

import useAuth from "./useAuth";
import { loginService, LoginInputsInterface } from "services/auth";

const schema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Invalid email"),
});

const useLogin = () => {
  const { setAuth } = useAuth();

  const { isLoading, mutate } = useMutation<any, any, any>({
    mutationFn: loginService,
  });

  const form = useForm({
    clearInputErrorOnChange: true,
    validate: yupResolver(schema),
    initialValues: {
      email: "",
    },
  });

  const handleError = () => {
    showNotification({
      color: "red",
      title: "Login failed",
      message:
        "Something wen't wrong with the login, your credentials might be incorrect 😟",
    });
  }
  const handleLogin = ({ email, password } : LoginInputsInterface) =>
    mutate(
      {
        email,
        password
      },
      {
        onSuccess: (data: any) => {
          if (data) {
            setAuth(data);
            window.location.href = '/'
          } else {
            showNotification({
              color: "red",
              title: "Login failed",
              message:
                "Something wen't wrong with the login, your credentials might be incorrect 😟",
            });
          }
        },
        onError: handleError,
      }
    );
  return {
    form,
    login: handleLogin,
    loading: isLoading,
  };
};

export default useLogin;
