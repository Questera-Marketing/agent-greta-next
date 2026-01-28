'use client';

import { imageConfig } from '../ImageConfig'
import { Content1, Content2, Creator, Heading1, Heading2, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules'

const Doc40 = () => {
    return (
        <>
            <Topbar text='How do I use the Text Editor to change text, colors, and styles visually?' />
            <Creator tableOfContent={['How do I use the Text Editor to change text, colors, and styles visually?', 'Step-by-Step Guide:', 'Key Benefits:']}>
                <HeroHeader text='How do I use the Text Editor to change text, colors, and styles visually?' />
                <Content1>
                    The Text Editor is a visual editing tool that lets you make design changes to your website without writing code or using prompts. It provides a user-friendly interface for real-time text and style adjustments, making it perfect for quick visual tweaks and content updates.
                </Content1>
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
                <Heading1>
                    Step-by-Step Guide:
                </Heading1>
                <Heading2>
                    1. Access the Text Editor
                </Heading2>
                <ListContent
                    listData={[
                        "Open your project in Greta",
                        <>
                            Look at the top-right corner of the screen
                        </>,
                        `Click the Text Editing button (usually represented by a text or edit icon)`,
                        `This opens the Text Editor panel on your screen`
                    ]}
                />
                <ImageContent img={imageConfig.Doc40Image1} altText='Doc40Image1' />
                <Heading2>
                    2. Navigate the Five Key Features:
                </Heading2>
                <ImageContent img={imageConfig.Doc40Image2} altText='Doc40Image2' />
                <Content1>
                    A. Text Editing
                </Content1>
                <ListContent
                    listData={[
                        `Select any text element on your website`,
                        <>
                            Adjust:
                            <br />
                            <ul>
                                <li>Font family - Choose from available typefaces</li>
                                <li>Font size - Increase or decrease text size</li>
                                <li>Font weight - Make text bold, light, or regular</li>
                                <li>Alignment - Left, center, right, or justify</li>
                            </ul>
                        </>
                    ]}
                />
                <Content1>
                    B. Color Changes
                </Content1>
                <ListContent
                    listData={[
                        `Select text elements you want to modify`,
                        <>
                            Use the color picker to choose any shade
                        </>,
                        `Preview changes in real-time`,
                        `Apply consistent color schemes across your site`
                    ]}
                />
                <Content1>
                    C. Layout Adjustments
                </Content1>
                <ListContent
                    listData={[
                        <>
                            Modify spacing and positioning with:
                            <br />
                            <ul>
                                <li>Margins - Space outside elements</li>
                                <li>Padding - Space inside elements</li>
                                <li>Border radius - Round corners of text blocks and containers</li>
                            </ul>
                        </>,
                        `Visually adjust these values using sliders or input fields`,
                    ]}
                />
                <Content1>
                    D. AI-Powered Text Rewriting
                </Content1>
                <ListContent
                    listData={[
                        <>
                            Click the AI (star icon) to open the AI chat window
                        </>,
                        `Select text you want to improve`,
                        <>
                            Ask Greta to:
                            <br />
                            <ul>
                                <li>Rewrite or rephrase content</li>
                                <li>Enhance text clarity or professionalism</li>
                                <li>Adjust tone or style</li>
                                <li>Generate new content ideas</li>
                            </ul>
                        </>,
                        `Submit your request and Greta automatically applies the changes`
                    ]}
                />
                <Content1>
                    E. Text Removal
                </Content1>
                <ListContent
                    listData={[
                        `Select any text element you want to delete`,
                        `Use the remove option to instantly delete text`,
                        `Perfect for cleaning up unwanted content`
                    ]}
                />
                <Heading2>
                    3. Apply and Preview Changes
                </Heading2>
                <ListContent
                    listData={[
                        `All changes happen in real-time`,
                        <>
                            Click on “save all“
                        </>,
                        `The page automatically reloads after each modification`,
                        `See your updated content live immediately`
                    ]}
                />
                <ImageContent img={imageConfig.Doc40Image3} altText='Doc40Image3' />
                <Heading1>
                    Key Benefits:
                </Heading1>
                <ListContent
                    listData={[
                        `No Coding Required - Visual interface for all changes`,
                        `Credit-Free Editing - No prompts or credits needed for basic edits`,
                        `Instant Results - See changes immediately without waiting`,
                        `AI Assistance - Get help with content writing when needed`,
                        `Precision Control - Fine-tune every aspect of your text and styles`,
                    ]}
                />
                <Content1>
                    The Text Editor puts professional design control at your fingertips, allowing you to perfect your website's appearance without any technical expertise or back-and-forth prompting!
                </Content1>
            </Creator>
        </>
    )
}

export default Doc40