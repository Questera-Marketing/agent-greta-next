const fs = require('fs');
const path = require('path');

const blogsToAdd = [
    {
        title: "How to Build a CRM with AI in 2026",
        slug: "build-crm-with-ai",
        category: "Tutorials",
        excerpt: "Learn how to build a production-ready CRM using AI agents and modern growth engineering principles.",
        date: "Feb 10, 2026",
        author: "Pankaj Vashisht",
        image: "/blog-images/build-crm-with-ai.png",
        content: `## Building the Future of Sales

The CRM is the heart of any business. In 2026, building one doesn't take months of manual coding. With **Greta AI**, you can vibe-code a CRM that understands your customers better than you do.

### Step 1: Defining the Schema
Use natural language to describe your data needs: "I need a CRM that tracks leads, deals, and automated follow-ups with Supabase integration."

### Step 2: AI Execution
Greta generates the backend logic and the frontend components sequentially, ensuring architectural integrity.

### Step 3: Growth Loops
Integrate automated email sequences and lead scoring directly into the core platform.`
    },
    {
        title: "Building an LMS with AI: A Step-by-Step Guide",
        slug: "build-lms-with-ai",
        category: "Tutorials",
        excerpt: "Discover the fastest way to launch a Learning Management System using AI-driven development.",
        date: "Feb 10, 2026",
        author: "Pankaj Vashisht",
        image: "/blog-images/build-lms-with-ai.png",
        content: "## Education Reimagined"
    },
    {
        title: "HRMS Development in the Era of AI Agents",
        slug: "build-hrms-with-ai",
        category: "Engineering",
        excerpt: "Modernize your HR processes by building a custom HRMS with AI-powered automation.",
        date: "Feb 10, 2026",
        author: "Pankaj Vashisht",
        image: "/blog-images/build-hrms-with-ai.png",
        content: "## People Operations 2.0"
    },
    {
        title: "The Ultimate Guide to Building a POS with AI",
        slug: "build-pos-with-ai",
        category: "Tutorials",
        excerpt: "From retail to restaurants, see how AI is simplifying Point of Sale system development.",
        date: "Feb 10, 2026",
        author: "Pankaj Vashisht",
        image: "/blog-images/build-pos-with-ai.png",
        content: "## Modern Commerce"
    },
    {
        title: "ERP Systems: Building with AI for Scale",
        slug: "build-erp-with-ai",
        category: "Engineering",
        excerpt: "Complex ERP architectures are now manageable with AI-driven growth engineering.",
        date: "Feb 10, 2026",
        author: "Pankaj Vashisht",
        image: "/blog-images/build-erp-with-ai.png",
        content: "## Enterprise Resource Planning"
    },
    {
        title: "Build a Real-time Chat App with AI",
        slug: "build-chat-app-with-ai",
        category: "Tutorials",
        excerpt: "Master real-time communication by building an AI-enhanced chat application.",
        date: "Feb 10, 2026",
        author: "Pankaj Vashisht",
        image: "/blog-images/build-chat-app-with-ai.png",
        content: "## Communication at Scale"
    },
    {
        title: "Custom Dashboards: The AI Engineering Way",
        slug: "build-dashboard-with-ai",
        category: "Engineering",
        excerpt: "Create insightful data visualizations and dashboards using automated AI tools.",
        date: "Feb 10, 2026",
        author: "Pankaj Vashisht",
        image: "/blog-images/build-dashboard-with-ai.png",
        content: "## Visualizing Insights"
    },
    {
        title: "Building Analytics Engines with AI Agents",
        slug: "build-analytics-with-ai",
        category: "Data Science",
        excerpt: "Turn raw data into actionable growth with your own AI-powered analytics engine.",
        date: "Feb 10, 2026",
        author: "Pankaj Vashisht",
        image: "/blog-images/build-analytics-with-ai.png",
        content: "## Data to Decision"
    },
    {
        title: "The Marketplace Protocol: Building with AI",
        slug: "build-marketplace-with-ai",
        category: "Tutorials",
        excerpt: "Launch a scalable multi-vendor marketplace using AI-first development strategies.",
        date: "Feb 10, 2026",
        author: "Pankaj Vashisht",
        image: "/blog-images/build-marketplace-with-ai.png",
        content: "## Scalable Marketplaces"
    },
    {
        title: "Booking Systems: Engineered for Conversion",
        slug: "build-booking-system-with-ai",
        category: "Tutorials",
        excerpt: "Build a seamless booking experience for your users with AI automation.",
        date: "Feb 10, 2026",
        author: "Pankaj Vashisht",
        image: "/blog-images/build-booking-system-with-ai.png",
        content: "## Frictionless Bookings"
    }
];

const filePath = path.join(process.cwd(), 'components/blog/blogData.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Find the end of the array
const lastBracketIndex = content.lastIndexOf(']');
const blogsString = blogsToAdd.map(b => JSON.stringify(b, null, 2)).join(',\n');

content = content.substring(0, lastBracketIndex) + ',\n' + blogsString + '\n]';

fs.writeFileSync(filePath, content);
console.log('Successfully updated blogData.ts');
