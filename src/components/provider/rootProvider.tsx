'use client'
import { Provider } from 'react-redux'
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { store } from '@/store'

interface IRootProviderProps {
  children: React.ReactNode
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false
    }
  }
})

const RootProvider = ({ children }: IRootProviderProps) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  )
}

export default RootProvider
