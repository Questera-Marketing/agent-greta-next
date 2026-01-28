'use client';

import React from 'react'
import { Content1, Creator, Heading1, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules'
import { imageConfig } from '../ImageConfig'

const Doc2 = () => {
    return (
        <>
            <Topbar text='How do you navigate through greta?' />
            <Creator tableOfContent={['How do you navigate through greta?', 'Step 1: Landing Page Overview', 'Step 2: Navigate Between Sections', 'Step 3: Access the Help Hub', 'Step 4: Feedback Submission']}>
                <HeroHeader text='How do you navigate through greta?' />
                <Heading1>
                    Step 1: Landing Page Overview
                </Heading1>

                <Content1>
                    Upon logging in, users are directed to the Landing Page, which serves as the main interface. Key features include:
                </Content1>

                <ListContent
                    listData={[
                        <>Access to <strong>all previously created projects</strong>.</>,
                        <>Options to start <strong>new projects</strong> seamlessly.</>,
                        <>A clear overview of user activity for efficient management.</>
                    ]}
                />

                <Heading1>
                    Step 2: Navigate Between Sections
                </Heading1>

                <Content1>
                    Greta's interface is designed for easy access to important features. Here’s how you can move between sections.
                </Content1>

                <ListContent
                    listData={{
                        'New Chat': <>Located on the left side , this option lets you <strong>create a new project</strong> from scratch.</>,
                        "History": <>This section allows you to <strong>view all past projects</strong> you have created, making it easy to manage and edit them.</>,
                        "Logged-in Profile": <>At the <strong>bottom left corner</strong>, you’ll find your <strong>profile icon</strong>. Click on it to access <strong>account settings, preferences, and logout options</strong>.</>,
                        "Templates": <>Some of the pre-designed templates are present as capsules below the prompt text field and you can also find templates on top right of the screen. you can browse and choose from <strong>ready-made website templates</strong> to quickly start your project.</>
                    }}
                />

                <ImageContent img={imageConfig.Doc2Image1} altText='Doc2Image1' />

                <Heading1>
                    Step 3: Access the Help Hub
                </Heading1>

                <ListContent
                    listData={[
                        <>Located at the <strong>bottom left corner</strong>, the <strong>Help Hub</strong> provides support whenever you need assistance.</>
                    ]}
                />

                <ImageContent img={imageConfig.Doc2Image2} altText='Doc2Image2' />

                <Content1>
                    <ul className='list-disc ml-6'>
                        <li>Here, you can:
                            <ul className='list-disc ml-6'>
                                <li><strong>Send a message</strong> to the support team.</li>
                                <li><strong>Join the Greta Community</strong> to interact with other users and get help.</li>
                            </ul>
                        </li>
                    </ul>
                </Content1>

                <ImageContent img={imageConfig.Doc2Image3} altText='Doc2Image3' />
                <Heading1>
                    Step 4: Feedback Submission
                </Heading1>

                <Content1>
                    Users can provide input through the <strong>Feedback option</strong>, available on the <strong>middle-right side end</strong> of the page. Clicking this will open a Modal, Here you can do the following.
                </Content1>

                <ImageContent img={imageConfig.Doc2Image4} altText='Doc2Image4' />

                <ListContent
                    listData={{
                        'General Feedback Submission': "Share overall experience insights.",
                        "Bug Reporting": "Notify the team of any technical issues.",
                        'Feature Requests': "Suggest enhancements or new functionalities.",
                        'Direct Contact': "Reach out to the support team for additional assistance."
                    }}
                />

                <ImageContent img={imageConfig.Doc2Image5} altText='Doc2Image5' />
            </Creator>
        </>
    )
}

export default Doc2