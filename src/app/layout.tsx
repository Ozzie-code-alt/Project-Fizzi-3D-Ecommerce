import localFont from "next/font/local";

// Font files can be colocated inside of `app`
const alpino = localFont({
  src: "../../public/fonts/Alpino-Variable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-alpino",
});

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./app.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${alpino.variable}`}>
      <body>{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
