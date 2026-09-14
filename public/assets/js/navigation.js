// Global Navigation — TP Slate Brand System
// Injects unified nav across all ABM Arsenal modules

(function() {
    'use strict';

    const currentPath = window.location.pathname;
    const isRoot = currentPath === '/' || (currentPath.includes('index.html') && !currentPath.includes('personas') && !currentPath.includes('command-center') && !currentPath.includes('platform-guide') && !currentPath.includes('advanced-reporting') && !currentPath.includes('prompts-lab') && !currentPath.includes('roi-calculator') && !currentPath.includes('competitive-intel') && !currentPath.includes('orchestration') && !currentPath.includes('campaign-monitoring') && !currentPath.includes('guides') && !currentPath.includes('tp-services') && !currentPath.includes('campaign-playbook') && !currentPath.includes('best-practices') && !currentPath.includes('start-here') && !currentPath.includes('guides/') && !currentPath.includes('lighthouse') && !currentPath.includes('account-planner'));
    const isPersonas = currentPath.includes('personas');
    const isCompetitiveIntel = currentPath.includes('competitive-intel') || currentPath.includes('command-center');
    const isOrchestration = currentPath.includes('orchestration');
    const isPlatformGuide = currentPath.includes('platform-guide');
    const isDemandbaseSales = currentPath.includes('demandbase-sales');
    const isDemandbaseMarketing = currentPath.includes('demandbase-marketing');
    const isCampaignMonitoring = currentPath.includes('campaign-monitoring');
    const isAdvancedReporting = currentPath.includes('advanced-reporting');
    const isPromptsLab = currentPath.includes('prompts-lab');
    const isROICalculator = currentPath.includes('roi-calculator');
    const isPlanner = currentPath.includes('account-planner');
    const isGuides = currentPath.includes('guides');
    const isTPServices = currentPath.includes('tp-services');
    const isCampaignPlaybook = currentPath.includes('campaign-playbook');
    const isBuyingGroups = currentPath.includes('buying-groups');
    const isBestPractices = currentPath.includes('best-practices');
    const isStartHere = currentPath.includes('start-here');
    const isLighthouse = currentPath.includes('lighthouse');
    const isRunCampaign = currentPath.includes('run-a-campaign');
    const isReadCampaign = currentPath.includes('read-your-campaign');
    const isOptimize = currentPath.includes('optimize-mid-flight');
    const isBuildList = currentPath.includes('build-your-list');
    const isGuideGroup = isRunCampaign || isReadCampaign || isOptimize || isBuildList;
    const isWorkspacesRef = currentPath.includes('workspaces-reference') || currentPath.includes('list-pulls');
    const isReferenceGroup = isAdvancedReporting || isPlanner;
    const isDemandbaseGroup = isPlatformGuide || isOrchestration || isWorkspacesRef || isBuyingGroups
        || isCampaignMonitoring || isBestPractices || isDemandbaseMarketing || isDemandbaseSales || isGuideGroup;

    function getBasePath() {
        if (isGuideGroup) return '../../';
        if (isCompetitiveIntel || isPlatformGuide || isDemandbaseSales || isDemandbaseMarketing || isAdvancedReporting || isPromptsLab || isROICalculator || isOrchestration || isCampaignMonitoring || isGuides || isBuyingGroups || isWorkspacesRef || isTPServices || isCampaignPlaybook || isBestPractices || isStartHere || isLighthouse || isPlanner) return '../';
        if (isPersonas && !currentPath.endsWith('personas/index.html') && currentPath.split('/').filter(Boolean).length > 2) return '../../';
        if (isPersonas) return '../';
        return './';
    }

    const bp = getBasePath();

    const navHTML = `
        <nav class="tp-global-nav">
            <div class="tp-nav-inner">
                <a href="${bp}index.html" class="tp-nav-brand">
                    <svg class="tp-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                    </svg>
                    <span>ABM Suite</span>
                </a>
                <div class="tp-nav-links">
                    <a href="${bp}start-here/index.html" class="tp-nav-link ${isStartHere ? 'active' : ''}" title="What this site is and where to go first">Start Here</a>
                    <a href="${bp}tp-services/index.html" class="tp-nav-link ${isTPServices ? 'active' : ''}" title="What TP sells and what we call it">TP Services and TP.ai</a>
                    <a href="${bp}lighthouse/index.html" class="tp-nav-link ${isLighthouse ? 'active' : ''}" title="Account intelligence and the US target-account universe">Lighthouse</a>

                    <div class="tp-nav-group ${isDemandbaseGroup ? 'active' : ''}">
                        <button class="tp-nav-link tp-nav-group-btn" aria-expanded="false" aria-haspopup="true">Demandbase
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </button>
                        <div class="tp-nav-dropdown">
                            <span class="tp-nav-drop-label">Platform</span>
                            <a href="${bp}platform-guide/index.html" class="tp-nav-drop-link ${(isPlatformGuide || isOrchestration) ? 'active' : ''}">US Workspace</a>
                            <a href="${bp}workspaces-reference/index.html" class="tp-nav-drop-link ${isWorkspacesRef ? 'active' : ''}">Workspaces &amp; List Pulls</a>
                            <a href="${bp}buying-groups/index.html" class="tp-nav-drop-link ${isBuyingGroups ? 'active' : ''}">Buying Groups</a>
                            <span class="tp-nav-drop-label">Campaigns</span>
                            <a href="${bp}campaign-monitoring/index.html" class="tp-nav-drop-link ${isCampaignMonitoring ? 'active' : ''}">Campaign Monitoring</a>
                            <a href="${bp}best-practices/index.html" class="tp-nav-drop-link ${isBestPractices ? 'active' : ''}">ABM Best Practices</a>
                            <span class="tp-nav-drop-label">Guides &mdash; step by step</span>
                            <a href="${bp}guides/run-a-campaign/index.html" class="tp-nav-drop-link ${isRunCampaign ? 'active' : ''}">Run a US Journey campaign</a>
                            <a href="${bp}guides/read-your-campaign/index.html" class="tp-nav-drop-link ${isReadCampaign ? 'active' : ''}">Read your campaign</a>
                            <a href="${bp}guides/optimize-mid-flight/index.html" class="tp-nav-drop-link ${isOptimize ? 'active' : ''}">Optimize mid-flight</a>
                            <a href="${bp}guides/build-your-list/index.html" class="tp-nav-drop-link ${isBuildList ? 'active' : ''}">Build your account list</a>
                            <span class="tp-nav-drop-label">AI</span>
                            <a href="${bp}demandbase-marketing/index.html" class="tp-nav-drop-link ${isDemandbaseMarketing ? 'active' : ''}">DB AI Prompt Library</a>
                            <a href="${bp}demandbase-sales/index.html" class="tp-nav-drop-link tp-nav-soon ${isDemandbaseSales ? 'active' : ''}">DB Sales<span class="tp-soon-badge">Soon</span></a>
                        </div>
                    </div>

                    <a href="${bp}competitive-intel/index.html" class="tp-nav-link ${isCompetitiveIntel ? 'active' : ''}">Competitive Intel</a>
                    <a href="${bp}personas/index.html" class="tp-nav-link ${isPersonas ? 'active' : ''}">Persona Cards</a>

                    <div class="tp-nav-group ${isReferenceGroup ? 'active' : ''}">
                        <button class="tp-nav-link tp-nav-group-btn" aria-expanded="false" aria-haspopup="true">Budget &amp; Planning
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </button>
                        <div class="tp-nav-dropdown">
                            <a href="${bp}account-planner/index.html" class="tp-nav-drop-link ${isPlanner ? 'active' : ''}">Account Planning Calculator</a>
                            <a href="${bp}advanced-reporting/index.html" class="tp-nav-drop-link ${isAdvancedReporting ? 'active' : ''}">Advanced Reporting</a>
                        </div>
                    </div>
                </div>

                <div class="tp-access-badge">Powered by Gemini</div>
                <button class="tp-nav-toggle" aria-label="Menu">
                    <span></span><span></span><span></span>
                </button>
            </div>
        </nav>`;

    const navCSS = `
        <style>
            .tp-global-nav {
                position: fixed; top: 0; left: 0; right: 0; z-index: 9999;
                background: rgba(42, 45, 66, 0.97);
                backdrop-filter: blur(12px);
                border-bottom: 1px solid rgba(194, 199, 205, 0.15);
                box-shadow: 0 2px 12px rgba(0,0,0,0.12);
            }
            .tp-nav-inner {
                max-width: 1500px; margin: 0 auto; padding: 0 24px;
                display: flex; align-items: center; height: 56px; gap: 15px;
            }
            .tp-nav-brand {
                display: flex; align-items: center; gap: 10px;
                margin-right: auto;
                font-weight: 700; font-size: 0.95rem; color: #fff;
                text-decoration: none; letter-spacing: 0.3px;
                flex-shrink: 0;
            }
            .tp-nav-icon { width: 22px; height: 22px; color: #FF0082; }
            .tp-access-badge {
                font-size: 0.7rem;
                color: rgba(194, 199, 205, 0.7);
                font-weight: 500;
                letter-spacing: 0.3px;
                padding: 4px 10px;
                background: rgba(255, 255, 255, 0.03);
                border-radius: 4px;
                border: 1px solid rgba(194, 199, 205, 0.15);
                white-space: nowrap;
                flex-shrink: 0;
            }
            .tp-nav-links { display: flex; gap: 2px; }
            .tp-nav-link {
                padding: 8px 14px; border-radius: 6px; border: none;
                color: #C2C7CD; text-decoration: none;
                font-size: 0.8rem; font-weight: 500; white-space: nowrap;
                transition: all 0.2s;
            }
            .tp-nav-link:hover { background: rgba(255,255,255,0.08); color: #fff; }
            .tp-nav-link.active { background: rgba(255, 0, 130, 0.15); color: #FF0082; }
            .tp-nav-group { position: relative; }
            .tp-nav-group-btn {
                display: inline-flex; align-items: center; gap: 5px;
                background: none; font-family: inherit; cursor: pointer;
            }
            .tp-nav-group.active > .tp-nav-group-btn { background: rgba(255, 0, 130, 0.15); color: #FF0082; }
            .tp-nav-group-btn svg { transition: transform 0.2s; opacity: 0.6; }
            .tp-nav-group.open > .tp-nav-group-btn svg { transform: rotate(180deg); }
            .tp-nav-dropdown {
                position: absolute; top: calc(100% + 6px); right: 0;
                min-width: 210px; padding: 6px;
                background: rgba(42, 45, 66, 0.98);
                backdrop-filter: blur(12px);
                border: 1px solid rgba(194, 199, 205, 0.18);
                border-radius: 8px;
                box-shadow: 0 8px 24px rgba(0,0,0,0.28);
                display: flex; flex-direction: column; gap: 2px;
                opacity: 0; visibility: hidden; transform: translateY(-6px);
                transition: opacity 0.18s, transform 0.18s, visibility 0.18s;
            }
            .tp-nav-group.open .tp-nav-dropdown { opacity: 1; visibility: visible; transform: translateY(0); }

            /* ---- page orienter: one line, same place, every page ---- */
            .tp-orient {
                background: #fff; border-bottom: 1px solid #e6e8ec;
                padding: 11px 60px; display: flex; align-items: baseline; gap: 12px;
                font-size: 13px; line-height: 1.5; flex-wrap: wrap;
            }
            .tp-orient .o-what {
                font-family: "SF Mono", Consolas, Menlo, monospace;
                font-size: 10.5px; letter-spacing: .11em; text-transform: uppercase;
                font-weight: 700; color: #ff0082; white-space: nowrap;
            }
            .tp-orient .o-text { color: #6b6e85; }
            .tp-orient .o-text b { color: #1a1a1a; font-weight: 700; }
            .tp-orient .o-help {
                margin-left: auto; font-size: 12px; color: #484C6A; font-weight: 700;
                text-decoration: none; white-space: nowrap; border-bottom: 1px solid rgba(72,76,106,.3);
            }
            .tp-orient .o-help:hover { color: #ff0082; border-bottom-color: #ff0082; }
            @media (max-width: 860px) { .tp-orient { padding-left: 24px; padding-right: 24px; } .tp-orient .o-help { margin-left: 0; } }
            /* section labels inside the slate dropdown */
            .tp-nav-drop-label {
                padding: 9px 12px 4px; font-size: 0.6rem; font-weight: 700;
                letter-spacing: 0.11em; text-transform: uppercase;
                color: rgba(194, 199, 205, 0.55); pointer-events: none;
            }
            .tp-nav-drop-label:first-child { padding-top: 5px; }
            .tp-nav-drop-label + .tp-nav-drop-link { margin-top: 0; }
            .tp-nav-dropdown .tp-nav-drop-label:not(:first-child) {
                border-top: 1px solid rgba(194,199,205,0.12); margin-top: 5px; padding-top: 9px;
            }
            /* cascade — each item eases in just after the one above it */
            .tp-nav-dropdown > * { opacity: 0; transform: translateY(-4px); transition: opacity .16s ease, transform .16s ease; }
            .tp-nav-group.open .tp-nav-dropdown > * { opacity: 1; transform: translateY(0); }
            .tp-nav-group.open .tp-nav-dropdown > *:nth-child(1) { transition-delay: .02s; }
            .tp-nav-group.open .tp-nav-dropdown > *:nth-child(2) { transition-delay: .045s; }
            .tp-nav-group.open .tp-nav-dropdown > *:nth-child(3) { transition-delay: .07s; }
            .tp-nav-group.open .tp-nav-dropdown > *:nth-child(4) { transition-delay: .095s; }
            .tp-nav-group.open .tp-nav-dropdown > *:nth-child(5) { transition-delay: .12s; }
            .tp-nav-group.open .tp-nav-dropdown > *:nth-child(6) { transition-delay: .145s; }
            .tp-nav-group.open .tp-nav-dropdown > *:nth-child(7) { transition-delay: .17s; }
            .tp-nav-group.open .tp-nav-dropdown > *:nth-child(8) { transition-delay: .195s; }
            .tp-nav-group.open .tp-nav-dropdown > *:nth-child(9) { transition-delay: .22s; }
            .tp-nav-group.open .tp-nav-dropdown > *:nth-child(10){ transition-delay: .245s; }
            @media (prefers-reduced-motion: reduce) {
                .tp-nav-dropdown > * { transition: none; opacity: 1; transform: none; }
            }
            .tp-nav-drop-link {
                padding: 9px 12px; border-radius: 5px;
                color: #C2C7CD; text-decoration: none;
                font-size: 0.78rem; font-weight: 500; white-space: nowrap;
                transition: all 0.15s;
            }
            .tp-nav-drop-link:hover { background: rgba(255,255,255,0.08); color: #fff; }
            .tp-nav-drop-link.active { background: rgba(255, 0, 130, 0.15); color: #FF0082; }
            .tp-nav-soon {
                display: inline-flex; align-items: center; gap: 7px;
                color: #C2C7CD;
                cursor: default;
            }
            .tp-nav-soon:hover { background: none; color: #C2C7CD; }
            .tp-soon-badge {
                font-size: 0.58rem; font-weight: 700; letter-spacing: 0.5px;
                text-transform: uppercase;
                color: #fff;
                background: #FF0082;
                border-radius: 10px; padding: 2px 8px;
                white-space: nowrap;
            }
            .tp-theme-toggle {
                background: rgba(255,255,255,0.08);
                border: 1px solid rgba(194, 199, 205, 0.2);
                border-radius: 8px;
                padding: 8px;
                cursor: pointer;
                color: #C2C7CD;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.2s;
                margin-left: 8px;
            }
            .tp-theme-toggle:hover {
                background: rgba(255,255,255,0.12);
                color: #fff;
                transform: translateY(-1px);
            }
            body.dark-mode { background: #1a1a1a; color: #e2e2e2; }
            body.dark-mode .tp-global-nav { background: rgba(20, 20, 20, 0.97); }
            .tp-nav-toggle {
                display: none; flex-direction: column; gap: 4px;
                background: none; border: none; cursor: pointer; padding: 8px;
            }
            .tp-nav-toggle span { width: 20px; height: 2px; background: #C2C7CD; border-radius: 1px; transition: all 0.3s; }
            body { padding-top: 56px !important; }
            @media (max-width: 768px) {
                .tp-access-badge { display: none; }
                .tp-nav-links {
                    position: absolute; top: 56px; left: 0; right: 0;
                    background: rgba(42, 45, 66, 0.98); flex-direction: column;
                    padding: 12px; gap: 4px;
                    transform: translateY(-110%); opacity: 0; pointer-events: none;
                    transition: all 0.3s; border-bottom: 1px solid rgba(194,199,205,0.15);
                }
                .tp-nav-links.open { transform: translateY(0); opacity: 1; pointer-events: all; }
                .tp-nav-link { padding: 10px 14px; text-align: center; }
                .tp-nav-group { width: 100%; }
                .tp-nav-group-btn { width: 100%; justify-content: center; }
                .tp-nav-dropdown {
                    position: static; opacity: 1; visibility: visible; transform: none;
                    min-width: 0; background: none; border: none; box-shadow: none;
                    display: none; padding: 4px 0 0;
                }
                .tp-nav-group.open .tp-nav-dropdown { display: flex; }
                .tp-nav-drop-link { text-align: center; }
                .tp-nav-toggle { display: flex; }
                .tp-nav-toggle.active span:nth-child(1) { transform: rotate(45deg) translate(4px, 4px); }
                .tp-nav-toggle.active span:nth-child(2) { opacity: 0; }
                .tp-nav-toggle.active span:nth-child(3) { transform: rotate(-45deg) translate(4px, -4px); }
            }
        </style>`;

    // ---- page orienter: what this page is, how to read it ----
    const ORIENT = {
        'tp-services':        ['What we sell', 'Every TP service, who buys it, and what it is actually called. <b>Start with the Services Matrix</b> — one grid, every offering.'],
        'best-practices':     ['The plays', 'How to run Demandbase and LinkedIn without repeating mistakes we already paid for. <b>Start Here tab</b> if it is your first time.'],
        'platform-guide':     ['Platform', 'How our Demandbase US Workspace is actually built — universe, tiering, journey stages. <b>The architecture, not the theory.</b>'],
        'orchestration':      ['Platform', 'What Orchestration can do for an ABM manager, scenario by scenario. <b>Read the scenarios, then the manager flow.</b>'],
        'workspaces-reference':['Platform', 'Where lists come from and which workspace owns what. <b>Build in US, push to Global only for advertising.</b>'],
        'buying-groups':      ['Targeting', 'The personas inside an account. <b>This is the targeting layer</b> — align titles here, never to LinkedIn seniority buckets.'],
        'campaign-monitoring':['Campaigns', 'Reading a campaign once it is live — what matters, what is noise. <b>Lift needs a baseline</b>, not a gut feel.'],
        'demandbase-marketing':['AI', 'Prompts that work against our data. <b>Ask in plain English</b>, export the list, route it to a tracked campaign.'],
        'competitive-intel':  ['Market', 'Who we run into and how they position. <b>Direct and indirect</b> are separated — indirect are not TP competitors.'],
        'personas':           ['Market', 'Who the buyers are by role and vertical — what they care about and what makes them move. <b>Use before writing to a title.</b>'],
        'advanced-reporting': ['Budget & Planning', 'The numbers layer. <b>Every figure carries its object, window and filter</b> — quote it with the basis attached.'],
        'account-planner':    ['Planning', 'What your budget actually buys. <b>Spend per account predicts lift</b> &mdash; check before you commit, not after.'],
        'roi-calculator':     ['Retired', 'Model the business case. <b>Change the inputs</b> — the defaults are illustrative, not our numbers.'],
        'campaign-playbook':  ['Campaigns', 'How to read a campaign after launch. <b>The account is the unit</b>; people are a weighting inside it.'],
        'read-your-campaign':  ['Guide', 'What the five numbers mean and what our own portfolio does. <b>The account is the unit</b> &mdash; clicks are anonymous by design, not by omission.'],
        'optimize-mid-flight': ['Guide', 'Signal, window, move &mdash; one change at a time. <b>Wait the window before you touch it</b>; most mid-flight damage is week-one noise.'],
        'run-a-campaign':     ['Guide', 'Build a US Journey campaign in the right order &mdash; Inventory Planner first, then the five builder steps. <b>Reach before build, journey before creative.</b>'],
        'build-your-list':    ['Guide', 'Who to target, and whether we hold any people there. <b>Only 24% of T2&ndash;T5 accounts have a known contact</b> &mdash; check before you promise a person audience.'],
        'lighthouse':         ['Account intelligence', 'Where the target-account universe comes from &mdash; research, tiering, buyer groups. <b>Check the universe before requesting anything new.</b>'],
        'start-here':         ['Orientation', 'What this site is and where to go first. <b>The Tour</b> explains every tab in one line each.']
    };

    function initNav() {
        if (document.querySelector('.tp-global-nav')) return; // Prevent double injection
        
        document.head.insertAdjacentHTML('beforeend', navCSS);
        document.body.insertAdjacentHTML('afterbegin', navHTML);


        // page orienter — one line under the nav: what this page is, how to read it
        (function () {
            if (isStartHere) return;
            let key = null;
            for (const k in ORIENT) { if (currentPath.includes(k)) { key = k; break; } }
            if (!key) return;
            const o = ORIENT[key];
            const nav = document.querySelector('.tp-global-nav');
            if (!nav) return;
            const bar = document.createElement('div');
            bar.className = 'tp-orient';
            bar.innerHTML = '<span class="o-what">' + o[0] + '</span>' +
                            '<span class="o-text">' + o[1] + '</span>' +
                            '<a class="o-help" href="' + getBasePath() + 'start-here/index.html">New here? Take the tour &rsaquo;</a>';
            nav.insertAdjacentElement('afterend', bar);
        })();

        // Mobile menu toggle
        const toggle = document.querySelector('.tp-nav-toggle');
        const links = document.querySelector('.tp-nav-links');
        if (toggle && links) {
            toggle.addEventListener('click', () => {
                toggle.classList.toggle('active');
                links.classList.toggle('open');
            });
            // Note: exclude the Reference group button — it opens a submenu, it doesn't navigate
            document.querySelectorAll('.tp-nav-link:not(.tp-nav-group-btn), .tp-nav-drop-link').forEach(l => {
                l.addEventListener('click', () => { toggle.classList.remove('active'); links.classList.remove('open'); });
            });
        }

        // Reference dropdown
        const navGroup = document.querySelector('.tp-nav-group');
        if (navGroup) {
            const groupBtn = navGroup.querySelector('.tp-nav-group-btn');
            groupBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const isOpen = navGroup.classList.toggle('open');
                groupBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            });
            document.addEventListener('click', (e) => {
                if (!navGroup.contains(e.target)) {
                    navGroup.classList.remove('open');
                    groupBtn.setAttribute('aria-expanded', 'false');
                }
            });
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    navGroup.classList.remove('open');
                    groupBtn.setAttribute('aria-expanded', 'false');
                }
            });
        }

        // Dark/Light mode toggle


        const themeToggle = document.querySelector('.tp-theme-toggle');
        const lightIcon = document.querySelector('.tp-theme-icon-light');
        const darkIcon = document.querySelector('.tp-theme-icon-dark');

        // Check for saved theme preference or default to page's data-theme attribute
        const pageDefault = document.documentElement.getAttribute('data-theme') || 'dark';
        const currentTheme = localStorage.getItem('abm-theme') || pageDefault;
        if (currentTheme === 'dark') {
            document.body.classList.add('dark-mode');
            document.documentElement.setAttribute('data-theme', 'dark');
            if (lightIcon) lightIcon.style.display = 'none';
            if (darkIcon) darkIcon.style.display = 'block';
        } else {
            // Explicitly set light mode if that's what we determined
            document.documentElement.setAttribute('data-theme', 'light');
        }

        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const isDark = document.body.classList.contains('dark-mode');

                if (isDark) {
                    document.body.classList.remove('dark-mode');
                    document.documentElement.setAttribute('data-theme', 'light');
                    localStorage.setItem('abm-theme', 'light');
                    if (lightIcon) lightIcon.style.display = 'block';
                    if (darkIcon) darkIcon.style.display = 'none';
                } else {
                    document.body.classList.add('dark-mode');
                    document.documentElement.setAttribute('data-theme', 'dark');
                    localStorage.setItem('abm-theme', 'dark');
                    if (lightIcon) lightIcon.style.display = 'none';
                    if (darkIcon) darkIcon.style.display = 'block';
                }
            });
        }

        // Feature 1: Context Vault (State Persistence)
        const syncableInputs = ['accountName', 'industry', 'vertical', 'targetPersona', 'competitor'];
        
        syncableInputs.forEach(id => {
            const el = document.getElementById(id) || document.querySelector(`[name="${id}"]`);
            if (el) {
                const savedVal = localStorage.getItem(`abm_vault_${id}`);
                if (savedVal && !el.value) {
                    el.value = savedVal;
                    el.dispatchEvent(new Event('change', { bubbles: true }));
                }
                
                el.addEventListener('input', (e) => {
                    localStorage.setItem(`abm_vault_${id}`, e.target.value);
                });
            }
        });
    }

    if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', initNav);
    } else {
        initNav();
    }
})();
