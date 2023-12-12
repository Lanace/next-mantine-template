import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript, TypographyStylesProvider } from "@mantine/core";
import { theme } from "../theme";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Mantine Next.js template",
  description: "I am using Mantine with Next.js!",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Giuseppe Del Campo" />
        <meta name="description" content="Simple Mantine template made with React and Mantine." />
        <title>Simple Mantine Template</title>

        {/* <!-- OG Properties --> */}
        <meta property="og:title" content="Simple Mantine Template" />
        <meta property="og:description" content="Simple Mantine template made with React and Mantine." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mantinetemplate.netlify.app/" />
        <meta property="og:image" content="sample.png" />

        {/* <!-- Custom Fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <TypographyStylesProvider>
            <Header />
            {children}
            <Footer />
          </TypographyStylesProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
