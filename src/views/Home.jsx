import {
  Box,
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
import EditorsPick from "../components/EditorsPick";
import Following from "../components/postsTabs/Following";

export default function Home() {
  const theme = useTheme();
  return (
    <Box>
      <Flex gap={4}>
        <Stack width="68%" px={24} py={4}>
          <Tabs variant="line" isLazy colorScheme="blackAlpha" defaultIndex={1}>
            <TabList>
              <Tab>+</Tab>
              <Tab>For you</Tab>
              <Tab>Following</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>Find more suggestions</TabPanel>
              <TabPanel>
                <Following />
              </TabPanel>
              <TabPanel>
                <Following />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
        <Center height="100vh">
          <Divider orientation="vertical" color={theme.colors.border.grey} />
        </Center>
        <Stack width="32%" p={8}>
          <Heading size="sm" fontWeight="medium" pb={2}>
            Staff Picks
          </Heading>
          <EditorsPick />
        </Stack>
      </Flex>
    </Box>
  );
}
