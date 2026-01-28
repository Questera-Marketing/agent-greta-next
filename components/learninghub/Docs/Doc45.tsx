'use client';

import { imageConfig } from '../ImageConfig'
import { Content1, Content2, Creator, Heading1, Heading2, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules'

const Doc45 = () => {
    return (
        <>
            <Topbar text='How can I paste a screenshot into the chat to give Greta visual context?' />
            <Creator>
                <HeroHeader text='How can I paste a screenshot into the chat to give Greta visual context?' />
                <Content1>
                    You can now paste screenshots directly into the chat to provide visual references and context. Here's how:
                </Content1>
                <ImageContent img={imageConfig.Doc45Image1} altText='Doc45Image1' />
                <Heading2>
                    1. Capture Your Screenshot
                </Heading2>
                <ListContent
                    listData={[
                        `Take a screenshot using your computer's built-in tools"`,
                        <>
                            Or copy any image from your device or the web
                        </>,
                    ]}
                />
                <Heading2>
                    2. Paste Directly into Chat
                </Heading2>
                <ListContent
                    listData={[
                        <>
                            Simply use the keyboard shortcut:
                            <br />
                            <ul>
                                <li>Ctrl + V (Windows/Linux)</li>
                                <li>Cmd + V (Mac)</li>
                            </ul>
                        </>,
                        <>
                            Or right-click in the chat input and select "Paste"
                        </>
                    ]}
                />
                <Heading2>
                    3. That's It!
                </Heading2>
                <ListContent
                    listData={[
                        `The image will appear directly in the chat`,
                        <>
                            Greta can now reference and understand the visual context
                        </>,
                        `No file uploads or additional steps required`,
                    ]}
                />
                <Content1>
                    This feature makes it incredibly easy to communicate visual ideas and get more accurate, context-aware responses from Greta!
                </Content1>
            </Creator>
        </>
    )
}

export default Doc45