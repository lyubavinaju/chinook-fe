import React from 'react'
import { useForm } from 'react-hook-form'
import { type LoginData } from '../model/LoginData'
import { Button, Field, HStack, Input, VStack } from '@chakra-ui/react';

const LoginForm = () => {
    const {register, handleSubmit, formState: {errors}, resetField} = useForm<LoginData>();
  return (
    <VStack as={"form"} onSubmit={handleSubmit(() => {
        
    })}>
        <Field.Root>
            <Field.Label>Username</Field.Label>
            <Input {...register("username", {required : true})}/>
            <Field.ErrorText>Username is required</Field.ErrorText>
        </Field.Root>
        <Field.Root>
            <Field.Label>Password</Field.Label>
            <Input {...register("password", {required: true})}/>
            <Field.ErrorText>Password is required</Field.ErrorText>
        </Field.Root>
        <Button type="submit">Sumbit</Button>
    </VStack>
  )
}

export default LoginForm
