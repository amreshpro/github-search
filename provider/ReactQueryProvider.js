"use client"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions:{
    queries: {
      refetchOnWindowFocus: false,
      staleTime:10000,
      refetchOnReconnect:true,
      refetchOnMount:true
    },
  }
})

const ReactQueryProvider = ({children}) => {

 
  return (
    
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      
  )
}
export default ReactQueryProvider