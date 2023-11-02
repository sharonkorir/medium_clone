import {
  Avatar,
  Box,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useTheme,
} from "@chakra-ui/react";
import EditorsPick from "../../components/EditorsPick";
import { useStore } from "../../Store";

export default function Posts() {
  // console.log("mm");
  const theme = useTheme();
  const posts = useStore((state) => state.posts);
  console.log("posts:", posts);
  return (
    <Box>
      <Flex gap={4} p={10} m={10}>
        <Stack
          borderRight="1px"
          borderRightColor={theme.colors.border.grey}
          width="70%"
        >
          <Box>
            <Flex>
              <Avatar />
              <Text>user name: </Text>
              <Text>Date</Text>
            </Flex>
            <Heading>Title here</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              alias recusandae ducimus laboriosam dicta voluptatum, explicabo
              harum dolore inventore quia! Numquam quisquam omnis vero illo
              totam eos esse voluptatum ipsum.
            </Text>
            <Flex>Icons here</Flex>
          </Box>
        </Stack>
        <Stack width="30%">
          <EditorsPick />
        </Stack>
      </Flex>
    </Box>
  );
}
