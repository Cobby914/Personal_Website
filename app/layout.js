import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import {Button} from "@/components/ui";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Navbar />
        <Button>Test Button</Button>
      </body>
    </html>
  );
}
