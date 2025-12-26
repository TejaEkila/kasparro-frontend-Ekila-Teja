// Core Brand Types
export interface Brand {
  id: string;
  name: string;
  domain: string;
  industry: string;
  lastAuditDate: string;
  createdAt: string;
  logo?: string;
}

// Audit Module Types
export interface AuditModule {
  id: string;
  name: string;
  icon: string;
  description: string;
  score: {
    value: number;
    maxValue: number;
    level: 'high' | 'medium' | 'low';
    trend: 'up' | 'down' | 'stable';
    previousValue: number;
  };
  insights: Insight[];
  issues: Issue[];
  recommendations: Recommendation[];
  lastUpdated?: string;
}

export interface Insight {
  id: string;
  title: string;
  description: string;
  severity: 'info' | 'warning' | 'critical';
  category?: string;
}

export interface Issue {
  id: string;
  severity: 'high' | 'medium' | 'low' | 'critical';
  title: string;
  description: string;
  affectedPages?: string[];
  affectedArea?: string;
  detectedAt?: string;
}

export interface Recommendation {
  id: string;
  priority: 'high' | 'medium' | 'low';
  title: string;
  description: string;
  estimatedImpact: string;
  effort?: 'low' | 'medium' | 'high';
}

// Dashboard Types
export interface DashboardMetrics {
  aiVisibilityScore: number;
  trustScore: number;
  keywordCoverage: number;
  lastAuditDate: string;
  trend: {
    aiVisibility: number;
    trust: number;
    keywords: number;
  };
}

// Module IDs
export const MODULE_IDS = {
  BRAND_PRESENCE: 'brand-presence',
  EEAT_TRUST: 'eeat-trust',
  KEYWORD_COVERAGE: 'keyword-coverage',
  CONTENT_QUALITY: 'content-quality',
  TECHNICAL_SEO: 'technical-seo',
  COMPETITOR_ANALYSIS: 'competitor-analysis',
  AI_READINESS: 'ai-readiness',
} as const;

export type ModuleId = typeof MODULE_IDS[keyof typeof MODULE_IDS];

export interface DashboardSnapshot {
  brandId: string;
  aiVisibilityScore: ScoreData;
  trustEEATScore: ScoreData;
  nonBrandedKeywordCoverage: ScoreData;
  lastAuditTimestamp: string;
  totalIssues: number;
  criticalIssues: number;
}

export interface ScoreData {
  value: number;
  maxValue: number;
  level: 'high' | 'medium' | 'low';
  trend: 'up' | 'down' | 'stable';
  previousValue: number;
}

export interface ArchitectureData {
  inputAssembler: {
    dataSources: ArchitectureItem[];
  };
  contextPack: {
    description: string;
    components: string[];
  };
  auditModules: ArchitectureItem[];
  outputSurfaces: ArchitectureItem[];
}

export interface ArchitectureItem {
  id: string;
  name: string;
  type?: string;
  description?: string;
}
