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

import {
  PiHandsClappingThin,
  PiChatThin,
  PiBookmarkSimpleThin,
  PiPlayCircleThin,
  PiDotsThree,
  PiUploadSimpleThin,
} from "react-icons/pi";

export default function IconBox() {
  const theme = useTheme();
  return (
    <Flex py={2} justifyContent="space-between">
      <Flex gap={6}>
        <Flex gap={2} alignItems="center">
          <Icon
            as={PiHandsClappingThin}
            boxSize={6}
            color={theme.colors.text.grey}
          />
          <Text fontSize="sm" color={theme.colors.text.grey}>
            211
          </Text>
        </Flex>
        <Flex gap={2} alignItems="center">
          <Icon as={PiChatThin} boxSize={6} color={theme.colors.text.grey} />
          <Text fontSize="sm" color={theme.colors.text.grey}>
            35
          </Text>
        </Flex>
      </Flex>
      <Flex gap={6} alignItems="center">
        <Icon
          as={PiBookmarkSimpleThin}
          boxSize={6}
          color={theme.colors.text.grey}
        />
        <Icon
          as={PiPlayCircleThin}
          boxSize={6}
          color={theme.colors.text.grey}
        />
        <Icon
          as={PiUploadSimpleThin}
          boxSize={6}
          color={theme.colors.text.grey}
        />
        <Menu isLazy>
          <MenuButton alignItems="center">
            <Icon as={PiDotsThree} boxSize={6} color={theme.colors.text.grey} />
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
