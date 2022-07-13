import { Button, ButtonProps, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const ModeSwitchBtn = ({ ...props }: ButtonProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      variant="solid"
      size="lg"
      padding="1.4% 0.7%"
      bg="rgba(255,255,255, 0.6)"
      backdropFilter="blur(10px)"
      _hover={{
        bg: "rgba(255,255,255, 0.7)",
        backdropFilter: "blur(10px)",
        color: "gray.500",
      }}
      _focus={{ outline: "none" }}
      _active={{
        bg: "rgba(255,255,255, 0.7)",
        backdropFilter: "blur(10px)",
        color: "gray.500",
      }}
      color="gray.600"
      onClick={toggleColorMode}
      {...props}
    >
      {colorMode === "dark" ? <FaSun size="30" /> : <FaMoon size="27" />}
    </Button>
  );
};

export default ModeSwitchBtn;
