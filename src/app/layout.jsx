import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abhishek Rajput",
  description: "Portfolio of Abhishek Rajput",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Rishi Raam" /> 
        <meta
          property="og:description"
          content="Building the Future, One Line of Code at a Time"
        />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:url" content="https://rishiraam.com" />
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
