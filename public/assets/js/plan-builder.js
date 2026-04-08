// 90-Day ABX Plan Builder - Core Logic
// Generates customized vertical-specific execution plans

class ABXPlanBuilder {
    constructor() {
        this.config = {
            vertical: null,
            tier: null,
            personas: [],
            intentLevel: null,
            outputMode: 'working' // 'working' or 'executive'
        };
        this.generatedPlan = null;
    }

    // Configure plan parameters
    configure(config) {
        this.config = { ...this.config, ...config };
        return this;
    }

    // Generate complete 90-day plan
    generatePlan() {
        if (!this.config.vertical) {
            throw new Error('Vertical must be selected');
        }

        const vertical = VERTICALS_CONFIG[this.config.vertical];
        if (!vertical || !VerticalHelpers.isVerticalComplete(this.config.vertical)) {
            throw new Error('Selected vertical is not fully configured');
        }

        this.generatedPlan = {
            metadata: this.generateMetadata(vertical),
            phase1: this.generatePhase1(vertical),
            phase2: this.generatePhase2(vertical),
            phase3: this.generatePhase3(vertical),
            successMetrics: this.generateSuccessMetrics(vertical),
            demandbaseOrchestration: this.generateDemandbaseConfig(vertical)
        };

        return this.generatedPlan;
    }

    // Generate plan metadata
    generateMetadata(vertical) {
        return {
            generatedDate: new Date().toISOString(),
            verticalName: vertical.displayName,
            verticalIcon: vertical.icon,
            tier: this.config.tier,
            selectedPersonas: this.config.personas,
            intentMonitoringLevel: this.config.intentLevel,
            cxBudget: vertical.cxBudget,
            avgDealSize: vertical.avgDealSize,
            salesCycle: vertical.salesCycle
        };
    }

