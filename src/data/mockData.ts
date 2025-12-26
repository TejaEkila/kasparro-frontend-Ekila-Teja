import { Brand, DashboardSnapshot, AuditModule, ArchitectureData } from '@/src/types';

// Mocked Brands
export const brands: Brand[] = [
  {
    id: 'brand-1',
    name: 'TechFlow',
    domain: 'techflow.io',
    industry: 'SaaS',
    lastAuditDate: '2025-12-25T10:30:00Z',
    createdAt: '2025-12-25T00:00:00Z',
  },
  {
    id: 'brand-2',
    name: 'CloudPeak',
    domain: 'cloudpeak.com',
    industry: 'Cloud Infrastructure',
    lastAuditDate: '2025-12-25T14:00:00Z',
    createdAt: '2025-12-25T00:00:00Z',
  },
  {
    id: 'brand-3',
    name: 'DataVault',
    domain: 'datavault.ai',
    industry: 'Data Analytics',
    lastAuditDate: '2025-12-25T09:15:00Z',
    createdAt: '2025-12-25T00:00:00Z',
  },
];

// Dashboard Snapshots
export const dashboardSnapshots: Record<string, DashboardSnapshot> = {
  'brand-1': {
    brandId: 'brand-1',
    aiVisibilityScore: {
      value: 78,
      maxValue: 100,
      level: 'high',
      trend: 'up',
      previousValue: 72,
    },
    trustEEATScore: {
      value: 65,
      maxValue: 100,
      level: 'medium',
      trend: 'stable',
      previousValue: 64,
    },
    nonBrandedKeywordCoverage: {
      value: 42,
      maxValue: 100,
      level: 'medium',
      trend: 'up',
      previousValue: 35,
    },
    lastAuditTimestamp: '2025-12-25T10:30:00Z',
    totalIssues: 23,
    criticalIssues: 4,
  },
  'brand-2': {
    brandId: 'brand-2',
    aiVisibilityScore: {
      value: 54,
      maxValue: 100,
      level: 'medium',
      trend: 'down',
      previousValue: 58,
    },
    trustEEATScore: {
      value: 81,
      maxValue: 100,
      level: 'high',
      trend: 'up',
      previousValue: 76,
    },
    nonBrandedKeywordCoverage: {
      value: 28,
      maxValue: 100,
      level: 'low',
      trend: 'stable',
      previousValue: 27,
    },
    lastAuditTimestamp: '2025-12-25T14:00:00Z',
    totalIssues: 31,
    criticalIssues: 7,
  },
  'brand-3': {
    brandId: 'brand-3',
    aiVisibilityScore: {
      value: 89,
      maxValue: 100,
      level: 'high',
      trend: 'up',
      previousValue: 82,
    },
    trustEEATScore: {
      value: 72,
      maxValue: 100,
      level: 'high',
      trend: 'up',
      previousValue: 68,
    },
    nonBrandedKeywordCoverage: {
      value: 67,
      maxValue: 100,
      level: 'medium',
      trend: 'up',
      previousValue: 59,
    },
    lastAuditTimestamp: '2025-12-25T09:15:00Z',
    totalIssues: 12,
    criticalIssues: 1,
  },
};

