'use client';

import React from 'react'
import { Content1, Creator, Heading1, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules'
import { imageConfig } from '../ImageConfig'

const Doc3 = () => {
    return (
        <>
            <Topbar text='How do you create a new website using Greta?' />
            <Creator tableOfContent={['How do you create a new website using Greta?', 'Step 1: Sign Up & Verify Your Account', 'Step 2: Access the Dashboard & Start a Project', 'Step 3: Build & Deploy', 'Step 4: Adding Useful Components']}>
                <HeroHeader text='How do you create a new website using Greta?' />
                <Heading1>
                    Step 1: Sign Up & Verify Your Account
                </Heading1>
                <ListContent
                    listData={[
                        <>Visit <a href='https://greta.questera.ai/' target='_blank'>https://greta.questera.ai/</a> and sign up using your email or <strong>Login/Sign up with your Google</strong> account.</>,
                        <>Incase of email sign up, enter the <strong>OTP sent to your email</strong> to confirm your account. Once verified, you’re ready to use Greta.</>
                    ]}
                />

                <Heading1>
                    Step 2: Access the Dashboard & Start a Project
                </Heading1>

                <ListContent
                    listData={[
                        <>After logging in, you’ll be taken to the <strong>landing page</strong> which has different sections in it.</>,
                        <>The left side panel displays New chat, existing projects and the history of all projects you've created before.</>,
                        <>In the center of the page,you can find a text field where you can enter your prompt to create a website. Here, you can start from scratch or choose from Greta’s <strong>pre-designed templates</strong> to match your needs.</>
                    ]}
                />

                <ImageContent img={imageConfig.Doc3Image1} altText={'Doc3Image1'} />
                <Heading1>
                    Step 3: Build & Deploy
                </Heading1>
                <ListContent
                    listData={[
                        <>After you select an existing template or enter the prompt, click <strong>“Build”</strong>, and Greta will set up your project.</>
                    ]}
                />

                <ImageContent img={imageConfig.Doc3Image2} altText={'Doc3Image2'} />

                <Heading1>
                    Step 4: Adding Useful Components
                </Heading1>
                <Content1>
                    Enhance your creation by leveraging personalized suggestions tailored to improve your project. These recommendations help refine features, optimize performance, and add new functionalities, making your website more engaging and effective.
                </Content1>
                <ImageContent img={imageConfig.Doc3Image3} altText={'Doc3Image3'} />
                <ListContent
                    listData={[
                        'Your new website is now ready to deploy! You can click on the Deploy button on the right top of the page to deploy your website.'
                    ]}
                />

                <ImageContent img={imageConfig.Doc3Image4} altText={'Doc3Image4'} />
                <ImageContent img={imageConfig.Doc3Image5} altText={'Doc3Image5'} />
            </Creator>
        </>
    )
}

export default Doc3