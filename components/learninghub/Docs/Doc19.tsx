'use client';

import { imageConfig } from '../ImageConfig'
import { Content1, Creator, Heading1, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules'

const Doc19 = () => {
    return (
        <>
            <Topbar text="How do I contact Greta's support team for personalized assistance?" />
            <Creator>
                <HeroHeader text="How do I contact Greta's support team for personalized assistance?" />
                <Content1>
                    If you need help while using Greta, there are multiple ways to reach out to our support team for <strong>quick and personalized assistance</strong>:
                </Content1>
                <Heading1>
                    1. Chat with Questera on the Help Hub
                </Heading1>
                <ListContent
                    listData={[
                        <>You can find it in the bottom right of the landing page.You can send a message on our <strong>Help Hub Chat</strong>, where our AI assistant, <strong>Questera</strong>, will guide you instantly.</>
                    ]}
                />
                <ImageContent img={imageConfig.Doc19Image1} altText="Doc19Image1" />
                <ImageContent img={imageConfig.Doc19Image2} altText="Doc19Image2" />
                <ListContent
                    listData={[
                        <>Questera can help answer common questions, troubleshoot issues, and provide suggestions to improve your experience.</>
                    ]}
                />
                <Heading1>
                    2. Use the Feedback Button
                </Heading1>
                <ListContent
                    listData={[
                        <>On the <strong>middle right side of the page</strong>, you’ll see a <strong>“Feedback”</strong> button. Click on it to open a tab with different support options:</>,
                    ]}
                />
                <ImageContent img={imageConfig.Doc19Image3} altText="Doc19Image3" />
                <ListContent
                    listData={{
                        'General Feedback': "Share your thoughts about your experience with Greta.",
                        'Report a Bug': "Inform us about any technical issues or errors you encounter.",
                        'Request a Feature': 'Suggest new features or improvements that can make Greta better.',
                        'Contact Us': "Reach out directly if you need further assistance beyond what Questera provides."
                    }}
                />
                <ImageContent img={imageConfig.Doc19Image4} altText="Doc19Image4" />
            </Creator>
        </>
    )
}

export default Doc19