// Audit Modules Data
export const auditModules: AuditModule[] = [
  {
    id: 'ai-visibility',
    name: 'AI Visibility',
    description: 'Measures how well your brand appears in AI-powered search results across ChatGPT, Gemini, Perplexity, and other LLM interfaces.',
    icon: 'Eye',
    score: { value: 78, maxValue: 100, level: 'high', trend: 'up', previousValue: 72 },
    insights: [
      {
        id: 'ai-v-1',
        title: 'Strong ChatGPT presence',
        description: 'Your brand is mentioned in 67% of relevant ChatGPT responses, above industry average.',
        severity: 'info',
        category: 'AI Mentions',
      },
      {
        id: 'ai-v-2',
        title: 'Perplexity citation growth',
        description: 'Citation rate increased by 23% in the last 30 days.',
        severity: 'info',
        category: 'Citations',
      },
      {
        id: 'ai-v-3',
        title: 'Low Gemini visibility',
        description: 'Your content is underrepresented in Google Gemini responses.',
        severity: 'warning',
        category: 'AI Mentions',
      },
    ],
    issues: [
      {
        id: 'ai-v-i1',
        title: 'Missing structured data for AI parsing',
        description: 'Product pages lack JSON-LD schema that helps AI systems understand your offerings.',
        severity: 'high',
        affectedArea: 'Product Pages',
        detectedAt: '2025-12-25T00:00:00Z',
      },
      {
        id: 'ai-v-i2',
        title: 'Inconsistent brand mentions',
        description: 'Brand name variations across content reduce AI recognition.',
        severity: 'medium',
        affectedArea: 'All Content',
        detectedAt: '2025-12-25T00:00:00Z',
      },
    ],
    recommendations: [
      {
        id: 'ai-v-r1',
        title: 'Implement comprehensive schema markup',
        description: 'Add Organization, Product, and FAQ schema to all relevant pages to improve AI understanding.',
        priority: 'high',
        estimatedImpact: '+15-20% AI visibility',
        effort: 'medium',
      },
      {
        id: 'ai-v-r2',
        title: 'Create AI-optimized FAQ content',
        description: 'Develop Q&A content that directly answers common queries in your space.',
        priority: 'high',
        estimatedImpact: '+25% citation rate',
        effort: 'medium',
      },
      {
        id: 'ai-v-r3',
        title: 'Standardize brand terminology',
        description: 'Create a brand style guide ensuring consistent naming across all content.',
        priority: 'medium',
        estimatedImpact: '+10% brand recognition',
        effort: 'low',
      },
    ],
    lastUpdated: '2025-12-25T10:30:00Z',
  },
  {
    id: 'trust-eeat',
    name: 'Trust & E-E-A-T',
    description: 'Evaluates Experience, Expertise, Authoritativeness, and Trustworthiness signals that AI systems use to rank content.',
    icon: 'Shield',
    score: { value: 65, maxValue: 100, level: 'medium', trend: 'stable', previousValue: 64 },
    insights: [
      {
        id: 'eeat-1',
        title: 'Strong expertise signals',
        description: 'Author bios and credentials are well-documented across blog content.',
        severity: 'info',
        category: 'Expertise',
      },
      {
        id: 'eeat-2',
        title: 'Limited experience content',
        description: 'First-hand experience and case studies are underrepresented.',
        severity: 'warning',
        category: 'Experience',
      },
    ],
    issues: [
      {
        id: 'eeat-i1',
        title: 'Missing author expertise indicators',
        description: '40% of articles lack proper author attribution and credentials.',
        severity: 'high',
        affectedArea: 'Blog Section',
        detectedAt: '2025-12-25T00:00:00Z',
      },
      {
        id: 'eeat-i2',
        title: 'Outdated trust signals',
        description: 'Security certifications and compliance badges need updating.',
        severity: 'medium',
        affectedArea: 'Footer & About',
        detectedAt: '2025-12-25T00:00:00Z',
      },
    ],
    recommendations: [
      {
        id: 'eeat-r1',
        title: 'Add author schema to all content',
        description: 'Implement Person schema with credentials, social profiles, and expertise areas.',
        priority: 'high',
        estimatedImpact: '+12% trust score',
        effort: 'low',
      },
      {
        id: 'eeat-r2',
        title: 'Publish customer success stories',
        description: 'Create detailed case studies showcasing real-world experience and results.',
        priority: 'medium',
        estimatedImpact: '+18% experience signals',
        effort: 'high',
      },
    ],
    lastUpdated: '2025-12-25T10:30:00Z',
  },
  {
    id: 'keyword-coverage',
    name: 'Keyword Coverage',
    description: 'Analyzes your presence across non-branded search queries and identifies content gaps in your market.',
    icon: 'Search',
    score: { value: 42, maxValue: 100, level: 'medium', trend: 'up', previousValue: 35 },
    insights: [
      {
        id: 'kw-1',
        title: 'Growing topical authority',
        description: 'Coverage in "AI automation" cluster increased by 18% this month.',
        severity: 'info',
        category: 'Topic Clusters',
      },
      {
        id: 'kw-2',
        title: 'Competitor gap identified',
        description: '127 high-value keywords where competitors rank but you don\'t.',
        severity: 'warning',
        category: 'Competitive Gaps',
      },
    ],
    issues: [
      {
        id: 'kw-i1',
        title: 'Missing bottom-funnel content',
        description: 'Only 12% of content targets purchase-intent keywords.',
        severity: 'high',
        affectedArea: 'Content Strategy',
        detectedAt: '2025-12-25T00:00:00Z',
      },
    ],
    recommendations: [
      {
        id: 'kw-r1',
        title: 'Create comparison content',
        description: 'Develop "vs" and "alternatives" pages for high-intent queries.',
        priority: 'high',
        estimatedImpact: '+35% conversion keywords',
        effort: 'medium',
      },
    ],
    lastUpdated: '2025-12-25T10:30:00Z',
  },
  {
    id: 'content-quality',
    name: 'Content Quality',
    description: 'Measures content depth, freshness, originality, and how well it satisfies user intent for AI-era search.',
    icon: 'FileText',
    score: { value: 71, maxValue: 100, level: 'high', trend: 'up', previousValue: 66 },
    insights: [
      {
        id: 'cq-1',
        title: 'High originality score',
        description: '94% of content passes AI-detection as human-written and original.',
        severity: 'info',
        category: 'Originality',
      },
    ],
    issues: [
      {
        id: 'cq-i1',
        title: 'Thin content pages detected',
        description: '23 pages have less than 500 words with high bounce rates.',
        severity: 'medium',
        affectedArea: 'Various Pages',
        detectedAt: '2025-12-25T00:00:00Z',
      },
    ],
    recommendations: [
      {
        id: 'cq-r1',
        title: 'Consolidate thin content',
        description: 'Merge related thin pages into comprehensive pillar content.',
        priority: 'medium',
        estimatedImpact: '+20% engagement',
        effort: 'medium',
      },
    ],
    lastUpdated: '2025-12-25T10:30:00Z',
  },
  {
    id: 'technical-seo',
    name: 'Technical SEO',
    description: 'Audits crawlability, indexability, Core Web Vitals, and technical foundations that affect AI discoverability.',
    icon: 'Code',
    score: { value: 83, maxValue: 100, level: 'high', trend: 'stable', previousValue: 82 },
    insights: [
      {
        id: 'tech-1',
        title: 'Excellent Core Web Vitals',
        description: 'All pages pass CWV thresholds with room to spare.',
        severity: 'info',
        category: 'Performance',
      },
    ],
    issues: [
      {
        id: 'tech-i1',
        title: 'Orphan pages detected',
        description: '8 pages have no internal links pointing to them.',
        severity: 'low',
        affectedArea: 'Site Architecture',
        detectedAt: '2025-12-25T00:00:00Z',
      },
    ],
    recommendations: [
      {
        id: 'tech-r1',
        title: 'Implement internal linking strategy',
        description: 'Connect orphan pages and strengthen topical clusters through contextual links.',
        priority: 'low',
        estimatedImpact: '+8% crawl efficiency',
        effort: 'low',
      },
    ],
    lastUpdated: '2025-12-25T10:30:00Z',
  },
  {
    id: 'competitive-intel',
    name: 'Competitive Intelligence',
    description: 'Tracks competitor AI visibility, content strategies, and identifies opportunities to outperform.',
    icon: 'BarChart3',
    score: { value: 58, maxValue: 100, level: 'medium', trend: 'up', previousValue: 51 },
    insights: [
      {
        id: 'ci-1',
        title: 'Gaining ground on Competitor A',
        description: 'Your AI visibility has improved relative to main competitor by 12%.',
        severity: 'info',
        category: 'Competitive Position',
      },
      {
        id: 'ci-2',
        title: 'New competitor emerging',
        description: 'StartupX is rapidly gaining AI citations in your space.',
        severity: 'warning',
        category: 'Threats',
      },
    ],
    issues: [
      {
        id: 'ci-i1',
        title: 'Competitor content velocity',
        description: 'Top 3 competitors publish 3x more content monthly.',
        severity: 'high',
        affectedArea: 'Content Strategy',
        detectedAt: '2025-12-25T00:00:00Z',
      },
    ],
    recommendations: [
      {
        id: 'ci-r1',
        title: 'Increase content velocity',
        description: 'Scale content production to at least match competitor average.',
        priority: 'high',
        estimatedImpact: '+30% keyword coverage',
        effort: 'high',
      },
    ],
    lastUpdated: '2025-12-25T10:30:00Z',
  },
  {
    id: 'brand-perception',
    name: 'Brand Perception',
    description: 'Monitors how AI systems describe and recommend your brand in conversational responses.',
    icon: 'MessageCircle',
    score: { value: 74, maxValue: 100, level: 'high', trend: 'up', previousValue: 69 },
    insights: [
      {
        id: 'bp-1',
        title: 'Positive sentiment dominates',
        description: '82% of AI mentions carry positive or neutral sentiment.',
        severity: 'info',
        category: 'Sentiment',
      },
    ],
    issues: [
      {
        id: 'bp-i1',
        title: 'Outdated information in AI responses',
        description: 'AI systems reference deprecated product features in 15% of mentions.',
        severity: 'medium',
        affectedArea: 'Brand Accuracy',
        detectedAt: '2025-12-25T00:00:00Z',
      },
    ],
    recommendations: [
      {
        id: 'bp-r1',
        title: 'Update public documentation',
        description: 'Ensure all public-facing docs reflect current product state.',
        priority: 'medium',
        estimatedImpact: '+15% brand accuracy',
        effort: 'medium',
      },
    ],
    lastUpdated: '2025-12-25T10:30:00Z',
  },
];

