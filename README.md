GreenHope Foundation — Part 3
A responsive, five-page demonstration site for a community-focused environmental foundation in South Africa.
Pages
index.html — Home
about.html— About GreenHope
projects.html — Environmental programmes
enquiry.html — Get involved form
contact.html — Office and contact information
Responsive test plan
The CSS has dedicated responsive rules for these representative viewport widths. Capture the listed views in browser developer tools before submission and paste the screenshots below this table.
Viewport	Layout checks
Desktop — 1440px	Header navigation, multi-column cards, split feature sections
Tablet — 768px	Two-column project/contact content and comfortably scaled typography
Mobile — 390px	Menu toggle, single-column content, full-width form controls and buttons
>The desktop, tablet and mobile checks above remain ready to complete in a local browser's responsive device mode.
Changelog
2026-09-17 — Part 2 styling and Part 1 consolidation
Consolidated the supplied Part 1 page markup into five valid standalone HTML documents. This resolves the pasted source's concatenated document fragments and inconsistent closing tags, ensuring each page has one <!doctype html>, head, body, header, main area, and footer.
Created the shared external stylesheet at `css/style.css` and removed page-level styling dependency. It uses CSS custom properties, a small reset, shared component selectors, Grid and Flexbox so common UI elements are styled once through the cascade.
Added a desktop-first visual system: accessible colour contrast, type scale, consistent spacing, cards, buttons, borders, shadows, hover/focus-visible states, and a reusable hero treatment.
Implemented breakpoints at 900px and 600px. Content grids reduce from three/two columns to one column, the navigation becomes a keyboard-accessible menu toggle, type and spacing scale appropriately, and calls-to-action become touch-friendly.
Added responsive pictureelements with srcset and sizes for content photography, descriptive alternative text, lazy loading for below-the-fold images, and an image source reference.
Kept and improved the enquiry form behaviour: required-field feedback, email format validation, an accessible live status message, and removal of invalid states once corrected.
Added this README with project information, test-view descriptions, Part 2 changelog, and updated references. No individual Part 1 marker feedback was supplied with the project; the structural and consistency issues visible in the supplied source were addressed above.
Performed static validation: each page has one doctype, a viewport declaration, the shared stylesheet, shared script and a main landmark; js/script.js also passes Node syntax checking. Interactive browser screenshot capture remains a final local submission step because this environment blocks local-file browser navigation.
2026-09-17 — Visual and interaction refinement
Added a richer shared visual system without duplicating selectors: a translucent sticky header, scrolling header elevation, layered hero accent, animated card top borders, improved button press feedback and visible keyboard focus treatment.
Added responsive impact statistics, intersection-observer reveal effects, animated number counters and live removal of form error styling as a visitor corrects input. A reduced-motion media query disables non-essential movement for visitors who prefer it.
Added explicit :active feedback to buttons to complete the interactive-state coverage required by the brief.
References
MDN Web Docs — CSS
MDN Web Docs — Responsive images
MDN Web Docs — Using media queries
Unsplash Source — nature and community photography
WCAG 2.2 Quick Reference
MDN Web Docs — HTML dialog element
MDN Web Docs — FormData
Google Search Central — Sitemap overview
Changelog (continued)
2026-11-02 — Part 3 functionality and SEO
Applied Part 2 feedback: removed the planned map placeholder and map-integration copy. The contact page now prioritises the required general-message form instead.
Added a dynamically rendered project directory on projects.html. Visitors can search terms and filter Community, Clean-up, Education and Youth projects; the card content is generated from a single JavaScript array using DOM manipulation.
Added an accessible project photo gallery using native `dialog lightbox behaviour. Image buttons open a larger image with an alternative-text description and close control.
Expanded enquiry.html with a telephone field, minimum character requirements and contextual outcomes. After valid input, the form identifies the relevant availability or next step for the selected interest.
Added a separate general-message form to contact.html with name, email, telephone, message type and message fields. It validates input, compiles the submitted details, and opens a pre-addressed email to `hello@greenhope.org.za` through the visitor's email application. The form retains an explicit `mailto: action as a no-JavaScript fallback.
Improved client-side validation with field-level messages for required values, email format, telephone format and minimum length. Forms use asynchronous feedback before returning a success or error status; no personal form data is sent to a third-party service by this static demonstration.

2026-11-02 — Creative visual redesign
Rebuilt the visual presentation into an eco-action hub rather than retaining the earlier conventional foundation layout. The new design uses a distinctive deep-ink, electric-lime, teal, coral and gold palette; editorial display typography; pill navigation; bento-style offset cards; graphic hero rings; and high-contrast action buttons.
Restyled every shared component in the external stylesheet, including navigation, hero areas, content grids, project search controls, gallery, lightbox, form surfaces, statistics, calls to action and footer. All Part 3 behaviours and responsive breakpoints remain unchanged.
Preserved mobile usability: the redesigned navigation collapses to a card-like menu, grids stack into single columns, forms and controls remain full width, and motion is reduced for users with a reduced-motion preference.