    // PHASE 1: Foundation (Days 1-30) - Signal Capture & Activation
    generatePhase1(vertical) {
        return {
            title: "Foundation",
            subtitle: "Signal Capture & Activation",
            duration: "Days 1-30",

            week1: {
                title: "Intelligence Gathering (Demandbase-Powered)",
                days: [
                    {
                        day: "Day 1-2",
                        title: "Demandbase Configuration",
                        activities: [
                            `Set up Engagement Minutes tracking for ${vertical.displayName} vertical`,
                            `Configure intent keywords: ${vertical.intentKeywords.slice(0, 5).map(k => `"${k}"`).join(', ')}`,
                            this.generateScoringThresholds(),
                            "Establish account staging rules (Unengaged → Engaged → Qualified)"
                        ],
                        framework: "Intent Signal Activation",
                        deliverable: "Demandbase workspace configured with ${vertical.displayName}-specific signals"
                    },
                    {
                        day: "Day 3-4",
                        title: "Top 10 Account Intelligence Gathering",
                        activities: [
                            "Run Account Discovery Engine for Tier 1A accounts",
                            `Extract persona-specific KPIs: ${this.generatePersonaKPIs(vertical)}`,
                            "Identify peer comparison targets (3 similar companies per account)",
                            "Map buying committee for each target account"
                        ],
                        framework: "Account Discovery Engine + Buying Committee Mapper",
                        deliverable: "Intelligence dossiers for top 10 accounts with buying committee maps"
                    },
                    {
                        day: "Day 5",
                        title: "Content Gap Analysis",
                        activities: [
                            `Review existing ${vertical.displayName} content in ABM Content Arsenal`,
                            `Identify missing persona-focused pieces for: ${this.getTopPersonas(vertical, 3).join(', ')}`,
                            "Queue content generation for Week 2",
                            "Map content to Account-Based Arrow journey stages"
                        ],
                        framework: "Content Funnel Generator",
                        deliverable: "Content gap analysis with 10-piece production queue"
                    }
                ]
            },

            week2: {
                title: "Messaging Architecture (Journey-Aligned Content)",
                days: [
                    {
                        day: "Day 6-8",
                        title: "Persona-Specific Value Propositions",
                        activities: [
                            `Create ${vertical.displayName} Messaging Matrix`,
                            `Build persona playbooks using existing frameworks`,
                            this.generatePersonaMessaging(vertical),
                            "Develop pain point → solution mapping by persona"
                        ],
                        framework: "Persona Pain Point Extractor",
                        deliverable: "Messaging Matrix + Persona Cards for all target personas"
                    },
                    {
                        day: "Day 9-11",
                        title: "Content Production Sprint",
                        activities: [
                            "Generate 10 persona-specific content pieces using ABM Content Arsenal",
                            `Focus areas: ${vertical.keyPressures.slice(0, 3).join('; ')}`,
                            "Map content to TOFU/MOFU/BOFU stages",
                            "Create email/LinkedIn outreach templates"
                        ],
                        framework: "ABM Content Generator",
                        deliverable: "10 content assets mapped to personas and journey stages"
                    },
                    {
                        day: "Day 12-14",
                        title: "Rules of Engagement Setup",
                        activities: [
                            "Configure contact frequency caps (max 2 touches/week)",
                            "Set up trigger-based outreach automation in Demandbase",
                            "Create multi-channel orchestration sequences",
                            "Build BDR grab-and-go playbooks by trigger event"
                        ],
                        framework: "Orchestration Logic Designer",
                        deliverable: "Automated engagement rules + BDR playbooks"
                    }
                ]
            },

            week3: {
                title: "Peer Intelligence Development",
                days: [
                    {
                        day: "Day 15-17",
                        title: "Peer Comparison Research",
                        activities: [
                            `Identify 3-4 peer companies for each top account`,
                            "Research peer CX transformation initiatives (last 24 months)",
                            "Extract measurable outcomes and timelines",
                            "Build peer comparison intelligence briefs"
                        ],
                        framework: "Peer Comparison Builder",
                        deliverable: "Peer intelligence briefs for top 10 accounts"
                    },
                    {
                        day: "Day 18-20",
                        title: "Competitive Intelligence Gathering",
                        activities: [
                            "Research current vendors for top accounts",
                            "Estimate contract expiration timelines",
                            "Identify displacement signals and opportunities",
                            "Map competitive landscape by account"
                        ],
                        framework: "Competitive Intelligence Gatherer",
                        deliverable: "Competitive landscape analysis for target accounts"
                    },
                    {
                        day: "Day 21",
                        title: "Week 3 Checkpoint",
                        activities: [
                            "Review Phase 1 progress against milestones",
                            "Validate Demandbase configuration and signal quality",
                            "Assess content production pipeline",
                            "Adjust resource allocation if needed"
                        ],
                        framework: "N/A - Checkpoint",
                        deliverable: "Phase 1 progress report with adjustments"
                    }
                ]
            },

            week4: {
                title: "Foundation Completion & Activation Prep",
                days: [
                    {
                        day: "Day 22-25",
                        title: "Account Tiering & Prioritization",
                        activities: [
                            "Score all target accounts using 4-factor framework",
                            `Apply ${vertical.displayName}-specific weightings`,
                            "Assign tier levels (1A, 1B, 2, 3)",
                            "Allocate resources by tier (white glove vs programmatic)"
                        ],
                        framework: "Account Tiering Framework",
                        deliverable: "Complete account scoring with tier assignments"
                    },
                    {
                        day: "Day 26-28",
                        title: "Executive Coverage Audit",
                        activities: [
                            "Map all C-suite executives across target accounts",
                            "Identify coverage gaps (uncovered executives)",
                            "Prioritize outreach based on tier and intent",
                            "Create 30-day executive engagement calendar"
                        ],
                        framework: "Executive Coverage Tracker",
                        deliverable: "Executive coverage matrix + 30-day outreach plan"
                    },
                    {
                        day: "Day 29-30",
                        title: "Phase 1 Review & Phase 2 Preparation",
                        activities: [
                            "Complete Phase 1 deliverables checklist",
                            "Validate Demandbase workflows are operational",
                            "Brief sales team on activation plan",
                            "Prepare Phase 2 launch (channel activation)"
                        ],
                        framework: "N/A - Phase Transition",
                        deliverable: "Phase 1 completion report + Phase 2 readiness checklist"
                    }
                ]
            }
        };
    }

