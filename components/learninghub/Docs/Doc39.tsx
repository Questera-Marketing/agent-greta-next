'use client';

import { imageConfig } from '../ImageConfig'
import { Content1, Content2, Creator, Heading1, Heading2, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules'

const Doc39 = () => {
    return (
        <>
            <Topbar text='How do I use the Code Editor to make changes without prompts?' />
            <Creator tableOfContent={['How do I use the Code Editor to make changes without prompts?', 'Step-by-Step Guide:', 'Key Benefits:', 'Perfect For:']}>
                <HeroHeader text='How do I use the Code Editor to make changes without prompts?' />
                <Content1>
                    <div className="w-full aspect-video rounded-xl overflow-hidden my-6 border border-[#27272A]">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/qxS0EkYR9Rs?si=QSnbHe1FswiDijHC"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </Content1>
                <Content1>
                    The Code Editor is a built-in feature that gives you direct access to your project's source code, allowing you to make precise changes without using prompts or spending credits. It's perfect for quick fixes, customizations, and hands-on coding adjustments.
                </Content1>
                <Heading1>
                    Step-by-Step Guide:
                </Heading1>
                <Heading2>
                    1. Access Your Project
                </Heading2>
                <ListContent
                    listData={[
                        "Open the project you want to edit in Greta",
                        <>
                            You'll see the main interface with two panels:
                            <br />
                            <ul>
                                <li>Left side: Code panel</li>
                                <li>Right side: Preview panel</li>
                            </ul>
                        </>
                    ]}
                />
                <ImageContent img={imageConfig.Doc39Image1} altText='Doc39Image1' />
                <Heading2>
                    2. Open the Code Editor
                </Heading2>
                <ListContent
                    listData={[
                        `Click on the "Code" tab on the left side of the screen`,
                        <>
                            This reveals the complete file structure of your project
                        </>,
                        `You'll see folders containing components, contexts, and other essential files`
                    ]}
                />
                <Heading2>
                    3. Navigate Project Files
                </Heading2>
                <ListContent
                    listData={[
                        `Browse through the file directory to find the component you want to edit`,
                        <>
                            Common locations include:
                            <br />
                            <ul>
                                <li>components/ for reusable UI components</li>
                                <li>pages/ for main page files</li>
                                <li>styles/ for CSS and styling files</li>
                            </ul>
                        </>,
                        `Click on any file to open it in the editor`
                    ]}
                />
                <Heading2>
                    4. Make Direct Edits
                </Heading2>
                <ListContent
                    listData={[
                        `Once a file is open, you can edit the code directly`,
                        `Example style change: Adjust widths, borders, padding, or colors`,
                        `Example functionality: Modify JavaScript logic or add new features`,
                    ]}
                />
                <Heading2>
                    5. Save Your Changes
                </Heading2>
                <ListContent
                    listData={[
                        `After making edits, click the "Save Changes" button in the top-right corner`,
                        `Greta will automatically process and apply your changes`,
                        `The preview panel will instantly reload to show your updated website`,
                    ]}
                />
                <Heading2>
                    6. Toggle Display Preferences
                </Heading2>
                <ListContent
                    listData={[
                        `Use the Light/Dark Mode toggle to adjust the editor's appearance to your preference`,
                        <>This doesn't affect your project, only the editor interface</>,
                    ]}
                />
                <ImageContent img={imageConfig.Doc39Image2} altText='Doc39Image2' />
                <Heading1>
                    Key Benefits:
                </Heading1>
                <ListContent
                    listData={[
                        `Credit-Free Editing: No prompts needed, no credits used`,
                        `Instant Preview: See changes immediately after saving`,
                        `Full Control: Make precise code-level adjustments`,
                        `Time Efficient: Quick fixes without back-and-forth chatting`,
                        `Learning Opportunity: Understand how your project is structured`
                    ]}
                />
                <Heading1>
                    Perfect For:
                </Heading1>
                <ListContent
                    listData={[
                        `Text content updates`,
                        `Style and color adjustments`,
                        `Layout tweaks (margins, padding, positioning)`,
                        `Small functional changes`,
                        `Code experiments and learning`
                    ]}
                />
                <Content1>
                    The Code Editor puts you in the driver's seat for quick, precise changes while still maintaining all the power of AI-assisted development for larger tasks!
                </Content1>
            </Creator>
        </>
    )
}

export default Doc39