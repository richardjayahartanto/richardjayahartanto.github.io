# Personal Profile Redesign

## Goal

Redesign Richard Jaya Hartanto's static personal profile page into a recruiter-first professional profile that makes his seniority, systems experience, leadership scope, and contact path clear at a glance on laptop, tablet, and mobile screens.

The page's single job is to help employers and recruiters understand what Richard builds, how he leads, and how to contact him or download the current CV.

## Audience and positioning

- Primary audience: employers, recruiters, and hiring teams.
- Subject: an IT leader, senior full-stack developer, and ERP/IoT systems architect based in Bekasi, West Java, Indonesia.
- Positioning: an experienced technical leader who connects business operations, enterprise systems architecture, and hands-on engineering.
- Voice: direct, calm, specific, evidence-led, and written in English to match the updated CV.

## Approved visual direction

Use a systems-led editorial identity: a cool, structured interface inspired by enterprise architecture diagrams and operational dashboards, with restrained editorial typography and one clear signal color. The interface should feel individual and current without becoming a developer dashboard or a decorative portfolio template.

### Design tokens

| Role | Value | Use |
| --- | --- | --- |
| Midnight ink | `#102A43` | primary text, header, high-contrast surfaces |
| Porcelain | `#F4F7F7` | page background |
| Panel white | `#FFFFFF` | cards and readable content surfaces |
| Sea-glass mint | `#2DD4BF` | active states, system-map accents, proof highlights |
| Signal orange | `#F97316` | current-role marker, selected emphasis, action detail |
| Slate blue | `#486581` | secondary text and metadata |
| Mist line | `#E8EEF2` | borders, tags, quiet surfaces |

### Typography

- Display: Space Grotesk, with a system fallback for unavailable network fonts.
- Body: IBM Plex Sans, with a system fallback.
- Utility/data: IBM Plex Mono for dates, labels, tags, and small metadata.
- Use large display type sparingly in the hero; keep body copy comfortably readable and avoid all-caps paragraphs.

### Signature element

A subtle systems-map motif connects the hero, career path, capabilities, and selected systems: thin mint rules, small technical labels, and one orange active marker. It should support the information hierarchy, remain decorative only where it clarifies relationships, and never compete with the content.

## Page architecture

```text
[sticky nav: RJH | Overview | Experience | Capabilities | Work | Contact | Download CV]

[hero: eyebrow + thesis headline + summary + actions | portrait + current-focus card]
[proof strip: 15+ years | 3 flagship systems | 4.8/5 across 135+ reviews | 2 awards]

[about / what I solve]
[career path and current roles                    | capability stack]

[selected systems: RADIS | Smart Streetlight | G-Force POS]
[supporting portfolio work, filterable without page reload]

[education | recognition]
[contact CTA + email + phone + GitHub + social links]
[copyright footer]
```

### Hero and overview

- Use the approved thesis: `I build the systems that make businesses run.`
- Show the full name and credentials: `Richard Jaya Hartanto, S.Kom.`
- Use the CV positioning line: `IT Leader · Senior Full-Stack Developer · ERP & IoT Systems Architect`.
- Show Bekasi, West Java, Indonesia and `15+ years in technology`.
- Condense the CV executive summary into a short paragraph that communicates leadership, enterprise software, business domains, and AI-assisted engineering.
- Primary actions: `Download CV` and `Contact me`.
- Reuse `img/me.jpg` with descriptive alternative text; do not create a new photo asset.
- Add a small current-focus card referencing enterprise software and business operations.

### Proof strip

Use four evidence-led values, without subjective skill percentages:

- `15+` years in technology, matching the CV summary.
- `03` flagship enterprise systems, representing the featured portfolio group.
- `4.8/5` across `135+` Google reviews for the F&B business, as documented in the CV.
- `02` professional awards: Best Manager Award (2018) and Best Employee Grade III (2021).

### Experience

Display current roles first and keep descriptions concise enough for scanning. Use the updated CV as the source of truth for titles, companies, and dates:

