
import { imageConfig } from '../learninghub/ImageConfig';

// Import all blog content from individual files
import { content as buildDatingAppContent } from './content/build-dating-app-with-ai';
import { content as buildFoodDeliveryContent } from './content/build-food-delivery-with-ai';
import { content as buildRideSharingContent } from './content/build-ride-sharing-with-ai';
import { content as buildPaymentGatewayContent } from './content/build-payment-gateway-with-ai';
import { content as buildSubscriptionSystemContent } from './content/build-subscription-system-with-ai';
import { content as buildAffiliatePlatformContent } from './content/build-affiliate-platform-with-ai';
import { content as buildSurveyToolContent } from './content/build-survey-tool-with-ai';
import { content as buildQuizAppContent } from './content/build-quiz-app-with-ai';
import { content as buildEmailMarketingToolContent } from './content/build-email-marketing-tool-with-ai';
import { content as buildProjectManagerContent } from './content/build-project-manager-with-ai';
import { content as gretaVsLovableContent } from './content/greta-vs-lovable-why-greta-wins-at-vibe-coding';
import { content as gretaVsBoltContent } from './content/greta-vs-bolt-new-performance-and-scalability';
import { content as gretaVsReplitContent } from './content/greta-vs-replit-agent-production-logic-vs-column-ide';
import { content as gretaVsV0Content } from './content/greta-vs-v0-from-ui-to-full-stack';
import { content as gretaVsRocketContent } from './content/greta-vs-rocket-new-speed-vs-growth-engineering';
import { content as whatIsVibeCodingContent } from './content/what-is-vibe-coding-meaning-examples-software-development-2026';
import { content as vibeCodingExplainedContent } from './content/vibe-coding-explained-traditional-vs-ai-driven-development';
import { content as buildInventoryContent } from './content/build-inventory-with-ai';
import { content as buildExpenseTrackerContent } from './content/build-expense-tracker-with-ai';
import { content as buildHelpdeskContent } from './content/build-helpdesk-with-ai';
import { content as buildCmsContent } from './content/build-cms-with-ai';
import { content as buildForumContent } from './content/build-forum-with-ai';
import { content as buildBlogPlatformContent } from './content/build-blog-platform-with-ai';
import { content as buildPortfolioContent } from './content/build-portfolio-with-ai';
import { content as buildResumeBuilderContent } from './content/build-resume-builder-with-ai';
import { content as buildJobPortalContent } from './content/build-job-portal-with-ai';
import { content as buildLearningPlatformContent } from './content/build-learning-platform-with-ai';
import { content as buildCrmContent } from './content/build-crm-with-ai';
import { content as buildLmsContent } from './content/build-lms-with-ai';
import { content as buildHrmsContent } from './content/build-hrms-with-ai';
import { content as buildPosContent } from './content/build-pos-with-ai';
import { content as buildErpContent } from './content/build-erp-with-ai';
import { content as buildChatAppContent } from './content/build-chat-app-with-ai';
import { content as buildDashboardContent } from './content/build-dashboard-with-ai';
import { content as buildAnalyticsContent } from './content/build-analytics-with-ai';
import { content as buildMarketplaceContent } from './content/build-marketplace-with-ai';
import { content as buildBookingSystemContent } from './content/build-booking-system-with-ai';

export interface BlogItem {
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  image?: string;
  description?: string;
  keywords?: string;
}

