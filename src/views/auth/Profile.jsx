import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Input,
  useTheme,
  Icon,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";

import { useStore } from "../../Store";
import { MediumIcon } from "../../components/icons/MediumIcon";

export default function Profile() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useStore();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: currentUser.email,
    },
  });

  const onSubmit = (values) => {
    setCurrentUser({ ...currentUser, name: values.name, email: values.email });
    navigate("/posts");
  };

  return (
    <>
      <Box>
        <Flex h={14} alignItems="center" justifyContent="center" my={2}>
          <Flex alignItems="center">
            {" "}
            <ReactRouterLink to="/">
              <Icon
                as={MediumIcon}
                boxSize="2.75em"
                _hover={{ cursor: "pointer" }}
              />
            </ReactRouterLink>
          </Flex>
        </Flex>
        <Stack
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          gap={4}
          mt={20}
        >
          <Text fontSize="2xl" fontWeight="normal">
            Almost there!
          </Text>
          <Text>
            Finish creating your account for the full Medium experience!
          </Text>
        </Stack>
        <Box
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          textAlign="center"
          justifyContent="center"
          mt={8}
        >
          <FormControl isInvalid={errors.name}>
            <FormLabel
              htmlFor="name"
              textAlign="center"
              fontSize="small"
              color={theme.colors.text.grey}
            >
              Your full name
            </FormLabel>
            <Input
              id="name"
              {...register("name", {
                required: "This is required",
              })}
              variant="flushed"
              borderBottomColor="black"
              type="text"
              textAlign="center"
              size="sm"
              width="400px"
            />
            <FormErrorMessage textAlign="center">
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.email} mt={4}>
            <FormLabel
              htmlFor="email"
              textAlign="center"
              fontSize="small"
              color={theme.colors.text.grey}
            >
              Your email
            </FormLabel>
            <Input
              id="email"
              {...register("email", {
                required: "This is required",
              })}
              variant="unstyled"
              borderBottomColor="black"
              type="email"
              textAlign="center"
              size="sm"
              width="100%"
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            type="submit"
            variant="solid"
            color="white"
            borderRadius="20px"
            fontWeight="normal"
            bg="#1a8917"
            borderColor="white"
            _hover={{ bg: "#187715" }}
            mt={10}
          >
            Create account
          </Button>
        </Box>
      </Box>
    </>
  );
}