// Architecture Data
export const architectureData: ArchitectureData = {
  inputAssembler: {
    dataSources: [
      { id: 'ds-1', name: 'Website Crawler', type: 'internal', description: 'Full-site crawl and content extraction' },
      { id: 'ds-2', name: 'Search Console API', type: 'external', description: 'Google Search performance data' },
      { id: 'ds-3', name: 'AI Response Monitor', type: 'internal', description: 'Real-time LLM response tracking' },
      { id: 'ds-4', name: 'Competitor Tracker', type: 'internal', description: 'Automated competitor monitoring' },
      { id: 'ds-5', name: 'Brand Mention Listener', type: 'external', description: 'Social and web mention aggregation' },
    ],
  },
  contextPack: {
    description: 'Unified data structure that provides complete brand context to all audit modules',
    components: [
      'Content Inventory',
      'Technical Snapshot',
      'Competitive Landscape',
      'AI Visibility Baseline',
      'Historical Metrics',
      'Brand Guidelines',
    ],
  },
  auditModules: [
    { id: 'ai-visibility', name: 'AI Visibility', description: 'LLM citation and mention tracking' },
    { id: 'trust-eeat', name: 'Trust & E-E-A-T', description: 'Authority and trust signal analysis' },
    { id: 'keyword-coverage', name: 'Keyword Coverage', description: 'Non-branded query presence' },
    { id: 'content-quality', name: 'Content Quality', description: 'Depth, freshness, and originality' },
    { id: 'technical-seo', name: 'Technical SEO', description: 'Crawlability and performance' },
    { id: 'competitive-intel', name: 'Competitive Intelligence', description: 'Market position analysis' },
    { id: 'brand-perception', name: 'Brand Perception', description: 'AI sentiment and accuracy' },
  ],
  outputSurfaces: [
    { id: 'out-1', name: 'Dashboard', type: 'visual', description: 'Interactive metrics and insights' },
    { id: 'out-2', name: 'Audit Reports', type: 'document', description: 'Detailed PDF/HTML exports' },
    { id: 'out-3', name: 'API', type: 'integration', description: 'Programmatic access to all data' },
    { id: 'out-4', name: 'Alerts', type: 'notification', description: 'Real-time issue notifications' },
  ],
};

