import type {Metadata} from "next";
import "./globals.css";
import Header from "@/app/(components)/site/Header";
import LenisProvider from "@/app/(components)/providers/LenisProvider";
import Footer from "@/app/(components)/site/Footer";
import ScrollToTop from "@/app/(components)/site/ScrollToTop";
import ThemeProvider from "@/app/(components)/providers/ThemeProvider";
import {Poppins} from "next/font/google";
import Script from "next/script";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
    metadataBase: new URL('https://www.navoyantra.com'),
    alternates: {
        canonical: '/',
    },
    title: {
        default: "NavoYantra Technologies | STEM, Robotics & AI Lab Setup India",
        template: "%s | NavoYantra"
    },
    description: "NavoYantra provides cutting-edge educational solutions, bringing Robotics, AI, and comprehensive STEM Lab setups directly to your institution to prepare students for the future of technology.",
    keywords: ["STEM Lab Setup India", "Robotics Lab Setup for Schools", "AI Lab Setup", "IoT Lab Setup Company", "Drone Lab for Schools", "STEM Kits Manufacturer India", "ATL Lab Consultation", "Teacher Training STEM", "Robotics Curriculum India", "Educational Electronics Manufacturer"],
    authors: [{ name: "NavoYantra" }],
    creator: "NavoYantra",
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://www.navoyantra.com",
        title: "NavoYantra Technologies | STEM, Robotics & AI Lab Setup India",
        description: "NavoYantra provides cutting-edge educational solutions, bringing Robotics, AI, and comprehensive STEM Lab setups directly to your institution.",
        siteName: "NavoYantra",
        images: [
            {
                url: "https://www.navoyantra.com/mobile-logo.webp",
                width: 800,
                height: 600,
                alt: "NavoYantra Technologies",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "NavoYantra Technologies | STEM, Robotics & AI Lab Setup India",
        description: "NavoYantra provides cutting-edge educational solutions, bringing Robotics, AI, and comprehensive STEM Lab setups directly to your institution.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
    },
    manifest: '/site.webmanifest'
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html
            lang="en"
            className={`h-full antialiased`}
            suppressHydrationWarning
        >
        <body className={`min-h-full flex flex-col ${poppins.className} bg-background text-foreground transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
            <LenisProvider>
                <Header />
                {children}
                <Footer />
                <ScrollToTop />
            </LenisProvider>
        </ThemeProvider>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-68R3WD7YTH" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-68R3WD7YTH');
            `}
        </Script>
        </body>
        </html>
    );
}

