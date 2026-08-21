# DSI Website — P1 Compliance Decisions

**For:** Frank Williams — decision + sign-off
**Date:** 2026-08-21
**Context:** The 2026-08-20 adversarial site audit surfaced items that are decisions, not code fixes. P0/P2/P3 are fixed and live (commits `5a80975`, `2056b11`, `ad45e0c`, `7d9be6b`). Nothing below ships until Frank signs off — draft copy is staged for review, with every unverifiable fact marked `[HUMAN verify]`. This memo itself passed a five-lens adversarial audit (fact-check, compliance, attribution, trust, logic); all blocker- and high-severity findings from that audit are incorporated.

**The four decisions, in one line each:**

1. **Testimonials** — four homepage quotes are displayed as real client quotes but carry no verifiable attribution; provenance unconfirmed `[HUMAN verify]`. Pull, reframe, or get sign-offs?
2. **Stats & performance claims** — $150M+ / 500+ / 99.8% plus the 48-hour and January-31 promises are published without source, definition, or as-of date — most of them stated as accomplished fact, including in the AI-ingestion files. Substantiate, restate as targets, or remove — figure by figure.
3. **Privacy policy** — current text is generator boilerplate that contradicts the actual data flow. Replacement draft below; needs Frank plus counsel on five flagged points.
4. **numberOfEmployees** — structured data now says 8 (derived from the roster, which includes the Broker of Record). Is that the intended public count?

---

## Decision 1 — Testimonials

**Where:** `src/lib/constants.ts:184–216`, rendered on the homepage carousel under "Trusted by Lenders & Investors."

**The issue.** The source comment reads: *"Testimonials — voiced by the real servicing-side partner ecosystem (originators, note investors, family offices, workout attorneys). Replace with attributed quotes once Frank confirms sign-off rights."* As displayed, four first-person quotes carry specific facts (a $1.2M first-trust workout, a Friday-4pm demand turned by Monday) and city-level attributions ("Family Office Principal — Pasadena, CA") that read as four real, distinct clients.

**The exposure.** The FTC treats fabricated or misattributed testimonials as deceptive under FTC Act §5, interpreted through the Endorsement Guides (16 CFR Part 255); separately, the 2024 Rule on Consumer Reviews and Testimonials (16 CFR Part 465) prohibits fake consumer testimonials and carries civil penalties. And reputationally: this audience punishes discovered technique permanently.

**Threshold question (answer first — everything routes on it):** *What is the actual provenance of the four scenarios?*

- **(a) Each traces to an identifiable real engagement** → Option B available (and C to upgrade to attributed quotes).
- **(b) Each blends details from several real engagements** → Option B available with blended-scenario wording.
- **(c) They are archetypes of DSI's work with no specific engagement behind them** → Option B is **void**; only A (pull) and C (build real quotes) are available.

`[HUMAN verify — Frank: a, b, or c — per card if they differ]`

**Options:**

- **A. Pull the section now.** One-line change (remove `<Testimonials />` from `src/app/page.tsx`). Cleanest; homepage loses its social-proof section until real quotes exist.
- **B. Reframe as anonymized case work** — available only under threshold answers (a) or (b). Draft below.
- **C. Collect real sign-offs** and restore attributed quotes. Outreach template below.

**Recommendation:** (a) or (b) → **C first, then B for anyone who declines attribution.** Sequencing C before B keeps the outreach email honest — nothing about a client's engagement is public before they've been asked. (c) → **A now, C to rebuild.**

### Draft for Option B — DO NOT SHIP unless the threshold answer is (a) or (b)

