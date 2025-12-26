"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isApp = pathname?.startsWith("/app");

  const publicLinks = [
    { href: "/", label: "Home" },
    { href: "/platform", label: "Platform" },
    { href: "/about", label: "About" },
  ];

  const appLinks = [
    { href: "/app/dashboard", label: "Dashboard" },
    { href: "/app/audit", label: "Audit" },
    { href: "/app/architecture", label: "Architecture" },
  ];

  const links = isApp ? appLinks : publicLinks;

  return (
    <nav className="border-b border-white/5 bg-transparent backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href={isApp ? "/app/dashboard" : "/"} className="flex items-center space-x-2">
            <span className="text-xl font-bold text-slate-100 tracking-tight">
              Kasparro
            </span>
          </Link>

          {/* Desktop Navigation - Glass Pills */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-1 bg-white/5 backdrop-blur-md border border-white/10 p-1 rounded-full">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${pathname === link.href || (link.href === "/" && pathname === "/")
                    ? "bg-[#C4A496]/20 text-[#C4A496]"
                    : "text-slate-400 hover:text-slate-100 hover:bg-white/10"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-6">
            {!isApp && (
              <>
                <Link href="/app/dashboard" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">
                  Log In
                </Link>
                <Link href="/app/dashboard">
                  <Button size="sm" className="bg-[#C4A496] hover:bg-[#A88B7D] text-white border-0 shadow-[0_0_15px_rgba(196,164,150,0.3)] font-semibold px-6 py-2 h-10 rounded-lg transition-all hover:scale-105">
                    Run AI-SEO Audit
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2 rounded-lg text-sm font-medium ${pathname === link.href
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600"
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
