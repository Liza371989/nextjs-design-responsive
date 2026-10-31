# Component Inventory

## React components

- [Button](stories/Button.tsx:17) — reusable button with primary/secondary, size, color, and click-handler props.
- [Header](stories/Header.tsx:15) — Storybook header with logged-in/logged-out states; uses `Button`.
- [Page](stories/Page.tsx:10) — Storybook example page composing `Header`.
- [Home](app/page.tsx:16) — page coordinator that owns filters, motion, sharing, and dialog state.
- [Button](app/components/Button.tsx:8) — shared button primitive with default, quiet, and icon variants.
- [Card](app/components/Card.tsx:3) — shared surface wrapper for content cards.
- [Logo](app/components/Text.tsx:8) — shared brand mark.
- [Eyebrow](app/components/Text.tsx:4) — shared small-label typography.
- [SiteHeader](app/components/Header.tsx:5) — portfolio header and navigation.
- [Hero](app/components/Hero.tsx:4) — hero copy and visual composition.
- [AboutSection](app/components/AboutSection.tsx:4) — studio introduction section.
- [InnovationSection](app/components/InnovationSection.tsx:5) — expandable innovation cards.
- [WorkSection](app/components/WorkSection.tsx:5) — filterable project gallery.
- [PossibilitiesSection](app/components/PossibilitiesSection.tsx:4) — possibilities call-to-action.
- [ContactSection](app/components/ContactSection.tsx:3) — contact call-to-action.
- [SiteFooter](app/components/Footer.tsx:4) — navigation, social actions, and footer metadata.
- [ProjectDialog](app/components/ProjectDialog.tsx:5) — selected-project detail dialog.
- [Motion](app/motion.tsx:6) — client-side animation, intersection-observer, parallax, pointer, and reduced-motion behavior.
- [RootLayout](app/layout.tsx:21) — global Next.js layout with fonts, metadata, and page shell.

## Storybook stories

- `Button`: Primary, Secondary, Large, Small
- `Header`: LoggedIn, LoggedOut
- `Page`: LoggedIn, LoggedOut

The Nova page is composed from focused components in `app/components/`; `Home` is intentionally limited to page-level state and composition.
