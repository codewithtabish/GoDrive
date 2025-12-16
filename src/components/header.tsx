"use client";

import { useScroll } from "@/hooks/use-scroll";
import { Logo } from "@/components/logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/mobile-nav";
import { ModeToggle } from "./general/mode-toggle";
import Image from "next/image";

// Updated navigation links
export const navLinks = [
	{ label: "About", href: "/about" },
	// { label: "Team", href: "#" },
	{ label: "Blogs", href: "#" },
	{ label: "Contact Us", href: "#" },
];

export function Header() {
	const scrolled = useScroll(10);

	return (
		<header
			className={cn(
				"sticky mt-5 py-1 top-0 z-50 mx-auto w-full max-w-4xl border-transparent border-b md:rounded-md md:border md:transition-all md:ease-out",
				{
					"border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50 md:top-2 md:max-w-3xl md:shadow":
						scrolled,
				}
			)}
		>
			<nav
				className={cn(
					"flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out",
					{
						"md:px-2": scrolled,
					}
				)}
			>
				<a className="rounded-md p-2 hover:bg-accent" href="#">
				  <Image
    src="/elogo.jpeg"
    alt="EuroDrive Logo"
    width={60}       // adjust size as needed
    height={60}      // adjust size as needed
    className="rounded-full"
    priority
  />

					{/* <Logo className="h-4.5" /> */}
				</a>
				<div className="hidden items-center gap-1 md:flex">
					{navLinks.map((link, i) => (
						<a
							className={buttonVariants({ variant: "ghost" })}
							href={link.href}
							key={i}
						>
							{link.label}
						</a>
					))}
					<ModeToggle/>
					<Button variant="outline">Sign In</Button>
					<Button>Get Started</Button>
				</div>
				<MobileNav />
			</nav>
		</header>
	);
}
