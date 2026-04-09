# Dark Mode Audit - ABM Suite Website

**Date**: 2026-04-08
**Status**: Critical - Multiple hardcoded colors found throughout site

## Executive Summary

The ABM Suite website has extensive dark mode issues caused by hardcoded color values instead of theme-aware CSS variables. This creates "black on black" text in dark mode and broken visual hierarchy. The issues span across all major pages.

---

## Critical Issues by File

### 1. **index.html** (Content Engine)
**Location**: `/public/index.html`

**Issues Found**:

#### Hero Section (Lines 42-59)
- `color: #ffffff` - Hardcoded white text
- **Should use**: `var(--color-text)` or keep as is if intentionally light

#### Input Tips (Line 299)
- `background: #FFF9E6` - Hardcoded amber background
- **Should use**: `var(--color-surface-offset)` or create `--color-warning-bg`

#### Inline Styles in JavaScript (Lines 750-1070)
Multiple instances of hardcoded colors in dynamically generated HTML:

**Line 752**:
```css
background: #e8f4fd; /* Blue background for paid posts */
```
**Should use**: `var(--color-info-bg)` or `var(--color-blue-bg)`

**Line 768**:
```css
background: #f8f9fa; /* Stats container background */
```
**Should use**: `var(--color-surface-2)`

**Line 787**:
```css
background: #fff3e0; /* Pre-event post background */
```
**Should use**: `var(--color-warning-bg)`

**Line 800**:
```css
background: #fffacd; /* During-event background */
```
**Should use**: `var(--color-warning-bg)` with lighter variant

**Line 813**:
```css
background: #e8f5e9; /* Post-event background */
```
**Should use**: `var(--color-success-bg)`

**Line 850**:
```css
background: #fff3cd; border-left: 4px solid #ffc107;
```
**Should use**: `var(--color-warning-bg)` and `var(--color-warning)`

**Line 854**:
```css
background: #e8f5e9;
```
**Should use**: `var(--color-success-bg)`

**Line 865**:
```css
background: #f0f8ff;
```
**Should use**: `var(--color-info-bg)`

**Line 902**:
```css
background: #f8f9fa;
```
**Should use**: `var(--color-surface-2)`

**Line 919**:
```css
background: #fff; border: 1px solid color-mix(...)
```
**Should use**: `var(--color-surface)`

**Line 974**:
```css
background: #fff3cd;
```
**Should use**: `var(--color-warning-bg)`

**Line 979**:
```css
background: #f8f9fa;
```
**Should use**: `var(--color-surface-2)`

**Line 1025**:
```css
background: white;
```
**Should use**: `var(--color-surface)` or `var(--color-bg)`

**Line 1062**:
```css
background: #fff;
```
**Should use**: `var(--color-surface)`

---

### 2. **prompts-lab/index.html**
**Location**: `/public/prompts-lab/index.html`

**Issues Found**:

#### Hero Section (Lines 42-70)
- `color: #ffffff` - Hardcoded white text in hero (Lines 42, 51)
- `color: rgba(255,255,255,0.85)` - Hardcoded white with opacity (Line 55)
- `color: #ff6eb8` - Hardcoded pink variant (Line 63)
- **Should use**: `var(--color-text)`, `var(--color-text-secondary)`, `var(--color-pink)`

#### Error State (Line 279)
- `color: var(--orange)` - Uses undefined variable (should be `var(--color-warning)`)

---

### 3. **personas/index.html**
**Location**: `/public/personas/index.html`

**Issues Found**:

#### CSS Variables (Lines 10-32)
Multiple hardcoded color values in :root that won't adapt to dark mode:
- `--white: #FFFFFF`
- `--black: #000000`
- `--dark-gray: #414141`
- `--body-gray: #555555`

**These create the "black on black" problem** - text colored with `--black` appears on dark backgrounds.

