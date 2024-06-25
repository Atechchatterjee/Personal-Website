import localFont from "next/font/local";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";

export const staatlitches = localFont({
  src: "../public/fonts/Staatliches-Regular.ttf",
});

export const space_grotesque = Space_Grotesk({ subsets: ["latin"] });
export const ibm_plex_mono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const inter = localFont({
  src: [
    {
      path: "../public/fonts/Inter/static/Inter-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter/static/Inter-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter/static/Inter-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter/static/Inter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter/static/Inter-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter/static/Inter-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter/static/Inter-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter/static/Inter-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter/static/Inter-Black.ttf",
      weight: "800",
      style: "normal",
    },
  ],
});

// DarkerGrotesqueBlack: require('../public/fonts/Darker_Grotesque/static/DarkerGrotesque-Black.ttf'),
// DarkerGrotesqueBold: require('../public/fonts/Darker_Grotesque/static/DarkerGrotesque-Bold.ttf'),
// DarkerGrotesqueExtraBold: require('../public/fonts/Darker_Grotesque/static/DarkerGrotesque-ExtraBold.ttf'),
// DarkerGrotesqueLight: require('../public/fonts/Darker_Grotesque/static/DarkerGrotesque-Light.ttf'),
// DarkerGrotesqueMedium: require('../public/fonts/Darker_Grotesque/static/DarkerGrotesque-Medium.ttf'),
// DarkerGrotesqueRegular: require('../public/fonts/Darker_Grotesque/static/DarkerGrotesque-Regular.ttf'),
// DarkerGrotesqueSemiBold: require('../public/fonts/Darker_Grotesque/static/DarkerGrotesque-SemiBold.ttf'),

export const darker_grotesque = localFont({
  src: [
    {
      path: "../public/fonts/Darker_Grotesque/static/DarkerGrotesque-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../public/fonts/Darker_Grotesque/static/DarkerGrotesque-Regular.ttf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../public/fonts/Darker_Grotesque/static/DarkerGrotesque-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/fonts/Darker_Grotesque/static/DarkerGrotesque-SemiBold.ttf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../public/fonts/Darker_Grotesque/static/DarkerGrotesque-ExtraBold.ttf",
      weight: "700",
      style: "extrabold",
    },
    {
      path: "../public/fonts/Darker_Grotesque/static/DarkerGrotesque-Bold.ttf",
      weight: "800",
      style: "bold",
    },
    {
      path: "../public/fonts/Darker_Grotesque/static/DarkerGrotesque-Black.ttf",
      weight: "900",
      style: "black",
    },
  ],
});

export const ibm_plex_sans = localFont({
  src: [
    {
      path: "../public/fonts/IBM-Plex-Sans/IBMPlexSans-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/IBM-Plex-Sans/IBMPlexSans-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/IBM-Plex-Sans/IBMPlexSans-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/IBM-Plex-Sans/IBMPlexSans-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/fonts/IBM-Plex-Sans/IBMPlexSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/IBM-Plex-Sans/IBMPlexSans-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/IBM-Plex-Sans/IBMPlexSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/IBM-Plex-Sans/IBMPlexSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/IBM-Plex-Sans/IBMPlexSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/IBM-Plex-Sans/IBMPlexSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/IBM-Plex-Sans/IBMPlexSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/IBM-Plex-Sans/IBMPlexSans-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/IBM-Plex-Sans/IBMPlexSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/IBM-Plex-Sans/IBMPlexSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});
