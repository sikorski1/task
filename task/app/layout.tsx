import ReactQueryProvider from "@/libs/reactquery";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Esatto Task",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
				<ReactQueryProvider>{children}</ReactQueryProvider>
				<footer className="mt-auto relative p-12 flex items-center justify-center">
					<p>Esatto Task</p>
				</footer>
			</body>
		</html>
	);
}