**Should create dark mode overrides**:
```css
[data-theme="dark"] {
  --black: #e2e8f0;  /* Light text for dark bg */
  --dark-gray: #cbd5e1;
  --body-gray: #94a3b8;
}
```

---

### 4. **competitive-intel/index.html**
**Location**: `/public/competitive-intel/index.html`

**Issues Found**:

#### Line 73:
```css
background: rgba(255, 255, 255, 0.1);
```
**Should use**: `var(--color-surface-offset)` with opacity

#### Line 500:
```css
background: #b0b5bc;
```
**Should use**: `var(--color-border-strong)` or appropriate variable

---

### 5. **guides/demandbase_person_list_sop_v3.html**
**Location**: `/public/guides/demandbase_person_list_sop_v3.html`

**Issues Found**:

#### Multiple Hardcoded Colors (Lines 13-80)
- Line 13: `background: #484C6A; color: #fff;`
- Line 16: `background: #FF0082; color: #fff;`
- Line 17: `color: #FF0082;`
- Line 21: `background: #484C6A; color: #fff;`
- Line 29: `color: #FF0082;`
- Line 42: `border-color: #484C6A;`
- Line 48-54: Multiple hardcoded colors in `.highlight-section`
- Line 60-61: `color: #FF6B35;` and `color: #4CAF50;`
- Line 76: `background: #FF0082;`

**Should use**: Existing CSS variables like `var(--slate)`, `var(--pink)`, `var(--white)` or create theme-aware overrides

---

### 6. **platform-guide/index.html**
**Location**: `/public/platform-guide/index.html`

**Issues Found**:

#### Multiple Inline Styles
- Line 40: `color:rgba(255,255,255,0.8)`
- Line 93: `color:#fff`
- Line 103-105: `color:#fff` (multiple instances)
- Line 110: `background:#e8f0fe;color:#1a56db`
- Line 130: `color:rgba(255,255,255,.8)`
- Line 153: `background:#fff5f5`
- Line 156: `color:#c0392b`
- Line 180: `color:rgba(255,255,255,0.65)`

**Should use**: CSS variables throughout

---

### 7. **content-engine-v4.html**
**Location**: `/public/content-engine-v4.html`

**Issues Found**:

Multiple hardcoded colors in inline styles (Lines 36-860):
- Line 36: `color: rgba(255,255,255,0.8)`
- Lines 132, 178: `color: white`
- Lines 220, 225, 239: `background: white`
- Lines 266-282: Multiple badge backgrounds (`#d4f4dd`, `#fef3c7`, `#fee2e2`, `#f0f9ff`)
- Line 337: `background: white`
- Line 371: `background: #ff3366`
- Line 377: `background: #f8f1ff`
- Lines 651-860: Multiple instances of hardcoded backgrounds in JavaScript

**Should use**: CSS variables for all color values

---

### 8. **campaign-status/index.html**
**Location**: `/public/campaign-status/index.html`

**Issues Found**:

Multiple status badge backgrounds (Lines 131-165):
- Line 131: `background: #f9fafb;`
- Line 145: `background: #d1fae5;` (green)
- Line 150: `background: #ffe4e6;` (red)
- Line 151: `color: #dc2626;` (red text)
- Line 155: `background: #fef3c7;` (yellow)
- Line 156: `color: #d97706;` (orange text)
- Line 160: `background: #e0e7ff;` (blue)
- Line 165: `background: #d1fae5;` (green)
- Line 415: `background: #f0fff4;` (inline style)

**Should use**: Semantic color variables like `var(--color-success-bg)`, `var(--color-error-bg)`, etc.

---

### 9. **performance-portal/index.html**
**Location**: `/public/performance-portal/index.html`

**Issues Found**:

Badge color definitions (Lines 89-91):
```css
.badge-red { background: rgba(214,40,40,0.2); color: #d62828; }
.badge-green { background: rgba(27,195,164,0.2); color: #1BC3A4; }
.badge-yellow { background: rgba(233,196,106,0.2); color: #e9c46a; }
```

