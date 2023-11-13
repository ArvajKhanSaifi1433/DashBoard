import {
  HStack,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Container,
  Avatar,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { FaBars } from "react-icons/fa";

function TopNav({ title, onOpen }) {
  return (
    <Box bg={"#fff"}>
      <Container maxW={"900px"}>
        <HStack py={2} justifyContent={"space-between"}>
          <Box
            cursor={"pointer"}
            display={{
              base: "block",
              lg: "none",
            }}
            onClick={onOpen}
          >
            <FaBars />
          </Box>
          <Heading
            as={"h1"}
            fontWeight={"800"}
            fontSize={{
              base: "large",
              sm: "x-large",
              md:'xx-large'
            }}
          >
            {title}
          </Heading>
          <Menu>
            <MenuButton as={"button"}>
              <WrapItem>
                <Avatar
                  size={{
                    base: "sm",
                    md: "md",
                  }}
                  name="arvaj saifi"
                  src="https://media.licdn.com/dms/image/D4D03AQFkg-E0mLSADA/profile-displayphoto-shrink_100_100/0/1689162756524?e=1704931200&v=beta&t=BRZvHYI4FaHywOUJm2eqZFFsV6WPBPs6pzxRJLmkJNc"
                />
              </WrapItem>
            </MenuButton>
            <MenuList>
              <MenuItem>Logout</MenuItem>
              <MenuItem>Support</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Container>
    </Box>
  );
}

export default TopNav;