Section header: eyebrow **"Client Scenarios"**, title **"How Engagements Play Out"** (replaces "Trusted by Lenders & Investors" — that title asserts endorsement; the new one doesn't).

Card format — third person, no quotation marks, no city attribution:

> **Spreadsheet servicing → same-day investor packets.** A private-money lender running servicing on spreadsheets and a trust-ledger workbook moved the book to DSI. `[HUMAN verify — reporting-cycle claim: three days → same-day]`
>
> **A first-trust default worked out without a trustee sale.** A trust deed investor's note went into default; DSI ran the workout — modification structured, borrower retained the property, no sale filed. `[HUMAN verify — engagement facts and dollar size]`
>
> **Statements a CPA accepts without an apology.** A note holder carrying paper across three servicers rates DSI's monthly statement as the one their CPA accepts without rework — and its tax package the one that lands before January 31. `[HUMAN verify — basis]`
>
> **A Friday-afternoon payoff demand, out by Monday.** Demand requested end-of-day Friday; reconciled payoff with per-diem grid delivered before close of business Monday. `[HUMAN verify — engagement basis for the specific turnaround]`

Disclosure line, visible under the cards — **wording depends on the threshold answer**, and the honest version names what's real rather than disclaiming everything:

- If (a): *Each scenario describes work DSI performed for a real client. Names and identifying details are withheld; outcomes and turnaround times are the actual ones.* `[HUMAN verify — true for every card as written]`
- If (b): *Each scenario is drawn from real DSI engagements, with details from more than one engagement combined and identifying information withheld.* `[HUMAN verify — accurate description of the blending]`

### Draft for Option C (sign-off request Frank sends personally)

> Subject: May I quote you on the DSI site?
>
> [Name] — I'm putting client voices on the DSI site and I'd like to include our work together. Two ways, and no is a fine answer:
>
> 1. A short quote in your words — I'll send you exactly what would appear, you approve or edit it, attributed however you're comfortable (name, or just role and county).
> 2. Anonymized — the engagement described without anything identifying you.
>
> Either way, thanks for the work we've done together.
>
> — Frank

*(If Option B ships before a recipient has answered, the email must say so honestly — "there's an anonymized version of this engagement on the site now; tell me to pull it and it comes down today." Better: sequence C first, per the recommendation.)*

---

## Decision 2 — Stats and performance claims

**Where the figures live** (complete surface inventory — several are hardcoded copies, not derived):

- `src/lib/constants.ts:121–126` (STATS — drives the homepage hero strip and StatsBar)
- `src/app/opengraph-image.tsx:98–100` — **hardcoded duplicate** of $150M+/500+/99.8% on the social-share card
- `src/lib/faqs.ts:56` (24/7 portal restatement) and `src/lib/faqs.ts:71` (security claims)
- `public/llms.txt` (§Operational metrics, plus flat "48-hour demand turnaround" at lines 2 and 35)
- `public/llms-full.txt` §10 and §"operational standards" — including the line *"These are operational standards the company holds itself to and publishes, not aspirational marketing claims"* (line 77) and *"delivered before January 31, every year since founding"* (line 83)

**The issue.** These are precise, public, regulator-visible claims with no source, definition, or as-of date. The volume figures are mutually consistent ($150M ÷ 500 = $300k/loan), but both are published as floors, so consistency here is arithmetic, not corroboration — nothing in the codebase substantiates any of them. Treat all as unverified pending the worksheet.

**The 48-hour / 24-hour framing split matters:** the site states these as *targets* in 7 places (`why-dsi/page.tsx:37`, `WhyDSI.tsx:26`, `glossary.ts:163`, `llms.txt:59`, `llms-full.txt:81/171/172`) and as **accomplished fact in roughly 31 others** (e.g., `constants.ts:75` "48-hour loan boarding," `constants.ts:79` "turned in under 48 hours," `faqs.ts:10`, `llms.txt:2,35`, `llms-full.txt:200`, the homepage meta description, and two JSON-LD blocks). Fact-framed performance claims need substantiation like any other; `[HUMAN verify — counsel: whether the 48h/24h/Jan-31 standards as currently worded read as substantiable performance claims rather than forward-looking commitments]`. Also note `contact/page.tsx` promises "same-day acknowledgment" while the homepage form promises "response within 24 hours" — pick one.

**Verification worksheet — one line each from Frank:**

| # | Claim | What's needed | Answer |
|---|-------|---------------|--------|
| 1 | $150M+ loans serviced | Source (servicing ledger / system report) + as-of date | `[HUMAN verify]` |
| 2 | 500+ active loans | Count source + as-of date | `[HUMAN verify]` |
| 3 | 99.8% payment accuracy | **Definition** (numerator/denominator) + measurement period | `[HUMAN verify]` |
| 4 | 24/7 investor portal access | Portal exists and is client-accessible today? | `[HUMAN verify]` |
| 5 | Security claims (`faqs.ts:71`: "SOC 2-aligned," "bank-level encryption," 2FA, role-based access) | Substantiate each (whose SOC 2? what encryption?) or soften. Also for counsel: `[HUMAN verify — counsel: FTC Safeguards Rule (16 CFR Part 314) applicability to DSI's servicing activity, and whether a written infosec program supports the published claims]` | `[HUMAN verify]` |
| 6 | 48-hour loan boarding (fact-framed) | Measured performance + period, or reword to target framing | `[HUMAN verify]` |
| 7 | 48-hour demand turnaround (fact-framed, incl. `llms.txt:2,35`) | Same | `[HUMAN verify]` |
| 8 | Same-day / 24-hour acknowledgment (two different promises live) | Actual standard + weekend/holiday scope; unify the copy | `[HUMAN verify]` |
| 9 | "1098s/1099-INTs before January 31, **every year since founding**" (`llms-full.txt:83`) | Absolute historical claim, falsifiable by one counterexample — attest, or drop "every year since founding" | `[HUMAN verify]` |

**Once verified, the copy change** (not "one edit" — three parts plus the duplicates):

1. `StatsBar.tsx` — add a footnote element under the grid: *Figures as of `[Month Year]`, per DSI servicing records.*
2. `Hero.tsx` trust strip — same anchor, or a deliberate decision that the strip stays terse and the footnote lives on StatsBar only.
3. `llms.txt` / `llms-full.txt` — append *(as of `[Month Year]`)* per figure; conform `llms.txt:2,35` and `constants.ts:75,79` to whichever framing (achieved vs. target) survives the worksheet; drop or attest line 83's "every year since founding."
4. `opengraph-image.tsx:98–100` and `faqs.ts` — update the hardcoded copies to match (or derive them from STATS).

**If any figure can't be substantiated:** remove that figure (don't round it, don't hedge it). The section works with two verified numbers; it doesn't work with one challenged one.

---

## Decision 3 — Privacy policy replacement

**Where:** `src/app/privacy/page.tsx`. Current text is a recognizable generator template whose central promise — "We don't share or sell any personally identifying information … with third parties" — is contradicted by the site's own forms, which transmit name, email, phone, company, and message through Web3Forms (a third-party form-delivery service) to DSI's email inbox.

**What's true and verifiable from the codebase:**
- Both lead forms POST to `api.web3forms.com` (`src/lib/useLeadForm.ts:6`); submissions are delivered to DSI's email, so Web3Forms **and DSI's email provider** both handle form contents.
- Fields collected: name, email, phone, company/firm, inquiry type, message.
- The site ships no third-party analytics, advertising trackers, or external scripts — verified against the production build. (The host, Vercel, still keeps standard server logs including IP addresses — which are personal information under CCPA — so the policy must not claim forms are the *only* collection.)
- The SMS/TCPA paragraph is marked load-bearing in source ("Do not reword without legal sign-off") — **preserved verbatim below, with a conflict flagged for counsel rather than a reword.**

**Five points for counsel / Frank — none asserted, all flagged:**

1. `[HUMAN verify — Frank: does DSI service any consumer-purpose (personal/family/household) loans, or is the book entirely business-purpose?]` This premise decides most of what follows.
2. If any consumer-purpose loans are serviced: `[HUMAN verify — counsel: GLBA/Reg P privacy-notice obligations, and whether RESPA Reg X servicing rules and Reg F also attach]`.
3. `[HUMAN verify — counsel: CCPA/CPRA applicability]` — thresholds may or may not be met; the draft includes a California rights section as good practice either way.
4. `[HUMAN verify — counsel: the preserved TCPA paragraph promises mobile opt-in data "will not be shared with any third parties," but the form flow routes phone numbers through Web3Forms and the email provider. Confirm whether a processor carve-out is needed, or whether SMS consent should be captured outside the Web3Forms path.]`
5. `[HUMAN verify — counsel: is there a contract with Web3Forms containing CCPA service-provider terms? The draft avoids the term "processor/service provider" until that exists.]`

### Draft replacement policy

> **Privacy Policy — Direct Servicing Initiative, Inc.**
> Effective `[date on approval]` · Replaces the policy dated 1 January 2025
>
> **Scope.** This policy covers trustdsi.com and the information you submit through it. If you are a borrower, lender, or investor on a loan DSI services, the handling of your loan-file information is governed by your servicing agreement and applicable financial-privacy law, not by this website policy. `[HUMAN verify — counsel scoping]`
>
> **What we collect.** The personal information you actively give us is what you type into our contact forms: name, email address, phone number, company or firm, inquiry type, and message. Like any website, our hosting provider also keeps standard server logs — including IP address — for security and reliability. We do not run advertising trackers, third-party analytics, or social-media pixels on this site.
>
> **How form submissions travel.** When you submit a form, it is transmitted through Web3Forms, a form-delivery service, and delivered to our email inbox — so it is handled by Web3Forms (under its own policy, web3forms.com/privacy), by our email provider, and by us.
>
> **How we use it.** To respond to your inquiry — by phone, by email, or by text message only if you separately opt in. We do not sell your information and we do not share it for marketing. We share it only with the service providers who help us operate and respond to you (described above), with our professional advisors, and where the law requires it.
>
> **Text messaging.** *(unchanged — load-bearing TCPA language, verbatim from the current policy; see counsel point 4)* No mobile information will be obtained from and/or shared with third parties or affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties. You can always decline or stop receiving messages by responding "STOP" at any time. For more information, reply "HELP". Message and data rates may apply. Message frequency varies.
>
> **Retention.** We keep inquiry information for as long as needed to handle your inquiry and any engagement that follows, and then for the period our regulatory record-keeping obligations require. `[HUMAN verify — specific retention period if Frank/counsel want one stated]`
>
> **Your California rights.** California residents may request to know what personal information we hold about them, to correct it, or to have it deleted, and may opt out of any sale or sharing of personal information (we do neither). To exercise these rights, email info@trustdsi.com or call (626) 796-1680; we will verify your identity and respond within 45 days. We will never treat you differently for exercising them. `[HUMAN verify — counsel: confirm framing per applicability above]`
>
> **External links.** Pages on this site may link to sites we don't operate; their privacy practices are their own.
>
> **Questions.** Direct Servicing Initiative, Inc., 2648 E. Workman Ave., Suite 3001-288, West Covina, CA 91791 · (626) 796-1680 · info@trustdsi.com.

### Form-side consent (both lead forms)

SMS consent must be a **separate, affirmative, optional act** — not a side effect of clicking Submit — so the form and the policy say the same thing:

> *Unchecked checkbox beside the phone field:* ☐ Text me updates about this inquiry (optional). Message and data rates may apply. Message frequency varies. Reply STOP to opt out, HELP for help.
>
> *Line beside the submit button:* By submitting, you agree that DSI may contact you about your inquiry by phone or email. See our [Privacy Policy](/privacy).
>
> `[HUMAN verify — legal sign-off before shipping; this is point-of-collection TCPA consent language]`

**Implementation note (consent proof):** when this ships, the forms should pass a consent record through `useLeadForm`'s `extraFields` — at minimum the verbatim notice text, a version tag, the SMS-checkbox state, and a timestamp — so the delivered email itself documents what the visitor was shown and chose. Aligns with the TCPA fail-closed standard used everywhere else in the operation.

---

## Decision 4 — numberOfEmployees

**Where:** Organization JSON-LD, now derived as `TEAM.length` = **8** (was hardcoded 7, which contradicted the visible 8-person roster).

The roster includes Juan N. Williams as Broker of Record — a licensing/compliance role with no headshot. One-line decision:

- **A. Keep 8** — the public roster count, as now derived. *(current behavior)*
- **B. Count 7** — exclude non-customer-facing licensing roles (`TEAM.filter(m => m.image).length`).
- **C. State a different verified headcount** — if the true picture differs from the roster, say the number and I'll pin it with a source comment.

`[HUMAN verify — Frank: A, B, or C?]`

---

## Sign-off checklist (everything blocking, in one place)

| # | Item | Frank's answer |
|---|------|----------------|
| 1a | Testimonial provenance: (a) traceable / (b) blended / (c) archetypes — per card if mixed | ☐ |
| 1b | Route: if (a)/(b) → C then B; if (c) → **B is void**; A now + C to rebuild | ☐ |
| 2 | Stats worksheet rows 1–9 (source + as-of date each, or remove / reword to target) | ☐ |
| 3 | Privacy draft approved + counsel points 1–5 above + form-consent language | ☐ |
| 4 | numberOfEmployees: A (8) / B (7) / C (other) | ☐ |

On sign-off, implementation is staged: item 1 is a section swap; item 2 touches `constants.ts`, both llms files, `opengraph-image.tsx`, `faqs.ts`, plus footnote elements in `StatsBar.tsx`/`Hero.tsx`; item 3 replaces `POLICY_PARAGRAPHS` and adds the checkbox + consent plumbing; item 4 is one line. All of it goes through the same build → independent review → deploy loop as the earlier batches.
