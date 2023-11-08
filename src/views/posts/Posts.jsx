import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useTheme,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import EditorsPick from "../../components/EditorsPick";
import Drafts from "../../components/postsTabs/Drafts";
import Published from "../../components/postsTabs/Published";

export default function Posts() {
  const theme = useTheme();

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
              <TabPanel>
                <Drafts />
              </TabPanel>
              <TabPanel>
                <Published />
              </TabPanel>
              <TabPanel></TabPanel>
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
