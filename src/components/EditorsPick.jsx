import { Avatar, Box, Flex, Heading, Text, useTheme } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useStore } from "../Store";

export default function EditorsPick() {
  const theme = useTheme();
  const posts = useStore((state) => state.editorsPick);
  return (
    <Box>
      {posts?.map((post) => {
        return (
          <Box key={post?.title} pb={4}>
            <Flex alignItems="center" gap={2}>
              <Avatar size="xs" />
              <Text fontSize="xs">{post?.author}</Text>
            </Flex>
            <Heading
              as={ReactRouterLink}
              size="sm"
              to={`/single-post/${post?.title}`}
              state={{ fromPublished: { post } }}
            >
              {post?.title}
            </Heading>
          </Box>
        );
      })}
    </Box>
  );
}
