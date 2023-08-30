import { createTheme, ThemeOptions, Typography, TypographyProps } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { BLACK, WHITE, DARK_GREY, MEDIUM_GREY } from './Colors';
import { TWENTY_PX, EIGHTEEN_PX, SIXTEEN_PX, FOURTEEN_PX, TWELVE_PX, TEN_PX, EIGHT_PX, UPPERCASE, CAPITALIZE, SEMI_BOLD } from './FontProperties';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    NavHeader: true;
    UserName: true;
    UserRole: true;
    Email: true;
    DetailHeader: true;
    DetailItem: true;
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
  NavHeader: React.CSSProperties;
  UserName: React.CSSProperties;
  UserRole: React.CSSProperties;
  Email: React.CSSProperties;
  DetailHeader: React.CSSProperties;
  DetailItem: React.CSSProperties;
}

const breakpointTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export const theme = createTheme({
  ...breakpointTheme,
  palette: {
    primary: {
      main: WHITE,
    },
    secondary: {
      main: BLACK,
    },
  },
  typography: {
    fontFamily: ['Open Sans'].join(','),
    NavHeader: {
      fontSize: TWENTY_PX,
      color: DARK_GREY,
      textTransform: UPPERCASE,
      [`@media screen and (max-width: ${breakpointTheme.breakpoints.values.md}px)`]: {
        fontSize: EIGHTEEN_PX,
      },
      [`@media screen and (max-width: ${breakpointTheme.breakpoints.values.sm}px)`]: {
        fontSize: SIXTEEN_PX,
      },
    },
    UserName: {
      fontSize: FOURTEEN_PX,
      fontWeight: SEMI_BOLD,
      color: DARK_GREY,
      [`@media screen and (max-width: ${breakpointTheme.breakpoints.values.md}px)`]: {
        fontSize: TWELVE_PX,
      },
      [`@media screen and (max-width: ${breakpointTheme.breakpoints.values.sm}px)`]: {
        fontSize: TEN_PX,
      },
    },
    UserRole: {
      fontSize: TWELVE_PX,
      color: DARK_GREY,
      [`@media screen and (max-width: ${breakpointTheme.breakpoints.values.md}px)`]: {
        fontSize: TEN_PX,
      },
      [`@media screen and (max-width: ${breakpointTheme.breakpoints.values.sm}px)`]: {
        fontSize: EIGHT_PX,
      },
    },
    Email: {
      fontSize: TWELVE_PX,
      color: MEDIUM_GREY,
      [`@media screen and (max-width: ${breakpointTheme.breakpoints.values.md}px)`]: {
        fontSize: TEN_PX,
      },
      [`@media screen and (max-width: ${breakpointTheme.breakpoints.values.sm}px)`]: {
        fontSize: EIGHT_PX,
      },
    },
    DetailHeader: {
      fontSize: TWELVE_PX,
      fontWeight: SEMI_BOLD,
      color: DARK_GREY,
      textTransform: CAPITALIZE,
      [`@media screen and (max-width: ${breakpointTheme.breakpoints.values.md}px)`]: {
        fontSize: TEN_PX,
      },
      [`@media screen and (max-width: ${breakpointTheme.breakpoints.values.sm}px)`]: {
        fontSize: EIGHT_PX,
      },
    },
    DetailItem: {
      fontSize: TWELVE_PX,
      color: DARK_GREY,
      [`@media screen and (max-width: ${breakpointTheme.breakpoints.values.md}px)`]: {
        fontSize: TEN_PX,
      },
      [`@media screen and (max-width: ${breakpointTheme.breakpoints.values.sm}px)`]: {
        fontSize: EIGHT_PX,
      },
    },
  } as ExtendedTypographyOptions,
} as ThemeOptions);

export const Text = (props: TypographyProps) => {
  return <Typography {...props} data-name="Text" />;
};
