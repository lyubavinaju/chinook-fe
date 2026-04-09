import { Box, Text } from '@chakra-ui/react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
    const errorText = error instanceof Error ? error.message : JSON.stringify(error, null, 2);
  return (
    <Box>
      <Text fontWeight="bold">Something went wrong</Text>
      <Text whiteSpace="pre-wrap">{errorText}</Text>
    </Box>
  )
}

export default ErrorPage
