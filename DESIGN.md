---
name: Jose Santana Portfolio
description: A typographic terminal atlas of software, accessibility, hardware, and infrastructure.
colors:
  ground: "#080d10"
  surface: "#10191d"
  ink: "#e8efed"
  muted: "#a6b6b8"
  line: "#2d4248"
  cyan: "#73f5dc"
  acid: "#e5fb6a"
  warm: "#f5bd90"
  dark-ink: "#101610"
typography:
  display:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(72px, 11.4vw, 172px)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(42px, 4.6vw, 68px)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(30px, 3vw, 44px)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Maple Mono, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  square: "0px"
spacing:
  small: "8px"
  compact: "12px"
  control: "16px"
  regular: "24px"
  group: "32px"
  row: "48px"
  column: "64px"
  section-mobile: "80px"
  section: "120px"
components:
  button-primary:
    backgroundColor: "{colors.acid}"
    textColor: "{colors.dark-ink}"
    rounded: "{rounded.square}"
    padding: "16px 24px"
  button-primary-hover:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.dark-ink}"
  text-link:
    textColor: "{colors.ink}"
  copy-button:
    textColor: "{colors.dark-ink}"
    rounded: "{rounded.square}"
    padding: "10px 16px"
  copy-button-hover:
    backgroundColor: "{colors.dark-ink}"
    textColor: "{colors.acid}"
  focus-filter:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.muted}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "10px 14px"
  focus-filter-selected:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.dark-ink}"
  ascii-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.cyan}"
    rounded: "{rounded.square}"
    padding: "22px 14px 0"
---

# Design System: Jose Santana Portfolio

## Overview

**Creative North Star: "A typographic terminal atlas"**

Large, tightly set names and headings share the page with authored ASCII artwork and readable descriptions. The character is technical, direct, and personal: letterforms carry the identity, and each diagram points to a real system Jose built.

The user's explicit ASCII + cyberpunk direction governs the palette, terminal lettering, angular forms, fine dividing rules, and text artwork. These are intentional visual commitments. Keep the main reading voice clear and the terminal voice concentrated in artwork, metadata, and controls.

**Key Characteristics:**

- Oversized grotesk headings with compact spacing.
- Monospaced ASCII imagery and concise technical labels.
- Dark tonal regions with cyan, acid-yellow, and a restrained warm accent.
- Flat, square geometry with a clipped primary action.
- Native disclosures, optional motion, and content available without JavaScript.

This is a code-derived record of `dist/styles.css`, `dist/index.html`, and `dist/app.js`. It does not certify a browser review. The frontmatter owns reusable token values; the sidecar owns motion, breakpoints, and component previews. PRODUCT.md remains the authority for facts; the surface brief owns page strategy.

## Colors

The dark blue-green ground makes luminous lettering legible; color signals actions and diagram identity without simulated glow.

### Primary

**Signal Cyan** (`cyan`) identifies the monogram, wordmark, technical labels, links, selected filters, focus outlines, and the API and infrastructure diagrams.

### Secondary

**Acid Yellow** (`acid`) fills the primary action and contact region, and colors the piano diagram. **Dark Control Ink** (`dark-ink`) supplies text and outlines on these bright surfaces.

### Tertiary

**Warm Apricot** (`warm`) distinguishes the phone-dock diagram. Its current use is local to the hardware illustration, not a second action color.

### Neutral

- **Terminal Ground** (`ground`): the page canvas and unselected filters.
- **Raised Terminal Surface** (`surface`): project-diagram panels and the experience region.
- **Reading Ink** (`ink`): headings and primary prose.
- **Quiet Metadata** (`muted`): supporting copy, captions, and dates.
- **Structural Rule** (`line`): dividers and inactive control outlines.

**The Contrast Pair Rule.** Bright cyan and acid fills take Dark Control Ink. The dark canvas takes Reading Ink or Quiet Metadata; do not use muted dark rules as body text.

## Typography

**Display and body:** locally hosted Space Grotesk, with sans-serif fallback. **Labels and artwork:** locally hosted Maple Mono, with monospace fallback. The shipped faces provide regular and bold grotesk weights, and regular mono.

The grotesk voice gives the name and projects clear hierarchy. Monospace preserves ASCII alignment and makes technical inventories distinct without turning every paragraph into terminal output.

### Hierarchy

- **Display:** the `display` role supports the uppercase, stacked name. Its responsive changes belong to Layout.
- **Headline:** the `headline` role introduces sections; prose uses normal case and balanced wraps.
- **Title:** the `title` role identifies projects. Experience and education use smaller headings within the same family.
- **Body:** the `body` role is the page baseline; project introductions use (18px), detail copy uses (16px), with observed text measures of roughly (42–60ch).
- **Label:** the `label` role carries metadata, technologies, filters, and captions. Artwork uses individually fitted mono sizes with preserved whitespace and no tracking.

**The Real Text Rule.** ASCII illustrations remain actual preformatted text with a meaningful surrounding label or caption. Hide decorative glyph strings from assistive technology; retain useful explanatory text.

## Layout

