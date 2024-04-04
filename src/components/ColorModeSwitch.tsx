import { IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle Dark mode"
      variant="outline"
      colorScheme="white"
      onClick={toggleColorMode}
      icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
    />
  );
};

export default ColorModeSwitch;
