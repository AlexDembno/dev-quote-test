import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

// Import Inter font from Google Fonts
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Chuck & Code",
  description: "Random Chuck Norris Quote App",
  icons: {
    icon: "/favicon.ico",
  },
};

// This is the root layout component for the application.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex flex-col min-h-screen bg-gray-100">
        <section className="flex flex-col bg-gray-100 px-2 py-2 sm:px-16 sm:py-12">
          <div className="flex flex-col flex-grow border-4 border-black rounded-2xl p-6 shadow-md">
            <Header />
            <main className="flex-grow flex flex-col w-full bg-gray-100">
              {children}
            </main>
            <Footer />
          </div>
        </section>
      </body>
    </html>
  );
}
