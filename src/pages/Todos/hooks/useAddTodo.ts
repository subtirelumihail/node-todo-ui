import { useForm, yupResolver } from "@mantine/form";
import * as Yup from "yup";
import { showNotification } from "@mantine/notifications";
import { useMutation } from "@tanstack/react-query";

import { addTodo, AddTodoObjectType } from "services/todos";
import queryClient from "services/client";

const schema = Yup.object().shape({
  title: Yup.string().required("You need to add some text for your todo"),
});

const useAddTodo = () => {
  const { isLoading, mutate } = useMutation<any, any, any>({
    mutationFn: addTodo,
  });

  const form = useForm({
    clearInputErrorOnChange: true,
    validate: yupResolver(schema),
    initialValues: {
      title: "",
    },
  });


  const handleError = () => {
    showNotification({
      color: "red",
      title: "Todo add failed",
      message:
        "Something wen't wrong, please try again",
    });
  }

  const handleAddTodo = ({ title } : AddTodoObjectType) =>
    mutate(
      {
        title
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['todos'] })
          form.reset();
        },
        onError: handleError,
      }
    );

  return {
    form,
    addTodo: handleAddTodo,
    isLoading,
  };
};

export default useAddTodo;
