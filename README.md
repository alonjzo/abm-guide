# ABM Content Arsenal

AI-powered multi-channel content generator for B2B ABM campaigns. Transform account intelligence into ready-to-deploy content across LinkedIn, blogs, webinars, ads, and funnel stages.

## Features

- **Keyword Generation**: AI-generated keywords organized by Pain Points, Solutions, and Industry Terms
- **Multi-Channel Content**:
  - 📱 LinkedIn: 5 post variations with hooks, hashtags, and CTAs
  - 📝 Blog: 3 article outlines with SEO keywords
  - 🎥 Webinar: Complete framework with agenda
  - 🎯 DB1 Ads: 5 programmatic ad variations
  - 🎯 Funnel: TOFU/MOFU/BOFU content mapping

## Deployment Instructions

### Prerequisites
- [Vercel account](https://vercel.com/signup) (free)
- [Vercel CLI](https://vercel.com/download) installed
- Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey)

### Quick Deploy

1. **Install Vercel CLI** (if not already installed):
```bash
npm install -g vercel
```

2. **Navigate to project directory**:
```bash
cd "/Users/josh/Library/Mobile Documents/com~apple~CloudDocs/JA Workspace/Desktop - M32_Work/Admin Mode/01_Current_Work/ABM_Content_Arsenal"
```

3. **Login to Vercel**:
```bash
vercel login
```

4. **Deploy**:
```bash
vercel
```

When prompted:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- Project name? **abm-content-arsenal** (or your choice)
- Which directory? **./public** (important!)
- Want to override settings? **N**

5. **Add Environment Variable** (CRITICAL):
```bash
vercel env add GEMINI_API_KEY
```

When prompted:
- What's the value? **[Paste your Gemini API key]**
- Which environments? Select **Production, Preview, Development** (all three)

6. **Redeploy with environment variable**:
```bash
vercel --prod
```

7. **Done!** Your app is live at the URL Vercel provides (e.g., `abm-content-arsenal.vercel.app`)

### Sharing with Team

1. Copy the production URL from Vercel
2. Share with your ABM team via email/Slack
3. They click → use immediately (no setup required)

### Updating the App

If you make changes:
```bash
vercel --prod
```

## Local Development

1. **Install dependencies**:
```bash
npm install
```

2. **Create `.env` file** in project root:
```
GEMINI_API_KEY=your_key_here
```

3. **Run locally**:
```bash
vercel dev
```

4. **Open** http://localhost:3000

## API Usage

The app uses Google Gemini 2.0 Flash (free tier):
- **Free tier**: 15 requests/min, 1M tokens/day
- **Pricing after free**: ~$0.075 per 1K requests (very cheap)

Your entire team can use this without exceeding free tier limits in normal usage.

## Support

If deployment fails:
1. Check that GEMINI_API_KEY environment variable is set
2. Verify your Gemini API key is valid
3. Check Vercel deployment logs: `vercel logs`

## Security

- API key is stored securely as Vercel environment variable (server-side only)
- Never exposed to client/browser
- Team members can't access your API key
