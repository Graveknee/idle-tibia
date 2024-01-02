import Header from "@/components/Header";
import { ReduxProvider } from "@/lib/provider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Idle Tibia",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-black text-slate-100 container mx-auto p-4">
				<Header />
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	);
}
