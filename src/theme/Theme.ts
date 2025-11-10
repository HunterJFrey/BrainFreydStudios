// theme.ts
import {
  createTheme,
  responsiveFontSizes,
  type PaletteOptions,
  type SimplePaletteColorOptions,
} from "@mui/material/styles";

// Shared brand tokens (non-color)
const shape = {
  borderRadius: 16,
};
const shadows = [
  "none",
  "0 1px 2px rgba(0,0,0,.25)",
  "0 10px 30px rgba(0,0,0,.35)",
] as const;

// ---- Color palettes from your spec ----
const darkPalette: PaletteOptions = {
  mode: "dark",
  background: {
    default: "#0B0D12", // bg
    paper: "#121621", // surface
  },
  primary: {
    main: "#E9C46A", // Fae Gold
    contrastText: "#1A1407",
  },
  secondary: {
    main: "#33C2C2", // Glimmer Teal
    contrastText: "#061112",
  },
  success: { main: "#6EE7A3" },
  warning: { main: "#F8D477" },
  error: { main: "#F28B82" }, // danger
  info: { main: "#8AB4F8" }, // ring (as info baseline)
  divider: "#293041", // border
  text: {
    primary: "#E8ECF6",
    secondary: "#A7B0C2",
  },
};

const lightPalette: PaletteOptions = {
  mode: "light",
  background: {
    default: "#F7F5EF", // parchment
    paper: "#FFFFFF", // surface
  },
  primary: {
    main: "#B3892E", // Fae Gold (light)
    contrastText: "#FEF8E8",
  },
  secondary: {
    main: "#007C7C", // Glimmer Teal (light)
    contrastText: "#E8FFFE",
  },
  success: { main: "#1B8F55" },
  warning: { main: "#A27900" },
  error: { main: "#B22D2D" },
  info: { main: "#385CC5" }, // ring (as info baseline)
  divider: "#D9D3C4",
  text: {
    primary: "#1C1E24",
    secondary: "#5A6072",
  },
};

// ---- Module augmentation to add custom tokens to theme ----
declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      glow: string;
      ring: string;
      surface2: string;
      radius: {
        sm: number;
        md: number;
        lg: number;
      };
      shadows: {
        subtle: string;
        deep: string;
      };
    };
  }
  interface ThemeOptions {
    custom?: Partial<Theme["custom"]>;
  }
}

