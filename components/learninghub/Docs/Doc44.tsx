'use client';

import { imageConfig } from '../ImageConfig'
import { Content1, Content2, Creator, Heading1, Heading2, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules'

const Doc44 = () => {
    return (
        <>
            <Topbar text='What is Discussion Mode and how do I use it to brainstorm ideas?' />
            <Creator tableOfContent={["What is Discussion Mode and how do I use it to brainstorm ideas?", "How to Use Discussion Mode:", "Key Features:",'Perfect For:']}>
                <HeroHeader text='What is Discussion Mode and how do I use it to brainstorm ideas?' />
                <Content1>
                    Discussion Mode is a specialized feature that lets you brainstorm features and ideas with Greta before writing any code. It's designed for planning, conceptual conversations, and collaborative ideation - perfect for working through complex requirements and planning your project architecture.
                </Content1>
                <Heading1>
                    How to Use Discussion Mode:
                </Heading1>
                <Heading2>
                    1. Access Discussion Mode
                </Heading2>
                <ListContent
                    listData={[
                        `In the Greta chat section, click on "Tools"`,
                        <>
                            Select "Discussion" from the available options
                        </>,
                        `The mode will activate and show a visual indicator in your chat`
                    ]}
                />
                <ImageContent img={imageConfig.Doc44Image1} altText='Doc44Image1' />
                <Heading2>
                    2. Start Brainstorming
                </Heading2>
                <ListContent
                    listData={[
                        <>
                            Once Discussion Mode is active, you can:
                            <br />
                            <ul>
                                <li>Discuss feature ideas and requirements</li>
                                <li>Plan project architecture and structure</li>
                                <li>Work through complex logic and user flows</li>
                                <li>Brainstorm design approaches and solutions</li>
                            </ul>
                        </>,
                        <>
                            Greta will engage in conceptual conversations without immediately generating code
                        </>
                    ]}
                />
                <Heading2>
                    3. Toggle Between Modes
                </Heading2>
                <ListContent
                    listData={[
                        `Discussion Mode can be easily turned on/off as needed`,
                        <>
                            When you're ready to start building, simply toggle it off
                        </>,
                        `Switch back to regular coding mode to implement your discussed ideas`,
                    ]}
                />
                <Heading1>
                    Key Features:
                </Heading1>
                <ListContent
                    listData={[
                        `Early Planning Focus: Perfect for requirement gathering and project scoping`,
                        <>
                            No Immediate Code Generation: Pure discussion environment for clear thinking
                        </>,
                        <>
                            Flexible Switching: Move between discussion and coding as your workflow requires
                        </>
                    ]}
                />
                <Heading1>
                    Perfect For:
                </Heading1>
                <ListContent
                    listData={[
                        `Planning complex feature implementations`,
                        <>
                            Discussing architectural decisions
                        </>,
                        `Brainstorming user experience flows`,
                        `Working through technical challenges conceptually`
                    ]}
                />
                <Content1>
                    Discussion Mode transforms Greta from just a code generator into a true thought partner, helping you think through ideas before committing to implementation!
                </Content1>
            </Creator>
        </>
    )
}

export default Doc44