# BreakIn redesign

## Scope and coverage

The shipped product is the React app in `artifacts/breakin`. Its router contains six named product routes and a not-found route. The attached Stitch archive contains six matching reference screens and a design note. The repository also contains an API server with a health route and a mockup preview utility; neither exposes an additional BreakIn product workflow.

The pasted brief references an unnamed document, but no separate product specification was attached or found. The implementation uses the live routes, their content, and the attached Stitch archive as the source of truth.

| Route or state       | Main task and action                              | Redesign coverage                                                                |
| -------------------- | ------------------------------------------------- | -------------------------------------------------------------------------------- |
| `/`                  | Understand the service; apply or explore programs | Editorial hero, photo, proof, approach, curriculum path, story carousel, CTA     |
| `/programs`          | Compare curriculum and three levels of support; apply | Photo introduction, accessible workshop tabs, high-school track, three-plan pricing, fee calculator, CTA |
| `/testimonials`      | Judge fit through candidate and mentor stories    | Featured carousel, selectable story index, metrics, fifth original story, CTA    |
| `/our-story`         | Understand the mission; explore programs          | Editorial photo, founder statement, problem/response/vision, principles, CTA     |
| `/join`              | Complete coaching application                     | All original fields, native validation, check state, mobile layout               |
| `/become-an-insider` | Complete mentor application                       | All original fields, native validation, check state, mobile layout               |
| Unknown path         | Recover navigation                                | Branded 404 with working home and program links                                  |
| Shared states        | Navigate and understand focus                     | Desktop navigation, mobile menu, active route, keyboard focus, footer, skip link |

No modals, dashboard, data table, search results, or multistep process exist in the product routes or attached Stitch screens. The workshop tabs and story carousel are new presentation controls for existing content; they do not change the program or application workflow.

## Experience audit and consequence

- **Home:** A full-bleed boardroom photo and isolated stat cards pushed the actual offer below the fold. Users had to scroll before understanding the program. The photo-led editorial opening puts the offer and two clear actions first; evidence follows in a compact band.
- **Programs:** Each workshop looked like a clickable card but had no destination, and the pricing comparison used a floating scaled card. That invited dead-end clicks and made details harder to compare. Keyboard-operable workshop tabs now reveal a focused description and direct application path. Three aligned plans now distinguish group learning, private coaching, and the proposed offer-linked option.
- **Testimonials:** Decorative badges, icons, and progress bars competed with the quotes. Readers could miss the actual outcomes. A featured carousel gives one story room to breathe; a compact index selects any of the four voices without duplicating their full quotes. Elena's original story and metrics remain below.
- **Our Story:** Four differently sized cards interrupted the founder narrative, and the fixed twelve-column layout collapsed poorly on narrow screens. A full-width image and founder statement now lead, followed by a problem/response/vision grid and three principles.
- **Coaching application:** The fixed two-column form overflowed on phones, and the submit button showed a success message without sending data. Native required fields, a responsive layout, and explicit preview messaging make the current behavior understandable.
- **Insider application:** Labels were not associated with inputs, fields had no required-state guidance, and the sidebar consumed attention beside the form. The redesign groups identity and professional background, uses labels and native controls, and moves supporting context to a restrained aside.
- **Shared navigation and footer:** The mobile join action and menu toggle competed in the header; several footer links and “book a call” buttons had no working target. The new navigation has one mobile menu, active states, and only destinations present in the app.
- **404:** The generic framework error exposed implementation language to visitors. The new recovery page uses the product’s voice and working navigation.

## References and decisions