// Module Overview for Public Site
export const moduleOverviews = [
  {
    id: 'ai-visibility' as const,
    name: 'AI Visibility',
    tagline: 'Get discovered by AI',
    description: 'Track and optimize how your brand appears across ChatGPT, Gemini, Perplexity, and other AI search interfaces.',
    icon: 'Eye',
  },
  {
    id: 'trust-eeat' as const,
    name: 'Trust & E-E-A-T',
    tagline: 'Build algorithmic trust',
    description: 'Strengthen Experience, Expertise, Authoritativeness, and Trustworthiness signals that AI systems prioritize.',
    icon: 'Shield',
  },
  {
    id: 'keyword-coverage' as const,
    name: 'Keyword Coverage',
    tagline: 'Own your category',
    description: 'Identify and fill content gaps to dominate non-branded queries in your market.',
    icon: 'Search',
  },
  {
    id: 'content-quality' as const,
    name: 'Content Quality',
    tagline: 'Create AI-worthy content',
    description: 'Measure depth, freshness, and originality to ensure your content meets AI-era standards.',
    icon: 'FileText',
  },
  {
    id: 'technical-seo' as const,
    name: 'Technical SEO',
    tagline: 'Perfect your foundation',
    description: 'Audit crawlability, performance, and technical elements that affect AI discoverability.',
    icon: 'Code',
  },
  {
    id: 'competitive-intel' as const,
    name: 'Competitive Intelligence',
    tagline: 'Know your landscape',
    description: 'Monitor competitor AI visibility and strategies to identify opportunities.',
    icon: 'BarChart3',
  },
  {
    id: 'brand-perception' as const,
    name: 'Brand Perception',
    tagline: 'Shape your narrative',
    description: 'Track how AI systems describe and recommend your brand in conversations.',
    icon: 'MessageCircle',
  },
];

