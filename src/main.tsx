import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from './components/ui/provider'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
)
