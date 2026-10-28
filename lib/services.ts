import {
  Smartphone,
  Gamepad2,
  TrendingUp,
  Search,
  Megaphone,
  ShieldCheck,
  CodeXml,
  ShoppingCart,
  BrainCircuit,
  type LucideIcon,
} from "lucide-react";

export type Item = { title: string; desc: string };
export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  tagline: string;
  summary: string;
  intro: string[];
  offerings: Item[];
  process: Item[];
  tools: string[];
  benefits: string[];
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "app-development",
    title: "Mobile App Development",
    shortTitle: "App Development",
    icon: Smartphone,
    metaTitle: "Mobile App Development Services – iOS, Android & Flutter",
    metaDescription:
      "Custom iOS, Android, Flutter and React Native app development by CodeVira. From MVP to enterprise apps — fast, secure and built to scale.",
    keywords: ["mobile app development", "android app development", "iOS app development", "Flutter developers", "React Native agency", "app development company Pakistan"],
    tagline: "Native-quality apps that users love to open every day.",
    summary:
      "High-performance iOS, Android and cross-platform apps — from MVP to enterprise — designed for retention and built to scale.",
    intro: [
      "Your app is often the most personal touchpoint between your brand and your customers. At CodeVira we design and engineer mobile applications that feel fast, look beautiful and solve real problems — whether you are validating a startup idea with an MVP or modernising a business-critical product.",
      "We work across native Android (Kotlin), native iOS (Swift) and cross-platform frameworks like Flutter and React Native, choosing the right technology for your budget, timeline and long-term roadmap. Every build includes clean architecture, secure APIs, analytics and a smooth path to the Google Play Store and Apple App Store.",
    ],
    offerings: [
      { title: "Android App Development", desc: "Native Kotlin and Jetpack Compose apps optimised for thousands of Android devices and screen sizes." },
      { title: "iOS App Development", desc: "Swift and SwiftUI apps that follow Apple's Human Interface Guidelines and pass App Store review smoothly." },
      { title: "Cross-Platform Apps", desc: "Flutter and React Native apps that share one codebase across iOS and Android to cut cost and time-to-market." },
      { title: "MVP & Prototyping", desc: "Clickable prototypes and lean MVPs that let you validate ideas with real users and investors quickly." },
      { title: "Backend & API Integration", desc: "Scalable backends with Firebase, Node.js or Laravel, plus payments, maps, chat and push notifications." },
      { title: "Maintenance & Upgrades", desc: "OS updates, performance tuning, crash fixes and new features so your app keeps improving after launch." },
    ],
    process: [
      { title: "Discovery & Strategy", desc: "We map your goals, users and features into a clear product scope and roadmap." },
      { title: "UI/UX Design", desc: "Wireframes and high-fidelity designs focused on intuitive flows and conversion." },
      { title: "Agile Development", desc: "Two-week sprints with demo builds so you see progress continuously." },
      { title: "Testing & Launch", desc: "Device testing, store listing preparation and a smooth release to both stores." },
      { title: "Growth & Support", desc: "Analytics, ASO and iterative updates driven by real user behaviour." },
    ],
    tools: ["Flutter", "React Native", "Kotlin", "Swift", "Firebase", "Node.js", "Laravel", "Supabase", "Figma", "Google Play Console", "App Store Connect"],
    benefits: [
      "Dedicated project manager and transparent weekly reporting",
      "Clean, documented source code that you fully own",
      "Store-ready builds with launch support included",
      "Security best practices and data protection by design",
      "Post-launch support and flexible maintenance plans",
    ],
    faqs: [
      { q: "How much does it cost to build a mobile app?", a: "Cost depends on features, platforms and integrations. A focused MVP is typically far more affordable than a full-featured product. Share your idea with us and we will send a detailed, no-obligation estimate within 48 hours." },
      { q: "How long does app development take?", a: "A simple MVP usually takes 4–8 weeks, while feature-rich apps can take 3–6 months. We break work into milestones so you can launch early and iterate." },
      { q: "Should I choose Flutter or native development?", a: "Flutter is ideal for most business apps that need to ship on both platforms quickly. Native development is better for apps that rely heavily on device-specific hardware or advanced performance. We will recommend the best fit after understanding your needs." },
      { q: "Will you publish the app to the Play Store and App Store?", a: "Yes. We handle store listings, screenshots, compliance checks and submission, and we can also optimise your listing with our ASO service." },
    ],
  },
  {
    slug: "game-development",
    title: "Game Development",
    shortTitle: "Game Development",
    icon: Gamepad2,
    metaTitle: "Game Development Studio – Unity, Mobile & 2D/3D Games",
    metaDescription:
      "CodeVira builds engaging 2D and 3D games for mobile, PC and web using Unity and modern engines — with monetization, multiplayer and live-ops built in.",
    keywords: ["game development company", "Unity game developers", "mobile game development", "hyper casual games", "2D 3D game development", "game studio Pakistan"],
    tagline: "Games that hook players in seconds and keep them for months.",
    summary:
      "Addictive 2D & 3D games for mobile, PC and web — engineered with smart monetization, smooth gameplay and live-ops in mind.",
    intro: [
      "Great games combine art, engineering and psychology. CodeVira's game team crafts experiences that feel satisfying from the very first tap — with tight controls, polished visuals and progression systems that keep players coming back.",
      "From hyper-casual and puzzle titles to mid-core and multiplayer games, we handle concept, game design, art, development, monetization and publishing support. We build on proven engines like Unity and integrate ad networks, in-app purchases and analytics so your game is built to earn, not just to ship.",
    ],
    offerings: [
      { title: "Mobile Game Development", desc: "Hyper-casual, casual and puzzle games tuned for Android and iOS performance." },
      { title: "2D & 3D Games", desc: "Stylised 2D worlds and immersive 3D environments with optimised assets." },
      { title: "Game Design & GDD", desc: "Core loops, level design, economy balancing and a complete game design document." },
      { title: "Multiplayer & Backend", desc: "Real-time multiplayer, leaderboards, cloud saves and player accounts." },
      { title: "Monetization Setup", desc: "AdMob, Unity Ads, AppLovin MAX mediation and in-app purchase integration." },
      { title: "Porting & Live-Ops", desc: "Port games across platforms and run events, updates and A/B tests post-launch." },
    ],
    process: [
      { title: "Concept & Pitch", desc: "Market research, references and a playable concept direction." },
      { title: "Prototype", desc: "A quick playable prototype to validate fun and core mechanics." },
      { title: "Production", desc: "Art, animation, levels, sound and full gameplay development." },
      { title: "Playtesting & QA", desc: "Balancing, device testing and performance optimisation." },
      { title: "Launch & Live-Ops", desc: "Store release, ASO, analytics and content updates." },
    ],
    tools: ["Unity", "C#", "Godot", "Blender", "Spine", "Photon", "PlayFab", "Firebase", "AdMob", "AppLovin MAX", "GameAnalytics"],
    benefits: [
      "Focus on retention metrics (D1, D7, D30) from day one",
      "Monetization designed into the game, not bolted on",
      "Optimised builds that run smoothly on low-end devices",
      "Full source code and asset ownership",
      "Publishing and ASO support for a stronger launch",
    ],
    faqs: [
      { q: "Which game engines do you use?", a: "We primarily use Unity for mobile and cross-platform games, and Godot for lightweight 2D projects. We pick the engine based on your game's scope and target platforms." },
      { q: "Can you build a game from my idea?", a: "Absolutely. We turn ideas into a design document, a playable prototype and then a full production game, keeping you involved at every milestone." },
      { q: "Do you help monetize games?", a: "Yes. We integrate rewarded and interstitial ads, mediation, in-app purchases and subscriptions, and balance them carefully so they do not hurt player retention." },
      { q: "Do you provide art and sound as well?", a: "Yes, our team provides 2D/3D art, UI, animation and sound design, or we can work with assets you already have." },
    ],
  },
  {
    slug: "app-store-optimization",
    title: "App Store Optimization (ASO)",
    shortTitle: "ASO",
    icon: TrendingUp,
    metaTitle: "App Store Optimization (ASO) Services – Google Play & App Store",
    metaDescription:
      "Rank higher and win more installs with CodeVira's ASO services: keyword research, metadata, creatives, A/B testing and ratings strategy for Google Play and the App Store.",
    keywords: ["app store optimization", "ASO services", "Google Play ASO", "App Store keyword optimization", "increase app downloads", "ASO agency"],
    tagline: "More visibility, more installs — without paying for every download.",
    summary:
      "Data-driven ASO for Google Play and the App Store that boosts rankings, conversion rates and organic installs.",
    intro: [
      "Most app downloads start with a store search. App Store Optimization makes sure your app shows up for the right keywords and convinces users to tap Install. CodeVira combines keyword data, competitor intelligence and conversion-focused creatives to grow your organic installs sustainably.",
      "We optimise every element that the Google Play and Apple algorithms read — titles, subtitles, short and long descriptions, keyword fields, screenshots, preview videos and ratings — then measure, test and refine month after month.",
    ],
    offerings: [
      { title: "Keyword Research", desc: "High-volume, low-competition keywords discovered with professional ASO tools." },
      { title: "Metadata Optimization", desc: "Titles, subtitles and descriptions written for both algorithms and humans." },
      { title: "Creative Optimization", desc: "Icons, screenshots and preview videos designed to lift conversion rates." },
      { title: "A/B Testing", desc: "Store listing experiments to find the creatives and copy that convert best." },
      { title: "Ratings & Reviews Strategy", desc: "In-app review prompts and reply management to improve your rating." },
      { title: "Localization", desc: "Localised listings that unlock installs in new countries and languages." },
    ],
    process: [
      { title: "Audit", desc: "We analyse your current listing, rankings and competitors." },
      { title: "Research", desc: "Keyword mapping and creative benchmarking against top apps." },
      { title: "Optimize", desc: "New metadata and creatives rolled out to the stores." },
      { title: "Test & Report", desc: "Experiments and monthly reports on rankings and installs." },
    ],
    tools: ["AppTweak", "Sensor Tower", "data.ai", "Google Play Console", "App Store Connect", "Figma", "Firebase Analytics"],
    benefits: [
      "Higher keyword rankings and search visibility",
      "Improved store listing conversion rate",
      "Lower overall cost per install",
      "Transparent monthly reporting",
      "Works hand-in-hand with paid user acquisition",
    ],
    faqs: [
      { q: "How long does ASO take to show results?", a: "Many apps see ranking movement within 2–6 weeks of a metadata update. Compounding results come from continuous testing over several months." },
      { q: "Is ASO different from SEO?", a: "Yes. ASO targets app store search algorithms and listing conversion, while SEO targets web search engines like Google. The principles are similar, but the ranking factors differ." },
      { q: "Do you optimise both Google Play and Apple App Store?", a: "Yes, we handle both stores, including their different metadata fields and creative requirements." },
      { q: "Can ASO help an app with very few downloads?", a: "Definitely. Targeting the right long-tail keywords is often the fastest way for a new app to start earning organic installs." },
    ],
  },
  {
    slug: "seo",
    title: "Search Engine Optimization (SEO)",
    shortTitle: "SEO",
    icon: Search,
    metaTitle: "SEO Services – Rank Higher on Google & Grow Organic Traffic",
    metaDescription:
      "Result-driven SEO services by CodeVira: technical SEO, on-page optimisation, content strategy, local SEO and white-hat link building to grow your organic traffic.",
    keywords: ["SEO services", "SEO agency", "technical SEO", "local SEO", "on-page SEO", "link building services", "SEO company Pakistan"],
    tagline: "Be found first by customers who are already searching for you.",
    summary:
      "Technical, on-page, local and content SEO that earns lasting Google rankings and qualified organic traffic.",
    intro: [
      "Organic search is one of the highest-ROI marketing channels — when it is done right. CodeVira's SEO team follows Google's guidelines and focuses on what actually moves rankings: a technically sound website, content that answers real search intent and authority built through genuine links.",
      "Whether you are a local business wanting more calls, an e-commerce store chasing product rankings or a SaaS company targeting global keywords, we build a custom strategy, execute it consistently and report results in plain language.",
    ],
    offerings: [
      { title: "Technical SEO", desc: "Site speed, Core Web Vitals, crawlability, indexing, schema markup and site architecture." },
      { title: "On-Page SEO", desc: "Keyword-optimised titles, meta tags, headings, internal links and content structure." },
      { title: "Content Strategy", desc: "Topic clusters and blog content that targets every stage of the buyer journey." },
      { title: "Local SEO", desc: "Google Business Profile optimisation, citations and location pages for local visibility." },
      { title: "Link Building", desc: "White-hat outreach, digital PR and guest posts on relevant, trusted websites." },
      { title: "SEO Audits & Reporting", desc: "In-depth audits and monthly reports covering rankings, traffic and conversions." },
    ],
    process: [
      { title: "SEO Audit", desc: "Technical, content and backlink audit with a prioritised action plan." },
      { title: "Keyword Strategy", desc: "Intent-based keyword mapping for every important page." },
      { title: "Implementation", desc: "Technical fixes, on-page optimisation and new content." },
      { title: "Authority Building", desc: "Ethical link building and brand mentions." },
      { title: "Measure & Improve", desc: "Monthly reporting and continuous optimisation." },
    ],
    tools: ["Google Search Console", "Google Analytics 4", "Ahrefs", "Semrush", "Screaming Frog", "PageSpeed Insights", "Google Business Profile"],
    benefits: [
      "100% white-hat techniques aligned with Google guidelines",
      "Sustainable traffic that does not stop when ads stop",
      "Higher trust and credibility from top organic rankings",
      "Clear KPIs and honest, easy-to-read reports",
      "No long lock-in contracts",
    ],
    faqs: [
      { q: "How long does SEO take to work?", a: "SEO is a long-term investment. Technical fixes can show impact within weeks, while competitive keyword rankings typically take 3–6 months of consistent work." },
      { q: "Do you guarantee first position on Google?", a: "No honest agency can guarantee a specific ranking because Google controls its algorithm. We guarantee transparent, proven, white-hat work focused on measurable growth." },
      { q: "Do you offer local SEO for small businesses?", a: "Yes. We optimise your Google Business Profile, local citations and location pages so you appear in map results and local searches." },
      { q: "Will you write content for my website?", a: "Yes, our writers create SEO-optimised, human-friendly content including service pages, blogs and product descriptions." },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortTitle: "Digital Marketing",
    icon: Megaphone,
    metaTitle: "Digital Marketing Agency – Social Media, PPC & Performance Ads",
    metaDescription:
      "Grow sales with CodeVira's digital marketing: social media marketing, Google & Meta ads, content marketing, email campaigns and conversion optimisation.",
    keywords: ["digital marketing agency", "social media marketing", "Google Ads management", "Facebook ads agency", "PPC services", "performance marketing"],
    tagline: "Campaigns that turn attention into revenue.",
    summary:
      "Performance-focused social media, paid ads, content and email marketing that turns clicks into customers.",
    intro: [
      "Digital marketing works best when creativity meets data. CodeVira plans and runs campaigns across Google, Meta (Facebook & Instagram), TikTok, LinkedIn and email — with every rupee and dollar tracked back to leads and sales.",
      "We start with your audience and offer, craft compelling creatives and copy, then optimise relentlessly using analytics and A/B testing. The result is a predictable growth engine instead of random posts and boosted ads.",
    ],
    offerings: [
      { title: "Social Media Marketing", desc: "Content calendars, creatives and community management across all major platforms." },
      { title: "Google Ads (PPC)", desc: "Search, Display, Shopping and YouTube campaigns optimised for ROAS." },
      { title: "Meta & TikTok Ads", desc: "Audience research, creative testing and scaling of profitable ad sets." },
      { title: "Content Marketing", desc: "Blogs, videos and graphics that build authority and nurture buyers." },
      { title: "Email Marketing", desc: "Automated flows and newsletters that drive repeat purchases." },
      { title: "Conversion Rate Optimization", desc: "Landing page improvements and testing to get more from existing traffic." },
    ],
    process: [
      { title: "Research", desc: "Audience, competitor and offer analysis." },
      { title: "Strategy", desc: "Channel mix, budget plan and KPIs." },
      { title: "Launch", desc: "Creatives, copy, tracking and campaign setup." },
      { title: "Optimize & Scale", desc: "Data-driven testing and scaling of winners." },
    ],
    tools: ["Meta Business Suite", "Google Ads", "TikTok Ads", "LinkedIn Ads", "Google Tag Manager", "GA4", "Mailchimp", "Canva", "Hotjar"],
    benefits: [
      "Full-funnel strategy from awareness to conversion",
      "Proper conversion tracking and attribution",
      "Scroll-stopping creatives made in-house",
      "Budget-friendly packages for growing businesses",
      "Weekly performance insights",
    ],
    faqs: [
      { q: "What budget do I need for paid ads?", a: "We work with a range of budgets. We'll recommend a starting test budget based on your industry and goals, then scale what performs." },
      { q: "Which platform is best for my business?", a: "It depends on where your customers spend time and how they buy. B2C brands often succeed on Meta and TikTok, while high-intent services perform well on Google Search. We'll recommend the right mix." },
      { q: "Do you create the ad creatives?", a: "Yes. Our designers and copywriters produce static, carousel and short-form video creatives tailored to each platform." },
      { q: "How do you report results?", a: "You'll receive clear reports covering spend, leads, sales, cost per acquisition and ROAS, plus our recommendations for the next period." },
    ],
  },
  {
    slug: "quality-assurance",
    title: "QA & Software Testing",
    shortTitle: "QA Testing",
    icon: ShieldCheck,
    metaTitle: "QA & Software Testing Services – Manual & Automation Testing",
    metaDescription:
      "Ship bug-free software with CodeVira's QA services: manual testing, automation, performance, API, security and mobile app testing.",
    keywords: ["QA testing services", "software testing company", "automation testing", "mobile app testing", "manual testing", "performance testing"],
    tagline: "Release with confidence — every single time.",
    summary:
      "Manual and automated testing for web, mobile and games that catches bugs before your users do.",
    intro: [
      "A single crash or broken checkout can cost you users and revenue. CodeVira's QA engineers test your software the way real users use it — across devices, browsers and edge cases — so problems are caught early when they are cheapest to fix.",
      "We provide independent testing for products built by any team, as well as QA embedded within our own development projects. From test planning to automation frameworks and regression suites, we help you release faster without sacrificing quality.",
    ],
    offerings: [
      { title: "Manual Testing", desc: "Functional, exploratory, usability and regression testing by experienced testers." },
      { title: "Test Automation", desc: "Automated UI and regression suites with Selenium, Cypress, Playwright and Appium." },
      { title: "Mobile App Testing", desc: "Real-device testing across Android and iOS versions and screen sizes." },
      { title: "API Testing", desc: "Contract, functional and load testing of REST and GraphQL APIs." },
      { title: "Performance Testing", desc: "Load and stress testing to make sure your product scales under pressure." },
      { title: "Game Testing", desc: "Gameplay, compatibility, balance and monetization flow testing." },
    ],
    process: [
      { title: "Requirement Analysis", desc: "Understand features, risks and acceptance criteria." },
      { title: "Test Planning", desc: "Test strategy, cases and environment setup." },
      { title: "Execution", desc: "Manual and automated test runs with detailed bug reports." },
      { title: "Regression & Sign-off", desc: "Verify fixes and deliver a release quality report." },
    ],
    tools: ["Selenium", "Cypress", "Playwright", "Appium", "Postman", "JMeter", "Jira", "TestRail", "BrowserStack"],
    benefits: [
      "Fewer production bugs and support tickets",
      "Faster, safer release cycles",
      "Clear bug reports with steps, screenshots and videos",
      "Flexible engagement — per project or dedicated tester",
      "Independent, unbiased quality assessment",
    ],
    faqs: [
      { q: "Can you test software built by another company?", a: "Yes. We offer independent QA for any web, mobile or game product, regardless of who developed it." },
      { q: "Manual or automation testing — which do I need?", a: "Most products need both. Manual testing is best for new features and usability; automation is ideal for repetitive regression tests. We'll recommend the right balance." },
      { q: "What do your bug reports include?", a: "Each report includes severity, environment, clear reproduction steps, expected vs. actual results and screenshots or screen recordings." },
      { q: "Do you test on real devices?", a: "Yes. We use a mix of physical devices and cloud device farms to cover a wide range of phones, tablets and browsers." },
    ],
  },
  {
    slug: "web-development",
    title: "Web Development & Design",
    shortTitle: "Web Development",
    icon: CodeXml,
    metaTitle: "Web Development & Website Design Services – Fast, SEO-Ready Sites",
    metaDescription:
      "Modern, responsive and SEO-ready websites and web apps by CodeVira — built with Next.js, React, WordPress, Shopify and Laravel.",
    keywords: ["web development company", "website design services", "Next.js developers", "WordPress development", "custom web application", "responsive website design"],
    tagline: "Websites that look premium, load instantly and convert visitors.",
    summary:
      "Stunning, lightning-fast websites and web apps — designed to impress, engineered to rank and built to convert.",
    intro: [
      "Your website is your 24/7 salesperson. CodeVira designs and develops websites that make a strong first impression, communicate your value clearly and guide visitors towards action — on every device.",
      "From corporate websites and landing pages to custom web applications, dashboards and SaaS platforms, we use modern technologies like Next.js, React, Node.js, Laravel and WordPress. Every site is built mobile-first, accessibility-aware and SEO-ready from the very first line of code.",
    ],
    offerings: [
      { title: "UI/UX Website Design", desc: "Custom, brand-aligned designs in Figma with a focus on clarity and conversion." },
      { title: "Corporate & Business Websites", desc: "Professional sites that build trust and generate qualified leads." },
      { title: "Custom Web Applications", desc: "Dashboards, portals, SaaS products and internal tools built to your workflow." },
      { title: "WordPress Development", desc: "Custom themes and plugins with an easy-to-use admin for your team." },
      { title: "Landing Pages", desc: "High-converting pages for campaigns, launches and lead generation." },
      { title: "Website Maintenance", desc: "Updates, backups, security monitoring and performance improvements." },
    ],
    process: [
      { title: "Discovery", desc: "Goals, audience, sitemap and content planning." },
      { title: "Design", desc: "Wireframes and pixel-perfect UI for desktop and mobile." },
      { title: "Development", desc: "Clean, fast and secure code with CMS integration." },
      { title: "Testing & SEO", desc: "Cross-browser QA, speed and on-page SEO setup." },
      { title: "Launch & Care", desc: "Deployment, training and ongoing support." },
    ],
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Laravel", "WordPress", "Shopify", "MongoDB", "PostgreSQL", "Vercel", "Figma"],
    benefits: [
      "Mobile-first, responsive design on every screen",
      "90+ PageSpeed scores and Core Web Vitals optimisation",
      "SEO-ready structure, schema and metadata",
      "Easy content management for your team",
      "Secure hosting, SSL and deployment setup",
    ],
    faqs: [
      { q: "How long does it take to build a website?", a: "A business website typically takes 2–4 weeks. Custom web applications vary based on features and are planned in clear milestones." },
      { q: "Will my website be mobile-friendly and SEO-optimised?", a: "Yes. Every website we build is fully responsive and includes technical SEO foundations such as clean URLs, metadata, sitemaps and schema markup." },
      { q: "Can I update the website content myself?", a: "Yes. We can integrate a CMS such as WordPress or a headless CMS so your team can edit content without touching code." },
      { q: "Do you redesign existing websites?", a: "Absolutely. We can modernise your existing site's design, speed and SEO while preserving your rankings during migration." },
    ],
  },
  {
    slug: "amazon-ecommerce",
    title: "E-Commerce & Amazon Services",
    shortTitle: "E-Commerce (Amazon)",
    icon: ShoppingCart,
    metaTitle: "Amazon FBA & E-Commerce Services – Store Management & PPC",
    metaDescription:
      "Grow on Amazon with CodeVira: product research, listing optimisation, A+ content, Amazon PPC, FBA account management plus Shopify and WooCommerce stores.",
    keywords: ["Amazon FBA services", "Amazon virtual assistant", "Amazon listing optimization", "Amazon PPC management", "Shopify store development", "e-commerce agency"],
    tagline: "Launch, rank and scale your products on Amazon and beyond.",
    summary:
      "End-to-end Amazon FBA management, listing optimisation, PPC and Shopify/WooCommerce store development.",
    intro: [
      "Selling online is competitive — but with the right product, listing and advertising strategy, it is also hugely rewarding. CodeVira helps brands and private-label sellers launch and grow on Amazon and their own e-commerce stores.",
      "Our e-commerce specialists handle everything from product hunting and supplier coordination to keyword-rich listings, A+ content, PPC campaigns and day-to-day account health. For brands that want to own their channel, we also build high-converting Shopify and WooCommerce stores.",
    ],
    offerings: [
      { title: "Product Research", desc: "Data-backed product hunting using demand, competition and profitability analysis." },
      { title: "Listing Optimization", desc: "Keyword-rich titles, bullets, descriptions and backend search terms." },
      { title: "A+ Content & Brand Store", desc: "Premium visuals and enhanced brand content that boost conversion." },
      { title: "Amazon PPC Management", desc: "Sponsored Products, Brands and Display campaigns optimised for ACoS and TACoS." },
      { title: "Account Management", desc: "Inventory planning, FBA shipments, account health and case handling." },
      { title: "Shopify & WooCommerce", desc: "Custom online stores with payments, shipping and marketing integrations." },
    ],
    process: [
      { title: "Account Audit", desc: "Review of listings, ads, inventory and account health." },
      { title: "Strategy", desc: "Launch or growth plan with clear revenue targets." },
      { title: "Execution", desc: "Listings, creatives, PPC and operations handled by our team." },
      { title: "Scale", desc: "Expand catalogue, marketplaces and advertising profitably." },
    ],
    tools: ["Amazon Seller Central", "Helium 10", "Jungle Scout", "Keepa", "Amazon Ads Console", "Shopify", "WooCommerce", "Canva", "Photoshop"],
    benefits: [
      "Experienced Amazon specialists for private label and wholesale",
      "Higher organic rankings and listing conversion",
      "Profitable PPC with controlled ACoS",
      "Proactive account health protection",
      "One partner for marketplace and own-store growth",
    ],
    faqs: [
      { q: "Do you help new sellers start on Amazon?", a: "Yes. We guide new sellers through account setup, product research, sourcing coordination, listing creation and launch strategy." },
      { q: "Which Amazon marketplaces do you work with?", a: "We work with Amazon US, UK, Canada, Europe, UAE and other marketplaces depending on your business goals." },
      { q: "Can you manage my Amazon PPC campaigns?", a: "Yes. We set up and optimise Sponsored Products, Sponsored Brands and Sponsored Display campaigns with weekly bid and keyword management." },
      { q: "Do you build Shopify stores too?", a: "Yes. We design and develop Shopify and WooCommerce stores, including theme customisation, apps, payment gateways and SEO setup." },
    ],
  },
  {
    slug: "ai-services",
    title: "AI Solutions & Automation",
    shortTitle: "AI Services",
    icon: BrainCircuit,
    metaTitle: "AI Development Services – Chatbots, Automation & Custom AI",
    metaDescription:
      "Put AI to work with CodeVira: AI chatbots and agents, workflow automation, LLM integration, machine learning models and AI-powered apps for your business.",
    keywords: ["AI development services", "AI chatbot development", "business automation", "LLM integration", "machine learning solutions", "generative AI agency"],
    tagline: "Practical AI that saves time, cuts costs and creates new value.",
    summary:
      "Custom AI chatbots, intelligent agents, workflow automation and LLM-powered features that give your business an edge.",
    intro: [
      "Artificial intelligence is no longer just for tech giants. CodeVira helps businesses of every size use AI in practical, measurable ways — from customer-support chatbots that answer instantly to automations that eliminate hours of repetitive work every week.",
      "We integrate leading large language models, build retrieval-augmented systems on your own data and connect AI to the tools you already use. Every solution is designed with accuracy, privacy and cost-efficiency in mind, so AI becomes a reliable part of your operations rather than an experiment.",
    ],
    offerings: [
      { title: "AI Chatbots & Assistants", desc: "24/7 support and sales assistants trained on your own business knowledge." },
      { title: "AI Agents & Automation", desc: "Agents and workflows that handle emails, data entry, reports and more." },
      { title: "LLM Integration", desc: "Add generative AI features — writing, summarising, search — to your apps." },
      { title: "RAG & Knowledge Bases", desc: "Search and Q&A over your documents with accurate, cited answers." },
      { title: "Machine Learning Models", desc: "Prediction, classification and recommendation models for your data." },
      { title: "AI Consulting", desc: "Identify high-ROI AI opportunities and build a practical roadmap." },
    ],
    process: [
      { title: "Use-Case Discovery", desc: "Find where AI creates the most value for you." },
      { title: "Proof of Concept", desc: "A quick working prototype to validate results." },
      { title: "Build & Integrate", desc: "Production-grade solution connected to your systems." },
      { title: "Monitor & Improve", desc: "Track accuracy, cost and usage; refine continuously." },
    ],
    tools: ["Claude", "OpenAI", "Gemini", "LangChain", "LlamaIndex", "Python", "FastAPI", "Pinecone", "n8n", "Make", "TensorFlow", "PyTorch"],
    benefits: [
      "Measurable time and cost savings",
      "Privacy-conscious architecture for your data",
      "Seamless integration with your existing tools",
      "Scalable solutions that grow with your business",
      "Ongoing monitoring and improvement",
    ],
    faqs: [
      { q: "Can AI work with my company's own data?", a: "Yes. Using retrieval-augmented generation (RAG), we connect AI models to your documents, websites and databases so answers are grounded in your information." },
      { q: "Is my data safe when using AI?", a: "We design solutions with privacy in mind, use providers with strong data-protection commitments and can restrict what data is shared with any model." },
      { q: "What can I automate with AI?", a: "Common examples include customer support, lead qualification, email drafting, document processing, report generation and content creation." },
      { q: "Do I need a large budget to start with AI?", a: "No. We often begin with a focused proof of concept that delivers value quickly, then expand based on results." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
