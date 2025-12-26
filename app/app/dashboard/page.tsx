"use client";

import { useSearchParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Eye,
  ShieldCheck,
  Search,
  AlertTriangle,
  Clock,
  TrendingUp,
  TrendingDown,
  Minus
} from "lucide-react";
import { dashboardSnapshots, brands } from "@/src/data/mockData";

export default function DashboardPage() {
  const searchParams = useSearchParams();
  const brandId = searchParams.get('brandId') || 'brand-2';

  // Get snapshot for the selected brand, fallback to brand-2 if not found
  const snapshot = dashboardSnapshots[brandId] || dashboardSnapshots['brand-2'];

  // Find brand details for display
  const currentBrand = brands.find(b => b.id === brandId) || brands.find(b => b.id === 'brand-2');

  const getTrendIcon = (trend: 'up' | 'down' | 'stable' | 'neutral') => {
    if (trend === 'up') return <TrendingUp size={16} className="text-[#C4A496]" />;
    if (trend === 'down') return <TrendingDown size={16} className="text-red-400" />;
    return <Minus size={16} className="text-gray-400" />;
  };

  const metrics = {
    aiVisibility: {
      score: snapshot.aiVisibilityScore.value,
      max: snapshot.aiVisibilityScore.maxValue,
      label: "AI Visibility Score",
      trend: snapshot.aiVisibilityScore.trend,
      barColor: snapshot.aiVisibilityScore.level === 'high' ? "bg-[#C4A496]" : snapshot.aiVisibilityScore.level === 'medium' ? "bg-orange-500" : "bg-red-500"
    },
    trust: {
      score: snapshot.trustEEATScore.value,
      max: snapshot.trustEEATScore.maxValue,
      label: "Trust & E-E-A-T Score",
      trend: snapshot.trustEEATScore.trend,
      barColor: snapshot.trustEEATScore.level === 'high' ? "bg-[#C4A496]" : snapshot.trustEEATScore.level === 'medium' ? "bg-orange-500" : "bg-red-500"
    },
    coverage: {
      score: snapshot.nonBrandedKeywordCoverage.value,
      max: snapshot.nonBrandedKeywordCoverage.maxValue,
      label: "Non-Branded Coverage",
      trend: snapshot.nonBrandedKeywordCoverage.trend,
      barColor: snapshot.nonBrandedKeywordCoverage.level === 'high' ? "bg-[#C4A496]" : snapshot.nonBrandedKeywordCoverage.level === 'medium' ? "bg-orange-500" : "bg-red-500"
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-[1600px] mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Brand health snapshot for {currentBrand?.name}</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* AI Visibility Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-[#FAF7F6] rounded-lg text-[#C4A496]">
                <Eye size={20} />
              </div>
              {getTrendIcon(metrics.aiVisibility.trend as 'up' | 'down' | 'stable')}
            </div>

            <div className="mb-4">
              <span className="text-4xl font-bold text-gray-900">{metrics.aiVisibility.score}</span>
              <span className="text-gray-400 text-lg">/100</span>
            </div>

            <div className="mb-4">
              <p className="text-sm font-medium text-gray-600">{metrics.aiVisibility.label}</p>
            </div>

            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${metrics.aiVisibility.score}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`h-full rounded-full ${metrics.aiVisibility.barColor}`}
              />
            </div>
          </CardContent>
        </Card>

        {/* Trust Score Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-[#FAF7F6] rounded-lg text-[#C4A496]">
                <ShieldCheck size={20} />
              </div>
              {getTrendIcon(metrics.trust.trend as 'up' | 'down' | 'stable')}
            </div>

            <div className="mb-4">
              <span className="text-4xl font-bold text-gray-900">{metrics.trust.score}</span>
              <span className="text-gray-400 text-lg">/100</span>
            </div>

            <div className="mb-4">
              <p className="text-sm font-medium text-gray-600">{metrics.trust.label}</p>
            </div>

            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${metrics.trust.score}%` }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                className={`h-full rounded-full ${metrics.trust.barColor}`}
              />
            </div>
          </CardContent>
        </Card>

        {/* Coverage Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-[#FAF7F6] rounded-lg text-[#C4A496]">
                <Search size={20} />
              </div>
              {getTrendIcon(metrics.coverage.trend as 'up' | 'down' | 'stable')}
            </div>

            <div className="mb-4">
              <span className="text-4xl font-bold text-gray-900">{metrics.coverage.score}</span>
              <span className="text-gray-400 text-lg">/100</span>
            </div>

            <div className="mb-4">
              <p className="text-sm font-medium text-gray-600">{metrics.coverage.label}</p>
            </div>

            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${metrics.coverage.score}%` }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className={`h-full rounded-full ${metrics.coverage.barColor}`}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Issues Detected */}
        <Card className="bg-gray-50/50 border-0">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2 mb-4">
              <AlertTriangle className="text-orange-500" size={20} />
              <span className="font-semibold text-gray-900">Issues Detected</span>
            </div>
            <div className="mb-1">
              <span className="text-3xl font-bold text-gray-900">{snapshot.totalIssues}</span>
            </div>
            <p className="text-gray-500 text-sm">{snapshot.criticalIssues} critical issues require attention</p>
          </CardContent>
        </Card>

        {/* Last Audit */}
        <Card className="bg-gray-50/50 border-0">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Clock className="text-[#C4A496]" size={20} />
              <span className="font-semibold text-gray-900">Last Audit</span>
            </div>
            <div className="mb-1">
              <span suppressHydrationWarning className="text-xl font-medium text-gray-900">{new Date(snapshot.lastAuditTimestamp).toLocaleString()}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
