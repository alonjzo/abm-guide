// Global Navigation — TP Slate Brand System
// Injects unified nav across all ABM Arsenal modules

(function() {
    'use strict';

    const currentPath = window.location.pathname;
    const isRoot = currentPath === '/' || (currentPath.includes('index.html') && !currentPath.includes('personas') && !currentPath.includes('command-center') && !currentPath.includes('platform-guide') && !currentPath.includes('advanced-reporting') && !currentPath.includes('prompts-lab') && !currentPath.includes('roi-calculator') && !currentPath.includes('competitive-intel') && !currentPath.includes('orchestration') && !currentPath.includes('campaign-monitoring') && !currentPath.includes('guides'));
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
    const isGuides = currentPath.includes('guides');
    const isBuyingGroups = currentPath.includes('buying-groups');
    const isWorkspacesRef = currentPath.includes('workspaces-reference') || currentPath.includes('list-pulls');
    const isReferenceGroup = isAdvancedReporting || isBuyingGroups || isWorkspacesRef || isROICalculator;

    function getBasePath() {
        if (isCompetitiveIntel || isPlatformGuide || isDemandbaseSales || isDemandbaseMarketing || isAdvancedReporting || isPromptsLab || isROICalculator || isOrchestration || isCampaignMonitoring || isGuides || isBuyingGroups || isWorkspacesRef) return '../';
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
                    <a href="${bp}platform-guide/index.html" class="tp-nav-link ${(isPlatformGuide || isOrchestration) ? 'active' : ''}">Demandbase US Workspace</a>
                    <a href="${bp}demandbase-sales/index.html" class="tp-nav-link tp-nav-soon ${isDemandbaseSales ? 'active' : ''}" title="US Demandbase Sales — teaser, full page in build">US Demandbase Sales<span class="tp-soon-badge">Coming Soon</span></a>
                    <a href="${bp}demandbase-marketing/index.html" class="tp-nav-link ${isDemandbaseMarketing ? 'active' : ''}" title="DB AI — Demandbase AI Prompt Library">DB AI</a>
                    <a href="${bp}campaign-monitoring/index.html" class="tp-nav-link ${isCampaignMonitoring ? 'active' : ''}">Campaign Monitoring</a>
                    <a href="${bp}index.html" class="tp-nav-link ${isRoot ? 'active' : ''}">Content Engine</a>
                    <a href="${bp}prompts-lab/index.html" class="tp-nav-link ${isPromptsLab ? 'active' : ''}">Prompts Lab</a>
                    <a href="${bp}competitive-intel/index.html" class="tp-nav-link ${isCompetitiveIntel ? 'active' : ''}">Competitive Intel</a>
                    <a href="${bp}personas/index.html" class="tp-nav-link ${isPersonas ? 'active' : ''}">Persona Cards</a>
                    <div class="tp-nav-group ${isReferenceGroup ? 'active' : ''}">
                        <button class="tp-nav-link tp-nav-group-btn" aria-expanded="false" aria-haspopup="true">Reference
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </button>
                        <div class="tp-nav-dropdown">
                            <a href="${bp}advanced-reporting/index.html" class="tp-nav-drop-link ${isAdvancedReporting ? 'active' : ''}">Advanced Reporting</a>
                            <a href="${bp}buying-groups/index.html" class="tp-nav-drop-link ${isBuyingGroups ? 'active' : ''}">Buying Groups</a>
                            <a href="${bp}workspaces-reference/index.html" class="tp-nav-drop-link ${isWorkspacesRef ? 'active' : ''}">Workspaces &amp; List Pulls</a>
                            <a href="${bp}roi-calculator/index.html" class="tp-nav-drop-link ${isROICalculator ? 'active' : ''}">ROI Calculator</a>
                        </div>
                    </div>
                </div>
                <button class="tp-theme-toggle" aria-label="Toggle theme" title="Toggle dark/light mode">
                    <svg class="tp-theme-icon-light" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                    <svg class="tp-theme-icon-dark" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="display:none">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </button>
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

    function initNav() {
        if (document.querySelector('.tp-global-nav')) return; // Prevent double injection
        
        document.head.insertAdjacentHTML('beforeend', navCSS);
        document.body.insertAdjacentHTML('afterbegin', navHTML);

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
