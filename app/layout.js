import Navbar from "@/components/navbar";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PWA with Next 13",
  description: "PWA application with Next 13",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    { name: "Next" },
    {
      name: "Next",
      url: "https://nextjs.org/blog/next-13",
    },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-apple.png" },
    { rel: "icon", url: "icons/icon-192x192.png" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="max-w-3xl mx-auto p-4">
          <Navbar />
          <div className="mt-8">{children}</div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          closeButton={false}
        />
      </body>
    </html>
  );
}
