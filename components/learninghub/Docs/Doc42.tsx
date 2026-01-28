'use client';

import { imageConfig } from '../ImageConfig'
import { Content1, Content2, Creator, Heading1, Heading2, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules'

const Doc42 = () => {
    return (
        <>
            <Topbar text='How do I add a Google Analytics 4 (GA4) tracking to my project?' />
            <Creator tableOfContent={["How do I add a Google Analytics 4 (GA4) tracking to my project?", "1. Open Project Settings", "2. Find Google Analytics Section", "3. Get Your Measurement ID", "4. Apply in Greta", "5. Deploy Your Project", "6. Verify Connection", "Additional Notes:"]}>
                <HeroHeader text='How do I add a Google Analytics 4 (GA4) tracking to my project?' />
                <Content1>
                    Adding GA4 tracking to your Greta project is simple and requires no coding:
                    <br />
                    <div className="w-full aspect-video rounded-xl overflow-hidden my-6 border border-[#27272A]">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/HTaE_pJq5fs?si=ZWywIfhpbhFry4y9"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </Content1>
                <Heading1>
                    1. Open Project Settings
                </Heading1>
                <ListContent
                    listData={[
                        `Click the Project Settings button in the top-right corner`,
                        <>
                            Navigate to the Integrations tab
                        </>,
                    ]}
                />
                <ImageContent img={imageConfig.Doc42Image1} altText='Doc42Image1' />
                <Heading1>
                    2. Find Google Analytics Section
                </Heading1>
                <ListContent
                    listData={[
                        `Locate the Google Analytics integration panel`,
                        <>
                            You'll see a field asking for your Measurement ID
                        </>,
                    ]}
                />
                <ImageContent img={imageConfig.Doc42Image2} altText='Doc42Image2' />
                <Heading1>
                    3. Get Your Measurement ID
                </Heading1>
                <ListContent
                    listData={[
                        `Go to your Google Analytics dashboard`,
                        <>
                            Navigate to Admin → Data Collection → Data Streams
                        </>,
                        `Select your active data stream`,
                        `Copy the Measurement ID (starts with "G-")`
                    ]}
                />
                <Heading1>
                    4. Apply in Greta
                </Heading1>
                <ListContent
                    listData={[
                        `Paste your Measurement ID into the field in Greta`,
                        <>
                            Click "Apply"
                        </>,
                    ]}
                />
                <ImageContent img={imageConfig.Doc42Image3} altText='Doc42Image3' />
                <Heading1>
                    5. Deploy Your Project
                </Heading1>
                <ListContent
                    listData={[
                        `Greta will prompt you to deploy to Netlify first`,
                        <>
                            Click "Deploy to Netlify" and wait for completion
                        </>,
                    ]}
                />
                <ImageContent img={imageConfig.Doc42Image4} altText='Doc42Image4' />
                <ListContent
                    listData={[
                        `Once deployed, click "Apply" again in the Google Analytics section`
                    ]}
                />
                <Heading1>
                    6. Verify Connection
                </Heading1>
                <ListContent
                    listData={[
                        `Check your Project Settings - the status should show "Connected" in green`,
                        <>
                            Your GA4 tracking is now active!
                        </>,
                    ]}
                />
                <ImageContent img={imageConfig.Doc42Image5} altText='Doc42Image5' />
                <Heading1>
                    Additional Notes:
                </Heading1>
                <ListContent
                    listData={[
                        `You can update or disconnect Google Analytics anytime from the same section`,
                        `Requires a live deployment for accurate tracking`,
                        `No code changes needed - Greta handles everything automatically`
                    ]}
                />
                <Content1>
                    That's all it takes to connect professional analytics tracking to your Greta project!
                </Content1>
            </Creator>
        </>
    )
}

export default Doc42