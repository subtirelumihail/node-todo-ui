import { showNotification } from "@mantine/notifications";
import { useMutation } from "@tanstack/react-query";

import { editTodo, EditTodoObjectType } from "services/todos";
import queryClient from "services/client";


const useEditTodo = () => {
  const { isLoading, mutate } = useMutation<any, any, any>({
    mutationFn: editTodo,
  });

  const handleError = () => {
    showNotification({
      color: "red",
      title: "Todo edit failed",
      message:
        "Something wen't wrong, please try again",
    });
  }

  const handleEditTodo = (id: string, { completed } : EditTodoObjectType) =>
    mutate(
      {
        id,
        completed
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['todos'] })
        },
        onError: handleError,
      }
    );

  return {
    editTodo: handleEditTodo,
    isLoadingEditTodo: isLoading,
  };
};

export default useEditTodo;
