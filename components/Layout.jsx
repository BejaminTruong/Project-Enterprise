import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.css";
const Layout = ({ children }) => {
  return (
    <Box h="100%">
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