The centered wrapper caps at (1560px), with a fluid horizontal gutter of `clamp(20px, 4.2vw, 64px)`. Main desktop heading, work, and experience rows use a (1.3fr / 1fr) grid and a (64px) gap. The hero uses the same column proportion with a smaller (24px) gap. Project copy precedes the diagram in reading order.

Section spacing uses the `section` token on wide screens and `section-mobile` on narrow screens. Project rows have (48px) vertical padding and a single top rule. Body copy keeps readable measures; the page's strongest full-width color field belongs to contact.

At (1100px), major content grids narrow to (1.15fr / 1fr) with (40px) gaps, the hero uses (1.2fr / 1fr), and the contact heading stacks. At (760px), rows become single-column, project diagrams follow copy at full width, education and skill groups stack, navigation stays visible, and the base type becomes (16px). The mobile name is (17.8vw), section titles are (44px), and project titles are (34px). At (380px), navigation gaps and filter padding shrink further.

The hero monogram remains visible across the responsive layouts. At (499px) and below, navigation deliberately occupies two rows: the wordmark followed by the four links, each with a (44px) minimum target. Above (1600px), the name caps at (172px). Readable metadata stays at least (13px); the smaller preformatted artwork is decorative and has explanatory captions.

Print uses a white canvas and black text, strips artwork and interactive chrome, and simplifies columns. It preserves the main reading content; project disclosure bodies are omitted in the existing print stylesheet.

## Elevation & Depth

There are no box shadows, blur layers, gradient backgrounds, or glow effects in the implemented system. Depth comes from the difference between Terminal Ground and Raised Terminal Surface, while thin rules distinguish rows. ASCII's own character density provides the monogram's dimensional effect.

**The Flat Surface Rule.** Preserve tonal separation and fine rules when adding a surface. A shadow is not the current system's elevation language.

## Shapes

Controls and panels use square corners. The main action clips a (10px) lower-right corner; other surfaces remain rectangular. Borders and dividers are (1px). Inline line icons use square caps, miter joins, and a (1.6px) stroke in a (20px) box. A tiny corner radius in the copy icon belongs to that symbol, not to the panel vocabulary.

## Components

### Primary action and text links

The primary action uses the frontmatter's `button-primary` treatment, a (56px) minimum height, bold (16px) type, and the clipped corner. Hover changes its fill to cyan and lifts it (3px); activation shifts it down (2px). Secondary actions are open text links with (44px) minimum height and an underline on hover. Keep ordinary links as anchors, including downloads and in-page navigation.

### Focus filters and technology lists

Focus filters are square outlined buttons with a (44px) minimum height. Cyan fill and `aria-pressed="true"` mark selection. The active category is stored in the `focus` URL parameter, and browser Back/Forward restores it. Invalid values show all work. The filter toolbar appears only when JavaScript is available, leaving every project visible otherwise. Technologies form a wrapping mono text list without capsules or filled badges.

### Project ledger and disclosures

Projects are separated rows rather than enclosed cards. Each pairs title, summary, technology list, and a native `details` disclosure with an ASCII diagram. The disclosure's cyan plus rotates (45deg) when open. It has a (44px) minimum-height summary; its content is muted, readable prose. Source links appear only where actual source links exist.

### ASCII panels and monogram

Project diagrams use the `ascii-panel` treatment, centered preformatted text, a ruled caption, and a local diagram color. Four authored diagrams represent inventory, piano feedback, a phone dock, and infrastructure. The hero uses a separate open-ground JS monogram. Preserve glyph alignment and use captions to explain substance; diagrams are illustrations, not invented application screenshots.

### Navigation and contact controls

Navigation is a compact visible row of section anchors with (44px) minimum hit areas, a cyan wordmark, and an acid contact link. The contact region reverses to acid with dark text. Its outlined copy button is enabled only when secure clipboard access exists; a status region reports success or a fallback instruction. There is no contact form or input component in this system.

### Focus and motion

Interactive elements use a visible cyan (3px) outline offset by (6px), switching to dark ink on the acid contact field. Color changes take (180ms); control transforms take (200ms) using the recorded easing. The monogram floats gently over (7s), the cursor pulses over (1.5s), and content enters once with a short vertical movement. A visitor can pause animations. The reduced-motion media query disables animations, transitions, and smooth scrolling; JavaScript follows preference changes. Do not introduce hidden-content prerequisites for these effects.

## Do's and Don'ts

### Do:

- **Do** preserve the user's ASCII + cyberpunk identity, including monospace, fine rules, and real text artwork.
- **Do** pair large expressive headings with readable mixed-case descriptions.
- **Do** carry the cyan and acid contrast pairs into new controls and focus states.
- **Do** keep project content readable without scripts and use native elements for navigation and disclosures.
- **Do** preserve motion controls, reduced-motion support, and explanatory captions for artwork.

### Don't:

- **Don't** replace authored diagrams with stock photos or fabricated project screenshots.
- **Don't** add rounded card grids, glow, or shadow layers as though they were incumbent patterns.
- **Don't** make every paragraph monospace or use tiny metadata as the main reading voice.
- **Don't** turn warm diagram color into an unexplained action or status color.
- **Don't** turn unverified claims, dates, or live-status indicators into visual decoration.
