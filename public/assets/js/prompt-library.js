// Demandbase AI Prompt Library — shared module (used by DB1 Marketing + US Demandbase Sales)
// One source of truth: the 57 verified prompts. Renders a searchable, copy-to-clipboard
// library into a target element, styled to the ABM Suite design system (light + dark).
(function () {
  'use strict';

  const PROMPTS = [
  {
    "section": "Account Journey & Pipeline Impact",
    "useCase": "Journey stage transition activities",
    "prompt": "For accounts that moved into MQA in the last month, show the top 5 marketing activities in the month before the move, as a table with activity type and the number of accounts for each.",
    "roles": [
      "ABM",
      "Ops"
    ]
  },
  {
    "section": "Account Journey & Pipeline Impact",
    "useCase": "Closed-won activity blueprint",
    "prompt": "For the last 20 new business won opportunities, show the top 5 marketing activities in the 3 months before the opportunity was created, as a table with activity type and how many of the 20 deals included it.",
    "roles": [
      "ABM",
      "Ops"
    ]
  },
  {
    "section": "Account Journey & Pipeline Impact",
    "useCase": "Time to pipeline",
    "prompt": "For new business opportunities created in the last 3 months, show the average number of days from first known engagement to opportunity creation, as a table broken out by journey stage.",
    "roles": [
      "ABM",
      "Ops"
    ]
  },
  {
    "section": "Account Journey & Pipeline Impact",
    "useCase": "Stalled account diagnostic",
    "prompt": "Show the accounts in their current journey stage for more than a month, as a table with stage, days in stage, and last activity date, sorted by days in stage.",
    "roles": [
      "ABM",
      "Ops"
    ]
  },
  {
    "section": "Account Journey & Pipeline Impact",
    "useCase": "Marketing present on new pipeline",
    "prompt": "For new business opportunities created in the last 3 months, show a table of the marketing programs and ad campaigns on those accounts with the number of accounts each touched, sorted by accounts touched.",
    "roles": [
      "ABM",
      "Ops"
    ]
  },
  {
    "section": "Account Journey & Pipeline Impact",
    "useCase": "Activity volume, won vs lost",
    "prompt": "Compare the average number of marketing activities on new business won versus lost opportunities in the last 6 months, as a table with one row per activity type and a column for each group.",
    "roles": [
      "ABM",
      "Ops"
    ]
  },
  {
    "section": "Buying Groups & Personas",
    "useCase": "Buying group coverage check",
    "prompt": "For accounts in MQA or Pipeline stage, show a table of the buying group personas engaged in the last 2 months and the personas missing, one row per account, sorted by number of missing personas.",
    "roles": [
      "ABM",
      "SDR"
    ]
  },
  {
    "section": "Buying Groups & Personas",
    "useCase": "Multi-thread coverage gap",
    "prompt": "For open opportunities with fewer than 3 engaged buying group members in the last month, show a table with opportunity stage, buying group member count, and value, sorted by value.",
    "roles": [
      "ABM",
      "SDR"
    ]
  },
  {
    "section": "Buying Groups & Personas",
    "useCase": "Champion identification",
    "prompt": "For accounts in Pipeline stage, show the most engaged buying group member in the last month, as a table with member name, title, and engagement points, one row per account, sorted by engagement points.",
    "roles": [
      "ABM",
      "SDR"
    ]
  },
  {
    "section": "Buying Groups & Personas",
    "useCase": "Persona engagement by stage",
    "prompt": "For accounts in MQA stage, show a table of buying group personas ranked by total engagement in the last month, with the top content for each.",
    "roles": [
      "ABM",
      "SDR"
    ]
  },
  {
    "section": "Buying Groups & Personas",
    "useCase": "Decision-maker activation",
    "prompt": "Show accounts in MQA or Engaged stage where a buying group member at Director level or above engaged in the last 14 days with zero Sales Touches in the last 14 days, as a table with member name, title, and the engagement signal.",
    "roles": [
      "ABM",
      "SDR"
    ]
  },
  {
    "section": "Intent & Signals",
    "useCase": "Surging intent accounts",
    "prompt": "Show the accounts with the largest increase in Demandbase intent in the last 14 days that are not yet in pipeline, as a table with the top surging keywords and qualification score, sorted by intent increase.",
    "roles": [
      "ABM",
      "SDR"
    ]
  },
  {
    "section": "Intent & Signals",
    "useCase": "Competitive intent watch",
    "prompt": "Show the accounts with competitive intent in the last month, as a table with customer-or-prospect, owner, and intent trend, sorted by intent strength.",
    "roles": [
      "ABM",
      "SDR"
    ]
  },
  {
    "section": "Intent & Signals",
    "useCase": "Intent-to-engagement conversion",
    "prompt": "Of the accounts with high Demandbase intent in the last 2 months, show the percentage that then visited the website, as a table with intent topic and the conversion percentage.",
    "roles": [
      "ABM",
      "SDR"
    ]
  },
  {
    "section": "Intent & Signals",
    "useCase": "Awareness-stage signal builder",
    "prompt": "Show accounts with a qualification score above 70 not yet in our CRM with high Demandbase intent in the last month, as a table with industry, employee count, annual revenue, and the surging topics, sorted by qualification score.",
    "roles": [
      "ABM",
      "SDR"
    ]
  },
  {
    "section": "Intent & Signals",
    "useCase": "Anonymous-to-known opportunities",
    "prompt": "Show accounts with more than 10 anonymous web visits in the last month but fewer than 3 known contacts, as a table with the pages visited and qualification score, sorted by anonymous visits.",
    "roles": [
      "ABM",
      "SDR"
    ]
  },
  {
    "section": "Awareness & Acquisition",
    "useCase": "Awareness campaign target list",
    "prompt": "Show accounts in Aware or Target stage with a qualification score above 70 not in an awareness campaign in the last 3 months, as a table with industry, employee count, and annual revenue, sorted by qualification score.",
    "roles": [
      "ABM"
    ]
  },
  {
    "section": "Awareness & Acquisition",
    "useCase": "Acquisition program performance",
    "prompt": "For each acquisition program in the last 3 months, show a table with accounts touched and accounts that advanced a journey stage, sorted by accounts touched.",
    "roles": [
      "ABM"
    ]
  },
  {
    "section": "Awareness & Acquisition",
    "useCase": "Account tiering inputs",
    "prompt": "Show accounts added to our database in the last month, as a table with qualification score, industry, employee count, and annual revenue, sorted by qualification score.",
    "roles": [
      "ABM"
    ]
  },
  {
    "section": "Awareness & Acquisition",
    "useCase": "MQA ready-for-sales digest",
    "prompt": "Show the accounts that became MQA in the last 7 days, as a table with owner, qualification score, pipeline-predict score, and top intent topics, sorted by pipeline-predict score.",
    "roles": [
      "ABM"
    ]
  },
  {
    "section": "Awareness & Acquisition",
    "useCase": "Look-alike prospecting",
    "prompt": "Show look-alike accounts not in our pipeline based on our new business won accounts from the last year, as a table with industry, employee count, annual revenue, and qualification score, sorted by qualification score.",
    "roles": [
      "ABM"
    ]
  },
  {
    "section": "Acceleration & Pipeline Execution",
    "useCase": "Open opportunity acceleration list",
    "prompt": "Show all open opportunities in Pipeline or SQL stage, as a table with days in stage and pipeline-predict score, sorted by pipeline-predict score.",
    "roles": [
      "ABM",
      "SDR"
    ]
  },
  {
    "section": "Acceleration & Pipeline Execution",
    "useCase": "Re-engagement triggers",
    "prompt": "Show open opportunities where the account had no engagement for at least a month then engaged in the last 7 days, as a table with what they re-engaged with and pipeline-predict score, sorted by pipeline-predict score.",
    "roles": [
      "ABM",
      "SDR"
    ]
  },
  {
    "section": "Acceleration & Pipeline Execution",
    "useCase": "Deal velocity benchmarking",
    "prompt": "For new business deals won in the last year, show the median days in each journey stage as a table, and list the open opportunities currently exceeding that median with their stage and days in stage.",
    "roles": [
      "ABM",
      "SDR"
    ]
  },
  {
    "section": "Acceleration & Pipeline Execution",
    "useCase": "Pipeline-predict change alerts",
    "prompt": "Show the open opportunities whose pipeline-predict score dropped the most in the last 14 days, as a table with the current score and the size of the drop, sorted by the drop.",
    "roles": [
      "ABM",
      "SDR"
    ]
  },
  {
    "section": "Acceleration & Pipeline Execution",
    "useCase": "Acceleration campaign audience",
    "prompt": "Show open opportunities in Pipeline stage that have not engaged our most recent acceleration content in the last month, as a table with the top engaged buying group members, sorted by pipeline-predict score.",
    "roles": [
      "ABM",
      "SDR"
    ]
  },
  {
    "section": "Customer Expansion & Retention",
    "useCase": "Expansion opportunity radar",
    "prompt": "Show customer accounts with rising expansion intent in the last 2 months and no open expansion opportunity, as a table with CSM, current ARR, and the product area they are engaging with, sorted by intent increase.",
    "roles": [
      "ABM",
      "CSM"
    ]
  },
  {
    "section": "Customer Expansion & Retention",
    "useCase": "At-risk customer signals",
    "prompt": "Show customer accounts with declining engagement in the last 2 months, a champion silent for more than 2 months, or competitive intent, as a table with CSM, renewal date, and the signal triggered, sorted by renewal date.",
    "roles": [
      "ABM",
      "CSM"
    ]
  },
  {
    "section": "Customer Expansion & Retention",
    "useCase": "Renewal prep list",
    "prompt": "Show customer accounts renewing in the next 3 months, as a table with CSM, ARR, and engagement change over the last 2 months, sorted by engagement decline.",
    "roles": [
      "ABM",
      "CSM"
    ]
  },
  {
    "section": "Customer Expansion & Retention",
    "useCase": "Cross-sell buying group mapping",
    "prompt": "For customer accounts with rising expansion intent in the last 3 months, show a table of the personas engaged and the personas missing, one row per account, sorted by intent.",
    "roles": [
      "ABM",
      "CSM"
    ]
  },
  {
    "section": "Customer Expansion & Retention",
    "useCase": "Customer journey re-acquisition",
    "prompt": "Show customer accounts that reached an expansion opportunity stage but had no engagement for more than 3 months, as a table with last engaged content, CSM, and ARR, sorted by ARR.",
    "roles": [
      "ABM",
      "CSM"
    ]
  },
  {
    "section": "Reporting & Executive",
    "useCase": "Weekly stage movement",
    "prompt": "Show the accounts that advanced or regressed a journey stage in the last 7 days, as a table with the prior stage, the new stage, and owner.",
    "roles": [
      "ABM",
      "Leadership"
    ]
  },
  {
    "section": "Reporting & Executive",
    "useCase": "Ad campaign efficiency",
    "prompt": "For ad campaigns in the last 3 months, show a table with spend, accounts reached, and accounts that advanced a journey stage, sorted by spend.",
    "roles": [
      "ABM",
      "Leadership"
    ]
  },
  {
    "section": "Reporting & Executive",
    "useCase": "Segment performance compare",
    "prompt": "Compare new business win rate and average days in pipeline across our top industries over the last 6 months, as a table with one row per industry.",
    "roles": [
      "ABM",
      "Leadership"
    ]
  },
  {
    "section": "Reporting & Executive",
    "useCase": "Persona engagement on won deals",
    "prompt": "For new business deals won in the last year, show a table of buying group personas ranked by how often they were engaged.",
    "roles": [
      "ABM",
      "Leadership"
    ]
  },
  {
    "section": "Reporting & Executive",
    "useCase": "Forecast confidence",
    "prompt": "Show open opportunities forecast to close in the next 2 months where engagement has stalled or declined, as a table with pipeline-predict score and the last engagement date, sorted by close date.",
    "roles": [
      "ABM",
      "Leadership"
    ]
  },
  {
    "section": "Advertising",
    "useCase": "Campaign performance snapshot",
    "prompt": "For ad campaigns in the last 3 months, show a table with spend, impressions, reached accounts, clicks, and account CTR, one row per campaign.",
    "roles": [
      "ABM",
      "Ops"
    ]
  },
  {
    "section": "Advertising",
    "useCase": "Impression bands",
    "prompt": "For ad campaigns in the last 3 months, show a table of reached accounts grouped into impression bands, with CTR and website visit rate for each band.",
    "roles": [
      "ABM",
      "Ops"
    ]
  },
  {
    "section": "Advertising",
    "useCase": "Post-impression web influence",
    "prompt": "Show accounts served an ad impression in the last 3 months that visited the website within a month without clicking the ad, as a table by campaign with reached accounts and qualifying accounts.",
    "roles": [
      "ABM",
      "Ops"
    ]
  },
  {
    "section": "Advertising",
    "useCase": "Ad cost efficiency",
    "prompt": "For ad campaigns in the last 3 months, show a table with cost per reached account, cost per engaged account, and cost per meeting using ad spend, one row per campaign.",
    "roles": [
      "ABM",
      "Ops"
    ]
  },
  {
    "section": "Advertising",
    "useCase": "Ad-influenced stage movement",
    "prompt": "For accounts reached by ad campaigns in the last 3 months, show a table of how many advanced a journey stage, broken out by stage.",
    "roles": [
      "ABM",
      "Ops"
    ]
  },
  {
    "section": "Advertising",
    "useCase": "Creative and ad group performance",
    "prompt": "For ad campaigns in the last 3 months, show a table of clicks, CTR, and website visits by creative and ad group.",
    "roles": [
      "ABM",
      "Ops"
    ]
  },
  {
    "section": "Advertising",
    "useCase": "Channel overlap",
    "prompt": "Compare reached accounts, website visits, and engaged accounts for accounts reached by both CTV and Display versus Display alone in the last 3 months, as a table with one column per group.",
    "roles": [
      "ABM",
      "Ops"
    ]
  },
  {
    "section": "Advertising",
    "useCase": "Account View-Through Rate",
    "prompt": "Among accounts reached by ad campaigns in Q2 2026 and served at least one impression, find those that visited the website within a month of an impression without clicking a Demandbase ad. Show a table by campaign with reached accounts, qualifying accounts, and Account View-Through Rate = qualifying accounts divided by reached accounts.",
    "roles": [
      "ABM",
      "Ops"
    ]
  },
  {
    "section": "Account-Context Plays",
    "useCase": "Look-alike from this account",
    "prompt": "Show look-alike accounts not in our pipeline, similar to {account.name}, as a table with industry and qualification score, sorted by qualification score.",
    "roles": [
      "SDR",
      "BD"
    ]
  },
  {
    "section": "Account-Context Plays",
    "useCase": "Account research brief",
    "prompt": "For {account.name}, show all marketing and sales activity in the last 3 months as a timeline.",
    "roles": [
      "SDR",
      "BD"
    ]
  },
  {
    "section": "Account-Context Plays",
    "useCase": "Buying group health check",
    "prompt": "For {account.name}, show a table of the buying group personas engaged in the last 2 months and the personas missing.",
    "roles": [
      "SDR",
      "BD"
    ]
  },
  {
    "section": "Account-Context Plays",
    "useCase": "Champion identification",
    "prompt": "For {account.name}, show the most engaged buying group members in the last month, as a table with title and engagement points, sorted by engagement points.",
    "roles": [
      "SDR",
      "BD"
    ]
  },
  {
    "section": "Account-Context Plays",
    "useCase": "Renewal prep brief",
    "prompt": "For {account.name}, show ARR, renewal date, buying group members engaged in the last 3 months, and recent intent.",
    "roles": [
      "SDR",
      "BD"
    ]
  },
  {
    "section": "Account-Context Plays",
    "useCase": "Expansion check",
    "prompt": "For {account.name}, show recent expansion intent and the buying group personas engaged and missing.",
    "roles": [
      "SDR",
      "BD"
    ]
  },
  {
    "section": "AI Account Summary & Financials",
    "useCase": "Exec briefing pull",
    "prompt": "For {account.name}, summarize the strategic priorities and financial health from their latest financial filing, and tie each priority to a way our solutions could help.",
    "roles": [
      "ABM",
      "SDR",
      "Leadership"
    ]
  },
  {
    "section": "AI Account Summary & Financials",
    "useCase": "Takeout wedge",
    "prompt": "For {account.name}, list the top risks or cost pressures mentioned in their recent financials, and note which of our capabilities maps to each.",
    "roles": [
      "ABM",
      "SDR",
      "Leadership"
    ]
  },
  {
    "section": "AI Account Summary & Financials",
    "useCase": "ICP-match read",
    "prompt": "For {account.name}, give me the AI Account Summary: ICP match, recent engagement, intent themes, and technologies in use, as a short brief I can read before a call.",
    "roles": [
      "ABM",
      "SDR",
      "Leadership"
    ]
  },
  {
    "section": "Site Visit Intelligence",
    "useCase": "Hot-page follow-up",
    "prompt": "Show accounts in my territory that visited a pricing or solution page in the last 7 days, as a table with the known contacts who visited and the pages they viewed, sorted by visits.",
    "roles": [
      "SDR",
      "BD"
    ]
  },
  {
    "section": "Site Visit Intelligence",
    "useCase": "Unknown-visitor surfacing",
    "prompt": "For {account.name}, show the recent website visits and the likely contacts behind the unknown sessions based on location, as a table with page and likely contact.",
    "roles": [
      "SDR",
      "BD"
    ]
  },
  {
    "section": "Leadership & Attribution Reads",
    "useCase": "Board-ready movement",
    "prompt": "Show accounts that advanced a journey stage in the last 30 days, grouped by vertical, as a table with count of accounts per stage transition.",
    "roles": [
      "ABM",
      "Leadership"
    ]
  },
  {
    "section": "Leadership & Attribution Reads",
    "useCase": "Marketing-sourced pipeline read",
    "prompt": "For new business opportunities created this quarter, show the marketing programs and ad campaigns present on those accounts, with accounts touched, sorted by accounts touched. (Directional — reconcile against CI 2.0.)",
    "roles": [
      "ABM",
      "Leadership"
    ]
  }
];

  // section metadata (icon + one-line description)
  const SECTIONS = {
    "Account Journey & Pipeline Impact": "What marketing did before accounts moved — and where they stall.",
    "Buying Groups & Personas": "Who's engaged inside the account, and who's still missing.",
    "Intent & Signals": "Surging accounts, competitive intent, and anonymous-to-known plays.",
    "Awareness & Acquisition": "Build target lists and grade new accounts entering the funnel.",
    "Acceleration & Pipeline Execution": "Move open pipeline — velocity, re-engagement, predict-score alerts.",
    "Customer Expansion & Retention": "Expansion radar, at-risk signals, and renewal prep on the install base.",
    "Reporting & Executive": "Weekly movement, segment compares, and forecast reads for leadership.",
    "Advertising": "Campaign efficiency, view-through, and ad-influenced stage movement.",
    "Account-Context Plays": "One-account deep dives — drop in {account.name} and go.",
    "AI Account Summary & Financials": "Public-company financials + strategic priorities, exec-grade in seconds.",
    "Site Visit Intelligence": "Turn anonymous + known web traffic into a who-to-call list.",
    "Leadership & Attribution Reads": "Fast QBR reads. Attribution answers are directional until CI 2.0."
  };
  const NEW_SECTIONS = ["AI Account Summary & Financials","Site Visit Intelligence","Leadership & Attribution Reads"];

  function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}

  const CSS = `
  .pl-wrap{margin-top:8px;}
  .pl-search{position:sticky;top:64px;z-index:10;background:var(--color-bg);padding:14px 0 10px;}
  .pl-search input{width:100%;padding:13px 18px;font-size:15px;border:1.5px solid var(--color-border);
    border-radius:var(--radius-full);background:var(--color-surface);color:var(--color-text);font-family:inherit;}
  .pl-search input:focus{outline:none;border-color:var(--color-primary);box-shadow:0 0 0 3px color-mix(in srgb,var(--color-primary) 14%,transparent);}
  .pl-meta{font-size:12.5px;color:var(--color-text-muted);margin-top:8px;padding-left:6px;}
  .pl-meta b{color:var(--color-text);}
  .pl-sec{margin-bottom:30px;scroll-margin-top:150px;}
  .pl-hd{display:flex;align-items:center;gap:14px;margin-bottom:14px;padding-bottom:12px;border-bottom:2px solid var(--color-border);}
  .pl-ic{width:42px;height:42px;border-radius:11px;background:var(--color-primary);color:#fff;display:flex;
    align-items:center;justify-content:center;font-size:19px;font-weight:800;flex-shrink:0;}
  .pl-ic.pl-new{background:#ff0082;}
  .pl-hd h3{font-size:19px;color:var(--color-text);font-weight:700;margin:0;}
  .pl-desc{margin:2px 0 0;font-size:13px;color:var(--color-text-muted);}
  .pl-roles{margin-left:auto;display:flex;align-items:center;gap:6px;flex-wrap:wrap;justify-content:flex-end;}
  .pl-cnt{font-size:11.5px;font-weight:700;color:var(--color-text-faint);background:var(--color-surface-2);border-radius:var(--radius-full);padding:3px 10px;}
  .pl-rp{font-size:10.5px;font-weight:800;letter-spacing:.04em;border-radius:var(--radius-full);padding:2px 9px;text-transform:uppercase;}
  .pl-rp-abm{background:#e7ecff;color:#2a3a8c;}.pl-rp-sdr{background:#e6f7ee;color:#0a7d54;}.pl-rp-bd{background:#fff0e6;color:#b45309;}
  .pl-rp-csm{background:#f3e9ff;color:#6b2fb5;}.pl-rp-ops{background:#eceef2;color:#484c6a;}.pl-rp-lead{background:#ffe6f2;color:#b0166a;}
  .pl-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:14px;}
  .pl-card{background:var(--color-surface);border:1px solid var(--color-border);border-radius:12px;padding:16px 18px;
    display:flex;flex-direction:column;transition:box-shadow .12s,border-color .12s;}
  .pl-card:hover{box-shadow:var(--shadow-md);border-color:var(--color-primary);}
  .pl-card-top{display:flex;align-items:center;gap:10px;margin-bottom:8px;}
  .pl-uc{font-size:13px;font-weight:800;color:var(--color-text);flex:1;}
  .pl-copy{font-size:11px;font-weight:700;color:#fff;background:var(--color-primary);border:none;
    border-radius:var(--radius-full);padding:5px 13px;cursor:pointer;transition:background .12s;flex-shrink:0;font-family:inherit;}
  .pl-copy:hover{background:#ff0082;}
  .pl-copy.done{background:#0a7d54;}
  .pl-pr{margin:0;font-size:13.5px;color:var(--color-text);line-height:1.55;}
  .pl-toast{position:fixed;bottom:26px;left:50%;transform:translateX(-50%) translateY(80px);background:var(--color-primary);
    color:#fff;padding:11px 22px;border-radius:var(--radius-full);font-size:14px;font-weight:600;box-shadow:var(--shadow-lg);
    opacity:0;transition:all .25s;z-index:9998;}
  .pl-toast.show{transform:translateX(-50%) translateY(0);opacity:1;}
  @media(max-width:600px){.pl-search{top:56px;}}
  `;

  function render(target){
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    if(!el) return;

    // group prompts by section, preserving order
    const groups = {};
    PROMPTS.forEach(p => { (groups[p.section] = groups[p.section] || []).push(p); });

    let html = '<div class="pl-wrap">';
    html += '<div class="pl-search"><input type="text" id="plQ" placeholder="&#128269;  Search '+PROMPTS.length+' prompts — try intent, renewal, buying group, ad…" autocomplete="off">'
         +  '<div class="pl-meta" id="plMeta">Showing all <b>'+PROMPTS.length+'</b> prompts across '+Object.keys(groups).length+' topic areas · <b>Copy</b> any prompt straight into AI Chat</div></div>';

    Object.keys(groups).forEach(sec => {
      const items = groups[sec];
      const isNew = NEW_SECTIONS.indexOf(sec) !== -1;
      const roles = items[0].roles || [];
      const roleHtml = roles.map(r => '<span class="pl-rp pl-rp-'+r.toLowerCase()+'">'+esc(r)+'</span>').join('');
      html += '<div class="pl-sec">'
           +  '<div class="pl-hd"><div class="pl-ic'+(isNew?' pl-new':'')+'">'+(isNew?'&#9733;':'&#9670;')+'</div>'
           +  '<div><h3>'+esc(sec)+(isNew?' <span style="font-size:11px;color:#ff0082;font-weight:800;vertical-align:middle;">NEW</span>':'')+'</h3><p class="pl-desc">'+esc(SECTIONS[sec]||'')+'</p></div>'
           +  '<div class="pl-roles">'+roleHtml+'<span class="pl-cnt">'+items.length+' prompts</span></div></div>'
           +  '<div class="pl-grid">';
      items.forEach(p => {
        const search = esc((sec+' '+p.useCase+' '+p.prompt).toLowerCase());
        html += '<div class="pl-card" data-search="'+search+'">'
             +  '<div class="pl-card-top"><span class="pl-uc">'+esc(p.useCase)+'</span>'
             +  '<button class="pl-copy" data-p="'+esc(p.prompt)+'">Copy</button></div>'
             +  '<p class="pl-pr">'+esc(p.prompt)+'</p></div>';
      });
      html += '</div></div>';
    });
    html += '</div>';

    // inject css once
    if(!document.getElementById('pl-style')){
      const st=document.createElement('style'); st.id='pl-style'; st.textContent=CSS; document.head.appendChild(st);
    }
    el.innerHTML = html;

    // toast
    let toast = document.getElementById('pl-toast');
    if(!toast){ toast=document.createElement('div'); toast.id='pl-toast'; toast.className='pl-toast'; toast.textContent='Copied to clipboard'; document.body.appendChild(toast); }

    // copy handlers
    el.querySelectorAll('.pl-copy').forEach(b => b.addEventListener('click', () => {
      const p = b.getAttribute('data-p');
      navigator.clipboard.writeText(p).then(() => {
        b.textContent='Copied'; b.classList.add('done');
        toast.classList.add('show');
        setTimeout(()=>{b.textContent='Copy'; b.classList.remove('done');},1400);
        setTimeout(()=>toast.classList.remove('show'),1400);
      });
    }));

    // search
    const q=el.querySelector('#plQ'), meta=el.querySelector('#plMeta');
    q.addEventListener('input', () => {
      const term=q.value.trim().toLowerCase(); let shown=0;
      el.querySelectorAll('.pl-card').forEach(c => {
        const hit = !term || c.getAttribute('data-search').indexOf(term)!==-1;
        c.style.display = hit ? 'flex' : 'none'; if(hit) shown++;
      });
      el.querySelectorAll('.pl-sec').forEach(s => {
        const any=[...s.querySelectorAll('.pl-card')].some(c=>c.style.display!=='none');
        s.style.display = any ? 'block' : 'none';
      });
      meta.innerHTML = term ? ('<b>'+shown+'</b> prompt'+(shown===1?'':'s')+' match "'+esc(term)+'"')
        : 'Showing all <b>'+PROMPTS.length+'</b> prompts across '+Object.keys(groups).length+' topic areas · <b>Copy</b> any prompt straight into AI Chat';
    });
  }

  window.renderPromptLibrary = render;
})();
