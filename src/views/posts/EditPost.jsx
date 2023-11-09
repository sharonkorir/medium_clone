import { useForm } from "react-hook-form";
import {
  Link as ReactRouterLink,
  useNavigate,
  useLocation,
} from "react-router-dom";
import {
  FormErrorMessage,
  FormControl,
  Input,
  Button,
  Box,
  useTheme,
  Flex,
  Icon,
  Avatar,
  Textarea,
  InputGroup,
  Heading,
  Link,
} from "@chakra-ui/react";
import { useStore } from "../../Store";
import { FaMedium } from "react-icons/fa6";
import { PiDotsThree, PiBell, PiPlusCircleThin } from "react-icons/pi";

export default function EditPost() {
  const theme = useTheme();
  const navigate = useNavigate();
  const editPost = useStore((store) => store.editPost);
  const user = useStore((state) => state.currentUser);
  const location = useLocation();
  const { fromEdit } = location.state;
  let post = fromEdit.post;

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { title: post.title, content: post.content },
  });

  function onSubmit(values) {
    editPost(post.title, values);

    navigate("/posts");
  }

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <Flex
        h={user ? 14 : 20}
        alignItems="center"
        justifyContent="space-between"
        px="160px"
        py={8}
      >
        <Flex alignItems="center" gap={2}>
          <ReactRouterLink to="/">
            <Icon
              as={FaMedium}
              boxSize="2.75em"
              _hover={{ cursor: "pointer" }}
            />
          </ReactRouterLink>

          <Heading size="md">{user.email}</Heading>

          {/* <Text fontSize="xs">Drafts in {user.email}</Text> */}
        </Flex>
        <Flex alignItems="center" gap={6}>
          <Flex gap={4} alignItems="center">
            <Button
              variant="link"
              as={ReactRouterLink}
              to={`/single-post/${post.title}`}
              state={{ fromPublished: { post } }}
              color={theme.colors.text.grey}
              fontSize="sm"
            >
              Back to story
            </Button>
            <Button
              type="submit"
              variant="solid"
              color="white"
              borderRadius="20px"
              fontWeight="normal"
              bg="#1a8917"
              borderColor="white"
              _hover={{ bg: "#187715" }}
              size="sm"
            >
              Save and publish
            </Button>
          </Flex>

          <Icon as={PiDotsThree} boxSize={6} color={theme.colors.text.grey} />
          <Icon as={PiBell} boxSize={6} color={theme.colors.text.grey} />
          <Avatar size="sm" />
        </Flex>
      </Flex>

      <Box pt={10} px="300px">
        <FormControl isInvalid={errors.title}>
          <InputGroup alignItems="center" gap={6}>
            <Icon
              as={PiPlusCircleThin}
              boxSize={10}
              visibility="hidden"
              _groupFocusWithin={{ visibility: "visible" }}
            />
            <Input
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