- [Upwork coaching section on Mobbin](https://mobbin.com/sites/sections/5832cc67-b6cd-4c7d-8e1d-3220f033eb50): concise offer and two clear next actions. Adapted for the home hero.
- [Apollo program tiers on Mobbin](https://mobbin.com/sites/sections/a6b2ed95-96c1-45b8-9928-b8d2a850bd3a): side-by-side feature comparison and a clear application path. Adapted into the three-plan comparison.
- [Peerlist experience form on Mobbin](https://mobbin.com/screens/1dd9bc5d-7bbc-4078-b60a-d83c0696b9df): direct labels, aligned controls, and a calm content column. Adapted into both application forms.
- [Wix Learn hero on Mobbin](https://mobbin.com/sites/sections/6eae0753-3cdb-4ca3-b070-0a207d352552): a real person makes the learning offer tangible. Adapted into the home and programs photo-led openings with explicit illustrative captions.
- [Miro education pricing on Mobbin](https://mobbin.com/sites/sections/eef74ae9-63f1-45db-a5dc-619872bfebf4): clear plan hierarchy and one dominant action. Adapted into the pricing comparison and offer-fee explainer.
- [Webflow testimonial carousel on Mobbin](https://mobbin.com/sites/sections/49429144-9dd0-43b7-a3fe-65d13122fdf5): a large quote with prominent previous/next controls. Adapted into the featured story component.
- [Intercom curriculum section on Mobbin](https://mobbin.com/sites/sections/604c631e-60b1-4561-83d5-65fc16918ce4): a selectable topic list beside focused course detail. The current workshop explorer follows the same reading hierarchy.
- [SoundCloud contact form on Mobbin](https://mobbin.com/screens/d81c9cd4-69bd-45b0-9e77-f8001f1dd7ea): grouped identity fields with contextual information alongside. This supports the current application grouping and restrained aside.
- [KÖPPEN founders' note on Mobbin](https://mobbin.com/sites/sections/81d6349f-9811-4b17-9b2d-327dbabfa4fa): a real founder portrait can strengthen an origin story. BreakIn has no verified founder portrait in the repository, so the story keeps its founder statement without inventing one.
- [Classic Header with Sheet Menu on 21st.dev](https://21st.dev/@ln-dev7/components/header-17): responsive navigation with a distinct mobile disclosure. Its interaction idea informed the shared header; the existing React stack was used instead of installing a second component system.
- [Editorial Image Hero on 21st.dev](https://21st.dev/@felipemenezes098/components/hero-07): image and headline treated as one editorial composition. Its hierarchy informed the home and story openings; the code was inspected but the site uses its own CSS and React layout.
- [Testimonial Carousel on 21st.dev](https://21st.dev/@cnippet-dev/components/v-carousel-11): manual controls and slide indicators. The interaction pattern informed the reusable story carousel, which has visible button labels and no automatic motion.
- [Accessible Tabs on 21st.dev](https://21st.dev/@haassiib/components/tabs-roving-focus): arrow-key navigation and active-panel semantics. The program explorer uses the project's installed Radix tabs for the same behavior.
- [Checkbox Group Form on 21st.dev](https://21st.dev/@cnippet-dev/components/v-checkbox-group-5): inspected for group semantics and touch targets. The BreakIn form already uses a fieldset and labeled native checkboxes; the catalog demo's simulated loading and alert feedback were not appropriate for a preview-only application.
- [Pricing Section on 21st.dev](https://21st.dev/@rlzee/components/pricing): inspected for comparison hierarchy. It depends on Next.js routing and includes an empty CTA destination, so the project uses its own Vite-compatible plan comparison with working application links.
- [Stepper on 21st.dev](https://21st.dev/@sean0205/components/stepper): evaluated for application progress. The existing forms contain one short step each, so a stepper would add effort and was not adopted.
- [Logo Grid Cloud on 21st.dev](https://21st.dev/@olewandowski1/components/logo-cloud-1): its restrained bordered grid and centered wordmark sizing informed the updated university and firm gallery. The implementation uses BreakIn's existing colors, typography, and institution copy.

The direction is **editorial mentorship**: warm paper backgrounds, deep green ink and actions, Newsreader display type, DM Sans for functional text, thin dividers, and documentary-style stock photography. Content is capped at 1180 px, with readable text widths and layouts that fold to one column on mobile. Buttons, inputs, checks, links, and navigation share contrast and focus rules. Motion is limited and respects reduced-motion preferences. The component accents serve specific tasks: a curriculum tab set for focused comparison and a manual story carousel for reading one quote at a time.

The BreakIn mark is a compact B crossed by the slash in the wordmark, using the site's night green, paper, and sage colors. The same SVG appears in the browser tab, header, and footer; a 180 px PNG serves as the touch icon. It replaces the previous blank orange favicon.

The three visible photographs are sourced from Unsplash and stored locally as optimized JPEGs:

- Home: [Christina @ wocintechchat.com](https://unsplash.com/photos/two-women-sits-of-padded-chairs-while-using-laptop-computers-HocFQHhGjDE), `stock-collaboration.jpg`.
- Programs: [Vitaly Gariev](https://unsplash.com/photos/diverse-group-of-students-gathered-around-a-laptop-EA0-iajPYFE), `stock-students.jpg`.
- Our Story: [David Kristianto](https://unsplash.com/photos/modern-office-with-city-view-through-large-windows-FJzZWknsvMs), `stock-office.jpg`.

Each source page marks the image free to use under the [Unsplash License](https://unsplash.com/license). Source records are kept in this internal document; the site does not show photo-source names or links. The people pictured are stock photo subjects, not presented as BreakIn mentors or students. The earlier generated photos and generated boardroom image were removed.

## School, firm, and profile section

The home page now has an editorial gallery with 20 school marks (all eight Ivy League schools plus twelve other leading universities) and eight finance and consulting firm wordmarks, including McKinsey, Goldman Sachs, J.P. Morgan, BCG, and Blackstone. School marks are locally stored website icons. The gallery's firm wordmarks are locally stored SVGs from Wikimedia Commons: [McKinsey](https://commons.wikimedia.org/wiki/File:McKinsey_Script_Mark_2019.svg), [Goldman Sachs](https://commons.wikimedia.org/wiki/File:Goldman_Sachs_logo.svg), [J.P. Morgan](https://commons.wikimedia.org/wiki/File:J_P_Morgan_Logo_2008_1.svg), [BCG](https://commons.wikimedia.org/wiki/File:Boston_Consulting_Group_2020_logo.svg), [Blackstone](https://commons.wikimedia.org/wiki/File:The_Blackstone_Group_logo_%282%29.svg), [Bain & Company](https://commons.wikimedia.org/wiki/File:Bain_%26_Company_logo.svg), [Morgan Stanley](https://commons.wikimedia.org/wiki/File:Morgan_Stanley_Logo_2024.svg), and [BlackRock](https://commons.wikimedia.org/wiki/File:BlackRock_wordmark.svg). The smaller illustrative profile cards continue using compact local marks. The institution caption makes clear that inclusion does not imply endorsement.

Six named school-to-firm paths sit below the approach section. The section and each card label them as illustrative examples; these names, placements, and affiliations are fictional. The site should use verified mentor biographies and consented affiliation claims before presenting profiles as real people. Likewise, the broad mentor network statement in the section should be checked against an actual roster before publication.

## Program pricing research and proposal

Research checked on 20 October 2026 found no universal percentage or term for candidate-paid coaching. [Wall Street Prep](https://www.wallstreetprep.com/self-study-programs/premium-package/) lists a $499 self-study package. [Management Consulted](https://managementconsulted.com/consulting-products-and-services/) lists a $350 single coaching hour, a $950 four-hour option, and a $2,250 program with ten hours of private coaching. [WSO Academy](https://www.wallstreetoasis.com/academy) lists a $7,000 upfront tuition option for a substantially longer academy. For outcome-linked pricing, [Outtalent](https://outtalent.com/faq) describes $2,900 upfront plus 10% of monthly base salary for 24 months, subject to its conditions. These are different products and examples, not a market-wide standard.

The local BreakIn page now proposes $499/month for Fellowship, $1,499/month for Mentor Intensive, and $499/month for Offer Partnership, plus a **single possible** success fee equal to 10% of the first month's base pay, capped at $2,000. The proposed fee is invoiced 30 days after the first paycheck only when a qualifying full-time finance or consulting role is accepted and started within 12 months; there is no payroll deduction. Bonuses, equity, and signing awards are excluded. At a $120,000 annual base salary, the success fee is $1,000. The calculator shows $1,499 as an example of **one month** of coaching plus that success fee, with additional months billed separately. No qualifying role means no success fee, but monthly charges still apply while enrolled. The site promises no offer or job guarantee.

The expanded product line adds 12 proposed courses across finance, consulting, career skills, and early access. Visitors can filter the catalog, inspect a course brief and syllabus, and carry a selected course into the application. The application also accepts direct course selection. Course access is described as included during active monthly program enrollment. Course duration, syllabus, deliverables, and monthly coaching entitlements are proposed product terms that require delivery planning.

The catalog's filter pattern draws on [Mobbin's Unity course screen](https://mobbin.com/screens/33327be3-56c6-4e70-9d0d-bd6c0f3f0592) and [21st.dev's Filterable Blog Index](https://21st.dev/@olewandowski1/components/blog-3). The plan hierarchy and explicit monthly interval draw on [Mobbin's Circle pricing section](https://mobbin.com/sites/sections/75daae46-73f0-457a-ba76-04fd57ce0a91) and [21st.dev's Pricing Section 1](https://21st.dev/@shadcnstore/components/pricing-section-1). The application dropdowns adapt [21st.dev's Select With Object](https://21st.dev/@felipemenezes098/components/select-05) to the existing Radix select primitive, using the site's own type and colors.

These prices, mentor-session counts, eligibility criteria, and program inclusions are **proposed business terms**, not supplied operating facts. Confirm delivery capacity and written agreements before selling them. Jurisdiction matters: the [CFPB](https://www.consumerfinance.gov/ask-cfpb/what-are-private-student-loans-en-2136/) identifies education-financing income share agreements as credit products, and the [New York Attorney General](https://ag.ny.gov/resources/individuals/workers-rights/employment-agencies) describes licensing and fee limits for employment agencies that charge job seekers. BreakIn should obtain legal review of any success-based option before public enrollment, especially where the service could be viewed as job placement.

## Behavior and remaining product decisions

- The repository has no application submission endpoint, scheduling flow, contact route, or payment integration. Both forms keep the fields and required-field validation, but the check state explicitly says data was **not** sent. Connect a destination and confirm consent/privacy copy before calling either an actual application.
- The original footer contained `#` links for contact, privacy, terms, and cookies. These are absent until real routes or documents exist. “Book a strategy call” actions had no booking flow and now lead to the existing coaching path.
- The original pricing section listed broad negative claims about other consultancies. The current version removes the competitor benchmark and compares BreakIn's own program scopes and fees directly.
- Pricing, placement metrics, mentor counts, firm affiliations, testimonials, and the “Guaranteed firm networking” promise were carried from the original pages. BreakIn should verify these claims and define their scope before publishing.
- No loading or network error state is shown for the forms because no network request exists. An eventual submission integration will need pending, success, failure, and retry states.

## Verification

- `pnpm --filter @workspace/breakin run typecheck` passed.
- `pnpm --filter @workspace/breakin run build` passed.
- Rendered all seven routes at 1440 px and 390 px. Checked document overflow, broken images, missing links, page errors, mobile menu navigation, required-field validation, and both form check states. Verified workshop tab click and vertical arrow-key navigation, carousel next and direct slide controls, story-index selection and scroll alignment, carousel touch targets, and story image alignment. No issues remained in that pass.
- Full-page desktop and mobile screenshots are in `artifacts/breakin/previews`.
- After the network addition, a second desktop/mobile pass across all seven routes found no broken images, horizontal overflow, placeholder links, or page errors. The home page rendered all 20 school marks, eight firm marks, and six example profiles at both widths.
- After the pricing update, typecheck and build passed; the seven-route browser pass reported no issues. The pricing calculator returned $1,499 at $120,000 base pay and the $2,499 cap at $240,000. All three plan links preselected the matching option in the coaching form. The 21st review reported zero errors and warnings in the new pricing component and application form; the CSS review had informational token suggestions only.
- After the monthly pricing and course expansion, typecheck and build passed. The seven-route desktop/mobile browser pass reported no broken images, placeholder links, page errors, or horizontal overflow. The catalog rendered 12 courses, filtered consulting to three, and carried a selected course into the application at both widths. All four application selects use styled Radix dropdowns. Keyboard Arrow, Enter, and Escape interaction worked; graduation year still blocks incomplete submission, and editing a selection clears the preview completion state. The final 21st review reported zero errors or warnings, with informational notes for existing hardcoded colors and select popup overflow handling.

The 21st catalog and component code were inspected through its MCP tools. The 21st CLI generated the app's design context and reviewed the changed UI: zero errors, zero warnings, and nine informational suggestions for translucent colors in `editorial.css`. Solid colors in that layer use shared CSS variables.
