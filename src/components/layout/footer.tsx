import Link from "next/link";
import { Twitter, Linkedin, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#020617] text-white border-t border-slate-900">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <span className="text-xl font-bold text-slate-100 tracking-tight">Kasparro</span>
            </Link>
            <p className="text-slate-500 mb-6 max-w-sm leading-relaxed">
              AI-native SEO & Brand Intelligence for the AI-first search era.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-900 hover:bg-slate-200 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-900 hover:bg-slate-200 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-900 hover:bg-slate-200 transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-slate-200 mb-6">Product</h3>
              <ul className="space-y-4">
                <li><Link href="/platform" className="text-slate-500 hover:text-white transition-colors">Platform</Link></li>
                <li><Link href="/app/dashboard" className="text-slate-500 hover:text-white transition-colors">Dashboard</Link></li>
                <li><Link href="/app/audit" className="text-slate-500 hover:text-white transition-colors">Audit</Link></li>
                <li><Link href="/app/architecture" className="text-slate-500 hover:text-white transition-colors">Architecture</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-200 mb-6">Company</h3>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-slate-500 hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="text-slate-500 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="text-slate-500 hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="text-slate-500 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-200 mb-6">Resources</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-slate-500 hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="#" className="text-slate-500 hover:text-white transition-colors">API Reference</Link></li>
                <li><Link href="#" className="text-slate-500 hover:text-white transition-colors">Changelog</Link></li>
                <li><Link href="#" className="text-slate-500 hover:text-white transition-colors">Status</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © 2025 Kasparro. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm">
            <Link href="#" className="text-slate-600 hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="text-slate-600 hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="text-slate-600 hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
