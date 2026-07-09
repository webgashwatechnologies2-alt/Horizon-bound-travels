/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-page-custom-font */
import "../styles/index.css";
import type { Metadata } from "next";
import Script from "next/script";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title: "Horizon Bound Travels - Indian Tour Packages",
  keywords: "Horizon Bound Travels - Tour & Travel",
  description: "Horizon Bound Travels is a Modern Tour & Travel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/horizonlogo.jpeg" sizes="any" />
        {/* Google Fonts */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Outfit:wght@100..900&display=swap" />
        {/* Core CSS from public (served as static files) */}
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="/assets/css/flatpicker.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/default.css" />
        {/* Main compiled SCSS — all component & layout styles */}
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>

        {/* Tawk.to Live Chat Widget */}
        <Script id="tawk-to-widget" strategy="afterInteractive">
          {`
            var Tawk_API = Tawk_API || {};
            var Tawk_LoadStart = new Date();
            (function () {
              var s1 = document.createElement("script"),
                  s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = "https://embed.tawk.to/6a4f3d54a6558f1d451fd9af/1jt2of4ln";
              s1.charset = "UTF-8";
              s1.setAttribute("crossorigin", "*");
              s0.parentNode.insertBefore(s1, s0);
            })();
          `}
        </Script>
      </body>
    </html>
  )
}