
import "./globals.css";
import ReduxStoreProvider from "@/provider/ReduxStoreProvider";
import ThemeProvider from "@/provider/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import ReactQueryProvider from "@/provider/ReactQueryProvider";

export const metadata = {
  title: "Github User Search",
  description: "A github user search application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      <body>
        <ReactQueryProvider>

        <ReduxStoreProvider>
          <ThemeProvider>
            <Navbar />
            <main>{children}</main>
          </ThemeProvider>
        </ReduxStoreProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