    // PHASE 2: Deployment (Days 31-60) - Buying Journey & Signal Orchestration
    generatePhase2(vertical) {
        return {
            title: "Deployment",
            subtitle: "Buying Journey & Signal Orchestration",
            duration: "Days 31-60",

            week5: {
                title: "Channel Activation (Dynamic Orchestration & Advertising)",
                days: [
                    {
                        day: "Day 31-33",
                        title: "Demandbase Orchestration Canvas Setup",
                        activities: [
                            "Configure journey stage progression rules",
                            "Set up automated triggers for stage transitions",
                            `Unengaged → Engaged: Engagement Minutes >= 10 OR Intent Spike Medium`,
                            `Engaged → Qualified: Engagement Minutes >= 30 AND Buying Intent trending`,
                            "Create Salesforce task automation for Qualified accounts",
                            "Configure Slack alerts for Engagement Spikes"
                        ],
                        framework: "Orchestration Logic Designer",
                        deliverable: "Live Demandbase orchestration workflows"
                    },
                    {
                        day: "Day 34-37",
                        title: "Advertising Blueprint Builder",
                        activities: [
                            `Launch Demandbase Display Ads for ${vertical.displayName} accounts`,
                            "Configure journey stage-specific creative (Unengaged, Engaged, Qualified)",
                            "Set frequency caps by stage (higher for Qualified)",
                            "Integrate LinkedIn Sponsored Content for Buying Group targeting",
                            `Target personas: ${this.getTopPersonas(vertical, 3).join(', ')}`,
                            "Set budget allocation: 40% Display, 35% LinkedIn, 25% Content/Tools"
                        ],
                        framework: "Advertising Blueprint Builder",
                        deliverable: "Live ad campaigns across Demandbase + LinkedIn"
                    },
                    {
                        day: "Day 38-40",
                        title: "BDR/SDR Grab-and-Go Enablement",
                        activities: [
                            `Create ${vertical.displayName}-specific outbound playbooks`,
                            `Map trigger events to outreach sequences: ${vertical.triggerEvents.slice(0, 3).join('; ')}`,
                            "Build email templates with persona-specific intelligence hooks",
                            "Prepare LinkedIn connection messages and InMail sequences",
                            "Train BDRs on Demandbase alert workflows"
                        ],
                        framework: "Smart Staging System",
                        deliverable: "BDR playbooks + training completion for 5 reps"
                    },
                    {
                        day: "Day 41-42",
                        title: "Week 5 Validation",
                        activities: [
                            "Test BDR playbooks with 3 reps on 5 accounts each",
                            "Monitor Demandbase orchestration for errors",
                            "Review initial ad performance and engagement rates",
                            "Adjust messaging based on early response data"
                        ],
                        framework: "N/A - Validation Sprint",
                        deliverable: "Week 5 performance report + adjustments"
                    }
                ]
            },

            week6: {
                title: "Multi-Channel Execution & Optimization",
                days: [
                    {
                        day: "Day 43-45",
                        title: "Outbound Execution Launch",
                        activities: [
                            "Execute first wave of executive outreach (Tier 1A accounts)",
                            "Launch trigger-based sequences for recent events",
                            "Activate LinkedIn InMail campaigns for Qualified accounts",
                            "Monitor response rates and booking meetings"
                        ],
                        framework: "Intent Signal Activation",
                        deliverable: "First wave outreach completed, meetings scheduled"
                    },
                    {
                        day: "Day 46-48",
                        title: "Buying Group Multi-Threading",
                        activities: [
                            "Identify and map buying group members for engaged accounts",
                            "Execute multi-persona outreach (2-3 contacts per account)",
                            "Coordinate messaging across buying committee",
                            "Track buying group engagement coverage in Demandbase"
                        ],
                        framework: "Buying Committee Mapper",
                        deliverable: "Multi-threaded engagement for top 20 accounts"
                    },
                    {
                        day: "Day 49-51",
                        title: "Content Amplification & Nurture",
                        activities: [
                            "Distribute MOFU content to Engaged accounts",
                            "Launch webinar/workshop for target vertical",
                            "Share peer intelligence briefs with CFO/CEO personas",
                            "Activate email nurture sequences for warm accounts"
                        ],
                        framework: "Content Funnel Generator",
                        deliverable: "MOFU content distributed, webinar executed"
                    },
                    {
                        day: "Day 52-53",
                        title: "Week 6 Optimization",
                        activities: [
                            "Analyze response rates by persona and message type",
                            "Identify top-performing intelligence hooks",
                            "Pause underperforming channels or messages",
                            "Double down on high-response tactics"
                        ],
                        framework: "KPI Extraction Framework",
                        deliverable: "Week 6 optimization report + tactical shifts"
                    }
                ]
            },

            week7: {
                title: "Pipeline Acceleration & Qualification",
                days: [
                    {
                        day: "Day 54-56",
                        title: "Qualified Account Prioritization",
                        activities: [
                            "Review all accounts that reached 'Qualified' stage in Demandbase",
                            "Prioritize by intent score, engagement, and buying group coverage",
                            "Create Target Account Plans for top 5 Qualified accounts",
                            "Schedule executive briefings with AEs for Tier 1A accounts"
                        ],
                        framework: "Target Account Planning Blueprint",
                        deliverable: "5 complete Target Account Plans + AE briefings scheduled"
                    },
                    {
                        day: "Day 57-59",
                        title: "Discovery Calls & Needs Assessment",
                        activities: [
                            "Execute discovery calls with Qualified accounts",
                            "Use persona-specific discovery questions from frameworks",
                            "Extract pain points, timelines, and decision criteria",
                            "Map to TP solutions and build custom value propositions"
                        ],
                        framework: "Persona Pain Point Extractor",
                        deliverable: "Discovery call notes + custom value props for engaged accounts"
                    },
                    {
                        day: "Day 60",
                        title: "Phase 2 Review & Phase 3 Prep",
                        activities: [
                            "Review Phase 2 KPIs: Engaged accounts, Qualified accounts, Opps created",
                            "Assess channel performance (Demandbase, LinkedIn, Outbound)",
                            "Identify what's working and what needs adjustment",
                            "Prepare optimization plan for Phase 3"
                        ],
                        framework: "N/A - Phase Transition",
                        deliverable: "Phase 2 performance report + Phase 3 optimization plan"
                    }
                ]
            }
        };
    }

