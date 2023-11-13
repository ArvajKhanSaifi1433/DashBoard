import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Stack,
  Tag,
  Text,

} from "@chakra-ui/react";
import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { BiArrowToBottom, BiArrowToTop } from "react-icons/bi";

function PortfolioSection() {
  return (
    <HStack
      bg={"white"}
      borderRadius={"lg"}
      p={6}
      justifyContent={"space-between"}
      align={{
        base: "flex-start",
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}
      rowGap={8}
    >
      <HStack
        spacing={{
          base: 4,
          md: 9,
        }}
        flexDir={{
          base: "column",
          md: "row",
        }}
        align={"flex-start"}
      >
        <Stack>
          <HStack color={"black.80"} fontSize={"sm"}>
            <Text fontSize={"sm"}>Total Portfolio value</Text>
            <Icon as={AiFillInfoCircle} />
          </HStack>
          <Text textStyle={"h4"}>₹ 112,312.24</Text>
        </Stack>
        <Stack>
          <Text color={"black.80"} fontSize={"sm"}>
            Wallet Balances
          </Text>
          <HStack
            spacing={{
              base: 3,
              md: 9,
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text textStyle={"h4"}>22.39401000</Text>
              <Tag>BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle={"h4"}>₹ 112,312.24</Text>
              <Tag>INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>
      <HStack alignSelf={"flex-start"}>
        <Button
          size={{
            base: "xs",
            sm: "sm",
          }}
          leftIcon={<BiArrowToBottom />}
        >
          Deposit
        </Button>
        <Button
          size={{
            base: "xs",
            sm: "sm",
          }}
          leftIcon={<BiArrowToTop />}
        >
          Withdraw
        </Button>
      </HStack>
    </HStack>
  );
}

export default PortfolioSection;
