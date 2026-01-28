'use client';

import { imageConfig } from '../ImageConfig'
import { Content1, Content2, Creator, Heading1, Heading2, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules'

const Doc38 = () => {
    return (
        <>
            <Topbar text='What is Agent Mode and how do I use the toggle feature?' />
            <Creator tableOfContent={['What is Agent Mode and how do I use the toggle feature?', 'How to Access and Use Agent Mode Toggle:', 'When to Use Agent Mode:']}>
                <Content1>
                    Agent Mode is a fundamental architectural upgrade to Greta that transforms how your projects are processed. Unlike the previous approach where Greta made quick AI calls for changes, Agent Mode implements a sophisticated multi-step process that:
                    <div className="w-full aspect-video rounded-xl overflow-hidden my-6 border border-[#27272A]">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/sHlIpLsAPXA?si=rgU8vNM-Ob0EckUT"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </Content1>
                <ListContent
                    listData={[
                        "Deeply understands your requests and requirements",
                        `Pre-processes and analyzes your entire project structure`,
                        `Performs quality checks before implementing changes`,
                        `Executes precise modifications with better accuracy`,
                        `Eliminates file limitations that previously constrained complex projects`,
                    ]}
                />
                <Heading1>
                    How to Access and Use Agent Mode Toggle:
                </Heading1>
                <Heading2>
                    1. Access Project Settings
                </Heading2>
                <ListContent
                    listData={[
                        `Click on the Project Settings button in the top-right corner of your screen`,
                        <>
                            This will open the project settings panel
                        </>
                    ]}
                />
                <Heading2>
                    2. Locate Agent Mode Toggle
                </Heading2>
                <ListContent
                    listData={[
                        `Within the settings panel, look for the Agent Mode section`,
                        `You'll see a toggle switch clearly indicating the current status`,
                        `The display shows whether Agent Mode is currently Enabled or Disabled`,
                    ]}
                />
                <ImageContent img={imageConfig.Doc38Image1} altText='Doc38Image1' />
                <Heading2>
                    3. Toggle Agent Mode
                </Heading2>
                <ListContent
                    listData={[
                        `Click the toggle switch to turn Agent Mode ON or OFF`,
                        `Changes take effect immediately`,
                        `The status update is reflected in real-time`,
                    ]}
                />
                <Heading2>
                    4. Monitor Status
                </Heading2>
                <ListContent
                    listData={[
                        `The interface clearly shows the current state at all times`,
                        `No need to save changes - modifications apply automatically`,
                    ]}
                />
                <Heading1>
                    When to Use Agent Mode:
                </Heading1>
                <Heading2>
                    Enable Agent Mode For:
                </Heading2>
                <ListContent
                    listData={[
                        `Complex projects with multiple components`,
                        <>Major feature additions requiring architectural changes</>,
                        <>Large-scale refactoring or code reorganization</>,
                        <>Projects where precision and quality are critical</>,
                    ]}
                />
                <Heading2>
                    Disable Agent Mode For:
                </Heading2>
                <ListContent
                    listData={[
                        `Simple text changes or minor styling adjustments`,
                        `Quick fixes and small tweaks`,
                        `Basic edits that don't require deep analysis`,
                    ]}
                />
                <Content1>
                    The toggle gives you complete control over your project's processing power, allowing you to optimize between comprehensive analysis and quick execution based on your specific needs!
                </Content1>
            </Creator >
        </>
    )
}

export default Doc38