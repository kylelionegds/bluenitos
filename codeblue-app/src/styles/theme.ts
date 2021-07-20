import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

import buttons from "./components/buttons";
import borders from "./foundations/borders";
import colors from "./foundations/colors";
import styles from "./styles";
import breakpoints from "./foundations/breakpoints";

const theme = extendTheme(withDefaultColorScheme({ colorScheme: "brand" }), {
  config: {
    cssVarPrefix: "cb",
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  breakpoints,
  colors,
  styles,
  borders,
  components: {
    buttons,
  },
});

export default theme;
