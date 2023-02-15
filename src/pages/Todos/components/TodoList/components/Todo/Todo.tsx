import { Checkbox, ActionIcon, Text, Flex } from "@mantine/core";
import { FaTimes } from "react-icons/fa";

type TodoEditPayload = {
  completed: boolean;
};

interface TodoProps {
  id: string;
  completed: boolean;
  title: string;
  onEdit: (id: string, payload: TodoEditPayload) => void;
  onDelete: (id: string) => void;
}

const Todo = ({ id, completed, title, onEdit, onDelete }: TodoProps) => {
  const handleOnCheck = () => {
    onEdit(id, { completed: !completed });
  };

  const handleOnDelete = () => {
    onDelete(id);
  };

  return (
    <Flex direction="row" my={5}>
      <Flex gap={24} align="center" style={{ flex: 1 }}>
        <Checkbox checked={completed} onChange={handleOnCheck} />
        <Text>{title}</Text>
      </Flex>
      <Flex gap={24} align="center" justify="flex-end">
        <ActionIcon variant="transparent" onClick={handleOnDelete}>
          <FaTimes size={16} />
        </ActionIcon>
      </Flex>
    </Flex>
  );
};

export default Todo;
