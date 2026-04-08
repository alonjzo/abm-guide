// Vertical Configuration System for 90-Day ABX Plan Builder
// Scalable data-driven approach for 14+ verticals

const VERTICALS_CONFIG = {
    // ═══════════════════════════════════════════════════════════════
    // CORE 4 VERTICALS - Fully Detailed
    // ═══════════════════════════════════════════════════════════════

    healthcare: {
        name: "Healthcare",
        displayName: "Healthcare & Life Sciences",
        icon: "🏥",
        cxBudget: "3.82%",
        avgDealSize: "$8.5M",
        salesCycle: "12-18 months",

        personas: [
            { title: "CFO / Financial Steward", priority: "high", kpis: ["Days Sales Outstanding", "Cost per patient encounter", "Operating margin", "Bad debt write-offs"] },
            { title: "CMO / CNO (Chief Medical/Nursing Officer)", priority: "high", kpis: ["Patient satisfaction scores", "Clinical quality metrics", "Staff retention", "Patient safety incidents"] },
            { title: "CIO / CMIO (Chief Information Officer)", priority: "high", kpis: ["EHR optimization", "Interoperability scores", "System uptime", "Cybersecurity compliance"] },
            { title: "COO / VP Operations", priority: "medium", kpis: ["Capacity utilization", "Patient throughput", "Operational efficiency", "Cost per procedure"] },
            { title: "VP Revenue Cycle", priority: "medium", kpis: ["Clean claims rate", "Days in AR", "Denial rates", "Cash collections"] },
            { title: "VP Patient Experience", priority: "medium", kpis: ["HCAHPS scores", "NPS", "Patient complaints", "Service recovery rate"] },
            { title: "Director Care Management", priority: "low", kpis: ["Readmission rates", "Care coordination", "Length of stay", "Care plan adherence"] },
            { title: "Compliance Officer", priority: "low", kpis: ["HIPAA violations", "Audit findings", "Training completion", "Incident reports"] }
        ],

        intentKeywords: [
            "HIPAA compliance software",
            "patient experience management",
            "healthcare customer service",
            "revenue cycle optimization",
            "EHR integration",
            "patient engagement platform",
            "healthcare contact center",
            "value-based care",
            "patient satisfaction",
            "clinical documentation improvement"
        ],

        keyPressures: [
            "HIPAA and regulatory compliance complexity",
            "Patient data security and privacy requirements",
            "Revenue cycle management and billing complexity",
            "Staff burnout and retention challenges",
            "Value-based care and quality metrics pressure",
            "Medicare reimbursement rate changes",
            "Patient satisfaction scores tied to reimbursement",
            "EHR interoperability and integration challenges"
        ],

        aiFraming: "AI-powered clinical documentation, predictive patient triage, automated prior authorization, intelligent appointment scheduling, virtual health assistants for patient engagement, real-time translation services, and predictive analytics for readmission risk",

        competitiveContext: {
            majorVendors: ["Accenture", "Cognizant", "TTEC", "Concentrix"],
            displacement opportunitiess: ["Legacy BPO with no AI capabilities", "High-cost onshore-only models", "Limited clinical expertise in contact center"],
            differentiators: ["Clinical-trained agents", "HIPAA-native infrastructure", "EHR integration expertise", "Bilingual clinical support"]
        },

        triggerEvents: [
            "New hospital CEO or CMO hired",
            "CMS quality score changes or penalties announced",
            "Hospital system merger or acquisition",
            "Major EHR system migration",
            "Patient satisfaction scores decline",
            "Revenue cycle leadership changes",
            "Value-based care contract signed",
            "Regulatory compliance issues or fines"
        ],

        peerCompanies: [
            "Kaiser Permanente",
            "HCA Healthcare",
            "Cleveland Clinic",
            "Mayo Clinic",
            "Ascension",
            "Providence",
            "CommonSpirit Health",
            "Tenet Healthcare"
        ]
    },

    banking: {
        name: "Banking",
        displayName: "Banking & Financial Services",
        icon: "🏦",
        cxBudget: "2.85%",
        avgDealSize: "$12.3M",
        salesCycle: "15-24 months",

        personas: [
            { title: "CFO / Chief Financial Officer", priority: "high", kpis: ["Cost-to-income ratio", "Operating efficiency", "Non-interest expense", "Return on assets"] },
            { title: "CIO / CTO (Chief Technology Officer)", priority: "high", kpis: ["Digital adoption rate", "System availability", "Security incidents", "Tech modernization progress"] },
            { title: "CRO - Risk (Chief Risk Officer)", priority: "high", kpis: ["Fraud detection rate", "Compliance violations", "Risk-adjusted returns", "Operational risk losses"] },
            { title: "COO / Chief Operating Officer", priority: "medium", kpis: ["Transaction processing time", "Error rates", "Capacity utilization", "SLA compliance"] },
            { title: "CRO - Revenue (Chief Revenue Officer)", priority: "medium", kpis: ["Customer acquisition cost", "Lifetime value", "Cross-sell ratio", "Revenue per customer"] },
            { title: "CMO / Chief Marketing Officer", priority: "medium", kpis: ["Brand perception", "Digital engagement", "Lead conversion", "Customer retention"] },
            { title: "VP Retail Banking", priority: "low", kpis: ["Branch efficiency", "Deposit growth", "Product penetration", "Service quality scores"] },
            { title: "Compliance / Legal", priority: "low", kpis: ["Regulatory citations", "Audit findings", "Training completion", "Policy adherence"] }
        ],

        intentKeywords: [
            "banking customer experience",
            "financial services BPO",
            "fraud detection AI",
            "digital banking support",
            "contact center for banks",
            "KYC automation",
            "AML compliance",
            "omnichannel banking",
            "financial services CX",
            "account opening automation"
        ],

        keyPressures: [
            "Rising customer expectations for digital experience",
            "Fintech competition and disruption",
            "Regulatory compliance complexity (KYC, AML, GDPR)",
            "Legacy technology infrastructure modernization",
            "Fraud and cybersecurity threats",
            "Cost-to-income ratio pressure",
            "Branch consolidation and workforce optimization",
            "Open banking and API integration requirements"
        ],

        aiFraming: "AI-powered fraud detection, intelligent document processing for KYC/AML, chatbots for account servicing, predictive analytics for churn prevention, automated loan processing, voice biometrics for authentication, and real-time sentiment analysis for service quality",

        competitiveContext: {
            majorVendors: ["Genpact", "WNS", "EXL Service", "Concentrix"],
            displacementOpportunities: ["Non-compliant offshore providers", "Legacy systems with no AI", "High-touch manual processes"],
            differentiators: ["Financial services regulatory expertise", "Fraud detection AI", "Multi-channel banking support", "Real-time transaction monitoring"]
        },

        triggerEvents: [
            "New CEO or CFO appointed",
            "Digital transformation initiative announced",
            "Merger or acquisition activity",
            "Major fraud incident or security breach",
            "Regulatory fine or compliance issue",
            "Branch closure program announced",
            "Fintech partnership or launch",
            "Customer satisfaction scores decline"
        ],

        peerCompanies: [
            "JPMorgan Chase",
            "Bank of America",
            "Wells Fargo",
            "Citigroup",
            "U.S. Bank",
            "PNC Financial",
            "Capital One",
            "Truist Financial"
        ]
    },

    insurance: {
        name: "Insurance",
        displayName: "Insurance & Risk Management",
        icon: "🛡️",
        cxBudget: "2.65%",
        avgDealSize: "$9.8M",
        salesCycle: "12-18 months",

        personas: [
            { title: "CFO / Chief Financial Officer", priority: "high", kpis: ["Combined ratio", "Loss ratio", "Expense ratio", "Return on equity"] },
            { title: "CRO / Chief Risk Officer", priority: "high", kpis: ["Risk-adjusted returns", "Claims leakage", "Fraud detection rate", "Reinsurance costs"] },
            { title: "CIO / CTO", priority: "high", kpis: ["Digital policy administration", "Claims processing time", "System modernization", "Data analytics capabilities"] },
            { title: "COO / Chief Operating Officer", priority: "medium", kpis: ["Operational efficiency", "Process automation rate", "Cycle time reduction", "Cost per policy"] },
            { title: "Chief Underwriting Officer", priority: "medium", kpis: ["Underwriting profit", "Hit ratio", "Quote turnaround time", "Pricing accuracy"] },
            { title: "VP Claims", priority: "medium", kpis: ["Claims cycle time", "First call resolution", "Customer satisfaction", "Claims fraud detection"] },
            { title: "Director Customer Service", priority: "low", kpis: ["NPS score", "Call handle time", "Service level achievement", "Policy retention"] },
            { title: "Procurement / Legal", priority: "low", kpis: ["Vendor compliance", "Contract performance", "Cost savings", "Risk mitigation"] }
        ],

        intentKeywords: [
            "insurance claims processing",
            "insurance customer service",
            "claims automation",
            "policy administration",
            "insurance BPO",
            "underwriting automation",
            "first notice of loss",
            "insurance fraud detection",
            "digital insurance platform",
            "omnichannel insurance"
        ],

        keyPressures: [
            "Rising claims costs and fraud",
            "Customer expectations for digital self-service",
            "Legacy policy administration systems",
            "Regulatory compliance across jurisdictions",
            "Competition from insurtech startups",
            "Combined ratio pressure from shareholders",
            "Climate change impact on risk models",
            "Agent distribution model disruption"
        ],

        aiFraming: "AI-powered claims triage and fraud detection, automated first notice of loss processing, intelligent document extraction for underwriting, chatbots for policy servicing, predictive analytics for claims outcomes, computer vision for damage assessment, and voice analytics for quality monitoring",

        competitiveContext: {
            majorVendors: ["Cognizant", "Genpact", "WNS", "EXL Service"],
            displacementOpportunities: ["Manual claims processing", "No fraud AI capabilities", "Legacy tech stack providers"],
            differentiators: ["Insurance domain expertise", "Claims automation AI", "Fraud detection algorithms", "Regulatory compliance across all states"]
        },

        triggerEvents: [
            "New CEO or CFO hired",
            "Major catastrophic event or large claims losses",
            "Combined ratio deterioration",
            "State insurance department investigation",
            "Legacy system modernization project",
            "Insurtech partnership or acquisition",
            "Customer satisfaction scores decline",
            "Fraud losses increase significantly"
        ],

        peerCompanies: [
            "State Farm",
            "Berkshire Hathaway (GEICO)",
            "Progressive",
            "Allstate",
            "Liberty Mutual",
            "Travelers",
            "Nationwide",
            "Farmers Insurance"
        ]
    },

    retail: {
        name: "Retail",
        displayName: "Retail & Consumer Goods",
        icon: "🛒",
        cxBudget: "2.95%",
        avgDealSize: "$7.2M",
        salesCycle: "9-15 months",

        personas: [
            { title: "CFO / Chief Financial Officer", priority: "high", kpis: ["Gross margin", "Inventory turnover", "Same-store sales growth", "Operating margin"] },
            { title: "CIO / CTO", priority: "high", kpis: ["E-commerce conversion rate", "Site performance", "Omnichannel integration", "Digital sales percentage"] },
            { title: "Chief Digital Officer", priority: "high", kpis: ["Digital revenue growth", "Mobile app engagement", "Online NPS", "Digital marketing ROI"] },
            { title: "VP Store Operations", priority: "medium", kpis: ["Sales per square foot", "Labor productivity", "Shrinkage rate", "Store satisfaction scores"] },
            { title: "CMO / Chief Marketing Officer", priority: "medium", kpis: ["Customer acquisition cost", "Lifetime value", "Brand awareness", "Marketing ROI"] },
            { title: "VP E-Commerce", priority: "medium", kpis: ["Online conversion rate", "Cart abandonment", "Average order value", "Return rate"] },
            { title: "VP Supply Chain", priority: "low", kpis: ["Inventory accuracy", "On-time delivery", "Supply chain cost", "Out-of-stock rate"] },
            { title: "IT Security / Director", priority: "low", kpis: ["Security incidents", "PCI compliance", "Fraud losses", "Data breach prevention"] }
        ],

        intentKeywords: [
            "retail customer service",
            "omnichannel support",
            "e-commerce customer care",
            "order management system",
            "retail BPO",
            "customer experience retail",
            "returns management",
            "retail AI chatbot",
            "clienteling platform",
            "retail contact center"
        ],

        keyPressures: [
            "E-commerce competition (especially Amazon)",
            "Omnichannel integration complexity",
            "Margin pressure and promotional intensity",
            "Labor costs and workforce challenges",
            "Inventory management and supply chain disruption",
            "Store traffic decline and optimization",
            "Customer expectations for fast, free shipping",
            "Payment fraud and chargebacks"
        ],

        aiFraming: "AI-powered chatbots for product recommendations, intelligent order routing and fulfillment optimization, visual search for product discovery, predictive inventory management, personalized marketing automation, virtual shopping assistants, and voice commerce integration",

        competitiveContext: {
            majorVendors: ["TTEC", "Concentrix", "Sitel Group", "Alorica"],
            displacementOpportunities: ["Seasonal staffing challenges", "No omnichannel capabilities", "Limited e-commerce expertise"],
            differentiators: ["Omnichannel expertise", "Seasonal flex capacity", "E-commerce and retail domain knowledge", "Returns and order management excellence"]
        },

        triggerEvents: [
            "New CEO or CDO appointed",
            "Store closure program announced",
            "E-commerce platform migration",
            "Major retail competitor success",
            "Same-store sales decline",
            "Peak season service failures",
            "Customer satisfaction scores drop",
            "Supply chain disruption events"
        ],

        peerCompanies: [
            "Walmart",
            "Target",
            "The Home Depot",
            "Lowe's",
            "Best Buy",
            "Macy's",
            "Nordstrom",
            "Gap Inc."
        ]
    },

    // ═══════════════════════════════════════════════════════════════
    // EXPANSION VERTICALS - Stub Entries (Populate as needed)
    // ═══════════════════════════════════════════════════════════════

    raas: {
        name: "RaaS",
        displayName: "Retail as a Service",
        icon: "🏪",
        cxBudget: "2.95%",
        avgDealSize: "$6.5M",
        salesCycle: "9-12 months",
        personas: [],
        intentKeywords: [],
        keyPressures: [],
        aiFraming: "",
        competitiveContext: {},
        triggerEvents: [],
        peerCompanies: []
    },

    taas: {
        name: "TaaS",
        displayName: "Technology as a Service",
        icon: "💻",
        cxBudget: "3.20%",
        avgDealSize: "$10.5M",
        salesCycle: "12-18 months",
        personas: [],
        intentKeywords: [],
        keyPressures: [],
        aiFraming: "",
        competitiveContext: {},
        triggerEvents: [],
        peerCompanies: []
    },

    utilities: {
        name: "Utilities",
        displayName: "Utilities & Energy",
        icon: "⚡",
        cxBudget: "2.15%",
        avgDealSize: "$8.8M",
        salesCycle: "15-21 months",
        personas: [],
        intentKeywords: [],
        keyPressures: [],
        aiFraming: "",
        competitiveContext: {},
        triggerEvents: [],
        peerCompanies: []
    },

    automotive: {
        name: "Automotive",
        displayName: "Automotive & Mobility",
        icon: "🚗",
        cxBudget: "2.45%",
        avgDealSize: "$7.8M",
        salesCycle: "12-15 months",
        personas: [],
        intentKeywords: [],
        keyPressures: [],
        aiFraming: "",
        competitiveContext: {},
        triggerEvents: [],
        peerCompanies: []
    },

    technology: {
        name: "Technology",
        displayName: "Technology & Software",
        icon: "🖥️",
        cxBudget: "3.40%",
        avgDealSize: "$9.2M",
        salesCycle: "9-15 months",
        personas: [],
        intentKeywords: [],
        keyPressures: [],
        aiFraming: "",
        competitiveContext: {},
        triggerEvents: [],
        peerCompanies: []
    },

    telecom: {
        name: "Telecom",
        displayName: "Telecommunications",
        icon: "📡",
        cxBudget: "2.80%",
        avgDealSize: "$11.5M",
        salesCycle: "12-18 months",
        personas: [],
        intentKeywords: [],
        keyPressures: [],
        aiFraming: "",
        competitiveContext: {},
        triggerEvents: [],
        peerCompanies: []
    },

    media: {
        name: "Media",
        displayName: "Media & Communications",
        icon: "📺",
        cxBudget: "2.55%",
        avgDealSize: "$6.8M",
        salesCycle: "9-12 months",
        personas: [],
        intentKeywords: [],
        keyPressures: [],
        aiFraming: "",
        competitiveContext: {},
        triggerEvents: [],
        peerCompanies: []
    },

    entertainment: {
        name: "Entertainment",
        displayName: "Entertainment & Gaming",
        icon: "🎮",
        cxBudget: "3.10%",
        avgDealSize: "$5.5M",
        salesCycle: "6-12 months",
        personas: [],
        intentKeywords: [],
        keyPressures: [],
        aiFraming: "",
        competitiveContext: {},
        triggerEvents: [],
        peerCompanies: []
    },

    travel: {
        name: "Travel",
        displayName: "Travel & Hospitality",
        icon: "✈️",
        cxBudget: "3.25%",
        avgDealSize: "$8.2M",
        salesCycle: "9-15 months",
        personas: [],
        intentKeywords: [],
        keyPressures: [],
        aiFraming: "",
        competitiveContext: {},
        triggerEvents: [],
        peerCompanies: []
    },

    gbs: {
        name: "GBS",
        displayName: "Global Business Services",
        icon: "🌐",
        cxBudget: "2.70%",
        avgDealSize: "$12.8M",
        salesCycle: "15-24 months",
        personas: [],
        intentKeywords: [],
        keyPressures: [],
        aiFraming: "",
        competitiveContext: {},
        triggerEvents: [],
        peerCompanies: []
    }
};

