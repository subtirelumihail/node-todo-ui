import { showNotification } from "@mantine/notifications";
import { useMutation } from "@tanstack/react-query";

import { deleteTodo } from "services/todos";
import queryClient from "services/client";


const useDeleteTodo = () => {
  const { isLoading, mutate } = useMutation<any, any, any>({
    mutationFn: deleteTodo,
  });

  const handleError = () => {
    showNotification({
      color: "red",
      title: "Todo delete failed",
      message:
        "Something wen't wrong, please try again",
    });
  }

  const handleDeleteTodo = (id: string) =>
    mutate(
      {
        id,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['todos'] })
        },
        onError: handleError,
      }
    );

  return {
    deleteTodo: handleDeleteTodo,
    isLoadingEditTodo: isLoading,
  };
};

export default useDeleteTodo;