    // PHASE 3: Optimization (Days 61-90) - Expanding Revenue Growth
    generatePhase3(vertical) {
        return {
            title: "Optimization",
            subtitle: "Expanding Revenue Growth",
            duration: "Days 61-90",

            week9: {
                title: "Performance Review & Refinement",
                days: [
                    {
                        day: "Day 61-63",
                        title: "Comprehensive KPI Analysis",
                        activities: [
                            "Generate complete metrics dashboard (Engagement, Revenue, Data, Reputation)",
                            `Analyze: Engaged Accounts (target 35%), Qualified Accounts (target 15% of Engaged)`,
                            "Review pipeline created, velocity, and win rates",
                            "Calculate Cost per Qualified Account",
                            "Assess buying group coverage across Qualified accounts"
                        ],
                        framework: "KPI & Reporting Architect",
                        deliverable: "Complete 90-day KPI dashboard with actuals vs targets"
                    },
                    {
                        day: "Day 64-66",
                        title: "Vertical Performance Deep Dive",
                        activities: [
                            `Evaluate ${vertical.displayName} vertical performance`,
                            "Identify top-performing accounts, personas, and tactics",
                            "Analyze bottom 20% of accounts - pause or adjust approach",
                            "Review competitive win/loss patterns",
                            "Determine if vertical expansion or pivot is warranted"
                        ],
                        framework: "Account Tiering Framework",
                        deliverable: `${vertical.displayName} performance analysis + recommendations`
                    },
                    {
                        day: "Day 67-70",
                        title: "Content & Messaging Optimization",
                        activities: [
                            "Analyze which content assets drove most engagement",
                            "Review response rates by persona and message type",
                            "Identify gaps in BOFU (decision-stage) content",
                            "Create 3 new high-performing content pieces",
                            "Refresh underperforming messaging based on feedback"
                        ],
                        framework: "Content Funnel Generator",
                        deliverable: "3 new optimized content assets + messaging refresh"
                    }
                ]
            },

            week10: {
                title: "Scale & Expansion Planning",
                days: [
                    {
                        day: "Day 71-74",
                        title: "Playbook Refinement & Documentation",
                        activities: [
                            `Lock in ${vertical.displayName} as Tier 1 Playbook`,
                            "Document what worked: Top triggers, personas, content, channels",
                            "Document what didn't work: Lessons learned and pivots",
                            "Create repeatable playbook template for next vertical",
                            "Identify next 3 verticals for Tier 2 expansion"
                        ],
                        framework: "Repeatability Protocol",
                        deliverable: `${vertical.displayName} Master Playbook + expansion roadmap`
                    },
                    {
                        day: "Day 75-77",
                        title: "Demandbase Orchestration Enhancement",
                        activities: [
                            "Refine journey stage thresholds based on performance data",
                            "Add new trigger events discovered during 90 days",
                            "Optimize alert frequency and notification routing",
                            "Configure automated re-engagement for stalled accounts",
                            "Set up Journey Stall alerts (<5% of Qualified accounts stalled >14 days)"
                        ],
                        framework: "Orchestration Logic Designer",
                        deliverable: "Enhanced Demandbase workflows with optimization learnings"
                    },
                    {
                        day: "Day 78-80",
                        title: "BDR/SDR Training & Scale Prep",
                        activities: [
                            `Train 5 additional BDRs on ${vertical.displayName} playbook`,
                            "Share top-performing tactics and response-getting messages",
                            "Create objection handling repository from real conversations",
                            "Establish weekly trigger alert cadence (automated)",
                            "Set up BDR performance dashboards in SFDC"
                        ],
                        framework: "Smart Staging System",
                        deliverable: "5 newly trained BDRs + objection handling repository"
                    }
                ]
            },

            week11: {
                title: "Pipeline Advancement & Deal Acceleration",
                days: [
                    {
                        day: "Day 81-84",
                        title: "Active Pipeline Management",
                        activities: [
                            "Review all open opportunities created from ABX",
                            "Identify stalled deals and acceleration tactics",
                            "Provide AEs with BOFU content and competitive intelligence",
                            "Execute executive briefings for C-suite at key accounts",
                            "Coordinate multi-thread engagement for late-stage deals"
                        ],
                        framework: "Target Account Planning Blueprint",
                        deliverable: "Pipeline acceleration plan for all open ABX opps"
                    },
                    {
                        day: "Day 85-87",
                        title: "Expansion Account Identification",
                        activities: [
                            `Identify 20 new ${vertical.displayName} accounts for next 90-day cycle`,
                            "Apply learnings from current cycle to account selection",
                            "Pre-build intelligence dossiers using proven frameworks",
                            "Queue content production for new account set",
                            "Begin Demandbase monitoring for new account list"
                        ],
                        framework: "Account Discovery Engine",
                        deliverable: "Next 20 target accounts with pre-built intelligence"
                    },
                    {
                        day: "Day 88-90",
                        title: "90-Day Review & Next Cycle Planning",
                        activities: [
                            "Present complete 90-day results to leadership",
                            "Showcase: Accounts Engaged, Qualified, Pipeline Created, Wins",
                            "Share ROI analysis and Cost per Qualified Account",
                            "Propose next vertical for 90-day playbook build",
                            "Allocate resources for Cycle 2 (same vertical or new vertical)"
                        ],
                        framework: "KPI & Reporting Architect",
                        deliverable: "Executive 90-day results presentation + Cycle 2 plan"
                    }
                ]
            }
        };
    }