1. Co-Founder & Business Owner, PT Sekawan Mitra Usaha — Dec 2024 to Present.
   - Co-founded and manage operational strategy with three business partners.
   - Expanded to two active outlets.
   - Maintained a 4.8/5 Google rating across 135+ reviews.
   - Oversee administration, cost accounting, inventory controls, and POS workflow integrations.
2. Owner & Technical Director, PT Rumah Aplikasi Sejahtera — May 2023 to Present.
   - Lead RADIS distribution SaaS architecture and related finance, accounting, sales force, and delivery modules.
   - Consult with distribution and general trading clients to digitize business SOPs.
   - Govern schedules, code reviews, releases, version control, and AI-assisted development practices.
3. Full Stack Developer, PT Lunch Actually Jaya — Dec 2022 to Apr 2023.
   - Worked in Agile sprints with Jira.
   - Structured a CRM modernization from Yii 1.1 to Laravel.
   - Maintained web applications across Java Spring Boot, PHP/Yii, and WordPress.
4. IT Manager, PT Santiniluwansa Lestari — Oct 2011 to Dec 2022.
   - Built a distribution ERP from scratch covering purchasing, sales, FIFO inventory valuation, cash/bank journals, general ledger, and financial statements.
   - Implemented HR and payroll workflows aligned to operating procedures.
   - Architected smart solar streetlight monitoring with MQTT, UDP, modem integration, and Google Maps.
   - Built a React Native field-sales app with GPS geofencing.
   - Managed budgets, infrastructure, networks, teams, and corporate training.
5. PHP Programmer & System Administrator, Megapulsa — Sep 2010 to Feb 2011.
   - Built hardware-bridging software for 20+ concurrent SMS modems and reporting engines.
6. Freelance Web & Graphic Designer — 2006 to 2010.
   - Created corporate UI/UX layouts, web portals, and brand collateral.

The previous page's conflicting dates, generic role descriptions, and outdated labels must not remain.

### Capabilities

Replace progress bars with grouped, factual capability clusters:

- AI & modern engineering: AI-assisted coding with Cursor, Copilot, ChatGPT/Gemini workflows, prompt engineering, LLM integration, developer-velocity optimization.
- Backend and APIs: PHP Native, Laravel 11/12, CodeIgniter, Yii, Node.js/Express.js, Java/Spring Boot, RESTful API engineering.
- Frontend and design: JavaScript ES6+, React JS, jQuery, HTML/CSS, Bootstrap, Tailwind CSS, Photoshop, Illustrator, InDesign, CorelDraw, Flash.
- Mobile and IoT: React Native, Expo, Android development, MQTT, UDP smart protocols, modem SMS gateways.
- Data and systems: MySQL, Microsoft SQL Server, MongoDB, Windows/Linux server administration, Git, Software Accurate integration.
- Enterprise and leadership: ERP, CRM, HR/payroll, general ledger, balance sheet, profit/loss, FIFO valuation, distribution/manufacturing SOPs, Jira, Trello, team leadership, scheduling, training, and communication.

Do not invent proficiency percentages or language levels that are not present in the updated CV.

### Selected systems and supporting portfolio

Feature the three systems named in the CV with the existing images where available:

- RADIS — distribution ERP with multi-branch inventory, unit conversions, sales-force tracking, PPh/PPN compliance, FIFO valuation, general ledger, and P&L statements. Use `img/portfolio/radis.png`.
- IoT Smart Solar Streetlight System — MQTT services, custom UDP socket servers, Google Maps tracking, remote power toggles, and fault alerts. Use `img/portfolio/smart-udp.png`.
- G-Force POS & Dealer Order Management Portal — purchase-order recommendations, stock mutations, and sales-trend analytics. Use the closest existing G-Force asset, `img/portfolio/gforcesantini.png`.

Retain the existing supporting portfolio assets as secondary evidence, but use concise descriptions and clear labels. Keep the existing website destinations where they are valid. For non-linked internal projects, use non-interactive cards rather than `href="#"` links.

### Education and recognition

- Bachelor of Computer Science (S.Kom), Universitas Budi Luhur, Jakarta, 2006; Information Systems major; GPA 3.15/4.00; thesis: Hotel Package System.
- Leadership Training Camp Certificate, MAXIMA Impact Indonesia, 2016.
- Best Manager Award, 2018, PT Santiniluwansa Lestari; scorecard 89.08.
- Best Employee Grade III, 2021, PT Santiniluwansa Lestari; scorecard 81.91.

