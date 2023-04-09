import type { NextPage } from "next";
import { Box, Image, Text, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import Watermark from "../components/Watermark";
import Navbar from "../components/Navbar";

const Tech = ({ name }: { name: string }) => (
  <Flex flexDir="column" gridGap="0em" alignSelf="center">
    <Image
      src={`./${name.replace(/\s/g, "")}-logo.jpg`}
      padding="3em"
      alignSelf="center"
    />
    <Text fontSize="xl" alignSelf="center">
      {name}
    </Text>
  </Flex>
);

const TechStack: NextPage = () => {
  return (
    <Box
      bgImg="./bg.svg"
      w="100%"
      h="100vh"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Watermark
        text1="TECH"
        text2="STACK"
        ml="-5%"
        mt="5%"
        textAlign="center"
      />
      <Box position="absolute" zIndex="100" w="100%" h="100vh">
        <Navbar currentPage="TechStack" />
        <Flex
          flexDir="column"
          gridGap="2em"
          ml="20%"
          mr="25%"
          mt="2%"
          textAlign="center"
        >
          <Flex flexDir="column" gridGap="1em">
            <Heading
              bgGradient="linear(to-r, #3A59C5, #8D43EA)"
              fontFamily="Sora"
              bgClip="text"
              fontSize="5xl"
            >
              MY TECH STACK
            </Heading>
            <Text fontSize="lg">These are few Technologies I work with.</Text>
          </Flex>
          <SimpleGrid columns={4} w="100%" h="50vh" gridGap="1em">
            <Tech name="React js" />
            <Tech name="Next js" />
            <Tech name="Node js" />
            <Tech name="Django" />
            <Tech name="Mongo DB" />
            <Tech name="Chakra UI" />
            <Tech name="Postgresql" />
            <Tech name="Docker" />
          </SimpleGrid>
        </Flex>
      </Box>
    </Box>
  );
};

export default TechStack;
