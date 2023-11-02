import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useTheme,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import EditorsPick from "../../components/EditorsPick";
import { useStore } from "../../Store";
import { GoShare } from "react-icons/go";
import { FiMoreHorizontal } from "react-icons/fi";

export default function Posts() {
  // console.log("mm");
  const theme = useTheme();
  const posts = useStore((state) => state.posts);
  const deletePost = useStore((state) => state.deletePost);
  console.log("posts:", posts);
  return (
    <Box>
      <Flex gap={4}>
        <Stack width="70%" px={24} py={16}>
          <Flex justifyContent="space-between" alignItems="center" mb={6}>
            <Heading size="xl">Your stories</Heading>
            <Flex gap={2}>
              <Button
                as={ReactRouterLink}
                to="/create-post"
                type="submit"
                variant="solid"
                color="white"
                borderRadius="20px"
                fontWeight="normal"
                bg="#1a8917"
                borderColor="white"
                _hover={{ bg: "#187715" }}
              >
                Write a story
              </Button>
              <Button
                variant="outline"
                color="black"
                borderRadius="20px"
                fontWeight="normal"
                borderColor="black"
                _hover={{ bg: "white" }}
              >
                Import a story
              </Button>
            </Flex>
          </Flex>

          <Tabs variant="line" isLazy colorScheme="blackAlpha" defaultIndex={1}>
            <TabList>
              <Tab>Drafts</Tab>
              <Tab>Published</Tab>
              <Tab>Responses</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>drafts</TabPanel>
              <TabPanel>
                {posts.map((post) => {
                  return (
                    <Box key={post.title}>
                      <Heading size="sm" pb={2}>
                        {post.title}
                      </Heading>
                      <Text noOfLines={2}>{post.content}</Text>
                      <Flex
                        gap={2}
                        alignItems="center"
                        color={theme.colors.text.grey}
                      >
                        <Text fontSize="sm">Published about 1 hour ago </Text>
                        <Text>.</Text>
                        <Text fontSize="sm">1 min read</Text>
                        <GoShare />
                        <Menu isLazy>
                          <MenuButton>
                            <FiMoreHorizontal />
                          </MenuButton>
                          <MenuList>
                            {/* MenuItems are not rendered unless Menu is open */}
                            <MenuItem>Edit story</MenuItem>
                            <MenuItem>View stats</MenuItem>
                            <MenuItem
                              color="tomato"
                              // as={Button}
                              onClick={() => deletePost(post.title)}
                            >
                              Delete story
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      </Flex>
                    </Box>
                  );
                })}
              </TabPanel>
              <TabPanel>responses</TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
        <Center height="100vh">
          <Divider orientation="vertical" color={theme.colors.border.grey} />
        </Center>
        <Stack width="30%" p={8}>
          <Heading size="sm" fontWeight="medium" pb={2}>
            Staff Picks
          </Heading>
          <EditorsPick />
        </Stack>
      </Flex>
    </Box>
  );
}
