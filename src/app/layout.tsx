import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from '@/components/text-navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: "RVU IEEE Conference",
  description: "Made by RVU IEEE Student Branch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full">
      <body className="h-full">
        <div className="min-h-full flex flex-col">
          {/* Header */}
          <header className="bg-gray-800 text-white">
            <Navbar />
          </header>

          {/* Main content that takes remaining space */}
          <main className="flex-1 relative min-h-[50vh]">{children}</main>

          {/* Footer */}
          <footer className="bg-gray-800 text-white p-4 mt-auto">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
