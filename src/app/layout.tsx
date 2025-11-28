import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend SUI",
  description: "Starter UI for frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground bg-grid min-h-screen">
        <main className="mx-2 sm:mx-8 md:mx-16 lg:mx-28 xl:mx-28 my-32">
          {children}
        </main>
      </body>
    </html>
  );
}
