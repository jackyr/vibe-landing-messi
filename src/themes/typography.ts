import { Space_Grotesk } from 'next/font/google'

const space_grotesk = Space_Grotesk({ subsets: ['latin'] })

const variants = {
  displayXLarge: { fontWeight: 700, fontSize: 72, lineHeight: 90 / 72, textTransform: "uppercase" },
  displayLarge: { fontWeight: 700, fontSize: 48, lineHeight: 56 / 48, textTransform: "uppercase" },
  displayMedium: { fontWeight: 700, fontSize: 40, lineHeight: 48 / 40, textTransform: "uppercase" },
  displaySmall: { fontWeight: 700, fontSize: 32, lineHeight: 40 / 32, textTransform: "uppercase" },
  stylizedLarge: { fontWeight: 700, fontSize: 24, lineHeight: 32 / 24, textTransform: "uppercase" },
  stylizedMedium: { fontWeight: 700, fontSize: 20, lineHeight: 28 / 20, textTransform: "uppercase" },
  stylizedSmall: { fontWeight: 700, fontSize: 18, lineHeight: 26 / 18, textTransform: "uppercase" },
  // headlineLarge: { fontWeight: 400, fontSize: 32, lineHeight: 40 / 32 },
  headlineLarge: { fontWeight: 700, fontSize: 24, lineHeight: 32 / 24 },
  // headlineMedium: { fontWeight: 400, fontSize: 28, lineHeight: 36 / 28 },
  headlineMedium: { fontWeight: 700, fontSize: 20, lineHeight: 28 / 20 },
  // headlineSmall: { fontWeight: 400, fontSize: 24, lineHeight: 32 / 24 },
  headlineSmall: { fontWeight: 700, fontSize: 18, lineHeight: 26 / 18 },
  titleLarge: { fontWeight: 500, fontSize: 22, lineHeight: 28 / 22 },
  titleMedium: { fontWeight: 500, fontSize: 16, lineHeight: 24 / 16 },
  titleSmall: { fontWeight: 500, fontSize: 14, lineHeight: 20 / 14 },
  labelLarge: { fontWeight: 500, fontSize: 14, lineHeight: 20 / 14 },
  labelMedium: { fontWeight: 500, fontSize: 12, lineHeight: 16 / 14 },
  labelSmall: { fontWeight: 500, fontSize: 10, lineHeight: 14 / 12 },
  bodyLarge: { fontWeight: 400, fontSize: 16, lineHeight: 24 / 16 },
  bodyMedium: { fontWeight: 400, fontSize: 14, lineHeight: 20 / 14 },
  bodySmall: { fontWeight: 400, fontSize: 12, lineHeight: 16 / 12 }
}

export const TypographyVariants = {
  // fontFamily: ["Space Grotesk", "sans-serif"].join(","),
  fontFamily: space_grotesk.style.fontFamily.split(',').map(v => v.trim().slice(1, -1)).join(','),
  ...variants
}

export const TypographyComponent = {
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        subtitle1: "h2",
        subtitle2: "h3",
        body1: "span",
        body2: "span",
        displayXLarge: "h1",
        displayLarge: "h2",
        displayMedium: "h3",
        displaySmall: "h4",
        stylizedLarge: "h4",
        stylizedMedium: "h5",
        stylizedSmall: "h6",
        headlineLarge: "h6",
        headlineMedium: "h6",
        headlineSmall: "h6",
        titleLarge: "h6",
        titleMedium: "h6",
        titleSmall: "h6",
        labelLarge: "span",
        labelMedium: "span",
        labelSmall: "span"
      }
    }
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    displayXLarge?: React.CSSProperties
    displayLarge?: React.CSSProperties
    displayMedium?: React.CSSProperties
    displaySmall?: React.CSSProperties

    stylizedLarge?: React.CSSProperties
    stylizedMedium?: React.CSSProperties
    stylizedSmall?: React.CSSProperties

    headlineLarge?: React.CSSProperties
    headlineMedium?: React.CSSProperties
    headlineSmall?: React.CSSProperties

    titleLarge?: React.CSSProperties
    titleMedium?: React.CSSProperties
    titleSmall?: React.CSSProperties

    labelLarge?: React.CSSProperties
    labelMedium?: React.CSSProperties
    labelSmall?: React.CSSProperties

    bodyLarge?: React.CSSProperties
    bodyMedium?: React.CSSProperties
    bodySmall?: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    displayXLarge?: React.CSSProperties
    displayLarge?: React.CSSProperties
    displayMedium?: React.CSSProperties
    displaySmall?: React.CSSProperties

    stylizedLarge?: React.CSSProperties
    stylizedMedium?: React.CSSProperties
    stylizedSmall?: React.CSSProperties

    headlineLarge?: React.CSSProperties
    headlineMedium?: React.CSSProperties
    headlineSmall?: React.CSSProperties

    titleLarge?: React.CSSProperties
    titleMedium?: React.CSSProperties
    titleSmall?: React.CSSProperties

    labelLarge?: React.CSSProperties
    labelMedium?: React.CSSProperties
    labelSmall?: React.CSSProperties

    bodyLarge?: React.CSSProperties
    bodyMedium?: React.CSSProperties
    bodySmall?: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    displayXLarge: true
    displayLarge: true
    displayMedium: true
    displaySmall: true
    stylizedLarge: true
    stylizedMedium: true
    stylizedSmall: true
    headlineLarge: true
    headlineMedium: true
    headlineSmall: true
    titleLarge: true
    titleMedium: true
    titleSmall: true
    labelLarge: true
    labelMedium: true
    labelSmall: true
    bodyLarge: true
    bodyMedium: true
    bodySmall: true
  }
}