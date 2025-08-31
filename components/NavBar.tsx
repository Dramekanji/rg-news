"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/informations", label: "Informations" },
  { href: "/sports", label: "Sports" },
  { href: "/musique", label: "Musique" },
  { href: "/evenements", label: "Événements" },
  { href: "/interviews", label: "Interviews" },
];

export function NavBar() {
  const pathname = usePathname();

  return (
    <header className="border-b">
      <div className="container flex items-center py-4 relative">
        {/* Logo - Left */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <img
            src="/images/rgnews-logo.png"
            alt="RG News Logo"
            className="h-24 w-auto"
          />
        </Link>

        {/* Navigation - Center */}
        <nav className="hidden md:flex items-center gap-5 absolute left-1/2 transform -translate-x-1/2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={clsx(
                "text-md hover:text-gold transition-colors",
                pathname === l.href && "text-gold font-semibold"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Contact Button - Right */}
        <div className="ml-auto">
          <Link
            href="/#contact"
            className="bg-gold text-white px-8 py-4 rounded-md text-md font-medium hover:bg-gold/90 transition-colors"
            onClick={(e) => {
              // If we're already on the home page, smooth scroll to contact section
              if (pathname === "/") {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
