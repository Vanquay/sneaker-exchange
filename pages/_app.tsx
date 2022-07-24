import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { ChakraProvider } from '@chakra-ui/react'

const MyApp = ({ Component, pageProps}: AppProps) => {
  return(
    <SessionProvider session={pageProps.session}>
      <ChakraProvider>
        <Component {...pageProps}/>
      </ChakraProvider>
    </SessionProvider>
  )
}


export default MyApp

















// function MyApp({ Component, pageProps }: AppProps) {
//   return(
//     <SessionProvider>
//       <ChakraProvider>
//         <Component {...pageProps}/>
//       </ChakraProvider>
//     </SessionProvider>

//   )
// }