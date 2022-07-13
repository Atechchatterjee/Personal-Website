import { Box, Image, BoxProps, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Heading from "./Heading";

const Technologies = ({ ...props }: BoxProps) => {
  const bg = useColorModeValue("#FEF28C", "#313D4F");

  return (
    <Box
      w="100%"
      h="100vh"
      bg={bg}
      borderRadius="3xl"
      display="flex"
      {...props}
    >
      <Heading
        Icon={({ ...props }) => <Image src="/technology-icon.png" {...props} />}
      >
        Technologies I use
      </Heading>
    </Box>
  );
};

export default Technologies;
