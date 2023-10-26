import { Link as ReactRouterLink } from "react-router-dom";
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
  useDisclosure,
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
import { AiOutlineMediumWorkmark } from "react-icons/ai";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import { useAuthStore } from "../Store";

export default function Navbar({ user }) {
  const theme = useTheme();
  const { logout } = useAuthStore();
  const {
    isOpen: isLoginModalOpen,
    onOpen: openLoginModal,
    onClose: closeLoginModal,
  } = useDisclosure();
  const {
    isOpen: isRegisterModalOpen,
    onOpen: openRegisterModal,
    onClose: closeRegisterModal,
  } = useDisclosure();

  const StyledMenuItem = ({ icon, text, onClick }) => {
    return (
      <MenuItem
        icon={icon}
        my="4px"
        _hover={{
          bg: "white",
          color: "black",
        }}
        onClick={onClick}
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
    { id: 18, text: "Sign out", onClick: logout },
    { id: 19, text: user },
  ];

  return (
    <>
      <Box
        borderY="1px"
        borderColor={user ? theme.colors.border.grey : "blackAlpha"}
      >
        <Flex
          h={user ? 14 : 20}
          alignItems="center"
          justifyContent="space-between"
          mx={6}
        >
          <Flex alignItems="center">
            {" "}
            <ReactRouterLink to="/">
              <Icon
                as={FaMedium}
                boxSize="2.75em"
                _hover={{ cursor: "pointer" }}
              />
            </ReactRouterLink>
            {user ? (
              <InputGroup
                mx={4}
                display={{ base: "none", sm: "flex" }}
                color={theme.colors.text.grey}
              >
                <InputLeftElement fontSize="1.2em" px="28px">
                  <Icon as={FaMagnifyingGlass} focusable="true" />
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
            ) : (
              <Icon
                as={AiOutlineMediumWorkmark}
                boxSize="7.5em"
                _hover={{ cursor: "pointer" }}
                mx={4}
              />
            )}
          </Flex>

          <Flex alignItems="center" color={theme.colors.text.grey}>
            {user ? (
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
                      } else if (item.onClick) {
                        return (
                          <StyledMenuItem
                            key={item.id}
                            text={item.text}
                            onClick={item.onClick}
                          />
                        );
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
            ) : (
              <Stack direction="row" spacing={5} alignItems="center">
                <Button
                  as={ReactRouterLink}
                  to="/login"
                  variant="outline"
                  color="black"
                  borderRadius="20px"
                  fontWeight="normal"
                  borderColor="black"
                  _hover={{ bg: "white" }}
                  onClick={openLoginModal}
                >
                  Sign in
                </Button>

                <Button
                  as={ReactRouterLink}
                  to="/register"
                  variant="solid"
                  color="white"
                  borderRadius="20px"
                  fontWeight="normal"
                  bg="blackAlpha.900"
                  borderColor="white"
                  _hover={{ bg: "black" }}
                  onClick={openRegisterModal}
                >
                  Sign up
                </Button>
              </Stack>
            )}
          </Flex>
        </Flex>
      </Box>
      <Login onClose={closeLoginModal} isOpen={isLoginModalOpen} />
      <Register onClose={closeRegisterModal} isOpen={isRegisterModalOpen} />
    </>
  );
}
