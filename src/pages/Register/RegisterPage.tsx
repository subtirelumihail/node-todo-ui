import {
  Group,
  Button,
  TextInput,
  PasswordInput,
  Title,
  Flex,
} from "@mantine/core";
import useRegistration from "hooks/useRegister";

import PageContainer from "layout/PageContainer/PageContainer";

const RegisterPage = () => {
  const { register, loading, form } = useRegistration();

  return (
    <PageContainer>
      <Title size={24}>Register</Title>
      <form onSubmit={form.onSubmit(register)}>
        <Flex direction="column" gap={8} mt="md">
          <TextInput
            withAsterisk
            mt="md"
            size="md"
            placeholder="Enter your name"
            disabled={loading}
            {...form.getInputProps("name")}
          />
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
          <Button fullWidth type="submit" loading={loading}>
            Sign up
          </Button>
        </Group>
      </form>
    </PageContainer>
  );
};

export default RegisterPage;
