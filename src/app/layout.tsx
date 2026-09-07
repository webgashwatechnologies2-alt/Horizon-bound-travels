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
        <link rel="icon" href="/hbtfavicon.png" sizes="any" />
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
        <div
          style={{
            position: "fixed",
            bottom: "145px",
            right: "30px",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <a
            href="https://wa.me/+918988736000"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            style={{
              width: "55px",
              height: "55px",
              borderRadius: "50%",
              backgroundColor: "#25D366",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              textDecoration: "none",
              
            }}
          >
            <i
              className="fab fa-whatsapp"
              style={{ color: "#fff", fontSize: "28px" }}
            ></i>
          </a>

          {/* Call Button */}
          <a
            href="tel:+918988736000"
            aria-label="Call Us"
            style={{
              width: "55px",
              height: "55px",
              borderRadius: "50%",
              backgroundColor: "#0d6efd",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              textDecoration: "none",
              animation: "pulse 2s infinite",
            }}
          >
            <i
              className="fas fa-phone-alt"
              style={{ color: "#fff", fontSize: "22px" }}
            ></i>
          </a>
        </div>
        <style>{`
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(13,110,253,0.6); }
            70% { box-shadow: 0 0 0 12px rgba(13,110,253,0); }
            100% { box-shadow: 0 0 0 0 rgba(13,110,253,0); }
          }
        `}</style>
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