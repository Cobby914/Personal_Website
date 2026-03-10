import "./globals.css";
import ThemeProvider from "@/components/ui/ThemeProvider/ThemeProvider";
import Navbar from "@/components/ui/Navbar/Navbar";
import Footer from "@/components/ui/Footer/Footer";

export const metadata = {
  title: "Colin Kwon",
  description: "Colin Kwon's personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="w-full">
      <body className="min-h-screen w-full flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <ThemeProvider>
          <Navbar />
          <div className="flex-1 w-full min-w-0">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
