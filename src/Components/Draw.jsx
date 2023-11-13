import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import React from "react";
import Sidenav from "./Sidenav";

function Draw({ isOpen, onClose }) {
  return (
    <>
      {/* <Button onClick={onOpen}>Open</Button> */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />{" "}
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Sidenav />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Draw;
