import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <ColorModeScript />
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}
export default MyApp;
