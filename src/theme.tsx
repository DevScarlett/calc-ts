import {createTheme} from "@mui/material"

const theme = createTheme ({
    palette: {
        mode: "dark",
        primary: {main: "#e61919"},
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 25,
                },
            },
        },
    },
    typography: {
        button: {
            fontSize: "lrem",
        },
    },
});

export default theme;