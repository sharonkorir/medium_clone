import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
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
  useDisclosure,
} from "@chakra-ui/react";
import { useStore } from "../../Store";

export default function Register() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useStore();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values) => {
    // setCurrentUser(values);
    setCurrentUser({ ...currentUser, email: values.email });
    onClose();
    navigate("/profile");
    onClose();
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
            Sign up with email
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Enter the email address to create an account</Text>
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
