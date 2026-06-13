// Glossary of loan-servicing terms — sourced from DSI's daily working
// vocabulary. Used to (a) establish entity authority for AI engines,
// (b) capture long-tail definitional search ("what is a beneficiary
// statement", "what is HBOR"), and (c) emit DefinedTerm + Definition
// JSON-LD for knowledge-graph entity recognition.
//
// Categories are deliberate: regulatory, default/workout, operations,
// investor/tax, loan types. Each term has a sharp one-paragraph
// definition that reads as encyclopedic, not promotional.

export type GlossaryTerm = {
  term: string;
  abbr?: string;
  category: "Regulatory" | "Default & Workout" | "Servicing Operations" | "Investor & Tax" | "Loan Types";
  definition: string;
  slug: string;
};

export const GLOSSARY: GlossaryTerm[] = [
  // ───── Regulatory ─────
  {
    term: "RESPA",
    abbr: "Real Estate Settlement Procedures Act",
    category: "Regulatory",
    definition:
      "Federal law (12 U.S.C. §2601 et seq.) regulating real estate settlement services and loan servicing. Section 6 specifically governs servicing transfers — borrower notification rules, error resolution procedures, and the 15-day acknowledgment requirement. RESPA also requires periodic escrow account statements and limits escrow cushion to two months of payments.",
    slug: "respa",
  },
  {
    term: "TILA",
    abbr: "Truth in Lending Act",
    category: "Regulatory",
    definition:
      "Federal consumer credit disclosure law (15 U.S.C. §1601 et seq.) requiring lenders and servicers to disclose loan terms, finance charges, APR, and the borrower's right of rescission on certain transactions. TILA periodic statement requirements apply to most consumer mortgages.",
    slug: "tila",
  },
  {
    term: "TRID",
    abbr: "TILA-RESPA Integrated Disclosure",
    category: "Regulatory",
    definition:
      "Combined disclosure rule under TILA and RESPA, replacing the older HUD-1 and GFE forms. TRID governs the Loan Estimate (delivered within 3 business days of application) and the Closing Disclosure (delivered at least 3 business days before consummation) for most consumer mortgages.",
    slug: "trid",
  },
  {
    term: "ATR / QM",
    abbr: "Ability to Repay / Qualified Mortgage",
    category: "Regulatory",
    definition:
      "TILA rule requiring lenders to make a reasonable, good-faith determination of a consumer's ability to repay a residential mortgage before consummation. Qualified Mortgages receive a safe harbor or rebuttable presumption of ATR compliance and are subject to product feature restrictions.",
    slug: "atr-qm",
  },
  {
    term: "HBOR",
    abbr: "California Homeowner Bill of Rights",
    category: "Regulatory",
    definition:
      "California law (Civil Code §§2920.5–2924.20) protecting homeowners in default on first-lien mortgages secured by owner-occupied residential property. HBOR mandates a single point of contact, restricts dual tracking of loss mitigation and foreclosure, and imposes specific NOD/NOS procedure requirements on servicers.",
    slug: "hbor",
  },
  {
    term: "California Civil Code §2924",
    abbr: "§2924",
    category: "Regulatory",
    definition:
      "California's non-judicial foreclosure framework. §2924 governs the entire sequence of events from recording the Notice of Default (NOD) through publication and recording of the Notice of Sale (NOS) and the trustee sale itself. The §2924 timeline is approximately 111 days at minimum from NOD to sale.",
    slug: "civil-code-2924",
  },
  {
    term: "CFL",
    abbr: "California Finance Lenders Law",
    category: "Regulatory",
    definition:
      "California Financial Code §§22000 et seq., regulating certain non-depository lenders making consumer and commercial loans in California. CFL licensure imposes trust accounting, reporting, and disclosure requirements relevant to private money lenders and servicers.",
    slug: "cfl",
  },
  {
    term: "TCPA",
    abbr: "Telephone Consumer Protection Act",
    category: "Regulatory",
    definition:
      "Federal law (47 U.S.C. §227) restricting unsolicited telemarketing calls, faxes, and SMS messages. For loan servicers, TCPA compliance requires express consent for SMS borrower communications and STOP/HELP keyword handling.",
    slug: "tcpa",
  },
  {
    term: "NMLS",
    abbr: "Nationwide Multistate Licensing System",
    category: "Regulatory",
    definition:
      "The system of record for mortgage loan originator licensing across all U.S. states and territories. NMLS numbers are publicly searchable at nmlsconsumeraccess.org.",
    slug: "nmls",
  },
  {
    term: "DRE",
    abbr: "California Department of Real Estate",
    category: "Regulatory",
    definition:
      "California state agency issuing and regulating real estate broker and salesperson licenses. DSI's Broker of Record is Juan N. Williams (DRE# 01115216). DRE license numbers are publicly searchable on the DRE website.",
    slug: "dre",
  },

  // ───── Default & Workout ─────
  {
    term: "NOD",
    abbr: "Notice of Default",
    category: "Default & Workout",
    definition:
      "First recorded document in California's non-judicial foreclosure under §2924. The NOD identifies the property, the unpaid amount, and provides 90 days for the borrower to cure before the Notice of Sale can be recorded.",
    slug: "nod",
  },
  {
    term: "NOS",
    abbr: "Notice of Trustee Sale / Notice of Sale",
    category: "Default & Workout",
    definition:
      "Second recorded document in California's non-judicial foreclosure under §2924, recorded at least 90 days after the NOD. The NOS sets the trustee sale date (at least 21 days after recording) and is published in a local newspaper for three consecutive weeks.",
    slug: "nos",
  },
  {
    term: "Proof of Claim",
    abbr: "POC",
    category: "Default & Workout",
    definition:
      "Document filed in a bankruptcy case (under Bankruptcy Rule 3001) establishing a secured creditor's claim against the debtor's estate. For a private money loan, the POC includes the original note, deed of trust, complete payment history, and a current balance breakdown.",
    slug: "proof-of-claim",
  },
  {
    term: "Deed in Lieu",
    abbr: "DIL",
    category: "Default & Workout",
    definition:
      "Loss mitigation alternative in which a defaulting borrower voluntarily transfers title to the property to the lienholder in satisfaction of the debt, avoiding foreclosure. Used when a short sale is impractical and the borrower has no equity.",
    slug: "deed-in-lieu",
  },
  {
    term: "Loss Mitigation",
    category: "Default & Workout",
    definition:
      "The set of options offered to a defaulting borrower as alternatives to foreclosure: forbearance, repayment plan, loan modification, short sale, or deed in lieu. HBOR requires servicers of owner-occupied California residential loans to evaluate loss mitigation before completing foreclosure.",
    slug: "loss-mitigation",
  },
  {
    term: "Foreclosure",
    category: "Default & Workout",
    definition:
      "The legal process by which a lienholder forces the sale of property securing a defaulted loan. California permits both non-judicial foreclosure (the common path, governed by §2924) and judicial foreclosure (used when a deficiency judgment is sought).",
    slug: "foreclosure",
  },
  {
    term: "REO",
    abbr: "Real Estate Owned",
    category: "Default & Workout",
    definition:
      "Property that reverts to the lender after a failed trustee sale (no third-party bidder met the credit bid). REO transition involves post-sale accounting, property securement, broker assignment, and eventual disposition.",
    slug: "reo",
  },

  // ───── Servicing Operations ─────
  {
    term: "Loan Boarding",
    category: "Servicing Operations",
    definition:
      "The process of onboarding a new loan into a servicer's system. Steps include data ingestion, document indexing, trust account funding, payment schedule configuration, borrower welcome packet generation, and RESPA Section 6 servicing transfer notifications when applicable. DSI's target is 48 hours from complete document package to fully boarded.",
    slug: "loan-boarding",
  },
  {
    term: "Demand Statement",
    category: "Servicing Operations",
    definition:
      "Document issued by the servicer stating the payoff amount due on a loan as of a specified payoff date, including principal, accrued interest, late fees, advanced amounts, and a per-diem interest grid for adjustments. Required by escrow officers for refinances and sales.",
    slug: "demand-statement",
  },
  {
    term: "Beneficiary Statement",
    category: "Servicing Operations",
    definition:
      "Document issued by the servicer (acting on behalf of the beneficiary under the deed of trust) stating the current balance owed on a note. Used by title officers, escrow officers, and counsel to confirm lien status and outstanding obligations.",
    slug: "beneficiary-statement",
  },
  {
    term: "Reconveyance",
    category: "Servicing Operations",
    definition:
      "Recorded document by which a trustee releases a deed of trust after the underlying loan has been paid in full. Reconveyance is a required final step in the servicing lifecycle and removes the lien from the property record.",
    slug: "reconveyance",
  },
  {
    term: "Trust Accounting",
    category: "Servicing Operations",
    definition:
      "The practice of holding client funds (escrow, impound, and investor distributions) in segregated bank accounts separate from the servicer's operating capital. Required under California Finance Lenders Law and RESPA escrow rules. Commingling is a regulatory violation.",
    slug: "trust-accounting",
  },
  {
    term: "Escrow / Impound",
    category: "Servicing Operations",
    definition:
      "Funds collected by the servicer to pay property taxes, hazard insurance, and other recurring obligations on behalf of the borrower. Held in segregated trust accounts. RESPA limits the cushion to two months of payments and requires an annual escrow analysis.",
    slug: "escrow-impound",
  },
  {
    term: "ACH",
    abbr: "Automated Clearing House",
    category: "Servicing Operations",
    definition:
      "Electronic funds transfer network used by DSI for borrower payment collection and investor distribution. ACH transactions are typically settled within one business day and provide a clear audit trail.",
    slug: "ach",
  },
  {
    term: "Per-Diem Interest",
    category: "Servicing Operations",
    definition:
      "Daily interest amount accruing on a loan balance, calculated as principal × interest rate ÷ 365 (or 360 for certain conventions). Included on every payoff demand to allow accurate calculation if the payoff date shifts.",
    slug: "per-diem-interest",
  },
  {
    term: "Servicing Transfer",
    category: "Servicing Operations",
    definition:
      "Transfer of servicing rights from one servicer to another. Subject to RESPA Section 6 rules requiring 15-day advance notice to the borrower from the transferor and a separate notice from the transferee, plus a 60-day grace period during which late fees are waived if the borrower pays the wrong servicer.",
    slug: "servicing-transfer",
  },

  // ───── Investor & Tax ─────
  {
    term: "1098",
    category: "Investor & Tax",
    definition:
      "IRS form reporting mortgage interest paid by a borrower during the calendar year. Issued by the servicer to borrowers and the IRS by January 31 of the following year. DSI's standard is to lock the 1098 package on December 28 and deliver before January 31.",
    slug: "1098",
  },
  {
    term: "1099-INT",
    category: "Investor & Tax",
    definition:
      "IRS form reporting interest income paid to a noteholder (investor) during the calendar year. Issued by the servicer to investors and the IRS by January 31 of the following year. Delivered alongside DSI's 1098 package on the same locked December 28 / January 31 schedule.",
    slug: "1099-int",
  },
  {
    term: "1099-NEC",
    category: "Investor & Tax",
    definition:
      "IRS form reporting nonemployee compensation paid during the calendar year. Issued by the servicer when broker fees, referral fees, or other nonemployee compensation are disbursed at payoff or otherwise during servicing.",
    slug: "1099-nec",
  },
  {
    term: "K-1",
    category: "Investor & Tax",
    definition:
      "IRS partnership tax form (Schedule K-1, Form 1065) reporting a partner's share of income, deductions, and credits. DSI does not issue K-1s directly but delivers loan-level supporting schedules to fund administrators and tax preparers responsible for partnership returns.",
    slug: "k-1",
  },
  {
    term: "SDIRA",
    abbr: "Self-Directed Individual Retirement Account",
    category: "Investor & Tax",
    definition:
      "An IRA that permits alternative asset investments, including private notes secured by real estate. Held through specialized custodians (Equity Trust, Quest Trust, Madison Trust, etc.) who hold legal title; distributions route to the custodian, not the beneficial owner.",
    slug: "sdira",
  },
  {
    term: "Fractional Trust Deed",
    category: "Investor & Tax",
    definition:
      "A trust deed where ownership of the secured note is divided among multiple investors holding fractional pro-rata interests (e.g., 60/30/10). Distributions must be calculated to the penny per share, and tax forms must be issued to each investor individually.",
    slug: "fractional-trust-deed",
  },
  {
    term: "GAAP",
    abbr: "Generally Accepted Accounting Principles",
    category: "Investor & Tax",
    definition:
      "The accounting standard framework codified by the FASB. DSI's monthly investor statements are aligned with GAAP to support fund audit acceptance. Family-office and fund LP investors typically require GAAP-aligned statements for their own auditor fieldwork.",
    slug: "gaap",
  },
  {
    term: "Servicer of Record",
    category: "Investor & Tax",
    definition:
      "The party legally identified on the servicing transfer notice (and on borrower-facing communications) as responsible for collecting payments, managing escrow, distributing to investors, and reporting on the loan. The servicer of record may differ from the master servicer or the originator.",
    slug: "servicer-of-record",
  },

  // ───── Loan Types ─────
  {
    term: "Bridge Loan",
    category: "Loan Types",
    definition:
      "Short-term real estate loan (typically 6–24 months) used to bridge a financing gap — for example, between the purchase of a new property and the sale of an existing one. Common in private money lending; typically interest-only with a balloon payoff at maturity.",
    slug: "bridge-loan",
  },
  {
    term: "Hard Money Loan",
    category: "Loan Types",
    definition:
      "Short-term real estate loan from a private lender, underwritten primarily on the property's value rather than borrower credit. Faster to close than bank financing, typically with higher rates and points. Used for fix-and-flip, bridge financing, and scenarios banks decline.",
    slug: "hard-money-loan",
  },
  {
    term: "Private Money Loan",
    category: "Loan Types",
    definition:
      "Real estate loan funded by private capital — individual investors, family offices, private debt funds — rather than by a bank or institutional lender. Encompasses hard money, bridge, construction, and trust deed investment loans.",
    slug: "private-money-loan",
  },
  {
    term: "Fix-and-Flip Loan",
    category: "Loan Types",
    definition:
      "Short-term real estate loan used by investors who acquire distressed property, renovate, and resell at a profit. Underwriting focuses on the after-repair value (ARV) and the borrower's renovation experience.",
    slug: "fix-and-flip-loan",
  },
];

export const GLOSSARY_CATEGORIES = Array.from(
  new Set(GLOSSARY.map((t) => t.category))
);
