import type {Metadata} from "next";
import "./globals.css";
import Header from "@/app/(components)/site/Header";
import LenisProvider from "@/app/(components)/providers/LenisProvider";
import Footer from "@/app/(components)/site/Footer";

export const metadata: Metadata = {
    title: "NavoYantra",
    description: "Best in class IOT products.",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html
            lang="en"
            className={`h-full antialiased`}
        >
        <body className="min-h-full flex flex-col bg-[#f8f7f7ff]">
        <LenisProvider>
            <Header />
            {children}
            <Footer />
        </LenisProvider>
        </body>
        </html>
    );
}
