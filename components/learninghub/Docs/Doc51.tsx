'use client';

import { imageConfig } from '../ImageConfig'
import { Content1, Content2, Creator, Heading1, Heading2, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules'

const Doc51 = () => {
    return (
        <>
            <Topbar text='What is the Greta Marketplace?' />
            <Creator
                tableOfContent={[
                    "What is the Greta Marketplace?",
                    "Greta Marketplace - App Templates",
                    "Greta Marketplace – UI Components"
                ]}
            >
                <HeroHeader text='What is the Greta Marketplace?' />
                <Heading1>
                    Greta Marketplace - App Templates
                </Heading1>
                <Content1>
                    Welcome to the <b>Greta Marketplace</b>, a creative space built for digital creators, builders, and innovators. This guide walks you step by step through how to use the marketplace—from creating and publishing app templates to discovering, purchasing, and using apps built by others.
                </Content1>
                <Heading2>
                    1. What is the Greta Marketplace?
                </Heading2>
                <Content2>
                    The Creative Market in Greta is a marketplace where you can:
                </Content2>
                <ListContent
                    listData={[
                        'Build apps and UI components using Greta',
                        'Publish them to the marketplace',
                        'Showcase your work to the community',
                        'Monetize your creations',
                        'Discover, purchase, and reuse apps built by others'
                    ]}
                    listType='ol'
                />
                <Content2>
                    Other users can:
                </Content2>
                <ListContent
                    listData={[
                        'Discover and explore published apps and UI components',
                        'Like, comment on, share, and rate creations',
                        'Purchase apps or UI components',
                        'Directly use purchased items inside their own Greta apps',
                    ]}
                />
                <Content2>
                    This helps creators grow through visibility and earnings, while helping others build faster using ready-made apps.
                </Content2>
                <Heading2>
                    2. Getting Started with Greta
                </Heading2>
                <Content2>
                    Step 1: Log in or Sign up
                </Content2>
                <ListContent
                    listData={[
                        <>
                            Visit <a href="https://greta.questera.ai/" target='_blank'>Greta</a>
                        </>,
                        "Log in with your account",
                        'If you’re new, sign up and complete onboarding'
                    ]}
                    listType='ol'
                />
                <Content2>
                    Once logged in, you’ll land on the <b>Greta home page</b>.
                </Content2>
                <ImageContent img={imageConfig.Doc51Image1} altText='Doc51Image1' />
                <Heading2>
                    3. Creating an App or Website to Sell
                </Heading2>
                <Content1>
                    Step 2: Build something extraordinary
                </Content1>
                <ListContent
                    listData={[
                        <>
                            Use Greta to create a website, app, or UI component
                        </>,
                        "Make sure it’s complete, polished, and reusable",
                        'Think about what others would love to use or customize'
                    ]}
                    listType='ol'
                />
                <Content2>
                    Once you’re done building, you’re ready to publish.
                </Content2>
                <Content2>
                    <a href="https://greta.questera.ai/learninghub/create-website/" target='_blank'>Learn how to create your first project on Greta and explore more in the Learning Hub</a>
                </Content2>
                <ImageContent img={imageConfig.Doc51Image2} altText='Doc51Image2' />
                <Heading2>
                    4. Locking & Publishing Your App
                </Heading2>
                <Content1>
                    Step 3: Lock your component
                </Content1>
                <Content2>
                    1. Click the Lock button at the top-right corner of the screen
                </Content2>
                <ImageContent img={imageConfig.Doc51Image3} altText='Doc51Image3' />
                <Content2>
                    2. A popup will appear titled <b>Lock your Components</b>.
                </Content2>
                <Content1>
                    This action:
                </Content1>
                <ListContent
                    listData={[
                        <>
                            Locks the current version
                        </>,
                        "Marks it ready for publishing",
                        'Prevents further edits to this version'
                    ]}
                />
                <Heading2>
                    ⚠️ Once locked, this version cannot be edited.
                </Heading2>
                <Content2>
                    3. Click <b>Lock & Publish</b>
                </Content2>
                <ImageContent img={imageConfig.Doc51Image4} altText='Doc51Image4' />
                <Heading2>
                    Step 4: Publishing process explained
                </Heading2>
                <Content2>
                    After clicking Lock & Publish, you’ll see a progress popup:
                </Content2>
                <ListContent
                    listData={[
                        <>
                            <b>Deployed</b> – Your saved version is pushed live for use/testing
                        </>,
                        <>
                            <b>Saving</b> – Your changes are securely saved
                        </>,
                        <>
                            <b>Locking</b> – This version is permanently locked and published
                        </>,
                        <>
                            Click <b>Done</b> once the process is complete
                        </>,
                    ]}
                    listType='ol'
                />
                <ImageContent img={imageConfig.Doc51Image5} altText='Doc51Image5' />
                <Heading2>
                    5. Accessing the Greta Marketplace
                </Heading2>
                <Content1>
                    Step 5: Open the marketplace
                </Content1>
                <Content2>
                    You can access the marketplace:
                </Content2>
                <Content2>
                    1. From the <b>landing page</b>, click <b>Marketplace</b>
                    <br />
                    <div style={{ marginLeft: "40px" }}>
                        Located at the <b>top-right corner</b>, next to Discord and Learning Hub
                    </div>
                </Content2>
                <ImageContent img={imageConfig.Doc51Image6} altText='Doc51Image6' />
                <Content2>
                    2. This opens the <b>Greta Marketplace page</b>
                </Content2>
                <ImageContent img={imageConfig.Doc51Image7} altText='Doc51Image7' />
                <Heading2>
                    6. Creator’s Workspace & Dashboard
                </Heading2>
                <Content1>
                    Step 6: Open Creator’s Workspace
                </Content1>
                <ListContent
                    listData={[
                        <>On the Marketplace page, click <b>Creator’s Workspace</b> (top-right)</>,
                        <>You’ll be taken to your <b>Dashboard</b> (top-right)</>,
                    ]}
                />
                <ImageContent img={imageConfig.Doc51Image8} altText='Doc51Image8' />
                <Content1>
                    This dashboard shows:
                </Content1>
                <Content2>
                    Quick start guide to:
                    <br />
                    <div style={{ marginLeft: "40px" }}>
                        Upload app template
                        <br />
                        Upload UI template
                    </div>
                </Content2>
                <ImageContent img={imageConfig.Doc51Image9} altText='Doc51Image9' />
                <Heading2>
                    7. Uploading an App Template
                </Heading2>
                <Content1>
                    Step 7: Upload your template
                </Content1>
                <ListContent
                    listData={[
                        <>In the dashboard, click <b>Upload Template</b></>,
                        <>A popup will appear: <b>Publish App Template to Greta Marketplace</b></>,
                    ]}
                />
                <Content1>
                    Fill in the following details:
                </Content1>
                <ListContent
                    listData={{
                        "Choose Template": <>Drag & drop your file or browse to upload <br /> Max size: 4MB</>,
                        "Template Name": "Example: Modern Portfolio",
                        "Short Description": "A quick summary shown in the marketplace",
                        "Prerequisites": "Any required API keys, tools, or setup",
                        "Category": "Choose the most relevant category",
                        "Pricing Category": "Free (or paid, if applicable)",
                    }}
                    listType='ol'
                />
                <Content2>
                    7. Click Publish Now
                </Content2>
                <ImageContent img={imageConfig.Doc51Image10} altText='Doc51Image10' />
                <Heading2>
                    8. Review & Approval Process
                </Heading2>
                <Content1>
                    <b>
                        Note: The review process usually takes around one week. You’ll be notified once the review is complete.
                    </b>
                </Content1>
                <Content1>
                    Step 8: Review status
                </Content1>
                <Content2>
                    After publishing:
                </Content2>
                <ListContent
                    listData={[
                        <>Your app goes into <b>Under Review</b> status</>,
                        <>The Greta team reviews your app for quality and usability</>,
                    ]}
                />
                <ImageContent img={imageConfig.Doc51Image11} altText='Doc51Image11' />
                <Content2>
                    If approved:
                </Content2>
                <ListContent
                    listData={[
                        <>Your app will be published on the marketplace</>,
                    ]}
                />
                <ImageContent img={imageConfig.Doc51Image12} altText='Doc51Image12' />
                <ImageContent img={imageConfig.Doc51Image13} altText='Doc51Image13' />
                <Content2>
                    If rejected:
                </Content2>
                <ListContent
                    listData={[
                        <>You’ll see the rejection reason by hovering over the status</>,
                    ]}
                />
                <ImageContent img={imageConfig.Doc51Image14} altText='Doc51Image14' />
                <ImageContent img={imageConfig.Doc51Image15} altText='Doc51Image15' />
                <ListContent
                    listData={[
                        <>You can make edits and resubmit for review</>,
                    ]}
                />
                <Heading2>
                    9. Managing Your Apps
                </Heading2>
                <Content1>
                    Step 9: Dashboard actions
                </Content1>
                <Content2>
                    For each app in your dashboard, you’ll see three options:
                </Content2>
                <ListContent
                    listData={[
                        <><b>Analytics</b> – View website/app performance and usage</>,
                        <><b>Edit</b> – Update details or improve your app</>,
                        <><b>Delete</b> – Remove the app from the marketplace</>,
                    ]}
                    listType='ol'
                />
                <Content2>
                    You can manage all your marketplace apps from this one place.
                </Content2>
                <ImageContent img={imageConfig.Doc51Image16} altText='Doc51Image16' />
                <Heading2>
                    10. Discovering & Using Apps from the Marketplace
                </Heading2>
                <Content1>
                    Step 10. Explore the marketplace
                </Content1>
                <Content2>
                    1. Go to the <b>Greta Marketplace</b>
                    <br />
                    2. Browse apps and templates created by others
                    <br />
                    3. Click on any app to view:
                    <br />
                    <div style={{ marginLeft: "40px" }}>
                        Description
                        <br />
                        Ratings and reviews
                        <br />
                        Likes and comments
                    </div>
                </Content2>
                <Content1>
                    You can:
                </Content1>
                <ListContent
                    listData={[
                        "Like the app",
                        "Rate it",
                        "Leave a Review"
                    ]}
                />
                <ImageContent img={imageConfig.Doc51Image17} altText='Doc51Image17' />
                <Heading2>
                    11. Purchasing & Using an App Template
                </Heading2>
                <Content1>
                    Step 11: Use an app template
                </Content1>
                <Content2>
                    1. Open the app/template you like
                    <br />
                    2. On the top-right corner, click the <b>$0</b>- purchase button
                </Content2>
                <ImageContent img={imageConfig.Doc51Image18} altText='Doc51Image18' />
                <Content2>
                    3. The app is automatically added to your <b>History</b>
                </Content2>
                <ImageContent img={imageConfig.Doc51Image19} altText='Doc51Image19' />
                <Content1>
                    <b>
                        Chat History:
                    </b>
                </Content1>
                <ImageContent img={imageConfig.Doc51Image20} altText='Doc51Image20' />
                <Content2>
                    From there:
                </Content2>
                <ListContent
                    listData={[
                        "You can edit the app",
                        "Customize it for your needs",
                        "Use it anytime in Greta",
                    ]}
                />
                <Content2>
                    You now have a ready-made app that you can build on instantly.
                </Content2>
                <Heading2>
                    12. Final Thoughts
                </Heading2>
                <Content2>
                    The Greta Marketplace is built to:
                </Content2>
                <ListContent
                    listData={[
                        'Empower creators to showcase and monetize their work',
                        'Help users build faster with reusable apps',
                        'Encourage collaboration and community growth'
                    ]}
                />
                <Content2>
                    Whether you’re <b>creating</b>, <b>selling</b>, or <b>using</b> apps—everything is designed to be simple, flexible, and creator-first.
                    <br />
                    Happy building with Greta.
                </Content2>

                <Heading1>
                    Greta Marketplace – UI Components
                </Heading1>
                <Content1>
                    This guide explains <b>how to create, publish, and manage UI Components</b>, on the Greta Marketplace.
                </Content1>
                <Heading2>
                    1. What are UI Components in Greta?
                </Heading2>
                <Content2>
                    UI Components are <b>reusable design elements</b> such as buttons, cards, forms, sections, or layouts that other creators can directly use inside their Greta apps.
                    <br />
                    By publishing UI components, you can:
                </Content2>
                <ListContent
                    listData={[
                        'Share polished UI elements with the community',
                        'Help others build faster',
                        'Showcase your design skills',
                        'Monetize high-quality components',
                    ]}
                    listType='ol'
                />
                <Heading2>
                    2. Getting Started with Greta
                </Heading2>
                <Content2>
                    Step 1: Log in or Sign up
                </Content2>
                <ListContent
                    listData={[
                        <>
                            Visit <a href="https://greta.questera.ai/" target='_blank'>Greta</a>
                        </>,
                        "Log in with your account",
                        'If you’re new, sign up and complete onboarding'
                    ]}
                    listType='ol'
                />
                <Content2>
                    Once logged in, you’ll land on the <b>Greta home page</b>.
                </Content2>
                <ImageContent img={imageConfig.Doc51Image21} altText='Doc51Image21' />
                <Heading2>
                    3. Creating a UI Component in Greta
                </Heading2>
                <Content1>
                    Step 2: Build your UI component
                </Content1>
                <ListContent
                    listData={[
                        <>
                            Use Greta to create a website, app, or UI component
                        </>,
                        <>
                            Make sure it is:
                            <br />
                            <div style={{ marginLeft: "40px" }}>
                                Clean and reusable
                                <br />
                                Well-structured
                                <br />
                                Ready to be used across multiple apps
                            </div>
                        </>
                    ]}
                    listType='ol'
                />
                <Content2>
                    Once the component is complete and tested, you’re ready to publish it.
                </Content2>
                <ImageContent img={imageConfig.Doc51Image22} altText='Doc51Image22' />
                <Heading2>
                    4. Locking & Publishing Your UI Component
                </Heading2>
                <Content1>
                    Step 3: Lock your component
                </Content1>
                <Content2>
                    1. Click the <b>Lock</b> button at the top-right corner of the screen
                </Content2>
                <ImageContent img={imageConfig.Doc51Image23} altText='Doc51Image23' />
                <Content2>
                    2. A popup will appear titled <b>Lock your Components</b>.
                </Content2>
                <Content1>
                    This action:
                </Content1>
                <ListContent
                    listData={[
                        <>
                            Locks the current version
                        </>,
                        "Marks it ready for publishing",
                        'Prevents further edits to this version'
                    ]}
                />
                <Heading2>
                    ⚠️ You won’t be able to edit this version after locking.
                </Heading2>
                <Content2>
                    3. Click <b>Lock & Publish</b>
                </Content2>
                <ImageContent img={imageConfig.Doc51Image24} altText='Doc51Image24' />
                <Heading2>
                    Step 4: Publishing process explained
                </Heading2>
                <Content2>
                    After clicking <b>Lock & Publish</b>, you’ll see a progress popup:
                </Content2>
                <ListContent
                    listData={[
                        <>
                            <b>Deployed</b> – Deploying pushes your saved version live so it can be used or tested.
                        </>,
                        <>
                            <b>Saving</b> – Your changes are saved safely.
                        </>,
                        <>
                            <b>Locking</b> – This version is permanently published and can no longer be edited.
                        </>,
                        <>
                            Click <b>Done</b> to complete the process.
                        </>,
                    ]}
                />
                <ImageContent img={imageConfig.Doc51Image25} altText='Doc51Image25' />
                <Heading2>
                    5. Opening the Greta Marketplace
                </Heading2>
                <Content1>
                    Step 5: Go to the marketplace
                </Content1>
                <Content2>
                    You can open the Greta Marketplace in the following way:
                </Content2>
                <ListContent
                    listData={[
                        <>
                            Go to the <b>Greta landing page</b>
                        </>,
                        <>
                            At the <b>top-right corner</b>, click <b>Marketplace</b>
                            <div style={{ marginLeft: "40px" }}>
                                Located next to <b>Discord</b> and <b>Learning Hub</b>
                            </div>
                        </>
                    ]}
                />
                <ImageContent img={imageConfig.Doc51Image26} altText='Doc51Image26' />
                <Content2>
                    3. This opens the <b>Greta Marketplace page</b>
                </Content2>
                <ImageContent img={imageConfig.Doc51Image27} altText='Doc51Image27' />
                <Heading2>
                    6. Creator Dashboard for UI Components
                </Heading2>
                <Content1>
                    Step 6: Open Creator’s Workspace
                </Content1>
                <ListContent
                    listData={[
                        <>On the Marketplace page, click <b>Creator’s Workspace</b> (top-right)</>,
                    ]}
                    listType='ol'
                />
                <ImageContent img={imageConfig.Doc51Image28} altText='Doc51Image28' />
                <Content2>
                    2. You’ll be taken to your <b>Dashboard</b>
                </Content2>
                <Content2>
                    Quick start guide to:
                    <br />
                    <div style={{ marginLeft: "40px" }}>
                        Upload app template
                        <br />
                        Upload UI template
                    </div>
                </Content2>
                <ImageContent img={imageConfig.Doc51Image29} altText='Doc51Image29' />
                <Heading2>
                    7. Uploading a UI Component
                </Heading2>
                <Content1>
                    Step 7: Upload your UI component
                </Content1>
                <ListContent
                    listData={[
                        <>In the dashboard, click <b>Upload UI Component</b></>,
                        <>A popup will appear: <b>Publish UI Component to Greta Marketplace</b></>,
                    ]}
                />
                <Content2>
                    Upload your design, add details, and start selling.
                </Content2>
                <ImageContent img={imageConfig.Doc51Image30} altText='Doc51Image30' />
                <Content1>
                    Step 8: Fill in Component details
                </Content1>
                <Content2>
                    Complete the following fields:
                </Content2>
                <ListContent
                    listData={[
                        <>
                            <b>Choose UI Component</b>
                            <br />
                            <div style={{ marginLeft: "40px" }}>
                                Drag and drop your file, or
                                <br />
                                Click Browse to upload
                                <br />
                                Max file size: 4MB
                            </div>
                        </>,
                        "Some data formats (dates, numbers, colours) may not be recognised",
                        <>
                            <b>UI Component Name</b>
                            <br />
                            <div style={{ marginLeft: "40px" }}>Give your component a clear and descriptive name</div>
                        </>,
                        "Review all details carefully",
                        <>Click <b>Publish</b></>
                    ]}
                    listType='ol'
                />
                <ImageContent img={imageConfig.Doc51Image31} altText='Doc51Image31' />
                <Heading2>
                    8. Review & Approval Flow
                </Heading2>
                <Content1>Step 9: Review status</Content1>
                <Content1>
                    <b>
                        Note: The review process usually takes around one week. You’ll be notified once the review is complete.
                    </b>
                </Content1>
                <Content2>
                    After publishing:
                </Content2>
                <ListContent
                    listData={[
                        <>Your UI component moves to <b>Under Review</b> status</>,
                        <>The Greta team reviews it for quality, usability, and reusability</>,
                    ]}
                />
                <ImageContent img={imageConfig.Doc51Image32} altText='Doc51Image32' />
                <Content2>
                    If approved:
                </Content2>
                <ListContent
                    listData={[
                        <>The component is published on the marketplace</>,
                    ]}
                />
                <ImageContent img={imageConfig.Doc51Image33} altText='Doc51Image33' />
                <Content2>
                    If rejected:
                </Content2>
                <ListContent
                    listData={[
                        <>Hover over the status in the dashboard to see the rejection reason</>,
                        <>Make necessary edits</>,
                        <>Resubmit the component for review</>,
                    ]}
                />
                <ImageContent img={imageConfig.Doc51Image34} altText='Doc51Image34' />
                <Heading2>
                    9. Managing Your UI Components
                </Heading2>
                <Content1>
                    Step 10: Dashboard actions
                </Content1>
                <Content2>
                    For each app in your dashboard, you’ll see three options:
                </Content2>
                <ListContent
                    listData={[
                        <><b>Analytics</b> – Track usage and performance</>,
                        <><b>Edit</b> – Improve or update the component</>,
                        <><b>Delete</b> – Remove it from the marketplace</>,
                    ]}
                    listType='ol'
                />
                <Content2>
                    You can manage all your UI components directly from the dashboard.
                </Content2>
                <ImageContent img={imageConfig.Doc51Image35} altText='Doc51Image35' />
                <Heading2>
                    10. Discovering & Using Apps from the Marketplace
                </Heading2>
                <Content1>
                    Step 11. Explore UI components
                </Content1>
                <Content2>
                    1. Go to the <b>Greta Marketplace</b>
                    <br />
                    2. Browse UI components created by other users
                </Content2>
                <ImageContent img={imageConfig.Doc51Image36} altText='Doc51Image36' />
                <Content2>
                    3. Click on any app to view:
                    <br />
                    <div style={{ marginLeft: "40px" }}>
                        Description
                        <br />
                        Ratings and reviews
                        <br />
                        Likes and comments
                    </div>
                </Content2>
                <Content1>
                    You can:
                </Content1>
                <ListContent
                    listData={[
                        "Like components",
                        "Rate them",
                        "Leave feedback"
                    ]}
                />
                <ImageContent img={imageConfig.Doc51Image37} altText='Doc51Image37' />
                <Heading2>
                    11. Using a UI Component in Your App
                </Heading2>
                <Content1>
                    Step 12: Add a component to your app
                </Content1>
                <Content2>
                    1. Open the UI component you like
                    <br />
                    2. Click the price button (for example, <b>$0</b> if free)
                </Content2>
                <ImageContent img={imageConfig.Doc51Image38} altText='Doc51Image38' />
                <Content2>
                    3. The component is automatically added to your <b>History</b>
                </Content2>
                <ImageContent img={imageConfig.Doc51Image39} altText='Doc51Image39' />
                <ImageContent img={imageConfig.Doc51Image40} altText='Doc51Image40' />
                <Content1>
                    <b>Tip: Use # in the chat to call the purchased UI component and guide Greta to place it exactly where you want inside your app.</b>
                </Content1>
                <ImageContent img={imageConfig.Doc51Image41} altText='Doc51Image41' />
                <Content1>
                    From there:
                </Content1>
                <ListContent
                    listData={[
                        "You can reuse it in your apps",
                        "Customize it as needed",
                        "Save time with ready-made UI elements",
                    ]}
                />
                <Heading2>
                    Final Notes
                </Heading2>
                <Content2>
                    UI Components in the Greta Marketplace are designed to:
                </Content2>
                <ListContent
                    listData={[
                        'Encourage reusable design',
                        'Speed up app creation',
                        'Help designers and developers grow through visibility and earnings'
                    ]}
                />
                <Content2>
                    Build once. Reuse everywhere. Share with the community.
                </Content2>
            </Creator>
        </>
    )
}

export default Doc51;