import React from "react";
import { Flex, Button, Stack, FormLabel, FormControl } from "@chakra-ui/react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../components/Form/Input";
import { SubmitHandler, useForm } from "react-hook-form";

interface SignInFormData {
  email: string;
  password: string;
}

const signInFormSchema = Yup.object().shape({
  email: Yup.string().email("E-mail inválido").required("E-mail obrigatório."),
  password: Yup.string().required("Senha obrigatória."),
});

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        p={8}
        bg="gray.800"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input
            name="email"
            type="email"
            label="E-mail"
            error={errors?.email}
            {...register("email")}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            error={errors?.password}
            {...register("password")}
          />
        </Stack>

        <Button
          isLoading={isSubmitting}
          type="submit"
          mt={6}
          colorScheme="pink"
          size="lg"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
