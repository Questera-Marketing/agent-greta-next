'use client';

import { imageConfig } from '../ImageConfig'
import { Content1, Creator, Heading1, HeroHeader, ImageContent, Topbar } from '../Modules'

const Doc29 = () => {
    return (
        <>
            <Topbar text="How to Remove Your Project from Netlify on Greta?" />
            <Creator tableOfContent={['How to Remove Your Project from Netlify on Greta?', 'Step 1: Create or Open Your Project', 'Step 2: Deploy the Project (if not already)', 'Step 3: Remove the Project from Netlify', 'Step 4: Confirm the Removal']}>
                <HeroHeader text="How to Remove Your Project from Netlify on Greta?" />
                <Heading1>
                    Step 1: Create or Open Your Project
                </Heading1>
                <Content1>
                    1. Log in to Greta
                </Content1>
                <Content1>
                    2. Create a new project or select an existing one from your history.
                </Content1>
                <Content1>
                    3. Make sure the project is in Preview Mode.
                </Content1>
                <ImageContent img={imageConfig.Doc29Image1} altText="Doc29Image1" />
                <Heading1>
                    Step 2: Deploy the Project (if not already)
                </Heading1>
                <Content1>
                    4. If the project is not yet deployed, click “Deploy”.
                </Content1>
                <Content1>
                    5. Wait until the deployment is complete.
                </Content1>
                <ImageContent img={imageConfig.Doc29Image2} altText="Doc29Image2" />
                <Heading1>
                    Step 3: Remove the Project from Netlify
                </Heading1>
                <Content1>
                    6. Once deployed, you’ll see a “Remove from Netlify” button at the top-right corner of the screen.
                </Content1>
                <Content1>
                    7. Click on “Remove from Netlify”.
                </Content1>
                <ImageContent img={imageConfig.Doc29Image3} altText="Doc29Image3" />
                <Heading1>
                    Step 4: Confirm the Removal
                </Heading1>
                <Content1>
                    8. A warning popup will appear asking if you want to undeploy the project.
                </Content1>
                <Content1>
                    9. Click on “Undeploy” to confirm.
                </Content1>
                <ImageContent img={imageConfig.Doc29Image4} altText="Doc29Image4" />
                <Content1>
                    <b>Done!</b>
                </Content1>
                <Content1>
                    10. Your project will now be automatically removed from Netlify.
                </Content1>
                <ImageContent img={imageConfig.Doc29Image5} altText="Doc29Image5" />
            </Creator>
        </>
    )
}

export default Doc29