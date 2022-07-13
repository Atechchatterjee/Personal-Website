import { Image, ImageProps, useColorMode } from "@chakra-ui/react";

const ProfilePicture = ({ ...props }: ImageProps) => {
  const { colorMode } = useColorMode();

  return (
    <Image
      src={
        colorMode === "light"
          ? "/profile-picture-light.jpeg"
          : "/profile-picture-dark.jpeg"
      }
      w="100%"
      h="inherit"
      borderRadius="full"
      objectFit="fill"
      {...props}
    />
  );
};

export default ProfilePicture;
