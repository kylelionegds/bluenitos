import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import theme from "../styles/theme";
import { AuthProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <ColorModeScript />
          <Component {...pageProps} />
        </AuthProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
export default MyApp;
