'use client';

import { imageConfig } from '../ImageConfig'
import { Creator, Heading1, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules'

const Doc1 = () => {
    return (
        <>
            <Topbar text='How to create your first project using Greta?' />
            <Creator tableOfContent={['How to create your first project using Greta?', 'Step 1: Sign Up & Verify Your Account', 'Step 2: Access the Dashboard & Start a Project', 'Step 3: Build your website', 'Step 4: Deployment']} >
                <HeroHeader text='How to create your first project using Greta?' />
                <Heading1 children='Step 1: Sign Up & Verify Your Account' />
                <ListContent
                    listData={[
                        <>Visit <a href='https://greta.questera.ai/' target='_blank'>https://greta.questera.ai/</a> and sign up using your email or Login/Sign up with your Google account.</>,
                        "Incase of email sign up, enter the OTP sent to your email to confirm your account. Once verified, you’re ready to use Greta."
                    ]}
                />
                <Heading1>
                    Step 2: Access the Dashboard & Start a Project
                </Heading1>

                <ListContent
                    listData={[
                        "After logging in, you’ll be taken to the landing page which has different sections in it.The left side panel displays New chat, existing projects, and the history of all projects you've created before.",
                        <>In the center of the page,  you can find a text field where you can enter your prompt to create a website. Here, you can start from scratch or choose from Greta’s <strong>pre-designed templates</strong> to match your needs.</>
                    ]}
                />

                <ImageContent img={imageConfig.Doc1Image1} altText={'Doc1Image1'} />
                <ImageContent img={imageConfig.Doc1Image2} altText={'Doc1Image2'} />

                <Heading1>
                    Step 3: Build your website
                </Heading1>

                <ListContent
                    listData={[
                        <>After you select an existing template or enter the prompt, click <strong>“Build”</strong>, and Greta will set up your project.</>
                    ]}
                />

                <ImageContent img={imageConfig.Doc1Image3} altText={'Doc1Image3'} />

                <ListContent
                    listData={[
                        'Once it is done, your new website is now ready to deploy!',
                        'Review your project in the preview, make any necessary changes by chatting with Greta or using the suggested features to enhance your website.'
                    ]}
                />

                <Heading1>
                    Step 4: Deployment
                </Heading1>

                <ListContent
                    listData={[
                        <>Click <strong>"Deploy"</strong> on the top right to make your site live, copy the live URL, and optionally push your code to GitHub for version control.</>
                    ]}
                />
                <ImageContent img={imageConfig.Doc1Image4} altText={'Doc1Image4'} />
                <ImageContent img={imageConfig.Doc1Image5} altText={'Doc1Image5'} />
            </Creator>
        </>
    )
}

export default Doc1;