import { useEffect } from "react";
import {
  Group,
  Button,
  TextInput,
  PasswordInput,
  Divider,
  Anchor,
  Title,
  Flex,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";

import PageContainer from "layout/PageContainer/PageContainer";

import useLogin from "hooks/useLogin";
import useAuth from "hooks/useAuth";

const LoginPage = () => {
  const navigate = useNavigate();
  const { form, login, loading } = useLogin();
  const { auth } = useAuth();

  useEffect(() => {
    if (auth.isAuth) {
      navigate("/");
    }
  }, [auth, navigate]);

  return (
    <PageContainer>
      <Title size={24}>Login</Title>
      <form onSubmit={form.onSubmit(login)}>
        <Flex direction="column" gap={12}>
          <TextInput
            withAsterisk
            mt="md"
            size="md"
            placeholder="Enter your email"
            disabled={loading}
            {...form.getInputProps("email")}
          />
          <PasswordInput
            withAsterisk
            mt="md"
            size="md"
            placeholder="Enter a password"
            disabled={loading}
            {...form.getInputProps("password")}
          />
        </Flex>
        <Group position="center" mt="md">
          <Button
            fullWidth
            type="submit"
            leftIcon={<FaLock />}
            loading={loading}
          >
            Sign in
          </Button>
        </Group>
        <Divider
          mt="lg"
          my="xl"
          label="Need an account ?"
          labelPosition="center"
        />
        <Group position="center">
          <Anchor type="button" onClick={() => navigate("/register")}>
            Register here
          </Anchor>
        </Group>
      </form>
    </PageContainer>
  );
};

export default LoginPage;
