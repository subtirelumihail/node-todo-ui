import request from "utils/request";

export type AddTodoObjectType = {
  title: string;
}

export type EditTodoObjectType = {
  id: string;
  completed: string;
}

export type DeleteObjectType = {
  id: string;
}



export const getTodos = async (filters: any) => {
  const { status } = filters;

  const { data } = await request.get(
    `todos?status=${status}`,
  );

  return data;
};

export const addTodo = async ({ title }: AddTodoObjectType) => {
  const { data } = await request.post(
    "todos",
    {
      title
    }
  );

  return data;
};

export const editTodo = async ({ id, completed }: EditTodoObjectType) => {
  const { data } = await request.put(
    `todos/${id}`,
    {
      completed
    }
  );

  return data;
};


export const deleteTodo = async ({ id }: DeleteObjectType) => {
  const { data } = await request.delete(
    `todos/${id}`
  );

  return data;
};
