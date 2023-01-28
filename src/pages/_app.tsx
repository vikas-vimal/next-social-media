// import '@/styles/globals.css'
import Layout from '@/layouts/Layout'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { theme } from "@/chakra/theme"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  )
}
