'use client';

import { imageConfig } from '../ImageConfig'
import { Creator, Heading1, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules'

const Doc11 = () => {
    return (
        <>
            <Topbar text="How to integrate github with my Greta project?" />
            <Creator tableOfContent={['How to integrate github with my Greta project?', 'Step 1: Open Settings in Greta', 'Step 2: Connect GitHub', 'Step 3: Log in to GitHub', 'Step 4: Authorize Greta', 'Step 5: Integration Successful!']}>
                <HeroHeader text="How to integrate github with my Greta project?" />
                <Heading1>
                    Step 1: Open Settings in Greta
                </Heading1>
                <ListContent
                    listData={[
                        <>In the <strong>left-bottom corner</strong>, click on <strong>Settings</strong>.</>,
                        <>Navigate to the <strong>Integrations</strong> section.</>
                    ]}
                />
                <Heading1>
                    Step 2: Connect GitHub
                </Heading1>
                <ListContent
                    listData={[
                        <>Find the <strong>GitHub</strong> option under Integrations.</>,
                        <>Click on <strong>Connect</strong>.</>
                    ]}
                />
                <ImageContent img={imageConfig.Doc11Image1} altText={'Doc11Image1'} />
                <Heading1>
                    Step 3: Log in to GitHub
                </Heading1>
                <ListContent
                    listData={[
                        <>A new window will open, asking you to log in to your <strong>GitHub account</strong>.</>,
                        <>Enter your credentials and sign in.</>
                    ]}
                />
                <ImageContent img={imageConfig.Doc11Image2} altText={'Doc11Image2'} />
                <Heading1>
                    Step 4: Authorize Greta
                </Heading1>
                <ListContent
                    listData={[
                        <>You will see a request to authorize <strong>Quest Labs</strong> (Greta’s platform).</>,
                        <>Click on <strong>Authorize Quest Labs</strong> to grant access.</>
                    ]}
                />
                <ImageContent img={imageConfig.Doc11Image3} altText={'Doc11Image3'} />
                <Heading1>
                    Step 5: Integration Successful!
                </Heading1>
                <ListContent
                    listData={[
                        <>Once authorized, you will see that your <strong>GitHub is now integrated with Greta</strong>.</>,
                        <>You can now push, pull, and manage your code directly from Greta.</>
                    ]}
                />
                <ImageContent img={imageConfig.Doc11Image4} altText={'Doc11Image4'} />
            </Creator>
        </>
    )
}

export default Doc11