// Helper functions
const VerticalHelpers = {
    // Get all active (detailed) verticals
    getActiveVerticals() {
        return Object.keys(VERTICALS_CONFIG).filter(key => {
            const vertical = VERTICALS_CONFIG[key];
            return vertical.personas && vertical.personas.length > 0;
        });
    },

    // Get all stub verticals (for future expansion)
    getStubVerticals() {
        return Object.keys(VERTICALS_CONFIG).filter(key => {
            const vertical = VERTICALS_CONFIG[key];
            return !vertical.personas || vertical.personas.length === 0;
        });
    },

    // Check if vertical is fully configured
    isVerticalComplete(verticalKey) {
        const vertical = VERTICALS_CONFIG[verticalKey];
        return vertical &&
               vertical.personas.length > 0 &&
               vertical.intentKeywords.length > 0 &&
               vertical.keyPressures.length > 0;
    },

    // Get vertical by key
    getVertical(verticalKey) {
        return VERTICALS_CONFIG[verticalKey] || null;
    },

    // Get all verticals as array
    getAllVerticals() {
        return Object.entries(VERTICALS_CONFIG).map(([key, config]) => ({
            key,
            ...config
        }));
    }
};

// Export for use in plan builder
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { VERTICALS_CONFIG, VerticalHelpers };
}
