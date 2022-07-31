import { createTheme } from "@mui/material/styles";

import palette from "./palette";

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        ...palette
    }
})

export default lightTheme