// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ...types unchanged...

export const defaultHomeContent: HomeContent = {
  hero: {
    badgeInner: "Launch",
    badgeOuter: "LeadFlow is live",
    titleBefore: "Effortless ",
    titleHighlight: "Lead Management",
    titleAfter: "",
    subtitle: "Track, organize, and manage your sales leads in one simple dashboard. No clutter—just the essentials.",
    primaryCta: { label: "Get Started Free", href: "/auth#signup" },
    secondaryCta: { label: "Explore features", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "LeadFlow dashboard preview"
  },
  sponsors: {
    heading: "Built with trusted tools",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
    ],
  },
  benefits: {
    eyebrow: "Why LeadFlow",
    heading: "Simple, effective lead tracking for small businesses",
    description: "Built for teams who want to streamline sales pipelines with minimal effort and maximum clarity.",
    items: [
      {
        icon: "Blocks",
        title: "Add and Track Leads",
        description: "Easily capture new leads and keep all your prospects organized."
      },
      {
        icon: "LineChart",
        title: "Simple Dashboard",
        description: "See your leads at a glance and never miss a follow-up."
      },
      {
        icon: "Sparkle",
        title: "No Distractions",
        description: "LeadFlow includes only what you need—no extra features or clutter."
      },
    ],
  },
  features: {
    eyebrow: "Features",
    heading: "Why LeadFlow?",
    subtitle: "",
    items: [
      {
        icon: "TabletSmartphone",
        title: "Add and Track Leads",
        description: "Easily capture new leads and keep all your prospects organized.",
      },
      {
        icon: "BadgeCheck",
        title: "Simple Dashboard",
        description: "See your leads at a glance and never miss a follow-up.",
      },
      {
        icon: "Sparkle",
        title: "No Distractions",
        description: "LeadFlow includes only what you need—no extra features or clutter.",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    heading: "Core capabilities",
    subtitle: "Essential tools for small businesses and solo sales teams.",
    items: [
      { title: "Lead Management", description: "Capture, edit, and organize leads in your workflow.", pro: true },
      { title: "Activity Tracking", description: "See your entire pipeline and history at a glance.", pro: false },
      { title: "Team Access", description: "Share leads and pipeline status with your team.", pro: false },
    ],
  },
  testimonials: {
    eyebrow: "What Our Users Say",
    heading: "What Our Users Say",
    reviews: [
      {
        image: "/demo-img.jpg",
        name: "Jordan",
        role: "Freelance Sales Consultant",
        comment: "LeadFlow keeps my leads organized and helps me focus on closing deals.",
        rating: 5.0
      }
    ],
  },
  team: {
    eyebrow: "Team",
    heading: "Meet the team",
    members: [],
  },
  pricing: {
    eyebrow: "Pricing",
    heading: "Flexible for any workflow",
    subtitle: "Sign up free now. Upgrade anytime.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Starter",
        popular: false,
        price: 0,
        description: "For solopreneurs or small teams getting started.",
        buttonText: "Sign Up Free",
        benefits: [
          "Unlimited leads",
          "Basic dashboard access",
          "Email support",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    heading: "Contact the LeadFlow Team",
    description:
      "Have questions about using LeadFlow for your business? Reach out anytime.",
    mailtoAddress: "adan@bidx.ai",
    info: {
      address: { label: "Find us", value: "Remote-first • San Francisco, CA" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email us", value: "adan@bidx.ai" },
      hours: { label: "Hours", value: ["Monday - Friday", "9AM - 6PM PT"] },
    },
    formSubjects: ["Leads Inquiry", "Feature Request", "Help/Support"],
    formSubmitLabel: "Send Message",
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Common Questions",
    items: [
      { question: "Is LeadFlow free to start?", answer: "Yes, you can sign up and start tracking leads for free." },
      { question: "Can I invite my team?", answer: "Yes, LeadFlow supports team workflows as you grow." },
      { question: "Will I get reminders or follow-ups?", answer: "LeadFlow makes it simple to always know your next step." },
    ],
  },
  footer: {
    brandName: "LeadFlow",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "adan@bidx.ai", href: "mailto:adan@bidx.ai" },
          { label: "Github", href: "#" },
          { label: "Twitter", href: "https://x.com" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com" },
          { label: "X", href: "https://x.com" },
        ],
      },
    ],
    copyright: "\u00a9 2026 LeadFlow. All rights reserved.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },
  navbar: {
    brandName: "LeadFlow",
    routes: [
      { href: "/#features", label: "Why LeadFlow" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/demo-img.jpg", alt: "LeadFlow preview" },
    features: [
      { title: "Add and Track Leads", description: "Effortlessly add, edit, and organize all your sales leads." },
      { title: "Simple Dashboard", description: "All your leads and pipeline at a glance, nothing extra." },
      { title: "No Distractions", description: "Built to help you focus on what matters: your next deal." },
    ],
    signInLabel: "Sign In",
    signUpLabel: "Sign Up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "#", ariaLabel: "View on GitHub" },
  },
};

export const homeContent: HomeContent = defaultHomeContent;

export function getHomeContent(): HomeContent {
  return homeContent;
}