import type { NextPage } from "next";
import {
  Box,
  Image,
  Text,
  Flex,
  Heading,
  SimpleGrid,
  FormControl,
  Input,
  FormLabel,
  Textarea,
  Button,
} from "@chakra-ui/react";
import Watermark from "../components/Watermark";
import Navbar from "../components/Navbar";

const Contact: NextPage = () => {
  const HeadingStyle = {
    fontFamily: "Sora",
    fontSize: "5xl",
  };
  return (
    <Box
      bgImg="./bg.svg"
      w="100%"
      h="100vh"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Watermark text1="CONTACT" ml="-5%" mt="5%" textAlign="center" />
      <Box position="absolute" zIndex="100" w="100%" h="100vh">
        <Navbar currentPage="Contact" />
        <Flex flexDir="column" gridGap="2em">
          <Flex flexDir="column" ml="30%" mr="25%" mt="3%" gridGap="1.5em">
            <Flex flexDir="row" gridGap="0.6em" h="5em" ml="20%">
              <Heading
                {...HeadingStyle}
                bgGradient="linear(to-r, #3A59C5, #8D43EA)"
                bgClip="text"
                alignSelf="center"
              >
                CONTACT
              </Heading>
              <Box
                as="span"
                color="#3A59C5"
                padding="0.2em 0.5em"
                border="2px solid #3A59C5"
                alignSelf="center"
              >
                <Heading {...HeadingStyle}>ME</Heading>
              </Box>
            </Flex>
            <Text fontSize="lg">
              I am glad you want to reach out to me. Here is a quick form you
              can fill send me message or get in touch with me on my social
              media handles.
            </Text>
          </Flex>
          <FormControl
            padding="2% 35%"
            flexDir="column"
            display="flex"
            gridGap="1em"
          >
            <Box>
              <FormLabel>Full Name</FormLabel>
              <Input type="name" />
            </Box>
            <Box>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </Box>
            <Box>
              <FormLabel>Message</FormLabel>
              <Textarea type="message" h="20vh" />
            </Box>
            <Button variant="solid-blue" mt="1%">
              Submit
            </Button>
          </FormControl>
        </Flex>
      </Box>
    </Box>
  );
};

export default Contact;
