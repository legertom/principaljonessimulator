import { InstructionalProvider } from "@/context/InstructionalContext";
import CoachMark from "@/components/guidance/CoachMark";
import "./globals.css";
import { demoCustomer } from "@/data/demoIdentity";

export const metadata = {
  title: `${demoCustomer.title} ${demoCustomer.lastName} Simulator | Clever CS Training`,
  description: "Customer Support training simulator for Clever Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <InstructionalProvider>
          {children}
          <CoachMark />
        </InstructionalProvider>
      </body>
    </html>
  );
}
