// src/data/guides.js
export const guides = [
  {
    slug: "write-winning-proposal",
    title: "Write a winning proposal",
    excerpt:
      "Structure, scope and pricing that convert. A simple framework you can reuse.",
    category: "Proposals",
    readTime: "6 min",
    updated: "2025-08-31",
    level: "Beginner",
    tags: ["copywriting", "structure", "pricing"],
  },
  {
    slug: "pricing-strategy-for-quotes",
    title: "Pricing strategy for quotes",
    excerpt:
      "From hourly to value-based: pros, cons and a hybrid approach that works.",
    category: "Pricing",
    readTime: "7 min",
    updated: "2025-08-31",
    level: "Intermediate",
    tags: ["pricing", "value-based", "profit"],
  },
  {
    slug: "ai-polish-and-sections",
    title: "Use AI to polish tone and expand sections",
    excerpt:
      "Turn rough notes into client-ready copy. Prompts that keep your voice.",
    category: "AI",
    readTime: "5 min",
    updated: "2025-08-31",
    level: "Beginner",
    tags: ["ai", "prompts", "workflow"],
  },
  {
    slug: "templates-and-snippets",
    title: "Templates & snippets 101",
    excerpt:
      "Save your best work and reuse it safely. Versioning and reuse tips.",
    category: "Templates",
    readTime: "4 min",
    updated: "2025-08-31",
    level: "Beginner",
    tags: ["templates", "snippets", "process"],
  },
  {
    slug: "approvals-and-esign",
    title: "Approvals & e-sign workflow",
    excerpt:
      "Get to “yes” faster: comments, approvals and signatures without friction.",
    category: "Workflow",
    readTime: "6 min",
    updated: "2025-08-31",
    level: "Intermediate",
    tags: ["approvals", "esign", "process"],
  },
  {
    slug: "share-link-vs-pdf",
    title: "Share as a link vs export as PDF",
    excerpt:
      "When to send a live link and when a PDF is better. Pros and cons.",
    category: "Delivery",
    readTime: "3 min",
    updated: "2025-08-31",
    level: "Beginner",
    tags: ["delivery", "pdf", "link"],
  },
  {
    slug: "line-items-and-descriptions",
    title: "Line items: descriptions that sell",
    excerpt:
      "Make every line item crystal-clear to reduce pushback and increase trust.",
    category: "Proposals",
    readTime: "5 min",
    updated: "2025-08-31",
    level: "Beginner",
    tags: ["line items", "clarity"],
  },
  {
    slug: "discounts-and-packages",
    title: "Discounts & packages, the smart way",
    excerpt:
      "Use anchors, bundles and incentives without eroding your margins.",
    category: "Pricing",
    readTime: "6 min",
    updated: "2025-08-31",
    level: "Intermediate",
    tags: ["discounts", "bundles"],
  },
];

export const guideBodies = {
  "write-winning-proposal": [
    {
      h: "Overview",
      p: [
        "A winning proposal is clear, scoped and priced so the client can say “yes” quickly.",
        "Use this 5-part structure each time.",
      ],
    },
    {
      h: "Framework",
      list: [
        "Summary: outcome in one paragraph.",
        "Scope: what’s included (and excluded).",
        "Timeline & milestones.",
        "Price & options (good/better/best).",
        "Next steps & validity (e.g., 14 days).",
      ],
    },
    {
      h: "Tips",
      list: [
        "Lead with outcomes, not deliverables.",
        "Use options to anchor value.",
        "State assumptions to reduce scope creep.",
      ],
    },
  ],

  "pricing-strategy-for-quotes": [
    {
      h: "Choosing a model",
      p: [
        "Value-based beats hourly when outcomes matter. Consider a hybrid: base + success component.",
      ],
    },
    { h: "Anchoring", list: ["Show 3 options.", "Make the middle one your target."] },
  ],

  "ai-polish-and-sections": [
    {
      h: "Prompts that work",
      list: [
        "“Polish for clarity, keep my voice, 120–160 words.”",
        "“Expand this section with benefits and outcomes.”",
      ],
    },
  ],

  "templates-and-snippets": [
    {
      h: "Save once, reuse forever",
      p: [
        "Create base templates per service and snippets for objections, guarantees and bios.",
      ],
    },
  ],

  "approvals-and-esign": [
    {
      h: "Reduce friction",
      list: [
        "Collect comments in one place.",
        "Offer signature immediately after approval.",
      ],
    },
  ],

  "share-link-vs-pdf": [
    {
      h: "Rule of thumb",
      list: [
        "Send a live link for interactive pricing and quick edits.",
        "Send PDF when procurement needs a file for records.",
      ],
    },
  ],

  "line-items-and-descriptions": [
    {
      h: "Make it obvious",
      list: [
        "Describe the client impact of each item.",
        "Add inclusions/exclusions to prevent surprises.",
      ],
    },
  ],

  "discounts-and-packages": [
    {
      h: "Protect margins",
      list: ["Bundle to raise perceived value.", "Time-limit any discount."],
    },
  ],
};
