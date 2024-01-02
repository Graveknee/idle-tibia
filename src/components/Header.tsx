"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
	const navItems = [
		{ name: "Home", href: "/" },
		{ name: "About", href: "/about" },
		{ name: "Login", href: "/login" },
	];

	const pathname = usePathname();

	return (
		<div className="font-mono flex gap-7 justify-between">
			<h1 className="font-bold text-3xl">Idle Tibia</h1>
			<ul className="flex gap-7">
				{navItems.map((link, index) => (
					<li key={index}>
						<Link
							href={link.href}
							className={
								pathname === `${link.href}` ? "text-blue-400 font-bold" : ""
							}
						>
							{link.name}{" "}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Header;
