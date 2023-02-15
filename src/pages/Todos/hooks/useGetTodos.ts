import { useQuery } from "@tanstack/react-query";

import { getTodos } from "services/todos";

const useGetTodos = (filters: any) => {
  const { data, refetch, error, isLoading } = useQuery(
    ["todos", filters],
    () => getTodos(filters),
    {
      refetchOnWindowFocus: false,
    }
  );
  return { todos: data?.todos || [], refetch, error, isLoading };
};

export default useGetTodos;
