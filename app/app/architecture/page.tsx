"use client";

import { Database, Box, BarChart3, Monitor } from "lucide-react";
import { architectureData } from "@/src/data/mockData";

export default function ArchitecturePage() {
  return (
    <div className="flex-1 h-full bg-white overflow-y-auto custom-scrollbar">
      <div className="max-w-[1600px] mx-auto p-4 md:p-8 lg:p-12">
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-slate-900 mb-1">System Architecture</h1>
          <p className="text-sm text-slate-500">How Kasparro processes brand data into actionable insights.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Column 1: InputAssembler */}
          <div className="bg-slate-50 rounded-3xl p-8 min-h-[600px] flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Database className="w-5 h-5 text-[#C4A496]" />
              </div>
              <h2 className="font-bold text-slate-900 text-base">InputAssembler</h2>
            </div>
            <div className="space-y-3">
              {architectureData.inputAssembler.dataSources.map((item) => (
                <div key={item.id} className="bg-white px-4 py-3 rounded-xl text-xs font-medium text-slate-600 shadow-sm border border-slate-100">
                  {item.name}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: ContextPack */}
          <div className="bg-slate-50 rounded-3xl p-8 min-h-[600px] flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Box className="w-5 h-5 text-[#C4A496]" />
              </div>
              <h2 className="font-bold text-slate-900 text-base">ContextPack</h2>
            </div>
            <p className="text-xs text-slate-400 mb-8 leading-relaxed ml-1">
              {architectureData.contextPack.description}
            </p>
            <div className="space-y-3">
              {architectureData.contextPack.components.map((item, index) => (
                <div key={index} className="bg-white px-4 py-3 rounded-xl text-xs font-medium text-slate-600 shadow-sm border border-slate-100">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Audit Modules */}
          <div className="bg-slate-50 rounded-3xl p-8 min-h-[600px] flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                <BarChart3 className="w-5 h-5 text-[#C4A496]" />
              </div>
              <h2 className="font-bold text-slate-900 text-base">Audit Modules</h2>
            </div>
            <div className="space-y-3">
              {architectureData.auditModules.map((item) => (
                <div key={item.id} className="bg-white px-4 py-3 rounded-xl text-xs font-medium text-slate-600 shadow-sm border border-slate-100">
                  {item.name}
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Output Surfaces */}
          <div className="bg-slate-50 rounded-3xl p-8 min-h-[600px] flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Monitor className="w-5 h-5 text-[#C4A496]" />
              </div>
              <h2 className="font-bold text-slate-900 text-base">Output Surfaces</h2>
            </div>
            <div className="space-y-3">
              {architectureData.outputSurfaces.map((item) => (
                <div key={item.id} className="bg-white px-4 py-3 rounded-xl text-xs font-medium text-slate-600 shadow-sm border border-slate-100">
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
