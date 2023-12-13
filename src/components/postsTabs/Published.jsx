import {
  useTheme,
  Box,
  Heading,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useStore } from "../../Store";
import { ThreeDotsIcon } from "../icons/ThreeDotsIcon";
import { BoxArrowUp } from "../icons/BoxArrowUp";

export default function Published() {
  const theme = useTheme();
  const posts = useStore((state) => state.posts);
  const deletePost = useStore((state) => state.deletePost);

  return (
    <>
      {posts.map((post) => {
        return (
          <Box key={post?.title}>
            <Box pt={4} pb={2}>
              {" "}
              <Heading
                size="sm"
                as={ReactRouterLink}
                to={`/single-post/${post?.title}`}
                fontWeight="semibold"
                state={{ fromPublished: { post } }}
              >
                {post?.title}
              </Heading>
            </Box>

            <Text noOfLines={2} color={theme.colors.text.grey}>
              {post?.content}
            </Text>
            <Flex gap={2} alignItems="center" color={theme.colors.text.grey}>
              <Text fontSize="sm">Published about 1 hour ago </Text>
              <Text>.</Text>
              <Text fontSize="sm">1 min read</Text>
              <BoxArrowUp />
              <Menu isLazy>
                <MenuButton>
                  <ThreeDotsIcon />
                </MenuButton>
                <MenuList>
                  {/* MenuItems are not rendered unless Menu is open */}
                  <MenuItem
                    as={ReactRouterLink}
                    to="/edit-post"
                    state={{ fromEdit: { post } }}
                  >
                    Edit story
                  </MenuItem>
                  <MenuItem>View stats</MenuItem>
                  <MenuItem
                    color="tomato"
                    // as={Button}
                    onClick={() => deletePost(post?.title)}
                  >
                    Delete story
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
            <Divider py={4} />
          </Box>
        );
      })}
    </>
  );
}
