import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "IMDB Clone",
  description: "A clone of IMDB but better",
  content: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Header />

        {/* Navbar */}

        {/* SearchBox */}

        {children}
      </body>
    </html>
  );
}