    // Generate success metrics
    generateSuccessMetrics(vertical) {
        return {
            title: "Success Metrics (Account-Based Arrow Standard)",
            categories: [
                {
                    name: "Engagement Metrics",
                    kpis: [
                        { metric: "Account Engagement Rate", target: "35% of target list", source: "Demandbase" },
                        { metric: "Qualified Account Conversion Rate", target: "15% of Engaged Accounts", source: "Demandbase" },
                        { metric: "Buying Group Coverage", target: ">50% for Qualified Accounts", source: "Demandbase" },
                        { metric: "Response Rate (Email)", target: "12%", source: "Marketo/SFDC" },
                        { metric: "Response Rate (LinkedIn)", target: "18%", source: "Sales Nav/SFDC" }
                    ]
                },
                {
                    name: "Revenue Metrics",
                    kpis: [
                        { metric: "Opportunities Created from ABX", target: "20", source: "SFDC (Demandbase Influence)" },
                        { metric: "Pipeline Value (ABX)", target: "$2M", source: "SFDC (Demandbase Influence)" },
                        { metric: "Pipeline Velocity Improvement", target: "-15%", source: "SFDC" },
                        { metric: "Win Rate (ABX Opps)", target: "28%", source: "SFDC" },
                        { metric: "Cost per Qualified Account", target: `$${this.calculateCostPerQualified(vertical)}`, source: "Finance/Demandbase" }
                    ]
                },
                {
                    name: "Data Coverage Metrics",
                    kpis: [
                        { metric: "Executive Contact Coverage", target: "100% of Top 70", source: "SFDC" },
                        { metric: "Buying Group Identification", target: "80% of Tier 1A accounts", source: "Demandbase/SFDC" },
                        { metric: "Persona Intelligence Briefs", target: "1 per account per persona", source: "Content Repository" }
                    ]
                },
                {
                    name: "Operational Efficiency",
                    kpis: [
                        { metric: "Journey Stall Rate", target: "<5% of Qualified Accounts stalled >14 days", source: "Demandbase" },
                        { metric: "Buying Group Surges", target: "30-50% increase", source: "Demandbase" },
                        { metric: "Content Utilization", target: "75% of produced assets used in outreach", source: "Content Tracking" }
                    ]
                }
            ]
        };
    }

