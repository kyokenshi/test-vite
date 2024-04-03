import './App.css'
// import { i18nInit } from './i18n/i18next'

import { ErrorBoundary } from 'react-error-boundary'
// import HeaderMicro from 'Home/Header'
import { QueryClient, QueryClientProvider } from 'react-query'
import Footer from 'Home/FooterV2'

function App() {
  // const [RemoteComponent, setRemoteComponent] = useState(null)

  const queryClient = new QueryClient()

  return (
    <>
      {/* <ApolloProvider {...appConfig}> */}
      {/* <ReactQueryProvider> */}

      <ErrorBoundary fallback={<div>aâ</div>}>
        {/* Ứng dụng của bạn */}
        <QueryClientProvider client={queryClient}>
          {/* <HeaderMicro /> */}

          <Footer />
        </QueryClientProvider>
      </ErrorBoundary>
      {/* </ReactQueryProvider> */}
      {/* </ApolloProvider> */}
    </>
  )
}
export default App
