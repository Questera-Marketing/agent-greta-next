'use client';

import { imageConfig } from '../ImageConfig'
import { Content1, Content2, Creator, Heading1, Heading2, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules'

const Doc36 = () => {
    return (
        <>
            <Topbar text='Project setting in greta' />
            <Creator tableOfContent={['Project setting in greta', 'What You Can Do in Project Settings:', 'Key Sections Within Project Settings:']}>
                <HeroHeader text='Project setting in greta' />
                <Content1>
                    The Project Settings panel is a centralized control center for managing all aspects of your Greta project. Located in the top-right corner of your project screen, it consolidates project management, integrations, and configuration options in one easy-to-access location.
                </Content1>
                <Heading1>
                    What You Can Do in Project Settings:
                </Heading1>
                <Heading2>
                    1. Project Details Tab
                </Heading2>
                <ImageContent img={imageConfig.Doc36Image1} altText='Doc36Image1' />
                <ListContent
                    listData={[
                        "Edit Project Name: Change your project's display name",
                        `Download Code: Export your complete project source code`,
                        `View Project Information: See owner, creation date, and chat link`,
                        `Manage Project Visibility: Set project as private`,
                        `Control Agent Mode: Enable or disable Agent Mode for this project`,
                        `Domain Management: Deploy to Netlify directly`,
                        `Delete Project: Permanently remove project (irreversible action)`,
                    ]}
                />
                <Heading2>
                    2. Integrations Tab
                </Heading2>
                <ImageContent img={imageConfig.Doc36Image2} altText='Doc36Image2' />
                <Content1>
                    GitHub Integration:
                </Content1>
                <ListContent
                    listData={[
                        "Connect/disconnect GitHub account",
                        `View repository link`,
                        `Push latest code to GitHub`,
                        `Create new repositories`,
                    ]}
                />
                <Content1>
                    Supabase Integration:
                </Content1>
                <ListContent
                    listData={[
                        "Connect to Supabase organizations",
                        `Manage database projects`,
                        `Enable authentication and database features`,
                    ]}
                />
                <Content1>
                    Google Analytics:
                </Content1>
                <ListContent
                    listData={[
                        "Add GA4 Measurement ID",
                        `Set up tracking for user interactions`,
                        `Requires deployment first for live URL`,
                    ]}
                />
                <Heading2>
                    3. Knowledge Tab
                </Heading2>
                <ImageContent img={imageConfig.Doc36Image3} altText='Doc36Image3' />
                <ListContent
                    listData={[
                        `Custom Instructions: Set project-specific rules and best practices`,
                        <>Coding Preferences: Define indentation, naming conventions, style guides</>,
                        <>Documentation: Include external docs and style guides</>,
                        <>Brand Guidelines: Add design and voice preferences</>,
                    ]}
                />
                <Heading1>
                    Key Sections Within Project Settings:
                </Heading1>
                <Heading2>
                    Agent Mode Control
                </Heading2>
                <ListContent
                    listData={[
                        `Toggle between Enabled/Disabled states`,
                        `Switch between "Agent Mode" and "Manual Mode"`,
                        `Real-time status display`
                    ]}
                />
                <Heading2>
                    Deployment Management
                </Heading2>
                <ListContent
                    listData={[
                        `One-click Netlify deployment`,
                        `Domain configuration`,
                        `Deployment status monitoring`
                    ]}
                />
                <Heading2>
                    Version Control
                </Heading2>
                <ListContent
                    listData={[
                        `Access to version history`,
                        `Rollback capabilities`,
                        `Change tracking and documentation`
                    ]}
                />
                <Heading2>
                    File Management
                </Heading2>
                <ListContent
                    listData={[
                        `View all project files (typically 12+ files in standard projects)`,
                        `File creation and modification history`,
                        `Code structure overview`
                    ]}
                />
                <Content1>
                    The Project Settings panel puts complete control over your project's configuration, integrations, and management in one convenient location, eliminating the need to navigate through multiple menus!
                </Content1>
            </Creator>
        </>
    )
}

export default Doc36