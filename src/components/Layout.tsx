import { Box } from "@chakra-ui/react";

type ChildrenProp = { children: React.ReactNode };
export const Layout: React.FunctionComponent<ChildrenProp> = ({ children }) => {
  return (
    <Box as="main">
      <Box as="section">{children}</Box>
    </Box>
  );
};