**Should use**: `var(--color-error)`, `var(--color-success)`, `var(--color-warning)` with consistent opacity

---

## Recommended CSS Variable Additions

Add these to `/public/assets/css/dark-mode.css`:

```css
:root, [data-theme="light"] {
  /* Semantic backgrounds for status/alerts */
  --color-success-bg: #e8f5e9;
  --color-warning-bg: #fff3cd;
  --color-error-bg: #fee2e2;
  --color-info-bg: #e8f4fd;

  /* Badge/pill backgrounds */
  --color-badge-green: #d4f4dd;
  --color-badge-yellow: #fef3c7;
  --color-badge-red: #fee2e2;
  --color-badge-blue: #e0e7ff;

  /* Neutral surfaces */
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
}

[data-theme="dark"] {
  /* Semantic backgrounds - darker variants */
  --color-success-bg: rgba(34, 197, 94, 0.15);
  --color-warning-bg: rgba(245, 158, 11, 0.15);
  --color-error-bg: rgba(239, 68, 68, 0.15);
  --color-info-bg: rgba(59, 130, 246, 0.15);

  /* Badge/pill backgrounds */
  --color-badge-green: rgba(34, 197, 94, 0.2);
  --color-badge-yellow: rgba(245, 158, 11, 0.2);
  --color-badge-red: rgba(239, 68, 68, 0.2);
  --color-badge-blue: rgba(59, 130, 246, 0.2);

  /* Neutral surfaces */
  --color-gray-50: var(--color-surface);
  --color-gray-100: var(--color-surface-2);
  --color-gray-200: var(--color-surface-offset);
}
```

---

## Priority Fix List

### High Priority (Breaks Readability)
1. **personas/index.html** - Fix `--black`, `--dark-gray`, `--body-gray` variables
2. **index.html** - Fix all inline styles in JavaScript (Lines 750-1070)
3. **prompts-lab/index.html** - Fix hero text colors
4. **guides/demandbase_person_list_sop_v3.html** - Fix all hardcoded colors

### Medium Priority (Visual Hierarchy Issues)
5. **content-engine-v4.html** - Replace all hardcoded backgrounds
6. **campaign-status/index.html** - Use semantic status colors
7. **platform-guide/index.html** - Replace inline color styles

### Low Priority (Minor Issues)
8. **competitive-intel/index.html** - Fix background overlays
9. **performance-portal/index.html** - Standardize badge colors

---

## Implementation Strategy

### Phase 1: Define Variables (1-2 hours)
1. Add new semantic color variables to `dark-mode.css`
2. Test variable definitions in both light and dark modes

### Phase 2: Fix Core Pages (4-6 hours)
1. Fix `personas/index.html` CSS variables
2. Replace inline styles in `index.html` JavaScript
3. Update `prompts-lab/index.html` hero section

### Phase 3: Fix Remaining Pages (3-4 hours)
1. Update all guide pages
2. Fix status/badge components
3. Update platform guide colors

### Phase 4: Testing (2-3 hours)
1. Test each page in both light and dark modes
2. Verify no "black on black" or "white on white" issues
3. Check visual hierarchy and contrast ratios

---

## Testing Checklist

For each page, verify in **both light and dark modes**:
- [ ] All text is readable (no black on black)
- [ ] Background colors adapt appropriately
- [ ] Border colors remain visible
- [ ] Badge/status colors maintain semantic meaning
- [ ] Hover states work correctly
- [ ] Focus states are visible
- [ ] Shadow/elevation remains visible

---

## Notes

- The main issue stems from mixing hardcoded hex colors with CSS variables
- JavaScript-generated HTML contains the most hardcoded colors (especially in Content Engine)
- The personas page uses CSS variables that don't adapt to dark mode
- Many files use inline styles in HTML rather than CSS classes
- Some files reference undefined CSS variables (e.g., `var(--orange)`)

**Total Estimated Fix Time**: 10-15 hours
