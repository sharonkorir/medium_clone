import { useForm } from "react-hook-form";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import {
  FormErrorMessage,
  FormControl,
  Input,
  Button,
  Box,
  useTheme,
  Flex,
  Icon,
  Text,
  Avatar,
  Textarea,
  InputGroup,
} from "@chakra-ui/react";
import { useStore } from "../../Store";
import { FaMedium } from "react-icons/fa6";
import { PiDotsThree, PiBell, PiPlusCircleThin } from "react-icons/pi";

export default function CreatePost() {
  const theme = useTheme();
  const navigate = useNavigate();
  const addPost = useStore((store) => store.addPost);
  const user = useStore((state) => state.currentUser);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { title: "", content: "" },
  });

  function onSubmit(values) {
    addPost(values.title, values.content);
    navigate("/posts");
  }

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <Flex
        h={user ? 14 : 20}
        alignItems="center"
        justifyContent="space-between"
        px={{ sm: "10px", lg: "160px" }}
        py={{ sm: 2, lg: 8 }}
      >
        <Flex alignItems="center" gap={2}>
          <ReactRouterLink to="/">
            <Icon
              as={FaMedium}
              boxSize="2.75em"
              _hover={{ cursor: "pointer" }}
            />
          </ReactRouterLink>

          <Text fontSize="xs">Drafts in {user.email}</Text>
        </Flex>
        <Flex alignItems="center" gap={{ sm: 2, lg: 6 }}>
          <Button
            type="submit"
            variant="solid"
            color="white"
            borderRadius="20px"
            fontWeight="normal"
            bg="#1a8917"
            borderColor="white"
            _hover={{ bg: "#187715" }}
            size={{ sm: "xs", lg: "sm" }}
          >
            Publish
          </Button>

          <Icon as={PiDotsThree} boxSize={6} color={theme.colors.text.grey} />
          <Icon as={PiBell} boxSize={6} color={theme.colors.text.grey} />
          <Avatar size="sm" />
        </Flex>
      </Flex>

      <Box pt={{ sm: 6, lg: 10 }} px={{ sm: "20px", lg: "300px" }}>
        <FormControl isInvalid={errors.title}>
          <InputGroup alignItems="center" gap={6}>
            <Icon
              as={PiPlusCircleThin}
              boxSize={10}
              visibility="hidden"
              _groupFocusWithin={{ visibility: "visible" }}
              display={{ sm: "none", lg: "block" }}
            />
            <Input
              required
              variant="unstyled"
              id="title"
              placeholder="Title"
              {...register("title", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
              })}
              _placeholder={{
                fontSize: "36px",
                color: "rgb(179 179 177)",
              }}
              fontSize="36px"
            />
          </InputGroup>

          <FormErrorMessage>
            {errors.title && errors.title.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.content}>
          <InputGroup gap={6}>
            <Icon
              as={PiPlusCircleThin}
              boxSize={10}
              visibility="hidden"
              _groupFocusWithin={{ visibility: "visible" }}
              display={{ sm: "none", lg: "block" }}
            />
            <Textarea
              rows="12"
              variant="unstyled"
              id="content"
              placeholder="Tell your story..."
              fontSize="20px"
              {...register("content", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
              })}
              _placeholder={{
                color: "rgb(179 179 177)",
              }}
            />
          </InputGroup>

          <FormErrorMessage>
            {errors.content && errors.cotent.message}
          </FormErrorMessage>
        </FormControl>
      </Box>
    </Box>
  );
}
