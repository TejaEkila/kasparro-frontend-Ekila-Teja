"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
    LayoutDashboard,
    ClipboardCheck,
    Network,
    Settings,
    LogOut,
    ChevronDown,
    Building2
} from "lucide-react";
import { brands } from "@/src/data/mockData";

export function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isOpen, setIsOpen] = useState(false);
    const [showComingSoon, setShowComingSoon] = useState(false);

    // Default to 'brand-2' (CloudPeak) if no param is present
    const currentBrandId = searchParams.get('brandId') || 'brand-2';
    const selectedBrand = brands.find(b => b.id === currentBrandId) || brands[1];

    const handleBrandSelect = (brandId: string) => {
        setIsOpen(false);
        // Update URL with new brandId, keeping existing path
        router.push(`${pathname}?brandId=${brandId}`);
    };

    const handleSettingsClick = () => {
        setShowComingSoon(true);
        setTimeout(() => setShowComingSoon(false), 2000);
    };

    const links = [
        { href: "/app/dashboard", label: "Dashboard", icon: LayoutDashboard },
        { href: "/app/audit", label: "Audit", icon: ClipboardCheck },
        { href: "/app/architecture", label: "Architecture", icon: Network },
    ];

    return (
        <div className="w-64 bg-[#0B1120] text-gray-300 flex flex-col h-screen border-r border-gray-800">
            {/* Logo Area */}
            <div className="p-6">
                <div className="flex items-center space-x-2 text-white font-bold text-xl">
                    <span>Kasparro</span>
                </div>
            </div>

            {/* Brand Selector */}
            <div className="px-4 mb-6 relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full bg-[#161F2E] hover:bg-[#1E293B] text-white p-3 rounded-lg flex items-center justify-between transition-colors border border-gray-800"
                >
                    <div className="flex items-center space-x-3">
                        <div className="bg-[#BFA89E]/20 p-1.5 rounded">
                            <Building2 size={16} className="text-[#BFA89E]" />
                        </div>
                        <span className="text-sm font-medium">{selectedBrand.name}</span>
                    </div>
                    <ChevronDown size={16} className={`text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu (Expansion Tail) */}
                {isOpen && (
                    <>
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        />
                        <div className="absolute top-full left-4 right-4 mt-2 bg-white rounded-xl shadow-xl shadow-black/20 overflow-hidden z-50 py-1 animate-in fade-in zoom-in-95 duration-200">
                            {brands.map(brand => (
                                <button
                                    key={brand.id}
                                    onClick={() => handleBrandSelect(brand.id)}
                                    className={`w-full text-left px-4 py-3 flex items-center space-x-3 transition-colors ${brand.id === selectedBrand.id
                                        ? 'bg-[#C4A496] text-white'
                                        : 'text-slate-600 hover:bg-slate-50'
                                        }`}
                                >
                                    <Building2 size={16} className={brand.id === selectedBrand.id ? 'text-white' : 'text-slate-400'} />
                                    <span className="font-medium text-sm">{brand.name}</span>
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 space-y-1">
                {links.map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href || pathname?.startsWith(link.href);

                    return (
                        <Link
                            key={link.href}
                            href={`${link.href}?brandId=${currentBrandId}`} // Maintain brand context
                            className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive
                                ? "bg-[#C4A496] text-white"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            <Icon size={18} />
                            <span>{link.label}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom Actions */}
            <div className="p-4 border-t border-gray-800 space-y-1">
                <div className="relative">
                    <AnimatePresence>
                        {showComingSoon && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="absolute bottom-full left-0 mb-2 w-full bg-[#C4A496] text-white px-3 py-2 rounded-lg text-xs font-bold shadow-lg text-center"
                            >
                                Coming Soon 🚀
                                <div className="absolute -bottom-1 left-6 w-2 h-2 bg-[#C4A496] rotate-45" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <button
                        onClick={handleSettingsClick}
                        className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                    >
                        <Settings size={18} />
                        <span>Settings</span>
                    </button>
                </div>
                <Link
                    href="/"
                    className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                    <LogOut size={18} />
                    <span>Back to Site</span>
                </Link>
            </div>
        </div>
    );
}
