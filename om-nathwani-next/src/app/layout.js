import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Om Nathwani — right now",
  description:
    "A living snapshot of Om Nathwani's life, communities, work, and current interests.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
