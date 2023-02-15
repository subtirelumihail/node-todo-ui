import { AppShell, Container } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { RouterProvider } from "react-router-dom";

import router from "pages/router";
import Header from "layout/Header/Header";

function App() {
  return (
    <NotificationsProvider position="top-right">
      <AppShell
        padding="md"
        header={<Header />}
        styles={(theme) => ({
          main: {
            backgroundColor: theme.colors.gray[0],
          },
        })}
      >
        <Container size="sm" p="xs">
          <RouterProvider router={router} />
        </Container>
      </AppShell>
    </NotificationsProvider>
  );
}

export default App;
