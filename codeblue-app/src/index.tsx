import * as React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./styles/theme";
import { App } from "./app";

const MOUNT_NODE = document.getElementById("root") as HTMLElement;
const queryClient = new QueryClient();
interface Props {
  Component: typeof App;
}

const ConnectedApp = ({ Component }: Props) => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <React.StrictMode>
        <ColorModeScript />
        <Component />
      </React.StrictMode>
    </ChakraProvider>
  </QueryClientProvider>
);

const render = (Component: typeof App) => {
  ReactDOM.render(<ConnectedApp Component={Component} />, MOUNT_NODE);
};

render(App);
