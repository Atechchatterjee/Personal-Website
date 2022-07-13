import {
  Image,
  Box,
  Flex,
  Text,
  BoxProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

const IntroContainer = ({ ...props }: BoxProps) => {
  const [coords, setCoords] = useState({ x: -100, y: -100 });

  const LIGHT_MODE_BG = `radial-gradient(
          circle at ${coords.x}px ${coords.y}px, #ffffff 4%, #ffffff0f calc(0% + 190px))
          no-repeat border-box border-box rgba(255, 255, 255, 0.5)`;

  const DARK_MODE_BG = `radial-gradient(
          circle at ${coords.x}px ${coords.y}px, #AFBCD6 10%, #AFBCD60F calc(0% + 190px))
          no-repeat border-box border-box rgba(255, 255, 255, 0.6)`;

  const bg = useColorModeValue(LIGHT_MODE_BG, DARK_MODE_BG);
  const textGradientColor = useColorModeValue(
    "linear(to-r, #C67C37, #DC3863, #553BA1)",
    "linear(to-l, #C67C37, #DC3863, #553BA1)"
  );

  const boxRef = useRef<any>(null);

  const handleMouseMove = (event: any) => {
    const res = boxRef.current.getBoundingClientRect();
    setCoords({
      x: event.clientX - res.left,
      y: event.clientY - res.top,
    });
  };

  return (
    <Box
      w="55%"
      h="32%"
      ref={boxRef}
      bg={bg}
      backdropFilter="blur(10px)"
      padding="2% 2% 3% 2%"
      borderRadius="3xl"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setCoords({ x: -100, y: -100 })}
      {...props}
    >
      <Flex flexDir="column" gridGap="1rem" pl="3%" mt="2%">
        <Flex flexDir="row" gridGap="0.8rem" h="7vh" w="100%">
          <Image src="/hi-emoji.svg" w="5%" flex="0.1" mt="2%" mr="1%" />
          <Text
            fontSize="1.5rem"
            flex="0.2"
            mt="3.5%"
            fontFamily="Sora"
            textColor="#383838"
            mr="1%"
          >
            Hi, I am
          </Text>
          <Text
            flex="1"
            fontWeight="bold"
            fontSize="2.8rem"
            justifyContent="left"
            fontFamily="JetBrains Mono"
            bgGradient={textGradientColor}
            bgClip="text"
          >
            Anish Chatterjee
          </Text>
        </Flex>
        <Box
          padding="1.3%"
          w="40%"
          textAlign="center"
          borderRadius="lg"
          bg="rgba(255,255,255, 0.4)"
          boxShadow="0px 0px 28px 4px rgba(0,0,0,0.1)"
        >
          <Text fontWeight="bold" textColor="#383838" fontSize="0.9rem">
            FULL STACK WEB DEVELOPER
          </Text>
        </Box>
        <Text textColor="#383838" fontSize="1.2rem" mt="5%">
          I am a Computer Sceince and Engineering student and a full stack web
          developer.
        </Text>
      </Flex>
    </Box>
  );
};

export default IntroContainer;