    // Generate Demandbase orchestration configuration
    generateDemandbaseConfig(vertical) {
        return {
            title: "Demandbase Signal Orchestration Guide",
            intentKeywords: vertical.intentKeywords,
            scoringThresholds: {
                urgent: {
                    score: "90-100",
                    timeline: "Same day contact",
                    stakeholder: "C-suite direct",
                    action: `${this.getTopPersonas(vertical, 1)[0]} outreach with real-time peer intelligence`
                },
                immediate: {
                    score: "70-89",
                    timeline: "24-48 hours",
                    stakeholder: "VP level",
                    action: "Personalized email + LinkedIn InMail with persona-specific pain point"
                },
                scheduled: {
                    score: "50-69",
                    timeline: "This week",
                    stakeholder: "Director level",
                    action: "Email sequence with peer case study"
                },
                nurture: {
                    score: "30-49",
                    timeline: "2-week cadence",
                    stakeholder: "Manager level",
                    action: "Marketing automation with thought leadership"
                },
                monitor: {
                    score: "<30",
                    timeline: "Monthly review",
                    stakeholder: "Unassigned",
                    action: "Passive monitoring with brand awareness ads"
                }
            },
            journeyStages: {
                unengaged: {
                    criteria: "Engagement Minutes (3 mo) = 0",
                    action: "Serve awareness-stage display ads",
                    content: "Industry trend reports, thought leadership"
                },
                engaged: {
                    criteria: "Engagement Minutes (3 mo) >= 10 OR Intent Spike = Medium",
                    action: "Transition to consideration-stage content",
                    content: "Peer comparisons, ROI calculators, implementation guides"
                },
                qualified: {
                    criteria: "Engagement Minutes (3 mo) >= 30 AND Intent trending AND Buying Group >= 3 contacts",
                    action: "Create SFDC task for BDR/AE + aggressive retargeting",
                    content: "Case studies, custom ROI, executive briefings"
                },
                activePipeline: {
                    criteria: "Open Opportunity in SFDC",
                    action: "Deal-specific enablement and executive engagement",
                    content: "Proposal materials, implementation plans, ROI validation"
                }
            },
            triggerEvents: vertical.triggerEvents.map(event => ({
                event,
                action: "Within 48 hours - personalized outreach referencing event",
                automation: "Demandbase alert → Slack notification → BDR action"
            }))
        };
    }

