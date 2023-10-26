import { Button } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export default function BlackButton({ to, onClick, text }) {
  return (
    <Button
      as={ReactRouterLink}
      to={to}
      variant="solid"
      color="white"
      borderRadius="20px"
      fontWeight="normal"
      bg="blackAlpha.900"
      borderColor="white"
      _hover={{ bg: "black" }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
