import { Header as MantineHeader, Group, Image, Anchor } from "@mantine/core";

import useAuth from "hooks/useAuth";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import logo from "assets/images/logo.png";

const Header = () => {
  const { auth } = useAuth();

  return (
    <MantineHeader height={55} p="xs">
      <Group px={20} position="apart" align="center">
        <Anchor href={"/"}>
          <Image width={30} src={logo} />
        </Anchor>
        {!auth.isAuth ? (
          <Anchor href={"/login"} p={6}>
            Sign in
          </Anchor>
        ) : (
          <HeaderMenu />
        )}
      </Group>
    </MantineHeader>
  );
};

export default Header;
