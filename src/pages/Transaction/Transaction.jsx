import React from "react";
import DashboardLayout from "../../Components/DashboardLayout";
import { Box, Button, Flex } from "@chakra-ui/react";
import { BiArrowToBottom } from "react-icons/bi";
import TransactionData from "./TransactionData";

function Transaction() {
  return (
    <div>
      <DashboardLayout title={" Transaction"}>
        <Flex justifyContent={"end"}>
          <Button size={"sm"} leftIcon={<BiArrowToBottom />}>
            Export CSV
          </Button>
        </Flex>
        <TransactionData />
      </DashboardLayout>
    </div>
  );
}

export default Transaction;
