import React from "react";
import { Flex, FlexProps, Text, useColorMode } from "@chakra-ui/react";

interface HeadingProps extends FlexProps {
  Icon?: any;
}

const Heading = ({ Icon, children, ...props }: HeadingProps) => {
  const { colorMode } = useColorMode();
  return (
    <Flex flexDir="row" gridGap="2rem" {...props}>
      {Icon ? <Icon w="64px" h="64px" /> : <></>}
      <Text
        flex="1"
        fontWeight="bold"
        fontFamily="JetBrains Mono"
        fontSize="2.5rem"
        mt="0.3%"
        color={colorMode === "light" ? "#553BA1" : "#CAEBFF"}
      >
        {children}
      </Text>
    </Flex>
  );
};

export default Heading;