export const blogs: BlogItem[] = [
  {
    category: "Engineering",
    content: buildDatingAppContent,
    date: "Feb 12, 2026",
    description: "Learn how to build a scalable, high-performance dating app with AI matching and production-grade security using Greta.",
    excerpt: `The New Era of Connection
The digital dating landscape in 2026 has transcended the "swipe-left, swipe-right" fatigue of the early 2020s. We’ve entered an era of **Intent-Based Conn...`,
    keywords: "Greta AI, Growth Engineering, production ready apps, vibe coding, AI app builder, founding engineer, software development 2026, how to build a production-ready ai dating app in 2026",
    image: "/blog-images/build-dating-app-with-ai.png",
    slug: "build-dating-app-with-ai",
    title: "How to Build a Production-Ready AI Dating App in 2026",
  },
  {
    category: "Engineering",
    content: buildFoodDeliveryContent,
    date: "Feb 12, 2026",
    description: "Master the logistics of autonomous food delivery by building a custom AI platform that handles order orchestration and delivery logistics using Greta.",
    excerpt: `The Logistics Shift
By 2026, the food delivery market has shifted from "Aggregators" to "Owned Infrastructure." Local restaurant groups and innovative startups are reclaiming their...`,
    keywords: "Greta AI, Growth Engineering, production ready apps, vibe coding, AI app builder, founding engineer, software development 2026, how to build an autonomous ai food delivery system in 2026",
    image: "/blog-images/build-food-delivery-with-ai.png",
    slug: "build-food-delivery-with-ai",
    title: "How to Build an Autonomous AI Food Delivery System in 2026",
  },
  {
    category: "Engineering",
    content: buildRideSharingContent,
    date: "Feb 12, 2026",
    description: "Explore the future of mobility by building a secure, scalable ride-sharing platform with real-time geolocation and growth engineering using Greta.",
    excerpt: `The Mobility Reinvention
As we enter 2026, the era of the "Generalist Uber" is giving way to high-precision, niche mobility services. From corporate carpooling networks to eco-excl...`,
    keywords: "Greta AI, Growth Engineering, production ready apps, vibe coding, AI app builder, founding engineer, software development 2026, building a production-grade ride-sharing platform in 2026",
    image: "/blog-images/build-ride-sharing-with-ai.png",
    slug: "build-ride-sharing-with-ai",
    title: "Building a production-grade Ride-Sharing Platform in 2026",
  },
  {
    category: "FinTech",
    content: buildPaymentGatewayContent,
    date: "Feb 12, 2026",
    description: "Build secure, transactional financial infrastructure with AI-driven ledger management and growth engineering using Greta.",
    excerpt: `The Financial Infrastructure Revolution
In 2026, the global movement of money has become almost entirely software-defined. We have entered the era of the **Universal Ledger**, wher...`,
    keywords: "Greta AI, Growth Engineering, production ready apps, vibe coding, AI app builder, founding engineer, software development 2026, how to build a scalable ai payment gateway in 2026",
    image: "/blog-images/build-payment-gateway-with-ai.png",
    slug: "build-payment-gateway-with-ai",
    title: "How to Build a Scalable AI Payment Gateway in 2026",
  },
  {
    category: "SaaS",
    content: buildSubscriptionSystemContent,
    date: "Feb 12, 2026",
    description: "Maximize customer lifetime value by building a modular, AI-powered subscription system with automated retention loops and dynamic pricing using Greta.",
    excerpt: `The "Everywhere" Subscription Economy
In 2026, the subscription model has evolved beyond simple monthly payments. We now live in an era of **Dynamic Access Platforms**, where users...`,
    keywords: "Greta AI, Growth Engineering, production ready apps, vibe coding, AI app builder, founding engineer, software development 2026, how to build a flexible ai subscription management system in 2026",
    image: "/blog-images/build-subscription-system-with-ai.png",
    slug: "build-subscription-system-with-ai",
    title: "How to Build a Flexible AI Subscription Management System in 2026",
  },
  {
    category: "Marketing",
    content: buildAffiliatePlatformContent,
    date: "Feb 12, 2026",
    description: "Turn your community into a growth engine by building a custom, AI-moderated affiliate platform with automated asset generation and tracking using Greta.",
    excerpt: `The New Word-of-Mouth
By 2026, the marketing landscape has been completely decentralized. Traditional advertising is yielding to the power of **Trusted Nodes**—individual influence...`,
    keywords: "Greta AI, Growth Engineering, production ready apps, vibe coding, AI app builder, founding engineer, software development 2026, how to build an ai-driven affiliate and referral platform in 2026",
    image: "/blog-images/build-affiliate-platform-with-ai.png",
    slug: "build-affiliate-platform-with-ai",
    title: "How to Build an AI-Driven Affiliate and Referral Platform in 2026",
  },
  {
    category: "Productivity",
    content: buildSurveyToolContent,
    date: "Feb 12, 2026",
    description: "Go beyond simple forms and build an intelligent AI survey engine that adapts in real-time to respondent feedback and sentiment using Greta.",
    excerpt: `The Data Intelligence Leap
In 2026, the era of the "static questionnaire" is dead. With the explosion of generative AI, businesses have moved beyond simple multiple-choice forms an...`,
    keywords: "Greta AI, Growth Engineering, production ready apps, vibe coding, AI app builder, founding engineer, software development 2026, how to build an autonomous ai survey engine in 2026",
    image: "/blog-images/build-survey-tool-with-ai.png",
    slug: "build-survey-tool-with-ai",
    title: "How to Build an Autonomous AI Survey Engine in 2026",
  },
  {
    category: "Tutorials",
    content: buildQuizAppContent,
    date: "Feb 12, 2026",
    description: "Gamify your lead generation by building an interactive, AI-powered quiz platform that personalizes outcomes and qualifies leads automatically using Greta.",
    excerpt: `The Gamification of Authority
In 2026, the humble quiz has evolved from a "Buzzfeed-style" distraction into a sophisticated tool for **Lead Qualification, Education, and Micro-Accr...`,
    keywords: "Greta AI, Growth Engineering, production ready apps, vibe coding, AI app builder, founding engineer, software development 2026, how to building a high-performance ai quiz platform in 2026",
    image: "/blog-images/build-quiz-app-with-ai.png",
    slug: "build-quiz-app-with-ai",
    title: "How to Building a high-performance AI Quiz Platform in 2026",
  },
  {
    category: "Marketing",
    content: buildEmailMarketingToolContent,
    date: "Feb 12, 2026",
    description: "Reclaim the inbox with a custom, AI-driven email automation platform that uses behavioral intent to drive customer relationships and growth using Greta.",
    excerpt: `Reclaiming the Inbox
By 2026, the era of the "unsolicited blast" is officially over. With the integration of powerful AI filters into every major email client, brands can no longer...`,
    keywords: "Greta AI, Growth Engineering, production ready apps, vibe coding, AI app builder, founding engineer, software development 2026, how to build an ai-first email marketing and automation platform in 2026",
    image: "/blog-images/build-email-marketing-tool-with-ai.png",
    slug: "build-email-marketing-tool-with-ai",
    title: "How to Build an AI-First Email Marketing and Automation Platform in 2026",
  },
  {
    category: "Productivity",
    content: buildProjectManagerContent,
    date: "Feb 12, 2026",
    description: "Optimize team velocity by building an autonomous project agent that synchronizes with your code and predicts bottlenecks using Greta AI.",
    excerpt: `The Death of the "Static Board"
In 2026, the traditional project management tool (the "Kanban board" of the 2010s) has become a bottleneck for high-velocity teams. We have moved fr...`,
    keywords: "Greta AI, Growth Engineering, production ready apps, vibe coding, AI app builder, founding engineer, software development 2026, how to build an autonomous ai project orchestration engine in 2026",
    image: "/blog-images/build-project-manager-with-ai.png",
    slug: "build-project-manager-with-ai",
    title: "How to Build an Autonomous AI Project Orchestration Engine in 2026",
  },
  {
    category: "Comparisons",
    content: gretaVsLovableContent,
    date: "Jan 28, 2026",
    description: "A deep dive into why architectural integrity makes Greta the superior choice for production-grade AI development over prototyping tools like Lovable.",
    excerpt: "Detailed comparison of AI app builders. Why Greta the Growth Engineering Tech Agent is the superior choice for production apps.",
    keywords: "AI app builder, Greta vs Lovable, production-ready AI, growth engineering, vibe coding, AI agents 2026",
    image: "/learninghub-images/Doc26Banner.png",
    slug: "greta-vs-lovable-why-greta-wins-at-vibe-coding",
    title: "Greta vs Lovable: Why Greta Wins at Vibe Coding"
  },
  {
    category: "Comparisons",
    content: gretaVsBoltContent,
    date: "Jan 28, 2026",
    description: "Comparing Greta's cloud-native infrastructure with Bolt.new's browser-based containers for real-world application performance.",
    excerpt: "Why Greta is the preferred choice for full-stack AI agents compared to browser-based containers like Bolt.",
    keywords: "Greta vs Bolt.new, cloud-native AI, scalability, production AI apps, growth engineering, software architecture 2026",
    image: "/learninghub-images/Doc13Banner.png",
    slug: "greta-vs-bolt-new-performance-and-scalability",
    title: "Greta vs Bolt.new: Built for Performance & Scalability"
  },
  {
    category: "Comparisons",
    content: gretaVsReplitContent,
    date: "Jan 28, 2026",
    description: "A technical comparison between Replit Agent and Greta. Why founding engineers choose Greta for scalable AI applications.",
    excerpt: "Replit is a legendary IDE, but is their agent ready for growth engineering? Compare Greta and Replit for your next startup.",
    keywords: "Greta vs Replit Agent, vibe coding, growth engineering, production AI, startup scalability, AI code editors",
    image: "/learninghub-images/Doc35Banner.png",
    slug: "greta-vs-replit-agent-production-logic-vs-column-ide",
    title: "Greta vs. Replit Agent: Production Logic vs. Cloud IDE"
  },
  {
    category: "Comparisons",
    content: gretaVsV0Content,
    date: "Jan 25, 2026",
    description: "Comparing v0.dev and Greta for production-ready full-stack applications.",
    excerpt: "v0 is great for UI, but Greta builds the logic. See why Greta is the choice for functional AI applications.",
    keywords: "v0.dev vs Greta, full-stack AI, UI vs logic, AI app development, growth engineering, React AI components",
    image: "/learninghub-images/Doc2Banner.png",
    slug: "greta-vs-v0-from-ui-to-full-stack",
    title: "Greta vs v0.dev: Transitioning from UI to Full-Stack"
  },
  {
    category: "Comparisons",
    content: gretaVsRocketContent,
    date: "Jan 29, 2026",
    description: "A detailed comparison of Greta vs Rocket.new. Why Greta is the strategic choice for founders building scalable, growth-ready applications.",
    excerpt: "Is Rocket.new faster than Greta? Read our comparison to see why Greta is the strategic choice for growth engineering and production apps.",
    keywords: "Greta vs Rocket.new, production agility, growth engineering, AI-first startup, scalability, dev speed 2026",
    image: "/learninghub-images/Doc24Banner.png",
    slug: "greta-vs-rocket-new-speed-vs-growth-engineering",
    title: "Greta vs Rocket.new: Why Greta is Better for Production"
  },
  {
    category: "Software Development",
    content: whatIsVibeCodingContent,
    date: "Feb 3, 2026",
    description: "Explore the revolution of Vibe Coding in 2026. Learn the meaning, see real-world examples, and discover why Greta AI is the future of software development.",
    excerpt: "What is vibe coding? Discover how human intent and AI execution are redefining software engineering in 2026.",
    keywords: "vibe coding, AI software development, engineering trends 2026, natural language programming, Greta AI, intent-based engineering",
    image: "/learninghub-images/Doc11Banner.png",
    slug: "what-is-vibe-coding-meaning-examples-software-development-2026",
    title: "What Is Vibe Coding? Meaning, Examples & Why It’s Changing Software Development"
  },
  {
    category: "Software Development",
    content: vibeCodingExplainedContent,
    date: "Feb 3, 2026",
    description: "Learn the difference between traditional coding and vibe coding. A deep dive into AI-driven development, natural language programming, and the future of software engineering.",
    excerpt: "Vibe coding explained: How AI-driven development is transforming how we build software, from traditional syntax to natural language intent.",
    keywords: "vibe coding explained, traditional vs AI coding, natural language programming, software engineering future, Greta AI, code abstraction",
    image: "/learninghub-images/Doc11Image2.png",
    slug: "vibe-coding-explained-traditional-vs-ai-driven-development",
    title: "Vibe Coding Explained: From Traditional Coding to AI-Driven Development"
  },
  {
    category: "Engineering",
    content: buildInventoryContent,
    date: "Feb 11, 2026",
    description: "Learn how to build a production-grade AI inventory management system with predictive analytics and growth engineering using Greta AI.",
    excerpt: "Master inventory management in 2026 by leveraging AI agents for real-time tracking and optimization.",
    keywords: "AI inventory management, predictive replenishment, Greta AI, growth engineering, supply chain AI, autonomous warehouse",
    image: "/blog-images/build-inventory-with-ai.png",
    slug: "build-inventory-with-ai",
    title: "Build an AI-Powered Inventory Management System"
  },
  {
    category: "Tutorials",
    content: buildExpenseTrackerContent,
    date: "Feb 11, 2026",
    description: "Discover how to build a fully automated, AI-driven expense tracker with OCR and smart categorization using Greta AI in minutes.",
    excerpt: "Simplify financial management by building an AI-driven expense tracker that categorizes and analyzes spending automatically.",
    keywords: "AI expense tracker, FinTech automation, Greta AI, expense OCR, predictive budgeting, smart finance",
    image: "/blog-images/build-expense-tracker-with-ai.png",
    slug: "build-expense-tracker-with-ai",
    title: "How to Build an AI Expense Tracker in Minutes"
  },
  {
    category: "Engineering",
    content: buildHelpdeskContent,
    date: "Feb 11, 2026",
    description: "Learn how to build an autonomous AI helpdesk and resolution engine that scales customer support with Growth Engineering and Greta AI.",
    excerpt: "Scale your customer service without the headcount. Learn how to build an autonomous AI helpdesk.",
    keywords: "AI helpdesk, customer support automation, Greta AI, growth engineering, autonomous support, intent-based routing",
    image: "/blog-images/build-helpdesk-with-ai.png",
    slug: "build-helpdesk-with-ai",
    title: "Revolutionizing Customer Support: Building an AI Helpdesk"
  },
  {
    category: "Engineering",
    content: buildCmsContent,
    date: "Feb 11, 2026",
    description: "Build an AI-first CMS that goes beyond storage to include automated SEO, content generation, and distribution using Greta AI.",
    excerpt: "Why settle for static when you can build a CMS that optimizes content for SEO and conversion automatically?",
    keywords: "Modern CMS, AI content management, Greta AI, growth engineering, SEO automation, CMS 3.0",
    image: "/blog-images/build-cms-with-ai.png",
    slug: "build-cms-with-ai",
    title: "Building a Modern CMS with AI Growth Engines"
  },
  {
    category: "Tutorials",
    content: buildForumContent,
    date: "Feb 11, 2026",
    description: "Learn how to build a safe and scalable community platform with autonomous AI moderation and gamification using Greta AI.",
    excerpt: "Scale your community safely. Build a forum with built-in AI moderation and sentiment analysis.",
    keywords: "AI moderated forum, community building 2026, Greta AI, autonomous moderation, digital campfires, sentiment analysis",
    image: "/blog-images/build-forum-with-ai.png",
    slug: "build-forum-with-ai",
    title: "The Return of Community: Building an AI-Moderated Forum"
  },
  {
    category: "Tutorials",
    content: buildBlogPlatformContent,
    date: "Feb 11, 2026",
    description: "Discover how to build an SEO-first, AI-native blog platform that gives you full control over your content and growth using Greta AI.",
    excerpt: "Stop fighting with WordPress. Build a lean, SEO-first blog platform using Next.js and AI.",
    keywords: "AI blog platform, SEO first blog, Greta AI, growth engineering, narrative control, Next.js blog",
    image: "/blog-images/build-blog-platform-with-ai.png",
    slug: "build-blog-platform-with-ai",
    title: "Launch an AI-First Blog Platform for Your Brand"
  },
  {
    category: "Tutorials",
    content: buildPortfolioContent,
    date: "Feb 11, 2026",
    description: "Learn how to build a dynamic, AI-powered portfolio that personalizes itself for visitors and converts leads using Greta AI.",
    excerpt: "Showcase your work with a portfolio that isn't just a resume—it's a conversion machine.",
    keywords: "AI portfolio builder, high-converting portfolio, Greta AI, digital identity, creators 2026, personal branding",
    image: "/blog-images/build-portfolio-with-ai.png",
    slug: "build-portfolio-with-ai",
    title: "Build a High-Converting Portfolio with AI"
  },
  {
    category: "Tutorials",
    content: buildResumeBuilderContent,
    date: "Feb 11, 2026",
    description: "Build an AI-powered resume builder that optimizes for ATS and helps candidates tailor their applications in real-time using Greta AI.",
    excerpt: "Build a tool that helps users generate ATS-friendly resumes that actually get interviews.",
    keywords: "AI resume builder, ATS optimization, Greta AI, job application, resume generator, career tech 2026",
    image: "/blog-images/build-resume-builder-with-ai.png",
    slug: "build-resume-builder-with-ai",
    title: "AI Resume Builder: From Data to Dream Job"
  },
  {
    category: "Engineering",
    content: buildJobPortalContent,
    date: "Feb 11, 2026",
    description: "Learn how to build a next-gen, AI-driven job portal with smart skill matching and SEO-optimized job postings using Greta AI.",
    excerpt: "Connect talent with opportunity faster by building an AI-powered job board.",
    keywords: "AI job portal, recruitment platform, Greta AI, skill matching, job board, hiring tech 2026",
    image: "/blog-images/build-job-portal-with-ai.png",
    slug: "build-job-portal-with-ai",
    title: "The Future of Hiring: Building an AI Job Portal"
  },
  {
    category: "Engineering",
    content: buildLearningPlatformContent,
    date: "Feb 11, 2026",
    description: "Discover how to build an adaptive, AI-powered learning platform with personalized paths and growth-focused features using Greta AI.",
    excerpt: "The future of education is adaptive. Build a platform that learns with its students.",
    keywords: "AI learning platform, edtech, Greta AI, personalized learning, adaptive education, online courses 2026",
    image: "/blog-images/build-learning-platform-with-ai.png",
    slug: "build-learning-platform-with-ai",
    title: "Scale Your Knowledge: Building a Learning Platform with AI"
  },
  {
    category: "Engineering",
    title: "Building a Production-Ready AI CRM: Beyond Prototypes with Greta",
    slug: "build-crm-with-ai",
    date: "Feb 11, 2026",
    description: "Learn how to build a scalable, AI-driven CRM system focused on growth engineering. Discover why Greta exceeds prototype tools for production-ready CRM software.",
    excerpt: "Crush the technical debt of CRM prototypes. Build a production-ready AI CRM with Greta that's engineered for scale and growth.",
    keywords: "AI CRM, customer relationship management, Greta AI, growth engineering, sales automation, production-ready CRM",
    image: "/blog-images/build-crm-with-ai.png",
    content: buildCrmContent
  },
  {
    category: "Engineering",
    title: "Building an Adaptive AI LMS: Personalizing Education at Scale",
    slug: "build-lms-with-ai",
    date: "Feb 11, 2026",
    description: "Explore the future of Learning Management Systems in 2026. Use Greta to build adaptive, AI-powered LMS platforms that focus on student growth and production-grade code.",
    excerpt: "The future of education is adaptive. Learn how to build a production-ready AI LMS that personalizes the learning journey using Greta.",
    keywords: "AI LMS, learning management system, Greta AI, adaptive learning, edtech 2026, personalized education",
    image: "/blog-images/build-lms-with-ai.png",
    content: buildLmsContent
  },
  {
    category: "Engineering",
    title: "Building an AI-Native HRMS: Automating the Modern Workforce",
    slug: "build-hrms-with-ai",
    date: "Feb 11, 2026",
    description: "Learn to build a production-ready AI HRMS with Greta. Focus on workforce automation, growth engineering, and scalable architecture for 2026.",
    excerpt: "Stop managing files and start managing talent. Build an AI-native HRMS with Greta that automates onboarding, retention, and growth.",
    keywords: "AI HRMS, human resources management, Greta AI, workforce automation, HR tech 2026, talent management",
    image: "/blog-images/build-hrms-with-ai.png",
    content: buildHrmsContent
  },
  {
    category: "Engineering",
    title: "Building an AI-Powered POS: The Future of Retail Engineering",
    slug: "build-pos-with-ai",
    date: "Feb 11, 2026",
    description: "Learn how to build a production-ready AI POS system with Greta. Focus on omnichannel retail, growth engineering, and real-time inventory sync.",
    excerpt: "Retail is changing. Build an AI-powered POS system with Greta that doesn't just process payments but drives customer growth and loyalty.",
    keywords: "AI POS, point of sale, Greta AI, retail tech, omnichannel commerce, inventory management",
    image: "/blog-images/build-pos-with-ai.png",
    content: buildPosContent
  },
  {
    category: "Engineering",
    title: "Building an AI ERP: The Central Nervous System for Growing Enterprises",
    slug: "build-erp-with-ai",
    date: "Feb 11, 2026",
    description: "Learn how to build a scalable AI ERP with Greta. Focus on supply chain automation, growth engineering, and cross-departmental data orchestration.",
    excerpt: "Unified business intelligence is here. Build an AI-powered ERP with Greta that automates your entire value chain and drives scalable growth.",
    keywords: "AI ERP, enterprise resource planning, Greta AI, supply chain automation, business intelligence, enterprise software",
    image: "/blog-images/build-erp-with-ai.png",
    content: buildErpContent
  },
  {
    category: "Engineering",
    title: "Building a Production-Ready AI Chat App: Beyond Simple Messaging",
    slug: "build-chat-app-with-ai",
    date: "Feb 11, 2026",
    description: "Learn how to build feature-rich AI chat applications with Greta. Focus on real-time scaling, growth engineering, and agentic integrations.",
    excerpt: "Chat is the new UI. Build a production-ready AI chat application with Greta that's more than just messages—it's an interactive growth engine.",
    keywords: "AI chat app, real-time messaging, Greta AI, growth engineering, chat platform, agentic AI",
    image: "/blog-images/build-chat-app-with-ai.png",
    content: buildChatAppContent
  },
  {
    category: "Tutorials",
    title: "Building an AI-Driven Dashboard: Transforming Data into Growth",
    slug: "build-dashboard-with-ai",
    date: "Feb 11, 2026",
    description: "Learn how to build actionable AI dashboards with Greta. Focus on data visualization, growth engineering, and production-ready analytics.",
    excerpt: "Move beyond charts. Build an AI-driven dashboard with Greta that doesn't just show data but provides the growth insights your business needs.",
    keywords: "AI dashboard, data visualization, Greta AI, growth engineering, business intelligence, analytics dashboard",
    image: "/blog-images/build-dashboard-with-ai.png",
    content: buildDashboardContent
  },
  {
    category: "Engineering",
    title: "Building an AI-Native Analytics Platform: Taking Control of Your Data",
    slug: "build-analytics-with-ai",
    date: "Feb 11, 2026",
    description: "Learn how to build a production-ready AI analytics platform with Greta. Focus on privacy-first tracking, growth engineering, and real-time insights.",
    excerpt: "Don't just collect data, own it. Build an AI-native analytics platform with Greta that provides real-time, privacy-first growth insights.",
    keywords: "AI analytics, data platform, Greta AI, privacy-first analytics, growth engineering, real-time insights",
    image: "/blog-images/build-analytics-with-ai.png",
    content: buildAnalyticsContent
  },
  {
    category: "Engineering",
    title: "Building an AI-Driven Marketplace: Scaling Trust and Transactions",
    slug: "build-marketplace-with-ai",
    date: "Feb 11, 2026",
    description: "Learn how to build a production-ready AI marketplace with Greta. Focus on two-sided growth engineering, AI matching, and scalable ecommerce.",
    excerpt: "Two-sided markets are complex. Build a production-ready AI marketplace with Greta that automates trust, matching, and growth at scale.",
    keywords: "AI marketplace, ecommerce platform, Greta AI, two-sided marketplace, growth engineering, scalable commerce",
    image: "/blog-images/build-marketplace-with-ai.png",
    content: buildMarketplaceContent
  },
  {
    category: "Engineering",
    title: "Building an AI-Powered Booking System: Solving the Complexity of Time",
    slug: "build-booking-system-with-ai",
    date: "Feb 11, 2026",
    description: "Learn how to build a production-ready AI booking and scheduling system with Greta. Focus on growth engineering, real-time availability, and autonomous scheduling.",
    excerpt: "Time is money. Build a production-ready AI booking system with Greta that solves complex scheduling while driving growth for your service business.",
    keywords: "AI booking system, scheduling platform, Greta AI, appointment booking, growth engineering, real-time availability",
    image: "/blog-images/build-booking-system-with-ai.png",
    content: buildBookingSystemContent
  }
];
