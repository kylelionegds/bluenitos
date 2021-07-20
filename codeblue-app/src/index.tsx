import * as React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { PossoProvider } from "@mobixsoftwarestudio/posso";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./styles/theme";
import { App } from "./app";
import { TOKEN_KEY } from "./utils/authenticated";
import { Redirect } from "react-router";

const MOUNT_NODE = document.getElementById("root") as HTMLElement;
const queryClient = new QueryClient();
const permissionsOfApp = ["page/home"];
const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) == null;
interface Props {
  Component: typeof App;
}

const ConnectedApp = ({ Component }: Props) => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <PossoProvider
        permissions={permissionsOfApp}
        isAuthenticated={isAuthenticated()}
        notAuthenticatedRedirect={<Redirect to="/" />}
        authenticatedRedirect="/home"
      >
        <React.StrictMode>
          <ColorModeScript />
          <Component />
        </React.StrictMode>
      </PossoProvider>
    </ChakraProvider>
  </QueryClientProvider>
);

const render = (Component: typeof App) => {
  ReactDOM.render(<ConnectedApp Component={Component} />, MOUNT_NODE);
};

render(App);
