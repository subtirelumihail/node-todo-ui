import { useState } from "react";
import { LoadingOverlay, Flex } from "@mantine/core";

import Filter from "components/Filter/Filter";
import useGetTodos from "../../hooks/useGetTodos";
import useEditTodo from "../../hooks/useEditTodo";
import useDeleteTodo from "../../hooks/useDeleteTodo";
import Todo from "./components/Todo/Todo";

const filterOptions = [
  {
    label: "All",
    value: "all",
  },
  { label: "Completed", value: "completed" },
  { label: "Incomplete", value: "incomplete" },
];

const TodoList = () => {
  const [filters, setFilters] = useState({ status: "all" });
  const { todos = [], isLoading } = useGetTodos(filters);
  const { editTodo } = useEditTodo();
  const { deleteTodo } = useDeleteTodo();

  const handleStatusFilter = (status: string) => {
    setFilters({ status });
  };

  return (
    <>
      <LoadingOverlay visible={isLoading} />
      <Flex direction="column" my="lg">
        {todos.map((todo: any) => (
          <Todo
            key={`todo-${todo.id}`}
            {...todo}
            onEdit={editTodo}
            onDelete={deleteTodo}
          />
        ))}
      </Flex>
      <Filter
        selected={filters.status}
        options={filterOptions}
        onChange={handleStatusFilter}
      />
    </>
  );
};

export default TodoList;