    // Helper: Generate persona-specific KPIs
    generatePersonaKPIs(vertical) {
        const topPersonas = vertical.personas.slice(0, 3);
        return topPersonas.map(p => p.kpis.slice(0, 2).join(', ')).join('; ');
    }

    // Helper: Get top N personas
    getTopPersonas(vertical, count = 3) {
        return vertical.personas
            .filter(p => p.priority === 'high')
            .slice(0, count)
            .map(p => p.title);
    }

    // Helper: Generate persona messaging
    generatePersonaMessaging(vertical) {
        const personas = vertical.personas.filter(p => p.priority === 'high');
        return `Map key pressures to personas: ${personas.map(p => p.title).join(', ')}`;
    }

    // Helper: Generate scoring thresholds
    generateScoringThresholds() {
        const tier = this.config.tier;
        if (tier === '1A') {
            return "Thresholds: 90-100 = Same-day CEO/CFO outreach; 70-89 = 24hr VP contact; 50-69 = Weekly nurture";
        } else if (tier === '1B') {
            return "Thresholds: 90-100 = Same-day VP outreach; 70-89 = 48hr Director contact; 50-69 = Bi-weekly nurture";
        } else {
            return "Thresholds: 70-89 = Weekly Director outreach; 50-69 = Bi-weekly nurture; <50 = Monthly monitoring";
        }
    }

    // Helper: Calculate cost per qualified account
    calculateCostPerQualified(vertical) {
        // Simplified calculation - would be more sophisticated in production
        const baseCost = 2500;
        const verticalMultiplier = vertical.salesCycle.includes('24') ? 1.3 : 1.0;
        return Math.round(baseCost * verticalMultiplier);
    }

    // Export plan to different formats
    exportToHTML(includeFrameworkReferences = true) {
        if (!this.generatedPlan) {
            throw new Error('No plan generated yet. Call generatePlan() first.');
        }

        const mode = includeFrameworkReferences ? 'working' : 'executive';
        return this.renderPlanHTML(this.generatedPlan, mode);
    }

    exportToPDF() {
        // This would integrate with a PDF library like jsPDF
        console.log('PDF export would be implemented here');
    }

    exportToPowerPoint() {
        // This would integrate with pptxgenjs library
        console.log('PowerPoint export would be implemented here');
    }

    exportToClipboard() {
        const htmlContent = this.exportToHTML(false); // Executive mode for clean copy
        const textContent = this.convertHTMLToText(htmlContent);
        return textContent;
    }

    // Render plan as HTML
    renderPlanHTML(plan, mode = 'working') {
        // This would generate the complete HTML output
        // For now, returning structure - full implementation would be extensive
        return {
            metadata: plan.metadata,
            phases: [plan.phase1, plan.phase2, plan.phase3],
            metrics: plan.successMetrics,
            demandbase: plan.demandbaseOrchestration,
            mode
        };
    }

    // Convert HTML to plain text for clipboard
    convertHTMLToText(htmlContent) {
        // Simple text conversion - would be more sophisticated in production
        return JSON.stringify(htmlContent, null, 2);
    }
}

// Export for use in Command Center
if (typeof window !== 'undefined') {
    window.ABXPlanBuilder = ABXPlanBuilder;
}
