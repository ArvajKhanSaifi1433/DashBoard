import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { BiSolidDashboard, BiSupport } from "react-icons/bi";
import { AiOutlineTransaction } from "react-icons/ai";
import React from "react";
import { NavLink } from "react-router-dom";

function Sidenav() {
  const navLinks = [
    {
      icon: BiSolidDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: AiOutlineTransaction,
      text: "Transaction",
      link: "/transaction",
    },
  ];
  return (
    <Stack
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "100%",
        lg: "240px",
      }}
      minH={"100vh"}
    >
      <Heading
        marginLeft={[1, 3, 4]}
        marginRight={[8]}
        size={["sm", "md"]}
        textTransform={"uppercase"}
        mt={14}
        color={'#5F00D9'}
      >
        @arvaj saifi
      </Heading>
      <Box mt={6} mx={[1, 3, 4]}>
        {navLinks.map((nav) => (
          <NavLink
            key={crypto.randomUUID()}
            to={`${nav.link}`}
          >
            <HStack
              py={2}
              transition={"all .2s linear"}
              _hover={{
                bg: "#f3f3f7",
                cursor: "pointer",
                color: "#171717",
              }}
              color={"#797e82"}
            >
              <Icon as={nav.icon} />
              <Text fontWeight={"medium"}>{nav.text}</Text>
            </HStack>
          </NavLink>
        ))}
      </Box>

      <NavLink
        style={{ marginTop: "auto" }}
        to={`/support`}
      >
        <HStack
          py={2}
          mx={[1, 3, 4]}
          mb={4}
          transition={"all .2s linear"}
          _hover={{
            bg: "#f3f3f7",
            cursor: "pointer",
            color: "#171717",
          }}
          color={"#797e82"}
        >
          <Icon as={BiSupport} />
          <Text fontWeight={"medium"}>Support</Text>
        </HStack>
      </NavLink>
    </Stack>
  );
}

export default Sidenav;
