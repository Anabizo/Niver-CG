import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Parabéns",
	description: "Feliz aniversário Carlos Gabriel",
	icons: {
		icon: "/leopard.png", // Para ícone .ico tradicional
		shortcut: "/leopard.png", // Para atalhos
		apple: "/leopard.png", // Para dispositivos Apple
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
