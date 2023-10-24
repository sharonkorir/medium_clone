import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  InputLeftElement,
  Input,
  InputGroup,
  useTheme,
  Icon,
} from "@chakra-ui/react";

import {
  FaMedium,
  FaMagnifyingGlass,
  FaRegBell,
  FaRegPenToSquare,
  FaRegBookmark,
  FaRegUser,
  FaRegRectangleList,
  FaRegChartBar,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Navbar() {
  const theme = useTheme();

  const StyledMenuItem = ({ icon, text }) => {
    return (
      <MenuItem
        icon={icon}
        my="4px"
        _hover={{
          bg: "white",
          color: "black",
        }}
      >
        {text}
      </MenuItem>
    );
  };

  const menuItemsList = [
    { id: 1, text: "Profile", icon: <FaRegUser size="16px" /> },
    { id: 2, text: "Library", icon: <FaRegBookmark size="16px" /> },
    { id: 3, text: "Stories", icon: <FaRegRectangleList size="16px" /> },
    { id: 4, text: "Stats", icon: <FaRegChartBar size="16px" /> },
    { id: 5, divider: true },
    { id: 6, text: "Settings" },
    { id: 7, text: "Refine recommendations" },
    { id: 8, text: "Manage publications" },
    { id: 9, text: "Help" },
    { id: 10, divider: true },
    { id: 11, text: "Become a member" },
    { id: 12, text: "Create a Mastodon account" },
    { id: 13, text: "Apply for author verification" },
    { id: 14, text: "Apply to the Partner Program" },
    { id: 15, text: "Account Settings" },
    { id: 16, text: "Gift a membership" },
    { id: 17, divider: true },
    { id: 18, text: "Sign out" },
    { id: 19, text: "User email" },
  ];

  return (
    <>
      <Box borderY="1px" borderColor={theme.colors.border.grey}>
        <Flex h={14} alignItems="center" justifyContent="space-between" mx={6}>
          <Flex alignItems="center">
            <Icon
              as={FaMedium}
              boxSize="2.75em"
              _hover={{ cursor: "pointer", color: "black" }}
            />

            <InputGroup
              mx={4}
              display={{ base: "none", sm: "flex" }}
              color={theme.colors.text.grey}
            >
              <InputLeftElement fontSize="1.2em" px="28px">
                <Link to="/">
                  <Icon as={FaMagnifyingGlass} focusable="true" />
                </Link>
              </InputLeftElement>
              <Input
                placeholder="Search"
                borderRadius={20}
                bgColor={theme.colors.bg.grey}
                border="none"
                _placeholder={{
                  color: theme.colors.text.grey,
                  fontSize: "sm",
                  paddingLeft: "16px",
                }}
              />
            </InputGroup>
          </Flex>

          <Flex alignItems="center" color={theme.colors.text.grey}>
            <Stack direction="row" spacing={7} alignItems="center">
              <Flex
                gap={2}
                alignItems="center"
                _hover={{ cursor: "pointer", color: "black" }}
              >
                <Icon
                  aria-label="write post"
                  as={FaRegPenToSquare}
                  boxSize={5}
                />
                <Text fontSize="sm">Write</Text>
              </Flex>
              <Icon
                bg="white"
                aria-label="search"
                as={FaMagnifyingGlass}
                display={{ base: "flex", md: "none" }}
                boxSize={5}
                _hover={{ cursor: "pointer", color: "black" }}
              />

              <Icon
                aria-label="notifications"
                as={FaRegBell}
                display={{ base: "none", md: "flex" }}
                boxSize={5}
                _hover={{ cursor: "pointer", color: "black" }}
              />
              <Menu isLazy px="66px">
                <MenuButton
                  as={Button}
                  rounded="full"
                  variant="link"
                  minW={0}
                  _hover={{ filter: "brightness(0.7)" }}
                >
                  <Avatar
                    size="sm"
                    src="https://avatars.dicebear.com/api/male/username.svg"
                  />
                </MenuButton>
                <MenuList alignItems="center" px="16px">
                  <MenuItem
                    icon={<FaRegPenToSquare size="16px" />}
                    display={{ base: "flex", sm: "none" }}
                    mb="4px"
                  >
                    Write
                  </MenuItem>
                  {menuItemsList.map((item) => {
                    if (item.divider) {
                      return <MenuDivider key={item.id} />;
                    } else {
                      return (
                        <StyledMenuItem
                          key={item.id}
                          icon={item.icon}
                          text={item.text}
                        />
                      );
                    }
                  })}
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
