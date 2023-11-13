import React from "react";
import DashboardLayout from "../../Components/DashboardLayout";
import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Icon,
  Input,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { MdMarkEmailRead } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";

function Support() {
  return (
    <>
      <DashboardLayout title={"Support"}>
        <Grid>
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
            }}
            mt={6}
            spacing={4}
          >
            <GridItem  p={6} borderRadius={"lg"}>
              <Stack spacing={4}>
                <Icon as={MdMarkEmailRead} color={"#5F00D9"} boxSize={6} />
                <Text fontWeight={500} textStyle={"h2"}>
                  Contact Us
                </Text>
                <Text color={"black.80"}>
                  Have a question or just want to know more? Feel free to reach
                  out to us.
                </Text>
              </Stack>
            </GridItem>

            <GridItem bg={"white"} p={6} borderRadius={"lg"}>
              <Stack rowGap={3}>
                <Stack>
                  <Text fontSize={"sm"} color={"blackAlpha.800"}>
                    You will receive response within 24 hours of time of submit.
                  </Text>
                </Stack>
                <HStack
                  flexDir={{
                    base: "column",
                    sm: "row",
                  }}
                >
                  <FormControl>
                    <FormLabel size={"sm"}>Name</FormLabel>
                    <Input type="text" size={"sm"} placeholder="Enter Name" />
                  </FormControl>
                  <FormControl>
                    <FormLabel size={"sm"}>Surname</FormLabel>
                    <Input type="text" size={"sm"} placeholder="Enter Surname" />
                  </FormControl>
                </HStack>
                <HStack
                  flexDir={{
                    base: "column",
                    sm: "row",
                  }}
                >
                  <FormControl>
                    <FormLabel size={"sm"}>Email</FormLabel>
                    <Input type="email" size={"sm"} placeholder="Enter Your Name..." />
                  </FormControl>
                </HStack>
                <HStack
                  flexDir={{
                    base: "column",
                    sm: "row",
                  }}
                >
                  <FormControl>
                    <FormLabel size={"sm"}>Message</FormLabel>
                    <Textarea resize={'none'} placeholder="Enter your feedback..." />
                  </FormControl>
                </HStack>
                <HStack spacing={'1'} fontSize={'sm'} ps={5}>
                  <Text>I agree with</Text>
                  <Text color={'#5F00D9'}>Terms & Conditions.</Text>
                </HStack>
                <Button
                  size={"sm"}
                  bg={"#D8DDE2"}
                  color={"#797E82"}
                  fontWeight={"500"}
                
                >
                 Send a Message
                </Button>
                <Button
                  size={"sm"}
                  bg={"#EEEEF4"}
                  color={"black"}
                  fontWeight={"500"}
                  _hover={{
                    bg: "#e2e2e9",
                  }}
                >
                Book a Meeting
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
              <GridItem  p={6} borderRadius={"lg"}>
              <Stack spacing={2}>
                <Icon as={BsFillChatDotsFill} color={"#5F00D9"} boxSize={6} />
                <Text fontWeight={500} fontSize={'x-large'}>
                  Live Chat
                </Text>
                <Text color={"black.80"} fontSize={'sm'}>
                Don’t have time to wait for the answer? Chat with us now.
                </Text>
              </Stack>
            </GridItem>
            <GridItem bg={"purple.500"} p={6} borderRadius={"lg"}>
              <VStack align={"flex-start"} spacing={4}>
                <Tag color={"black"} bg={"white"}>
                  Chatbot
                </Tag>
                <Text fontWeight={500} color={"white"}>
                Chat with us now
                </Text>
              </VStack>
            </GridItem>
          </SimpleGrid>
        </Grid>
      </DashboardLayout>
    </>
  );
}

export default Support;