// Landing Page Data
export const landingPageData = {
  hero: {
    badge: {
      text: "AI-Native SEO Platform",
      icon: "Sparkles"
    },
    title: {
      start: "Win in the",
      highlight: "AI-first",
      end: "search era"
    },
    description: "Kasparro helps brands optimize for ChatGPT, Gemini, Perplexity, and other AI search interfaces. Traditional SEO is dead. AI visibility is everything.",
    cta: {
      primary: "Run AI-SEO Audit",
      secondary: "Explore Platform"
    }
  },
  features: {
    title: "Why AI-SEO is different",
    subtitle: "Traditional SEO focused on ranking pages. AI-SEO is about being the answer.",
    cards: [
      {
        title: "Citation over Ranking",
        description: "AI systems cite sources, not rank them. Your content needs to be citation-worthy.",
        icon: "Target"
      },
      {
        title: "Context is King",
        description: "LLMs understand context deeply. Surface-level optimization no longer works.",
        icon: "Zap"
      },
      {
        title: "Trust Signals Matter",
        description: "E-E-A-T principles are now algorithmically enforced by AI systems.",
        icon: "TrendingUp"
      }
    ]
  },
  modules: {
    title: "7 Audit Modules",
    subtitle: "Comprehensive analysis across every dimension of AI visibility.",
    items: [
      {
        title: "AI Visibility",
        subtitle: "Get discovered by AI",
        description: "Track and optimize how your brand appears across ChatGPT, Gemini, Perplexity, and other AI search interfaces.",
        icon: "Eye"
      },
      {
        title: "Trust & E-E-A-T",
        subtitle: "Build algorithmic trust",
        description: "Strengthen Experience, Expertise, Authoritativeness, and Trustworthiness signals that AI systems prioritize.",
        icon: "ShieldCheck"
      },
      {
        title: "Keyword Coverage",
        subtitle: "Own your category",
        description: "Identify and fill content gaps to dominate non-branded queries in your market.",
        icon: "Search"
      },
      {
        title: "Content Quality",
        subtitle: "Create AI-worthy content",
        description: "Measure depth, freshness, and originality to ensure your content meets AI-era standards.",
        icon: "FileText"
      },
      {
        title: "Technical SEO",
        subtitle: "Perfect your foundation",
        description: "Audit crawlability, performance, and technical elements that affect AI discoverability.",
        icon: "Code"
      },
      {
        title: "Competitive Intelligence",
        subtitle: "Know your landscape",
        description: "Monitor competitor AI visibility and strategies to identify opportunities.",
        icon: "BarChart2"
      },
      {
        title: "Brand Perception",
        subtitle: "Shape your narrative",
        description: "Track how AI systems describe and recommend your brand in conversations.",
        icon: "MessageCircle"
      }
    ]
  },
  cta_banner: {
    title: "Ready to dominate AI search?",
    description: "Start with a free audit and discover how your brand performs across AI interfaces.",
    button: "Run AI-SEO Audit"
  }
};
