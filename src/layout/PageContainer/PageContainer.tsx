import { Paper } from "@mantine/core";

interface PageContainerProps {
  redirectPath?: string;
  children?: JSX.Element[];
}

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <Paper shadow="md" radius={5} p="xl">
      <div style={{ position: "relative" }}>{children}</div>
    </Paper>
  );
};

export default PageContainer;
