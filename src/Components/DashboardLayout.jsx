import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Sidenav from "./Sidenav";
import TopNav from "./TopNav";
import Draw from "./Draw";

function DashboardLayout({ title, children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex>
        <Box
          bg={"#fff"}
          display={{
            base: "none",
            lg: "flex",
          }}
        >
          <Sidenav />
        </Box>
        <Box w={"full"}>
          <TopNav title={title} onOpen={onOpen} />
          <Box>
            <Container maxW={"900px"} mt={6}>{children}</Container>
          </Box>
        </Box>
      </Flex>
      <Draw isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default DashboardLayout;
