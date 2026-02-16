import { Providers } from "@/components/Providers";
import "./globals.css";

export const metadata = {
  title: "Principal Jones Simulator | Clever CS Training",
  description: "Customer Support training simulator for Clever Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
