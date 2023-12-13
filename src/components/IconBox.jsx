import {
  Text,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useTheme,
} from "@chakra-ui/react";

import { ClapsIcon } from "./icons/ClapsIcon";
import { BookmarkIcon } from "./icons/BookmarkIcon";
import { ChatIcon } from "./icons/ChatIcon";
import { ThreeDotsIcon } from "./icons/ThreeDotsIcon";
import { BoxArrowUp } from "./icons/BoxArrowUp";
import { PlayCircleIcon } from "./icons/PlayCircleIcon";

export default function IconBox() {
  const theme = useTheme();
  return (
    <Flex py={2} justifyContent="space-between">
      <Flex gap={6}>
        <Flex gap={2} alignItems="center" color={theme.colors.text.grey}>
          <Icon as={ClapsIcon} boxSize={6} color={theme.colors.text.grey} />
          <Text fontSize="sm">211</Text>
        </Flex>
        <Flex gap={2} alignItems="center" color={theme.colors.text.grey}>
          <Icon as={ChatIcon} boxSize={6} />
          <Text fontSize="sm" color={theme.colors.text.grey}>
            35
          </Text>
        </Flex>
      </Flex>
      <Flex gap={6} alignItems="center" color={theme.colors.text.grey}>
        <Icon as={BookmarkIcon} boxSize={6} />
        <Icon as={PlayCircleIcon} boxSize={6} />
        <Icon as={BoxArrowUp} boxSize={6} />
        <Menu isLazy>
          <MenuButton alignItems="center">
            <Icon
              as={ThreeDotsIcon}
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
  );
}
