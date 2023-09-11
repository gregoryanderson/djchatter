import { createTheme, responsiveFontSizes } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    primaryAppBar: {
      height: number;
    };
    primaryDrawer: {
      width: number;
      closed: number;
    };
    secondaryDrawer: {
      width: number;
    };
  }
  interface ThemeOptions {
    primaryAppBar?: {
      height?: number;
    };
    primaryDrawer: {
      width?: number;
      closed?: number;
    };
    secondaryDrawer: {
      width?: number;
    };
  }
}

export const createMuiTheme = () => {
  let theme = createTheme({
    typography: {
        fontFamily: ["IBM Plex Sans", "sans-serif"].join(","),
    },
    primaryAppBar: {
      height: 50,
    },
    primaryDrawer: {
      width: 240,
      closed: 70,
    },
    secondaryDrawer: {
      width: 240,
    },
    components: {

        MuiAppBar: {
            defaultProps: {
                color: "default",
                elevation: 0
            }
        }
    }
  });
  theme = responsiveFontSizes(theme)
  return theme;
};

export default createMuiTheme;
