export const guides = [
  {
    slug: "write-winning-proposal",
    title: "Write a winning proposal",
    excerpt: "Structure, scope and pricing that convert. A simple framework you can reuse.",
    category: "Proposals",
    readTime: "6 min",
    updated: "2025-08-31",
    level: "Beginner",
    tags: ["copywriting", "structure", "pricing"],
  },
  {
    slug: "pricing-strategy-for-quotes",
    title: "Pricing strategy for quotes",
    excerpt: "From hourly to value-based: pros, cons and a hybrid approach that works.",
    category: "Pricing",
    readTime: "7 min",
    updated: "2025-08-31",
    level: "Intermediate",
    tags: ["pricing", "value-based", "profit"],
  },
  {
    slug: "scope-creep-protect-margins",
    title: "Scope creep: protect your margins",
    excerpt: "Set assumptions, change-orders and options that keep projects in bounds.",
    category: "Workflow",
    readTime: "4 min",
    updated: "2025-08-31",
    level: "Beginner",
    tags: ["scope", "assumptions", "change-order"],
  },
];

export const guideBodies = {
  "write-winning-proposal": [
    { h: "Overview", p: ["A winning proposal is clear, scoped and priced so the client can say “yes”."] },
    {
      h: "Framework",
      list: [
        "Summary: outcome in one paragraph.",
        "Scope: what’s included/excluded.",
        "Timeline & milestones.",
        "Price & options (good/better/best).",
        "Next steps & validity (e.g., 14 days).",
      ],
    },
  ],
  "pricing-strategy-for-quotes": [
    { h: "Choosing a model", p: ["Consider value-based or a hybrid: base + success component."] },
    { h: "Anchoring", list: ["Show 3 options.", "Make the middle one your target."] },
  ],
  "scope-creep-protect-margins": [
    { h: "Controls", list: ["Write assumptions.", "Track change-requests.", "Price additions as options."] },
  ],
};
