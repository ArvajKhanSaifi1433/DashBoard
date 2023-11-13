import {
  Box,
  Button,
  Circle,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import {
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiFillDollarCircle,
} from "react-icons/ai";
import vactor from "../../assets/Graph.jpg";
import { BiLogoBitcoin } from "react-icons/bi";

function PriceSectioj() {
  let time = ["12:23 PM", "5:08 PM", "10:42 PM", "3:00 AM", "8:40 AM"];
  return (
    <Grid>
      <SimpleGrid
        columns={{
          base: 1,
          lg: 2,
        }}
        mt={6}
        spacing={4}
      >
        <GridItem bg={"white"} p={6} borderRadius={"lg"}>
          <Stack rowGap={6}>
            <HStack
              justifyContent={"space-between"}
              flexDirection={{
                base: "column",
                sm: "row",
              }}
              rowGap={5}
            >
              <Stack alignSelf={"flex-start"}>
                <Text fontSize={"sm"} color={"black.80"}>
                  Current Price
                </Text>
                <HStack>
                  <HStack>
                    <Text textStyle={"h4"}>₹ 112,312.24</Text>
                  </HStack>
                  <HStack
                    spacing={0}
                    fontSize={"sm"}
                    alignSelf={"flex-end"}
                    color={"green.400"}
                  >
                    <Icon boxSize={"3"} as={BsArrowUpRight} />
                    <Text>0.04%</Text>
                  </HStack>
                </HStack>
              </Stack>
              <HStack
                alignSelf={"flex-start"}
                flexDir={{
                  lg: "column",
                  xl: "row",
                }}
              >
                <Button
                  size={{
                    base: "xs",
                    sm: "sm",
                  }}
                  leftIcon={<AiFillPlusCircle />}
                >
                  Buy
                </Button>
                <Button
                  size={{
                    base: "xs",
                    sm: "sm",
                  }}
                  leftIcon={<AiFillMinusCircle />}
                >
                  Sell
                </Button>
              </HStack>
            </HStack>
            <Tabs
              variant=""
              colorScheme="green"
              size={"sm"}
              alignSelf={"flex-end"}
              width={"full"}
            >
              <Flex justifyContent={"end"}>
                <TabList bg={"#F3F3F7"} p="1">
                  <Tab
                    px={2}
                    py={1}
                    borderRadius={"full"}
                    _selected={{ color: "#797E82", bg: "#fff" }}
                  >
                    1H{" "}
                  </Tab>
                  <Tab
                    px={2}
                    py={1}
                    borderRadius={"full"}
                    _selected={{ color: "#797E82", bg: "#fff" }}
                  >
                    1D{" "}
                  </Tab>
                  <Tab
                    px={2}
                    py={1}
                    borderRadius={"full"}
                    _selected={{ color: "#797E82", bg: "#fff" }}
                  >
                    1W{" "}
                  </Tab>
                  <Tab
                    px={2}
                    py={1}
                    borderRadius={"full"}
                    _selected={{ color: "#797E82", bg: "#fff" }}
                  >
                    1M{" "}
                  </Tab>
                </TabList>
              </Flex>
              <TabPanels>
                <TabPanel p={0}>
                  <Image
                    objectFit="contain"
                    src={vactor}
                    alt="cart"
                    w={"full"}
                    h={"100px"}
                  />
                </TabPanel>
                <TabPanel p={0} pt={3}>
                  <Image
                    objectFit="cover"
                    src="https://cdn.pixabay.com/photo/2016/05/27/08/53/mobile-phone-1419281_1280.jpg"
                    alt="arvaj"
                    w={"full"}
                    h={"100px"}
                  />
                </TabPanel>
                <TabPanel p={0} pt={3}>
                  <Image
                    objectFit="cover"
                    src="https://media.istockphoto.com/id/1487894858/photo/candlestick-chart-and-data-of-financial-market.jpg?s=1024x1024&w=is&k=20&c=AfDUACB1NMYPpuvEgEgQDUNt2rMuCsPoLnfH0LSYs1s="
                    alt="arvaj"
                    w={"full"}
                    h={"100px"}
                  />
                </TabPanel>
                <TabPanel p={0} pt={3}>
                  <Image
                    objectFit="cover"
                    src="https://cdn.pixabay.com/photo/2018/03/27/12/16/analytics-3265840_1280.jpg"
                    alt="arvaj"
                    w={"full"}
                    h={"100px"}
                  />
                </TabPanel>
              </TabPanels>
            </Tabs>
            <HStack
              justifyContent={"space-between"}
              fontSize={"sm"}
              color={"black.80"}
            >
              {time.map((tt) => (
                <Text key={crypto.randomUUID()}>{tt}</Text>
              ))}
            </HStack>
          </Stack>
        </GridItem>

        <GridItem bg={"white"} p={6} borderRadius={"lg"}>
          <Stack rowGap={3}>
            <Stack>
              <Text fontSize={"sm"} color={"black.80"}>
                Recent Transactions
              </Text>
              <HStack justifyContent={"space-between"} mt={2}>
                <HStack spacing={5}>
                  <Circle size="30px" bg="blackAlpha.200">
                    <Icon as={AiFillDollarCircle} />
                  </Circle>
                  <Stack spacing={0}>
                    <Text>INR Deposit</Text>
                    <Text fontSize={"sm"} color={"blackAlpha.600"}>
                      2022-06-09 7:06 PM
                    </Text>
                  </Stack>
                </HStack>
                <Stack spacing={0} alignItems={"flex-end"}>
                  <Text>+ ₹81,123.10</Text>
                </Stack>
              </HStack>
              <Divider w={"87%"} ms={"auto"} />
            </Stack>
            <Stack>
              <HStack justifyContent={"space-between"}>
                <HStack spacing={5}>
                  <Circle size="30px" bg="blackAlpha.200">
                    <Icon as={BiLogoBitcoin} />
                  </Circle>
                  <Stack spacing={0}>
                    <Text>BTC Sell</Text>
                    <Text fontSize={"sm"} color={"blackAlpha.600"}>
                      2022-05-27 12:32 PM
                    </Text>
                  </Stack>
                </HStack>
                <Stack spacing={0} alignItems={"flex-end"}>
                  <Text>- 12.48513391 BTC</Text>
                  <Text fontSize={"sm"} color={"blackAlpha.600"}>
                    + $81,123.10
                  </Text>
                </Stack>
              </HStack>
              <Divider w={"87%"} ms={"auto"} />
            </Stack>
            <Stack>
              <HStack justifyContent={"space-between"}>
                <HStack spacing={5}>
                  <Circle size="30px" bg="blackAlpha.200">
                    <Icon as={AiFillDollarCircle} />
                  </Circle>
                  <Stack spacing={0}>
                    <Text>INR Deposit</Text>
                    <Text fontSize={"sm"} color={"blackAlpha.600"}>
                      2022-06-09 7:06 PM
                    </Text>
                  </Stack>
                </HStack>
                <Stack spacing={0} alignItems={"flex-end"}>
                  <Text>+ ₹81,123.10</Text>
                  <Text fontSize={"sm"} color={"blackAlpha.600"}>
                    + $81,123.10
                  </Text>
                </Stack>
              </HStack>
              <Divider w={"87%"} ms={"auto"} />
            </Stack>

            <Button
              size={"sm"}
              bg={"#EEEEF4"}
              color={"black"}
              fontWeight={"500"}
              _hover={{
                bg: "#e2e2e9",
              }}
            >
              View All
            </Button>
          </Stack>
        </GridItem>
      </SimpleGrid>
      <SimpleGrid
        columns={{
          base: 1,
          lg: 2,
        }}
        my={6}
        spacing={4}
      >
        <GridItem bg={"white"} p={6} borderRadius={"lg"}>
          <VStack align={"flex-start"} spacing={4}>
            <Tag color={"white"} bg={"purple.500"}>
              Loans
            </Tag>
            <Text fontWeight={500}>
              Learn more about Loans – Keep your Bitcoin, access it’s value
              without selling it
            </Text>
          </VStack>
        </GridItem>
        <GridItem bg={"purple.500"} p={6} borderRadius={"lg"}>
          <VStack align={"flex-start"} spacing={4}>
            <Tag color={"black"} bg={"white"}>
              Contact
            </Tag>
            <Text fontWeight={500} color={"white"}>
              Learn more about our real estate, mortgage, and corporate account
              services
            </Text>
          </VStack>
        </GridItem>
      </SimpleGrid>
    </Grid>
  );
}

export default PriceSectioj;
