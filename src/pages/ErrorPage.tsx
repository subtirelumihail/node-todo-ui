import { useRouteError } from "react-router-dom";
import { Container } from "@mantine/core";

export default function ErrorPage() {
  const error: any = useRouteError();

  return (
    <Container size="lg" p="xs">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Container>
  );
}
