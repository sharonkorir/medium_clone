import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useStore } from "../../Store";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  Text,
  Input,
  FormErrorMessage,
  FormControl,
} from "@chakra-ui/react";

export default function Login({ isOpen, onClose }) {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useStore();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values) => {
    // setCurrentUser(values);
    setCurrentUser({ ...currentUser, email: values.email });
    onClose();
    navigate("/posts");
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent
          justifyContent="center"
          alignItems="center"
          py={16}
          px={28}
          textAlign="center"
          height="650px"
        >
          <ModalHeader fontSize="2xl" fontWeight="normal" mt={22}>
            Sign in with email
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Enter the email address associated with your account, and we will
              log you in
            </Text>
            <Text fontSize="xs" mt={14} mb={2}>
              Your email
            </Text>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={errors.email}>
                <Input
                  id="email"
                  {...register("email", {
                    required: "This is required",
                  })}
                  variant="flushed"
                  borderBottomColor="black"
                  type="email"
                  textAlign="center"
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
                bg="blackAlpha.900"
                borderColor="white"
                _hover={{ bg: "black" }}
                mt={10}
                width="226px"
              >
                Continue
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
