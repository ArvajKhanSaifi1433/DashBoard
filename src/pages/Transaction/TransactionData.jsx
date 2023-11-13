import {
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableCaption,
  TableContainer,
  Tabs,
  Tag,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import arvaj from "../../assets/arvaj saifi.png";
function TransactionData() {
  const arr = [
    {
      id: "HD82NA2H",
      Date_Time: {
        date: "2022-06-09",
        time: "07:06 PM",
      },
      Type: {
        dip: "INR Deposit",
        trn: "E-Transfer",
      },
      amount: {
        plus: "+ ₹81,123.10",
      },
      status: {
        name: "pending",
        bg: "blackAlpha.600",
        color: "white",
      },
    },
    {
      id: "D5KT93RT",
      Date_Time: {
        date: "2022-11-02",
        time: "02:48 PM",
      },
      Type: {
        dip: "INR Withdraw",
        trn: "Wire Transfer",
      },
      amount: {
        plus: "- ₹29,873.53",
      },
      status: {
        name: "Processing",
        bg: "yellow.500",
        color: "white",
      },
    },
    {
      id: "KDJ892KW",
      Date_Time: {
        date: "2022-03-04",
        time: "09:21 AM",
      },
      Type: {
        dip: "Buy",
      },
      amount: {
        plus: "+ 12.48513391 BTC",
        minus: "- $81,123.10",
      },
      status: {
        name: "Cancelled",
        bg: "red.500",
        color: "white",
      },
    },
    {
      id: "RE38KDK2",
      Date_Time: {
        date: "2022-05-04",
        time: "06:21 PM",
      },
      Type: {
        dip: "Sell",
      },
      amount: {
        plus: "- 0.36401628 BTC",
        minus: "+ $19,378.84",
      },
      status: {
        name: "Completed",
        bg: "green.500",
        color: "white",
      },
    },
    {
      id: "SL93J23L",
      Date_Time: {
        date: "2022-09-11",
        time: "09:02 AM",
      },
      Type: {
        dip: "BTC Deposit",
      },
      amount: {
        plus: "+ 4.13946104 BTC",
        minus: "+ $37,929.31",
      },
      status: {
        name: "Completed",
        bg: "green.500",
        color: "white",
      },
    },
    {
      id: "IO98FJ3N",
      Date_Time: {
        date: "2022-03-12",
        time: "12:02 PM",
      },
      Type: {
        dip: "BTC Withdraw",
      },
      amount: {
        plus: "- 10.00000000 BTC",
        minus: "- $62,017.58",
      },
      status: {
        name: "Completed",
        bg: "green.500",
        color: "white",
      },
    },
  ];

  return (
    <Flex my={6} bg="white" borderRadius={"lg"} pt={4}>
      <Tabs variant="" w={"full"}>
        <Flex
          justifyContent={"space-between"}
          align={"center"}
          px={4}
          rowGap={4}
          flexDir={{ base: "column", lg: "row" }}
        >
          <TabList flexWrap={"wrap"} rowGap={2}>
            <Tab
              _selected={{ color: "black", borderBottom: "2px solid #5F00D9" }}
              color={"blackAlpha.600"}
            >
              <HStack spacing={3}>
                <Text size={"sm"}>All</Text>
                <Tag size={"sm"} bg={"blackAlpha.100"} color={"blackAlpha.700"}>
                  398
                </Tag>
              </HStack>
            </Tab>
            <Tab
              _selected={{ color: "black", borderBottom: "2px solid #5F00D9" }}
              color={"blackAlpha.600"}
            >
              <HStack spacing={3}>
                <Text size={"sm"}>Deposit</Text>
                <Tag size={"sm"} bg={"blackAlpha.100"} color={"blackAlpha.700"}>
                  114
                </Tag>
              </HStack>
            </Tab>
            <Tab
              _selected={{ color: "black", borderBottom: "2px solid #5F00D9" }}
              color={"blackAlpha.600"}
            >
              <HStack spacing={3}>
                <Text size={"sm"}>Withdraw</Text>
                <Tag size={"sm"} bg={"blackAlpha.100"} color={"blackAlpha.700"}>
                  213
                </Tag>
              </HStack>
            </Tab>
            <Tab
              _selected={{ color: "black", borderBottom: "2px solid #5F00D9" }}
              color={"blackAlpha.600"}
            >
              <HStack spacing={3}>
                <Text size={"sm"}>Trade</Text>
                <Tag size={"sm"} bg={"blackAlpha.100"} color={"blackAlpha.700"}>
                  22
                </Tag>
              </HStack>
            </Tab>
          </TabList>
          <Stack spacing={4} mb={3}>
            <InputGroup size={"sm"}>
              <InputLeftElement pointerEvents="none">
                <AiOutlineSearch color="gray.300" />
              </InputLeftElement>
              <Input type="tel" placeholder="Search by ID or destination" />
            </InputGroup>
          </Stack>
        </Flex>
        <Divider bg={"blackAlpha.400"} height={"1px"} />
        <TabPanels>
          <TabPanel p={0}>
            <TableContainer mt={2}>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th color={"blackAlpha.600"} fontWeight={600}>
                      ID
                    </Th>
                    <Th color={"blackAlpha.600"} fontWeight={600}>
                      Date & Time
                    </Th>
                    <Th color={"blackAlpha.600"} fontWeight={600}>
                      Type
                    </Th>
                    <Th color={"blackAlpha.600"} fontWeight={600}>
                      Type
                    </Th>
                    <Th color={"blackAlpha.600"} fontWeight={600}>
                      Status
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {arr.map((e) => (
                    <Tr key={crypto.randomUUID()}>
                      <Td fontSize={"sm"} fontWeight={"500"}>
                        {e.id}
                      </Td>
                      <Td>
                        <Stack spacing={0}>
                          <Text fontSize={"sm"} fontWeight={"500"}>
                            {e.Date_Time.date}
                          </Text>
                          <Text
                            fontSize={"xs"}
                            fontWeight={"500"}
                            color={"blackAlpha.500"}
                          >
                            {e.Date_Time.time}
                          </Text>
                        </Stack>
                      </Td>
                      <Td>
                        <Stack spacing={0}>
                          <Text fontSize={"sm"} fontWeight={"500"}>
                            {e.Type.dip}
                          </Text>
                          {e.Type.trn && (
                            <Text
                              fontSize={"xs"}
                              fontWeight={"500"}
                              color={"blackAlpha.500"}
                            >
                              {e.Type.trn}
                            </Text>
                          )}
                        </Stack>
                      </Td>
                      <Td fontSize={"sm"} fontWeight={"500"}>
                        <Stack spacing={0}>
                          <Text fontSize={"sm"} fontWeight={"500"}>
                            {e.amount.plus}
                          </Text>
                          {e.amount.minus && (
                            <Text
                              fontSize={"xs"}
                              fontWeight={"500"}
                              color={"blackAlpha.500"}
                            >
                              {e.amount.minus}
                            </Text>
                          )}
                        </Stack>
                      </Td>
                      <Td>
                        <Tag bg={e.status.bg} color={e.status.color}>
                          {e.status.name}
                        </Tag>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel p={0}>
            <TableContainer mt={2}>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th color={"blackAlpha.600"} fontWeight={600}>
                      ID
                    </Th>
                    <Th color={"blackAlpha.600"} fontWeight={600}>
                      Date & Time
                    </Th>
                    <Th color={"blackAlpha.600"} fontWeight={600}>
                      Type
                    </Th>
                    <Th color={"blackAlpha.600"} fontWeight={600}>
                      Type
                    </Th>
                    <Th color={"blackAlpha.600"} fontWeight={600}>
                      Status
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {arr.map((e, i) => {
                    if (i % 2 == 0) {
                      return (
                        <Tr key={crypto.randomUUID()}>
                          <Td fontSize={"sm"} fontWeight={"500"}>
                            {e.id}
                          </Td>
                          <Td>
                            <Stack spacing={0}>
                              <Text fontSize={"sm"} fontWeight={"500"}>
                                {e.Date_Time.date}
                              </Text>
                              <Text
                                fontSize={"xs"}
                                fontWeight={"500"}
                                color={"blackAlpha.500"}
                              >
                                {e.Date_Time.time}
                              </Text>
                            </Stack>
                          </Td>
                          <Td>
                            <Stack spacing={0}>
                              <Text fontSize={"sm"} fontWeight={"500"}>
                                {e.Type.dip}
                              </Text>
                              {e.Type.trn && (
                                <Text
                                  fontSize={"xs"}
                                  fontWeight={"500"}
                                  color={"blackAlpha.500"}
                                >
                                  {e.Type.trn}
                                </Text>
                              )}
                            </Stack>
                          </Td>
                          <Td fontSize={"sm"} fontWeight={"500"}>
                            <Stack spacing={0}>
                              <Text fontSize={"sm"} fontWeight={"500"}>
                                {e.amount.plus}
                              </Text>
                              {e.amount.minus && (
                                <Text
                                  fontSize={"xs"}
                                  fontWeight={"500"}
                                  color={"blackAlpha.500"}
                                >
                                  {e.amount.minus}
                                </Text>
                              )}
                            </Stack>
                          </Td>
                          <Td>
                            <Tag bg={e.status.bg} color={e.status.color}>
                              {e.status.name}
                            </Tag>
                          </Td>
                        </Tr>
                      );
                    } else null;
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel p={0}>
            <TableContainer mt={2}>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th color={"blackAlpha.600"} fontWeight={600}>
                      ID
                    </Th>
                    <Th color={"blackAlpha.600"} fontWeight={600}>
                      Date & Time
                    </Th>
                    <Th color={"blackAlpha.600"} fontWeight={600}>
                      Type
                    </Th>
                    <Th color={"blackAlpha.600"} fontWeight={600}>
                      Type
                    </Th>
                    <Th color={"blackAlpha.600"} fontWeight={600}>
                      Status
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {arr.map((e, i) => {
                    if (i % 2 !== 0) {
                      return (
                        <Tr key={crypto.randomUUID()}>
                          <Td fontSize={"sm"} fontWeight={"500"}>
                            {e.id}
                          </Td>
                          <Td>
                            <Stack spacing={0}>
                              <Text fontSize={"sm"} fontWeight={"500"}>
                                {e.Date_Time.date}
                              </Text>
                              <Text
                                fontSize={"xs"}
                                fontWeight={"500"}
                                color={"blackAlpha.500"}
                              >
                                {e.Date_Time.time}
                              </Text>
                            </Stack>
                          </Td>
                          <Td>
                            <Stack spacing={0}>
                              <Text fontSize={"sm"} fontWeight={"500"}>
                                {e.Type.dip}
                              </Text>
                              {e.Type.trn && (
                                <Text
                                  fontSize={"xs"}
                                  fontWeight={"500"}
                                  color={"blackAlpha.500"}
                                >
                                  {e.Type.trn}
                                </Text>
                              )}
                            </Stack>
                          </Td>
                          <Td fontSize={"sm"} fontWeight={"500"}>
                            <Stack spacing={0}>
                              <Text fontSize={"sm"} fontWeight={"500"}>
                                {e.amount.plus}
                              </Text>
                              {e.amount.minus && (
                                <Text
                                  fontSize={"xs"}
                                  fontWeight={"500"}
                                  color={"blackAlpha.500"}
                                >
                                  {e.amount.minus}
                                </Text>
                              )}
                            </Stack>
                          </Td>
                          <Td>
                            <Tag bg={e.status.bg} color={e.status.color}>
                              {e.status.name}
                            </Tag>
                          </Td>
                        </Tr>
                      );
                    } else null;
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel p={0}>
            <Image
              src={arvaj}
              alt={"Linkedin Profile"}
              h={"400px"}
              w={"full"}
              objectFit={{
                sm: "contain",
                md: "cover",
              }}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export default TransactionData;
