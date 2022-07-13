import { Text, Image, Flex, FlexProps } from "@chakra-ui/react";
import React from "react";
import Heading from "./Heading";

const AboutMe = ({ ...props }: FlexProps) => {
  return (
    <Flex flexDir="column" w="90%" gridGap="3rem" {...props}>
      <Heading
        Icon={({ ...props }) => <Image src="/about-me.png" {...props} />}
        ml="70%"
        mt="-8%"
      >
        About Me
      </Heading>
      <Text ml="45%" fontSize="1.5rem" lineHeight="2.5rem" zIndex="-1">
        I am currently persuing my B.Tech in Computer Science and Engineering .
        I have passion for web development and enjoy working with both frontend
        ui and backend. I am also currently exploring fields such as machine
        learning and mobile development.
      </Text>
      <Text ml="10%" fontSize="1.5rem" lineHeight="2.5rem" mb="5%">
        I am a big time advocate of visual learning and love making softwares to
        visualize algorithms to make the process of learning them fun and
        interesting. Some of these projects are also listed below.
      </Text>
    </Flex>
  );
};

export default AboutMe;
