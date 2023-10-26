import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Text,
  Input,
  FormErrorMessage,
  FormControl,
} from "@chakra-ui/react";

export default function Login({ setUser, isOpen, onClose }) {
  const navigate = useNavigate();
  //   const [email, setEmail] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 1000);
      onClose();
      navigate("/posts");
    });
  }

  //   const handleSubmit
  //   if (!email) return;
  //   setUser({ email: email });
  //   navigate("/posts");

  //   const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

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
              <FormControl isInvalid={errors.name}>
                {/* <FormLabel htmlFor="email">Your email</FormLabel> */}
                <Input
                  id="email"
                  //   placeholder="email"
                  {...register("email", {
                    required: "This is required",
                  })}
                  variant="flushed"
                  borderBottomColor="black"
                />
                <FormErrorMessage>
                  {errors.name && errors.name.message}
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
                //   onClick={openRegisterModal}
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
