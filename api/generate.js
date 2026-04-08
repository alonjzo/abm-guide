export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { action, industry, persona, challenge, tier } = req.body;

    if (!action || !industry || !persona || !challenge) {
      return res.status(400).json({ error: 'Industry, persona, and challenge are required' });
    }

    const tierContext = {
      '1:1': 'This is 1:1 hyper-personalized content for T1-A and Tier 1 named accounts. Content should reference specific company pain points, recent news, and named decision-makers. Maximum personalization.',
      '1:Few': 'This is 1:Few content targeting a small cluster of similar accounts in the same vertical. Content should reference industry-specific problems but not company-specific details.',
      '1:Many': 'This is 1:Many scalable content for Tier 2/3 accounts. Content should be broadly relevant across the vertical while still demonstrating deep domain expertise.'
    };

    const prompt = `You are an expert B2B ABM content strategist for TP, the world's largest CX and digital business services company. Generate comprehensive multi-channel content that can be used across ALL platforms - email, LinkedIn, Demandbase, website, sales scripts, and more.

CONTEXT:
- Industry/Vertical: ${industry}
- Target Persona: ${persona}
- Core Buyer Problem: ${challenge}
- ABM Motion: ${tier} — ${tierContext[tier] || tierContext['1:Many']}

TP POSITIONING:
- Global leader in digitally integrated business services (500K+ employees, 100+ countries)
- Core offerings: CX management, back-office processing, AI & automation (agentic solutions), trust & safety, revenue generation
- Key differentiators: TP GenAI (proprietary AI), multilingual capabilities (265+ languages), industry-specific compliance expertise
- Competitive set: Concentrix, TTEC, Conduent, TaskUs, Foundever, Alorica

CRITICAL REQUIREMENTS:
- All content is CROSS-CHANNEL READY: Can be used in email, LinkedIn, Demandbase, sales scripts, website, presentations
- All CTAs must drive pipeline: Register Now, Download Guide, Book Demo, Request Pricing, Schedule Consultation
- Include real statistics from Gartner, Forrester, McKinsey, IDC, or industry-specific research bodies
- Content must be specific to the persona's KPIs and decision-making authority
- Use buyer research language, not seller taxonomy
- NO generic "contact center outsourcing" messaging — lead with outcomes and transformation

Generate content for these channels:

1. LINKEDIN POSTS: Generate TWO VERSIONS for each of 3 posts:
   A) PAID VERSION (for sponsored content):
      - Hook: MAX 150 characters, pattern-interrupt style
      - Body: MAX 300 total characters including hook
      - Format: Single punchy paragraph, NOT multi-paragraph essays
      - Stats: Include ONE credible stat with source citation
      - CTA: Direct action verb (Register, Download, Book, Schedule)
   B) ORGANIC VERSION (for executive thought leadership):
      - Hook: Compelling opener that stops scrolling
      - Body: 500-800 characters, conversational tone
      - Format: Short paragraphs with line breaks for mobile readability
      - Stats: 2-3 industry statistics with source citations (Gartner, Forrester, McKinsey)
      - CTA: Softer engagement (Learn more, Join discussion, Share your experience)

2. BLOG ARTICLES with AEO (Answer Engine Optimization): 3 articles with:
   - Title: SEO-optimized, question-based when possible
   - Target Featured Snippet: 40-60 word direct answer paragraph
   - FAQ Schema Questions: 3-4 questions that should be H2/H3 headers
   - Outline Structure: Intro + 4-5 sections with H2 headers as questions
   - AEO Readiness: List of questions this article answers for AI models (ChatGPT, Perplexity, Gemini)
   - Keywords: Primary and LSI keywords for search optimization
   - Length & Stage: Word count target and funnel position

3. WEBINAR LANDING PAGE FRAMEWORK:
   - Headline: Benefit-driven title (60 chars max)
   - Subheadline: Value proposition statement
   - 3 Key Takeaways: What attendees will learn (bullets)
   - Speaker Bios: Placeholder for 2-3 SME speakers
   - Agenda: 4 items with duration (DO NOT DUPLICATE - duration appears ONCE per item)
   - 3 CTA Variations: "Save My Seat" / "Register Free" / "Claim Your Spot"
   - Promotional Copy Package:
     a) Email invite: 150 words, curiosity-driven
     b) LinkedIn promo: Social proof + FOMO elements
     c) Landing page hero: Benefit-stack + credibility markers

4. DEMANDBASE ONE ADS with Creative Direction:
   - Generate BOTH 1:1 and 1:Few versions
   - Display Ad Specs:
     * Headline: MAX 25 characters (ENFORCE THIS)
     * Body: MAX 90 characters for standard display
   - Include for each ad:
     * Creative direction notes (visual style, no stock photos, data viz preference)
     * Personalization tokens where applicable: [Account.Name], [Industry], [Persona.Title]
     * Ad format type: Leaderboard / Medium Rectangle / Native
   - 5 total variations mixing 1:1 personalized and 1:Few clustered

5. FUNNEL CONTENT with BUYER DNA:
   For each stage (TOFU/MOFU/BOFU), include:
   - BUYER DNA CARD:
     * Persona snapshot: Role, seniority, KPIs they own
     * Stage-specific motivations: What drives them at this point
     * Watering holes: Where they consume content (publications, communities, events)
     * Content format preferences: What they engage with (reports, videos, case studies)
     * Behavioral signals: Actions that indicate they're in this stage
   - Content Recommendations: Types and themes flowing FROM the buyer psychology

6. Orchestration Plays: 2 plays showing how this content activates through Demandbase > SFDC. Include trigger condition, action, task payload for rep, and routing logic.

Return ONLY valid JSON:
{
  "linkedinPosts": [
    {
      "paid": {
        "hook": "...",
        "body": "...",
        "totalChars": 0,
        "stat": "...",
        "source": "...",
        "cta": "..."
      },
      "organic": {
        "hook": "...",
        "body": "...",
        "stats": [{"stat":"...","source":"..."}],
        "hashtags": ["..."],
        "cta": "..."
      }
    }
  ],
  "linkedinGuidance": "...",
  "blogArticles": [
    {
      "title": "...",
      "featuredSnippet": "...",
      "faqQuestions": ["..."],
      "outline": [{"header":"...","content":"..."}],
      "aeoReadiness": ["..."],
      "keywords": {"primary":["..."],"lsi":["..."]},
      "length": "...",
      "funnelStage": "..."
    }
  ],
  "webinar": {
    "headline": "...",
    "subheadline": "...",
    "keyTakeaways": ["..."],
    "speakerBios": ["..."],
    "agenda": [{"item":"...","duration":"..."}],
    "ctaVariations": ["Save My Seat","Register Free","Claim Your Spot"],
    "promotionalCopy": {
      "email": "...",
      "linkedin": "...",
      "landingPage": "..."
    }
  },
  "demandbaseAds": [
    {
      "type": "...",
      "format": "...",
      "headline": "...",
      "headlineChars": 0,
      "body": "...",
      "bodyChars": 0,
      "cta": "...",
      "creativeDirection": "...",
      "personalizationTokens": ["..."]
    }
  ],
  "adsGuidance": "...",
  "funnelMapping": {
    "tofu": {
      "buyerDna": {
        "personaSnapshot": "...",
        "motivations": "...",
        "wateringHoles": ["..."],
        "contentPreferences": ["..."],
        "behavioralSignals": ["..."]
      },
      "contentTypes": ["..."],
      "themes": ["..."]
    },
    "mofu": {
      "buyerDna": {
        "personaSnapshot": "...",
        "motivations": "...",
        "wateringHoles": ["..."],
        "contentPreferences": ["..."],
        "behavioralSignals": ["..."]
      },
      "contentTypes": ["..."],
      "themes": ["..."]
    },
    "bofu": {
      "buyerDna": {
        "personaSnapshot": "...",
        "motivations": "...",
        "wateringHoles": ["..."],
        "contentPreferences": ["..."],
        "behavioralSignals": ["..."]
      },
      "contentTypes": ["..."],
      "themes": ["..."]
    }
  },
  "orchestrationPlays": [
    {
      "name": "...",
      "trigger": "...",
      "action": "...",
      "taskPayload": "...",
      "routeTo": "..."
    }
  ]
}`;

    const apiKey = process.env.GEMINI_API_KEY;
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 16384,
          responseMimeType: 'application/json'
        }
      })
    });

    if (!response.ok) {
      const errBody = await response.text();
      console.error('Gemini API error:', response.status, errBody);
      return res.status(502).json({ error: 'Gemini API error', details: errBody });
    }

    const data = await response.json();
    const candidate = data.candidates?.[0];
    const text = candidate?.content?.parts?.[0]?.text;

    if (!text) {
      const finishReason = candidate?.finishReason || 'UNKNOWN';
      console.error('No text returned. Finish reason:', finishReason, JSON.stringify(data).slice(0, 500));
      return res.status(502).json({ error: 'No content returned from Gemini', finishReason });
    }

    // Extract JSON from response (handle markdown fences)
    const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/) || [null, text];
    let cleanJson = (jsonMatch[1] || text).trim();

    // Try to parse, if it fails try to fix truncated JSON
    let content;
    try {
      content = JSON.parse(cleanJson);
    } catch (parseErr) {
      // Attempt to close truncated JSON
      console.error('JSON parse failed, attempting repair:', parseErr.message);
      // Close any open arrays/objects
      let fixed = cleanJson;
      const opens = (fixed.match(/\[/g) || []).length - (fixed.match(/\]/g) || []).length;
      const braces = (fixed.match(/\{/g) || []).length - (fixed.match(/\}/g) || []).length;
      for (let i = 0; i < opens; i++) fixed += ']';
      for (let i = 0; i < braces; i++) fixed += '}';
      content = JSON.parse(fixed);
    }

    return res.status(200).json(content);

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Failed to generate content',
      details: error.message
    });
  }
}
