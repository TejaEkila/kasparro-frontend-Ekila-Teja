"use client";

import { useState, useEffect } from "react";
import { Sidebar } from "@/src/components/layout/sidebar";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";



export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Close mobile menu on route change
    useEffect(() => {
        const t = setTimeout(() => setIsMobileMenuOpen(false), 0);
        return () => clearTimeout(t);
    }, [pathname]);

    return (
        <div className="flex h-screen bg-gray-50 flex-col md:flex-row overflow-hidden">
            {/* Mobile Header */}
            <div className="md:hidden bg-[#0B1120] text-white p-4 flex justify-between items-center border-b border-gray-800 shrink-0 z-50">
                <div className="flex items-center space-x-3">
                    <span className="font-bold text-xl">Kasparro</span>
                </div>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Desktop Sidebar (Always visible on md+) */}
            <div className="hidden md:block h-full shrink-0">
                <Sidebar />
            </div>

            {/* Mobile Sidebar Overlay */}
            {isMobileMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                    {/* Sidebar */}
                    <div className="fixed inset-y-0 left-0 z-50 w-64 md:hidden shadow-2xl animate-in slide-in-from-left duration-200">
                        <Sidebar />
                    </div>
                </>
            )}

            <main className="flex-1 overflow-y-auto w-full relative z-0">
                {children}
            </main>
        </div>
    );
}
