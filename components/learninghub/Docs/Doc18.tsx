'use client';

import { imageConfig } from '../ImageConfig'
import { Creator, Heading1, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules'

const Doc18 = () => {
    return (
        <>
            <Topbar text="What are credits in Greta, and how can I earn them?" />
            <Creator
                tableOfContent={[
                    'What are credits in Greta, and how can I earn them?',
                    'How to Get Credits',
                ]}
            >
                <HeroHeader text="What are credits in Greta, and how can I earn them?" />
                <ListContent
                    listData={[
                        <>Credits are virtual points that let you work with Greta to improve your project, add features, and get suggestions.</>,
                        <>At the bottom left of the screen, you'll see your available credits.</>
                    ]}
                />
                <ImageContent img={imageConfig.Doc18Image1} altText="Doc18Image1" />
                <Heading1>
                    How to Get Credits
                </Heading1>
                <ListContent
                    listData={{
                        "Earn Free Credits": <>Click on the tab above "Credits" and complete <strong>4 simple tasks</strong> to get free credits.</>
                    }}
                />
                <ImageContent img={imageConfig.Doc18Image2} altText="Doc18Image2" />
                <ListContent
                    listData={{
                        'Buy More Credits': <>Go to <strong>Settings &gt; Pricing & Plan</strong>, then scroll down to <strong>"Buy Credit Points"</strong> to purchase additional credits.</>
                    }}
                />
                <ImageContent img={imageConfig.Doc18Image3} altText="Doc18Image3" />
            </Creator>
        </>
    )
}

export default Doc18