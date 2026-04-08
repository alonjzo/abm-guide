export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { type, competitor, channel, persona, vertical, trigger, accountName } = req.body;

    if (!type) {
      return res.status(400).json({ error: 'Type is required' });
    }

    const accountTarget = accountName && accountName.trim() ? accountName.trim() : 'the target account';
    let prompt;

    if (type === 'displacement') {
      if (!competitor || !channel || !persona) {
        return res.status(400).json({ error: 'Displacement requires competitor, channel, and persona' });
      }

      prompt = `You are a senior competitive intelligence strategist at Teleperformance (TP), the world's largest CX/BPO firm — 500,000+ employees, 100+ countries, $9B revenue. Your job: build a displacement playbook to move ${accountTarget} off ${competitor}.

Generate a complete, ready-to-use competitive battlecard in this exact format:

## WHY ${competitor.toUpperCase()} IS VULNERABLE
Three specific, real weaknesses ${competitor} has in enterprise BPO/CX deals. Reference their known issues — pricing opacity, offshore quality inconsistency, integration challenges, lack of vertical depth, slow innovation, talent attrition, or client churn patterns. Be specific and credible.

## THE TP EDGE
Three direct TP differentiators that directly counter those weaknesses. Anchor to: TP.ai platform (ASSIST, COLLECT, CONNECT modules), global delivery scale, vertical-specific expertise, outcome-based pricing, and consultative vs. commodity positioning.

## ${channel.toUpperCase()} OUTREACH — ${persona.toUpperCase()}
Write ready-to-use ${channel} copy that:
- Opens with a business outcome, not a product pitch
- References ${competitor}'s vulnerability naturally without naming them in the opener
- Positions TP as an upgrade, not just a swap
- Closes with one low-friction next step (benchmark, brief conversation, or proof point)
Keep it tight: 4-6 sentences for LinkedIn, 6-8 for Email, full script for Call.

## WIN THEMES
Two proof-point statements a senior AE can drop into any conversation against ${competitor}. Format: one sentence each, outcome-anchored.

## LANDMINE QUESTIONS
Three discovery questions that expose ${competitor}'s weaknesses without naming them. These surface the pain on their own.

Make this battle-tested and immediately usable. No generic BPO language — every line should be specific to the TP vs. ${competitor} dynamic.`;

    } else if (type === 'conversation') {
      if (!trigger) {
        return res.status(400).json({ error: 'Conversation requires trigger' });
      }
      const verticalContext = vertical && vertical !== 'all' ? ` in the ${vertical} space` : '';

      prompt = `You are a senior B2B sales strategist at Teleperformance (TP), the world's largest CX/BPO firm — 500,000+ employees, 100+ countries, $9B revenue. Build a conversation playbook for ${accountTarget}${verticalContext}.

Trigger scenario: "${trigger}"

Generate a complete, ready-to-use conversation guide in this exact format:

## WHAT THIS SIGNAL MEANS
In 2-3 sentences: what business problem ${accountTarget} is actively evaluating right now, and why this trigger means the timing is open. Be specific to the trigger — no generic observations.

## CONVERSATION OPENERS — 3 ANGLES
Write three distinct opening messages, each from a different angle. Keep each to 2-3 sentences. No vendor language. Sound like a peer, not a sales rep.
1. **Business Problem angle** — lead with the pain this trigger signals
2. **Competitive Context angle** — lead with what peers in their space are doing
3. **Industry Trend angle** — lead with a market shift that makes this trigger urgent

## TP TALKING POINTS
Five TP-specific talking points anchored directly to this trigger. Each should connect a TP capability to the exact problem the trigger signals. No generic BPO claims — make it feel like TP has done this exact thing for this exact scenario.

## DISCOVERY QUESTIONS
Four questions that deepen the conversation and naturally surface budget, timeline, and authority signals. Questions should feel consultative, not interrogative.

## NEXT STEP
One specific call-to-action appropriate for this trigger stage. Make it low-friction and value-forward — not "let's set up a call."

Make this immediately usable. A BDR should be able to pick this up and run with it today.`;

    } else {
      return res.status(400).json({ error: 'Invalid type. Use displacement or conversation.' });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: 'API key not configured. Check Vercel environment variables.' });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 2048
          }
        })
      }
    );

    if (!response.ok) {
      const errBody = await response.text();
      console.error('Gemini API error:', response.status, errBody);
      return res.status(502).json({
        error: 'Gemini API returned an error',
        status: response.status,
        details: errBody
      });
    }

    const data = await response.json();
    const output = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!output) {
      return res.status(502).json({ error: 'Gemini returned empty content. Try again.' });
    }

    return res.status(200).json({ output });

  } catch (error) {
    console.error('Battlecard handler error:', error);
    return res.status(500).json({
      error: 'Something went wrong generating the battlecard.',
      details: error.message
    });
  }
}
