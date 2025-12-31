"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Eye,
  Shield,
  Search,
  FileText,
  Code,
  BarChart3,
  MessageCircle,
  AlertTriangle,
  Lightbulb,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  Minus,
  Calendar
} from 'lucide-react';
import { auditModules } from '@/src/data/mockData';
import { cn } from '@/lib/utils';
import { AuditModule } from '@/src/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, any> = { Eye, Shield, Search, FileText, Code, BarChart3, MessageCircle };

export default function AuditPage() {
  const [selectedModuleId, setSelectedModuleId] = useState<string>("ai-visibility");
  const selectedModule = auditModules.find(m => m.id === selectedModuleId) || auditModules[0];

  return (
    <div className="flex flex-col md:flex-row flex-1 h-full bg-[#020617] overflow-hidden">
      {/* Module Sidebar */}
      <aside className="w-full md:w-80 bg-[#020617] border-b md:border-b-0 md:border-r border-slate-800 flex flex-row md:flex-col shrink-0 h-auto md:h-full overflow-x-auto md:overflow-hidden no-scrollbar">
        <div className="p-4 md:p-6 border-r md:border-r-0 md:border-b border-slate-800 flex items-center justify-between min-w-[180px] md:min-w-0 sticky left-0 bg-[#020617] z-10 shrink-0">
          <h2 className="font-semibold text-slate-100">Audit Modules</h2>
          <span className="text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded-full hidden md:inline-block">7 Modules</span>
        </div>
        <nav className="p-2 md:p-4 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-y-auto w-full md:w-auto">
          {auditModules.map((module) => {
            const Icon = iconMap[module.icon] || Eye;
            const isActive = module.id === selectedModuleId;
            return (
              <button
                key={module.id}
                onClick={() => setSelectedModuleId(module.id)}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-xl text-xs text-left transition-all duration-200 group relative shrink-0 md:w-full min-w-[200px] md:min-w-0',
                  isActive
                    ? 'bg-[brand] text-white shadow-lg shadow-[brand]/20'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
                )}
              >
                <Icon className={cn("w-4 h-4 shrink-0 transition-colors", isActive ? "text-white" : "text-slate-500 group-hover:text-slate-300")} />
                <span className="truncate font-medium">{module.name}</span>
                <span
                  className={cn(
                    'ml-auto text-[10px] font-bold font-mono px-1.5 py-0.5 rounded',
                    isActive ? 'bg-white/20 text-white' :
                      module.score.level === 'high' ? 'text-[brand] bg-[brand]/10' :
                        module.score.level === 'medium' ? 'text-amber-400 bg-amber-400/10' :
                          'text-red-400 bg-red-400/10'
                  )}
                >
                  {module.score.value}
                </span>

                {/* Active Indicator Line */}
                {isActive && (
                  <div className="absolute left-0 bottom-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 w-full md:w-1 h-1 md:h-8 bg-white/30 rounded-t-full md:rounded-r-full md:rounded-tl-none" />
                )}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-white custom-scrollbar w-full h-full">
        <div className="max-w-5xl mx-auto py-6 px-4 md:py-9">
          <ModuleDetail module={selectedModule} />
        </div>
      </main>
    </div>
  );
}

function ModuleDetail({ module }: { module: AuditModule }) {
  const Icon = iconMap[module.icon] || Eye;

  // Dynamic header color based on score level
  const scoreColorClass = module.score.level === 'high' ? 'text-[brand]' : module.score.level === 'medium' ? 'text-amber-500' : 'text-red-500';
  const scoreBgClass = module.score.level === 'high' ? 'bg-[#FAF7F6]' : module.score.level === 'medium' ? 'bg-amber-50' : 'bg-red-50';

  const TrendIcon = module.score.trend === 'up' ? TrendingUp : module.score.trend === 'down' ? TrendingDown : Minus;
  const trendColor = module.score.trend === 'up' ? 'text-[brand]' : module.score.trend === 'down' ? 'text-red-500' : 'text-slate-400';

  return (
    <motion.div
      key={module.id}
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="space-y-6"
    >
      {/* Header Section */}
      <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-6">
        <div className="flex items-start gap-4">
          <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm", scoreBgClass)}>
            <Icon className={cn("w-6 h-6", scoreColorClass)} />
          </div>
          <div className="pt-1">
            <h1 className="text-2xl font-bold text-slate-900 mb-1">{module.name}</h1>
            <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">{module.description}</p>
            <div className="mt-2 text-[10px] text-slate-400 font-mono">
              Last Updated: <span suppressHydrationWarning>{new Date(module.lastUpdated || new Date()).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
        <div className="text-right shrink-0">
          <div className="flex items-baseline justify-end gap-1">
            <span className="text-4xl font-bold text-slate-900">{module.score.value}</span>
            <span className="text-sm text-slate-400 font-medium">/100</span>
          </div>
          <div className={cn("text-xs font-bold tracking-wider mt-1 mb-1", scoreColorClass)}>
            {module.score.level.toUpperCase()}
          </div>
          {/* Trend Indicator */}
          <div className="flex items-center justify-end gap-1 text-[10px]">
            <TrendIcon className={cn("w-3 h-3", trendColor)} />
            <span className="text-slate-500">vs {module.score.previousValue} last month</span>
          </div>
        </div>
      </div>

      {/* Insights */}
      {module.insights.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-indigo-500" />
            Key Insights
          </h2>
          <div className="grid gap-3">
            {module.insights.map((insight) => (
              <div key={insight.id} className={cn('p-4 rounded-xl border transition-all hover:shadow-sm relative overflow-hidden',
                insight.severity === 'warning' ? 'bg-amber-50 border-amber-100' : 'bg-slate-50 border-slate-100'
              )}>
                {insight.category && (
                  <span className="absolute top-0 right-0 bg-white/50 px-2 py-1 text-[9px] font-semibold text-slate-400 rounded-bl-lg backdrop-blur-sm">
                    {insight.category}
                  </span>
                )}
                <h4 className="text-sm font-bold text-slate-900 mb-1 pr-6">{insight.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{insight.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Issues */}
      {module.issues.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            Issues <span className="text-slate-400 font-normal text-xs ml-1">({module.issues.length})</span>
          </h2>
          <div className="grid gap-3">
            {module.issues.map((issue) => (
              <div key={issue.id} className="p-4 rounded-xl bg-white border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={cn('px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md',
                    issue.severity === 'high' ? 'bg-red-100 text-red-600' :
                      issue.severity === 'medium' ? 'bg-amber-100 text-amber-600' :
                        'bg-slate-100 text-slate-600'
                  )}>
                    {issue.severity}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">{issue.title}</h4>
                </div>
                <div className="mt-2">
                  <p className="text-xs text-slate-500 leading-relaxed mb-2">
                    {issue.description}
                  </p>
                  <div className="flex items-center gap-3 text-[10px] text-slate-400 border-t border-slate-50 pt-2">
                    {issue.affectedArea && (
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                        Area: {issue.affectedArea}
                      </span>
                    )}
                    {issue.detectedAt && (
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-300" />
                        <span suppressHydrationWarning>{new Date(issue.detectedAt).toLocaleDateString()}</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Recommendations */}
      {module.recommendations.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[brand]" />
            Recommendations
          </h2>
          <div className="grid gap-3">
            {module.recommendations.map((rec) => (
              <div key={rec.id} className="p-4 rounded-xl bg-[#FAF7F6] border border-[#E8DFDB] shadow-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={cn('px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md',
                    rec.priority === 'high' ? 'bg-[#E8DFDB] text-[#5C4D46]' : 'bg-slate-200 text-slate-700'
                  )}>
                    {rec.priority}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">{rec.title}</h4>
                </div>
                <div className="mt-2">
                  <p className="text-xs text-slate-600 mb-2 leading-relaxed">{rec.description}</p>
                  <div className="flex items-center gap-3 text-[10px] font-semibold">
                    <div className="flex items-center gap-1 text-[#A88B7D]">
                      <span>Est. Impact:</span>
                      <span className="bg-white px-1.5 py-0.5 rounded border border-[#D6C1B7]">{rec.estimatedImpact}</span>
                    </div>
                    {rec.effort && (
                      <div className="flex items-center gap-1 text-slate-500">
                        <span>Effort:</span>
                        <span className="uppercase">{rec.effort}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </motion.div>
  );
}
