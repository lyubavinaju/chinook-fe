import { useForm } from 'react-hook-form'
import { type LoginData } from '../model/LoginData'
import { Alert, Button, Field, Input, VStack } from '@chakra-ui/react';
import { useState } from 'react';

type Props = {
  submitter: (data: LoginData) => Promise<string>
}

const LoginForm = ({ submitter }: Props) => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { register, handleSubmit } = useForm<LoginData>();
  return (
    <VStack as={"form"} onSubmit={handleSubmit(async data => {
      const message = await submitter(data);
      if (message) {
        setErrorMessage(message);
      }
    })}>
      <Field.Root>
        <Field.Label>Username</Field.Label>
        <Input {...register("username", { required: true })} />
        <Field.ErrorText>Username is required</Field.ErrorText>
      </Field.Root>
      <Field.Root>
        <Field.Label>Password</Field.Label>
        <Input {...register("password", { required: true })} type="password" />
        <Field.ErrorText>Password is required</Field.ErrorText>
      </Field.Root>
      <Button type="submit">Submit</Button>
      {!!errorMessage && <Alert.Root status={"error"}>
        <Alert.Indicator />
        <Alert.Title>{errorMessage}</Alert.Title>
      </Alert.Root>}
    </VStack>
  )
}

export default LoginForm