### Contact

Use real, working destinations:

- Email: `richardjayahartanto@gmail.com` via `mailto:`.
- Phone: `+62 878-0837-7877` via `tel:+6287808377877`.
- GitHub: `https://github.com/richardjayahartanto`.
- LinkedIn: `https://www.linkedin.com/in/richard-jaya-hartanto/`.
- Facebook: `https://www.facebook.com/richardjayahartanto`.
- Twitter: `https://twitter.com/RichardHartant0`.

Keep the existing portrait and public social links. Remove birthday and marital status from the public page because they are not needed for the recruiter-first goal and are not part of the updated CV.

## Responsive behavior

- Desktop at 1100px and above: sticky horizontal navigation, two-column hero, four proof items in one row, experience and capability stack in a split layout, and three-column systems grid.
- Tablet from 768px through 1099px: compact navigation, two-column hero with reduced spacing, proof items in a two-by-two grid, stacked experience/capabilities, and two-column systems grid.
- Mobile below 768px: accessible menu toggle, one-column hero, full-width actions, proof items in a two-by-two grid, stacked career cards, wrapped capability tags, one-column systems, and no horizontal overflow.
- Use fluid typography through `clamp()` where appropriate and keep tap targets at least 44px high.
- Do not rely on the old floating icon-only navigation; labels must remain understandable on touch devices.

## Interaction and accessibility rules

- Use semantic landmarks: `header`, `nav`, `main`, `section`, and `footer`.
- Use a real button for the mobile menu and update `aria-expanded` and `aria-controls`.
- Close the mobile menu after selecting a section.
- Highlight the active section using `IntersectionObserver` or an equivalent lightweight scroll-spy.
- Use smooth anchor scrolling only when the user has not enabled reduced motion.
- Use one-time, subtle reveal motion for sections/cards; disable it under `prefers-reduced-motion: reduce`.
- Provide visible `:focus-visible` styles for every link, button, and filter control.
- Use descriptive image alt text, meaningful link text, and sufficient contrast for the mint/orange accents.
- Replace invalid placeholder links with real destinations or non-link elements.
- Avoid autoplay video, heavy parallax, and decorative animation that competes with the CV content.

## Implementation boundaries

- Rebuild the main markup in `index.html` as semantic static HTML.
- Make `css/custom.css` the page's primary design stylesheet with scoped selectors and the approved token system. Old theme stylesheets can remain in the repository but must not be loaded by the new page.
- Reduce `js/custom.js` to small vanilla JavaScript for the mobile menu, active navigation, portfolio filtering, and reduced-motion-safe reveals. Remove the old moment/isotope/theme-specific assumptions from the page.
- Keep existing image assets under `img/` and update `img/Richard_Jaya_Hartanto_CV.pdf` from `D:\Downloads\Richard_Jaya_Hartanto_CV_Updated.pdf` so the download action always serves the updated document.
- Do not add a package manager, build pipeline, or new runtime dependency.
- Do not change unrelated vendor files.

## Acceptance criteria

1. The page loads as a complete, readable profile without the old theme's CSS/JS dependencies.
2. The first viewport communicates the approved title, thesis, location, 15+ years, portrait, and both primary actions.
3. All current and previous roles use the updated CV dates and titles, with the two current roles visually prioritized.
4. The capabilities section uses factual grouped tags/list content and contains the updated technology stack.
5. RADIS, Smart Solar Streetlight, and G-Force are the three primary systems, with the existing visual assets attached to the correct cards.
6. Education, awards, contact destinations, and the updated CV download are present and accurate.
7. The public page contains no birthday or marital-status fields.
8. Mobile, tablet, and desktop layouts have no horizontal overflow, clipped text, broken grids, or inaccessible controls.
9. A local smoke test at 375px, 768px, and 1440px confirms layout integrity; navigation, menu toggle, portfolio filter, mail/phone links, external links, and CV link work as intended.
10. The browser console has no errors caused by missing old plugins or invalid selectors.

