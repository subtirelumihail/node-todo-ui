import { Group, Menu, UnstyledButton, Avatar } from "@mantine/core";
import { FaChevronDown, FaSignOutAlt } from "react-icons/fa";

import useAuth from "hooks/useAuth";

const HeaderMenu = () => {
  const { logout } = useAuth();

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <UnstyledButton>
          <Group spacing="xs">
            <Avatar radius="xl"></Avatar>
            <FaChevronDown size={12} color="gray" />
          </Group>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          component="a"
          color="red"
          icon={<FaSignOutAlt size={14} />}
          onClick={logout}
        >
          Log out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default HeaderMenu;
