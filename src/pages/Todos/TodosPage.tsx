import { TextInput, Title, FocusTrap } from "@mantine/core";

import PageContainer from "layout/PageContainer/PageContainer";
import TodoList from "./components/TodoList/TodoList";

import useEnterKey from "hooks/useEnterKey";
import useAddTodo from "./hooks/useAddTodo";

const TodosPage = () => {
  const { form, addTodo, isLoading } = useAddTodo();

  const handleAddTodo = async () => {
    if (form.validate().hasErrors) {
      return;
    }
    await addTodo({ title: form.values.title });
  };

  useEnterKey(handleAddTodo);

  return (
    <PageContainer>
      <Title size={24}>Todo List</Title>
      <form onSubmit={form.onSubmit(addTodo)}>
        <FocusTrap active>
          <TextInput
            withAsterisk
            mt="md"
            size="md"
            placeholder="Add a new todo"
            variant="unstyled"
            styles={(theme) => ({
              wrapper: {
                borderBottom: `1px solid ${theme.colors.gray[4]}`,
              },
            })}
            disabled={isLoading}
            {...form.getInputProps("title")}
          />
        </FocusTrap>
      </form>
      <TodoList />
    </PageContainer>
  );
};

export default TodosPage;
