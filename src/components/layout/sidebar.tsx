"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, Suspense } from "react";
import {
    LayoutDashboard,
    ClipboardCheck,
    Network,
    Settings,
    LogOut,
    ChevronDown
} from "lucide-react";
import { brands } from "@/src/data/mockData";

// Define navItems with explicit type inference or adding optional property handling
const navItems = [
    { href: "/app/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/app/audit", label: "Audit", icon: ClipboardCheck },
    { href: "/app/architecture", label: "Architecture", icon: Network },
];

function SidebarContent() {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const [activeBrand, setActiveBrand] = useState(brands[0]);
    const [isBrandOpen, setIsBrandOpen] = useState(false);
    const [showComingSoon, setShowComingSoon] = useState(false);

    // Sync brand from URL or default
    useEffect(() => {
        const brandId = searchParams.get("brandId");
        if (brandId) {
            const found = brands.find(b => b.id === brandId);
            if (found) setActiveBrand(found);
        } else {
            // If no brandId in URL, set the default brand and update URL
            router.replace(`${pathname}?brandId=${brands[0].id}`);
        }
    }, [searchParams, pathname, router]);

    const handlebrandSelect = (brand: typeof brands[0]) => {
        setActiveBrand(brand);
        setIsBrandOpen(false);
        // Clean URL update
        router.push(`${pathname}?brandId=${brand.id}`);
    };

    const handleSettingsClick = () => {
        setShowComingSoon(true);
        setTimeout(() => setShowComingSoon(false), 2000);
    };

    return (
        <aside className="w-64 bg-[#0B1120] border-r border-gray-800 flex flex-col h-full text-slate-300 relative">
            {/* Brand Selector */}
            <div className="p-4 border-b border-gray-800 relative">
                <button
                    onClick={() => setIsBrandOpen(!isBrandOpen)}
                    className="w-full flex items-center justify-between p-2 rounded-lg bg-[#161F2E] hover:bg-[#1F2937] transition-all border border-gray-800 group"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-[brand] flex items-center justify-center text-white font-bold shadow-sm group-hover:shadow-[0_0_10px_rgba(196,164,150,0.3)] transition-shadow">
                            {activeBrand.name.substring(0, 1)}
                        </div>
                        <div className="text-left">
                            <div className="text-sm font-semibold text-white">{activeBrand.name}</div>
                            <div className="text-[10px] text-slate-500 uppercase tracking-wider">{activeBrand.industry}</div>
                        </div>
                    </div>
                    <ChevronDown size={14} className={`text-slate-500 transition-transform duration-200 ${isBrandOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown */}
                {isBrandOpen && (
                    <>
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => setIsBrandOpen(false)}
                        />
                        <div className="absolute top-full left-4 right-4 mt-2 bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-100">
                            {brands.map(brand => (
                                <button
                                    key={brand.id}
                                    onClick={() => handlebrandSelect(brand)}
                                    className="w-full p-3 text-left hover:bg-slate-50 text-sm font-medium text-slate-700 flex items-center gap-2 border-b border-gray-100 last:border-0 transition-colors"
                                >
                                    <span className="w-2 h-2 rounded-full bg-[brand]"></span>
                                    {brand.name}
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    // Provide a default or handled badge property
                    const badge = (item as any).badge;

                    return (
                        <Link
                            key={item.href}
                            href={`${item.href}?brandId=${activeBrand.id}`} // Maintain brand context
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative ${isActive
                                ? "bg-[brand] text-white shadow-lg shadow-[brand]/20"
                                : "text-slate-400 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            <item.icon size={18} className={isActive ? "text-white" : "text-slate-500 group-hover:text-slate-300"} />
                            {item.label}
                            {badge && (
                                <span className={`ml-auto text-[10px] px-1.5 py-0.5 rounded-full font-bold ${isActive ? 'bg-white/20 text-white' : 'bg-[brand]/10 text-[brand]'}`}>
                                    {badge}
                                </span>
                            )}
                        </Link>
                    )
                })}
            </nav>

            {/* Bottom Actions */}
            <div className="p-4 border-t border-gray-800 space-y-1 relative">
                <Link
                    href="/"
                    className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                    <LogOut size={18} />
                    <span>Back to Site</span>
                </Link>
            </div>
        </aside>
    );
}

export function Sidebar() {
    return (
        <Suspense fallback={<div className="w-64 bg-[#0B1120] border-r border-gray-800 h-full" />}>
            <SidebarContent />
        </Suspense>
    );
}