// Factory to build either theme mode
export const makeTheme = (mode: "dark" | "light") => {
  const isDark = mode === "dark";

  const palette = isDark ? darkPalette : lightPalette;

  const theme = createTheme({
    palette,
    shape: { borderRadius: shape.borderRadius },
    typography: {
      fontFamily:
        'Inter, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      h1: {
        fontFamily: '"Cinzel", Georgia, "Times New Roman", serif',
        letterSpacing: ".4px",
        fontSize: "clamp(2rem, 1.2rem + 3vw, 3.25rem)",
      },
      h2: {
        fontFamily: '"Cinzel", Georgia, "Times New Roman", serif',
        letterSpacing: ".3px",
        fontSize: "clamp(1.5rem, 1rem + 1.5vw, 2.25rem)",
      },
      body1: { lineHeight: 1.7 },
      body2: { lineHeight: 1.7, color: palette.text?.secondary as string },
    },

    custom: {
      glow: isDark ? "#9FD7FF" : "#6BA3FF",
      ring: (palette.info as SimplePaletteColorOptions)?.main ?? "#8AB4F8",
      surface2: isDark ? "#1A1F2B" : "#F2EFE8",
      radius: { sm: 10, md: 16, lg: 24 },
      shadows: {
        subtle: "0 1px 2px rgba(0,0,0,.25)",
        deep: "0 10px 30px rgba(0,0,0,.35)",
      },
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          // Starfield + glow
          body: {
            backgroundAttachment: "fixed",
            backgroundImage: `
              radial-gradient(1200px 600px at 20% -10%, ${
                isDark
                  ? "color-mix(in oklab, #9FD7FF 12%, transparent)"
                  : "color-mix(in oklab, #6BA3FF 12%, transparent)"
              }, transparent),
              radial-gradient(800px 400px at 110% 10%, ${
                isDark
                  ? "color-mix(in oklab, #33C2C2 10%, transparent)"
                  : "color-mix(in oklab, #007C7C 10%, transparent)"
              }, transparent),
              linear-gradient(180deg, ${
                isDark
                  ? "color-mix(in oklab, #0B0D12 96%, black)"
                  : "color-mix(in oklab, #F7F5EF 96%, white)"
              }, ${palette.background!.default})
            `,
          },

          // Smooth focus outlines for keyboard users
          "*:focus-visible": {
            outline: "none",
            boxShadow: `0 0 0 3px color-mix(in oklab, ${
              (palette.info as SimplePaletteColorOptions)?.main ?? "#8AB4F8"
            } 45%, transparent)`,
            borderRadius: `${shape.borderRadius}px`,
          },

          // Utility classes you might reuse
          ".surface2": {
            backgroundColor: isDark ? "#1A1F2B" : "#F2EFE8",
            border: `1px solid ${palette.divider}`,
            borderRadius: `${shape.borderRadius}px`,
            boxShadow: shadows[1],
          },
          ".glow-hover": {
            transition:
              "transform .12s ease, box-shadow .2s, background .2s, color .2s, border-color .2s",
          },
          ".glow-hover:hover": {
            transform: "translateY(-1px)",
            boxShadow: `0 8px 24px color-mix(in oklab, ${
              isDark ? "#9FD7FF" : "#6BA3FF"
            } 20%, transparent)`,
          },
        },
      },

      // Buttons with arcane glow + pill radius
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 999,
            textTransform: "none",
            paddingInline: "1rem",
            paddingBlock: ".65rem",
            borderWidth: 1,
            borderStyle: "solid",
            borderColor:
              theme.palette.mode === "dark"
                ? "color-mix(in oklab, var(--mui-palette-primary-main) 40%, #293041)"
                : "color-mix(in oklab, var(--mui-palette-primary-main) 40%, #D9D3C4)",
            "&.Mui-focusVisible": {
              boxShadow: `0 0 0 3px color-mix(in oklab, ${theme.custom.ring} 45%, transparent)`,
            },
          }),
          containedPrimary: ({ theme }) => ({
            color: theme.palette.primary.contrastText,
          }),
          containedSecondary: ({ theme }) => ({
            color: theme.palette.secondary.contrastText,
          }),
        },
      },

      // Card with inner glow
      MuiCard: {
        styleOverrides: {
          root: ({ theme }) => ({
            position: "relative",
            borderRadius: theme.custom.radius.lg,
            border: `1px solid ${theme.palette.divider}`,
            boxShadow: theme.custom.shadows.deep,
            background:
              theme.palette.mode === "dark"
                ? "linear-gradient(180deg, color-mix(in oklab, #121621 94%, transparent), #121621)"
                : "linear-gradient(180deg, color-mix(in oklab, #FFFFFF 94%, transparent), #FFFFFF)",
            overflow: "clip",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: -1,
              borderRadius: "inherit",
              pointerEvents: "none",
              boxShadow: `0 0 80px 10px color-mix(in oklab, ${theme.custom.glow} 12%, transparent) inset`,
              opacity: 0.6,
            },
          }),
        },
      },

      // AppBar that feels like frosted wood + glow underline
      MuiAppBar: {
        defaultProps: { color: "default", elevation: 0 },
        styleOverrides: {
          root: ({ theme }) => ({
            backdropFilter: "saturate(120%) blur(0.2px)",
            borderBottom: `1px solid ${theme.palette.divider}`,
            backgroundColor: theme.palette.background.paper,
            "&::after": {
              content: '""',
              height: 2,
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(90deg, ${theme.palette.secondary.main}, transparent 60%)`,
              opacity: 0.7,
            },
          }),
        },
      },

      // Paper / surfaces unified
      MuiPaper: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: theme.shape.borderRadius,
            border: `1px solid ${theme.palette.divider}`,
            boxShadow: shadows[1],
            backgroundImage: "none",
          }),
        },
      },

      // Links in teal with underline on hover
      MuiLink: {
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.secondary.main,
            textUnderlineOffset: 2,
            "&:hover": { textDecoration: "underline" },
          }),
        },
      },

      MuiChip: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 999,
            border: `1px solid ${theme.palette.divider}`,
          }),
        },
      },

      MuiDivider: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderColor: theme.palette.divider,
            opacity: 1,
          }),
        },
      },

      MuiTooltip: {
        styleOverrides: {
          tooltip: ({ theme }) => ({
            borderRadius: theme.custom.radius.sm,
            backdropFilter: "saturate(120%) blur(2px)",
          }),
        },
      },
    },
  });

  return responsiveFontSizes(theme);
};

// Convenience prebuilt themes
export const darkTheme = makeTheme("dark");
export const lightTheme = makeTheme("light");
