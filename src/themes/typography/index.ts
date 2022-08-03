import { Palette } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

type ITypography =
    | TypographyOptions
    | ((palette: Palette) => TypographyOptions);

const typography: ITypography = {
    fontFamily: 'Nunito',
};

export default typography;
