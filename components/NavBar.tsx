"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { useState } from "react";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

        {/* Navigation - Center (Desktop) */}
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

        {/* Desktop Contact Button - Right */}
        <div className="hidden md:block ml-auto">
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

        {/* Mobile Hamburger/Cross Button */}
        <button
          className="md:hidden ml-auto p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            {isMenuOpen ? (
              // Cross icon
              <>
                <div className="w-6 h-0.5 bg-gray-800 transform rotate-45 absolute"></div>
                <div className="w-6 h-0.5 bg-gray-800 transform -rotate-45 absolute"></div>
              </>
            ) : (
              // Hamburger icon
              <>
                <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
                <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
                <div className="w-6 h-0.5 bg-gray-800"></div>
              </>
            )}
          </div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container py-4 space-y-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={clsx(
                  "block text-md hover:text-gold transition-colors py-2",
                  pathname === l.href && "text-gold font-semibold"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="block bg-gold text-white px-4 py-3 rounded-md text-md font-medium hover:bg-gold/90 transition-colors mt-4"
              onClick={(e) => {
                setIsMenuOpen(false);
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
          </nav>
        </div>
      )}
    </header>
  );
}
