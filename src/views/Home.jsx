import React, { Suspense } from "react";
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

const Following = React.lazy(() => import("../components/postsTabs/Following"));
const EditorsPick = React.lazy(() => import("../components/EditorsPick"));

export default function Home() {
  const theme = useTheme();
  return (
    <Box>
      <Flex gap={4}>
        <Stack width={{ sm: "100%", lg: "68%" }} px={{ sm: 2, lg: 24 }} py={4}>
          <Tabs variant="line" isLazy colorScheme="blackAlpha" defaultIndex={1}>
            <TabList>
              <Tab>+</Tab>
              <Tab>For you</Tab>
              <Tab>Following</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>Find more suggestions</TabPanel>
              <TabPanel>
                <Suspense>
                  <Following />
                </Suspense>
              </TabPanel>
              <TabPanel>
                <Suspense>
                  <Following />
                </Suspense>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
        <Center height="100vh">
          <Divider
            orientation="vertical"
            color={theme.colors.border.grey}
            display={{ sm: "none", lg: "block" }}
          />
        </Center>
        <Stack
          width={{ sm: "0%", lg: "32%" }}
          p={8}
          display={{ sm: "none", lg: "block" }}
        >
          <Heading size="sm" fontWeight="medium" pb={2}>
            Staff Picks
          </Heading>
          <Suspense>
            <EditorsPick />
          </Suspense>
        </Stack>
      </Flex>
    </Box>
  );
}
