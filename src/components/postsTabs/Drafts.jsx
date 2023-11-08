import { Center, VStack, Text, Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export default function Drafts() {
  return (
    <Center height="50vh">
      <VStack>
        {" "}
        <Text fontSize="sm">You have no drafts</Text>
        <Text>
          <Link
            textDecoration="underline"
            as={ReactRouterLink}
            to="/create-post"
          >
            Write
          </Link>{" "}
          or{" "}
          <Link textDecoration="underline" as={ReactRouterLink} to="/">
            read
          </Link>{" "}
          a story on medium
        </Text>
      </VStack>
    </Center>
  );
}
