# GreenHope Foundation — Part 2

A responsive, five-page demonstration site for a community-focused environmental foundation in South Africa.

## Pages

- `index.html` — Home
- `about.html` — About GreenHope
- `projects.html` — Environmental programmes
- `enquiry.html` — Get involved form
- `contact.html` — Office and contact information

## Responsive test plan

The CSS has dedicated responsive rules for these representative viewport widths. Capture the listed views in browser developer tools before submission and paste the screenshots below this table.

| Viewport | Layout checks |
| --- | --- |
| Desktop — 1440px | Header navigation, multi-column cards, split feature sections |
| Tablet — 768px | Two-column project/contact content and comfortably scaled typography |
| Mobile — 390px | Menu toggle, single-column content, full-width form controls and buttons |


## Changelog

### 2026-09-17 — Part 2 styling and Part 1 consolidation

- Consolidated the supplied Part 1 page markup into five valid standalone HTML documents. This resolves the pasted source's concatenated document fragments and inconsistent closing tags, ensuring each page has one `<!doctype html>`, `head`, `body`, header, main area, and footer.
- Created the shared external stylesheet at `css/style.css` and removed page-level styling dependency. It uses CSS custom properties, a small reset, shared component selectors, Grid and Flexbox so common UI elements are styled once through the cascade.
- Added a desktop-first visual system: accessible colour contrast, type scale, consistent spacing, cards, buttons, borders, shadows, hover/focus-visible states, and a reusable hero treatment.
- Implemented breakpoints at 900px and 600px. Content grids reduce from three/two columns to one column, the navigation becomes a keyboard-accessible menu toggle, type and spacing scale appropriately, and calls-to-action become touch-friendly.
- Added responsive `picture` elements with `srcset` and `sizes` for content photography, descriptive alternative text, lazy loading for below-the-fold images, and an image source reference.
- Kept and improved the enquiry form behaviour: required-field feedback, email format validation, an accessible live status message, and removal of invalid states once corrected.
- Added this README with project information, test-view descriptions, Part 2 changelog, and updated references. No individual Part 1 marker feedback was supplied with the project; the structural and consistency issues visible in the supplied source were addressed above.
- Performed static validation: each page has one doctype, a viewport declaration, the shared stylesheet, shared script and a main landmark; `js/script.js` also passes Node syntax checking. 

### 2026-09-17 — Visual and interaction refinement

- Added a richer shared visual system without duplicating selectors: a translucent sticky header, scrolling header elevation, layered hero accent, animated card top borders, improved button press feedback and visible keyboard focus treatment.
- Added responsive impact statistics, intersection-observer reveal effects, animated number counters and live removal of form error styling as a visitor corrects input. A reduced-motion media query disables non-essential movement for visitors who prefer it.
- Added explicit `:active` feedback to buttons to complete the interactive-state coverage required by the brief.

## References

- [MDN Web Docs — CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [MDN Web Docs — Responsive images](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Responsive_images)
- [MDN Web Docs — Using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Unsplash Source — nature and community photography](https://unsplash.com/)
- [WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/)
