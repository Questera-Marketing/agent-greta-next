'use client';

import { imageConfig } from '../ImageConfig'
import { Content1, Content2, Creator, Heading1, Heading2, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules'

const Doc37 = () => {
    return (
        <>
            <Topbar text='What is the Knowledge Base?' />
            <Creator tableOfContent={['What is the Knowledge Base?', 'Step-by-Step Guide:', 'What You Can Add:','Benefits:']}>
                <HeroHeader text='What is the Knowledge Base?' />
                <Content1>
                    The Knowledge Base is a powerful new feature that allows you to give Greta custom knowledge, instructions, and context specific to each project. This enables Greta to remember your brand voice, coding preferences, project rules, and documentation - making it feel tailor-made for your specific workflow and needs.
                </Content1>
                <ImageContent img={imageConfig.Doc37Image1} altText='Doc37Image1' />
                <Heading1>
                    Step-by-Step Guide:
                </Heading1>
                <Heading2>
                    1. Access Project Settings
                </Heading2>
                <ListContent
                    listData={[
                        "Open the project where you want to add custom knowledge",
                        `Click on the Settings button in the top-right corner of the interface`,
                    ]}
                />
                <Heading2>
                    2. Navigate to Knowledge Section
                </Heading2>
                <ListContent
                    listData={[
                        `In the Settings menu, click on the "Knowledge" tab`,
                        <>
                            You'll see the Knowledge Base interface with two main sections:
                            <br />
                            <ul>
                                <li>
                                    Docs - For adding documentation and reference materials
                                </li>
                                <li>
                                    Instructions & Guidelines - For setting rules and preferences
                                </li>
                            </ul>
                        </>
                    ]}
                />
                <Heading2>
                    3. Add Instructions & Guidelines
                </Heading2>
                <ListContent
                    listData={[
                        `Click on "Instructions & Guidelines"`,
                        `Set project-specific rules or best practices`,
                        `Define coding style preferences (indentation, naming conventions)`,
                        `Add brand voice guidelines and tone preferences`,
                        `Include any specific requirements or constraints`
                    ]}
                />
                <Heading2>
                    4. Upload Documentation
                </Heading2>
                <ListContent
                    listData={[
                        `Click on "Docs" to add external documentation`,
                        `Upload style guides, API documentation, or reference materials`,
                        `Add notes about project architecture or specific patterns to follow`,
                    ]}
                />
                <Heading2>
                    5. Save and Apply
                </Heading2>
                <ListContent
                    listData={[
                        `Once you've added your knowledge, save the settings`,
                        `Greta will now remember and apply this context to all future interactions`,
                        `The knowledge persists across all sessions for this project`,
                    ]}
                />
                <Heading1>
                    What You Can Add:
                </Heading1>
                <ListContent
                    listData={[
                        `Brand voice and tone guidelines`,
                        <>Coding standards and style preferences</>,
                        <>Project-specific rules and requirements</>,
                        <>API documentation and integration guides</>,
                        <>Design system references</>,
                        <>Company-specific terminology and processes</>,
                    ]}
                />
                <Heading1>
                    Benefits:
                </Heading1>
                <ListContent
                    listData={[
                        `Consistent outputs aligned with your standards`,
                        `No need to repeat instructions in every chat`,
                        `Maintains brand voice across all generated content`,
                        `Understands your technical preferences automatically`,
                        `References your documentation without needing prompts`,
                    ]}
                />
                <Content1>
                    This feature transforms Greta from a general AI assistant into your dedicated project expert who understands your unique requirements from the very first prompt!
                </Content1>
            </Creator>
        </>
    )
}

export default Doc37