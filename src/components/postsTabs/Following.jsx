import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FiMoreHorizontal } from "react-icons/fi";
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
  Avatar,
  Tag,
  Highlight,
  Image,
  Icon,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useStore } from "../../Store";
import { MdOutlineBookmarkAdd } from "react-icons/md";

export default function Following() {
  const theme = useTheme();
  const posts = useStore((state) => state.posts);
  const deletePost = useStore((state) => state.deletePost);

  return (
    <>
      {posts.map((post) => {
        return (
          <Box key={post.title} pt={8}>
            <Flex alignItems="center" gap={2}>
              <Avatar size="xs" />
              <Text fontSize="sm">
                <Highlight
                  query={["in", ".", "Jun 26"]}
                  styles={{ color: theme.colors.text.grey }}
                >
                  Author name in category name . Jun 26
                </Highlight>
              </Text>
            </Flex>
            <Box py={2}>
              <Heading
                as={ReactRouterLink}
                to={`/single-post/${post.title}`}
                size="md"
                fontWeight="semibold"
                state={{ fromPublished: { post } }}
              >
                {post.title}
              </Heading>
            </Box>
            <Flex justifyContent="space-between" alignItems="center" gap={12}>
              <Box width="80%">
                <Text noOfLines={3} pb={8}>
                  {post.content}
                </Text>
                <Flex justifyContent="space-between">
                  <Flex gap={2} alignItems="center">
                    <Tag borderRadius="full" fontSize="sm">
                      ReactJS
                    </Tag>
                    <Text fontSize="sm" color={theme.colors.text.grey}>
                      5 min read{" "}
                    </Text>
                  </Flex>
                  <Flex gap={4} alignItems="center">
                    <Icon
                      as={MdOutlineBookmarkAdd}
                      boxSize={6}
                      color={theme.colors.text.grey}
                    />
                    <Icon
                      as={IoIosRemoveCircleOutline}
                      boxSize={6}
                      color={theme.colors.text.grey}
                    />
                    <Menu isLazy>
                      <MenuButton>
                        <Icon
                          as={FiMoreHorizontal}
                          boxSize={6}
                          color={theme.colors.text.grey}
                        />
                      </MenuButton>
                      <MenuList color={theme.colors.text.grey}>
                        {/* MenuItems are not rendered unless Menu is open */}
                        <MenuItem>Mute this author</MenuItem>
                        <MenuItem>Mute this publication</MenuItem>
                        <MenuItem>Report</MenuItem>
                      </MenuList>
                    </Menu>
                  </Flex>
                </Flex>
              </Box>

              <Box width="20%">
                <Image
                  boxSize={{ base: "80px", md: "100px", lg: "120px" }}
                  objectFit="cover"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                />
              </Box>
            </Flex>

            <Divider py={4} />
          </Box>
        );
      })}
    </>
  );
}
