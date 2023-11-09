import {
  Avatar,
  Box,
  Heading,
  Text,
  VStack,
  Flex,
  Divider,
  useTheme,
  Link,
} from "@chakra-ui/react";
import { useParams, useLocation } from "react-router-dom";
import IconBox from "../../components/IconBox";

export default function SinglePost() {
  const theme = useTheme();
  const location = useLocation();
  const { fromPublished } = location.state;
  let post = fromPublished.post;
  return (
    <Box px="350px">
      <Heading as="h2" size="2xl" pt={16} fontWeight="extrabold">
        {post.title}
      </Heading>
      <Flex gap={2} py={8}>
        <Avatar />
        <VStack spacing={0} alignItems="start">
          <Flex gap={2}>
            <Link>Author name </Link>
            <Text>.</Text>
            <Link
              color="#1a8917"
              _hover={{
                textDecoration: "none",
              }}
            >
              Follow
            </Link>
          </Flex>
          <Flex gap={2}>
            <Text color={theme.colors.text.grey}>2 min read . 4 days ago</Text>
          </Flex>
        </VStack>
      </Flex>
      <Divider />
      <IconBox />
      <Divider />
      <Text py={6}>{post.content}</Text>
      <Divider />
      <IconBox />
      <Divider />
    </Box>
  );
}
