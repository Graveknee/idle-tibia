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
				<div className="max-w-4xl mx-auto px-5 py-14">
					<ReduxProvider>{children}</ReduxProvider>
				</div>
			</body>
		</html>
	);
}
