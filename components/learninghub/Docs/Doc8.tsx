'use client';

import { imageConfig } from '../ImageConfig'
import { Content1, Creator, Heading1, HeroHeader, ImageContent, Topbar } from '../Modules'

const Doc8 = () => {
    return (
        <>
            <Topbar text='How do you deploy your website with Greta?' />
            <Creator tableOfContent={['How do you deploy your website with Greta?', 'Step 1 : Building the Website', 'Step 2: Previewing and Editing', 'Step 3: Deploying the Website']}>
                <HeroHeader text='How do you deploy your website with Greta?' />
                <Heading1>
                    Step 1: Building the Website
                </Heading1>
                <Content1>
                    Start by entering a complete prompt on Greta’s landing page and clicking <strong>"Build"</strong>. Greta will generate the website in real-time, displaying the creation process along with the underlying code.
                </Content1>
                <ImageContent img={imageConfig.Doc8Image1} altText={'Doc8Image1'} />
                <Heading1>
                    Step 2: Previewing and Editing
                </Heading1>
                <Content1>
                    Once the website is fully generated, a <strong>live preview</strong> appears on the right side of the screen. You can review the design, make changes, and refine the website as needed.
                </Content1>
                <Heading1>
                    Step 3: Deploying the Website
                </Heading1>
                <Content1>
                    After finalizing the design, click the <strong>"Deploy"</strong> button. Greta will handle the hosting and configuration automatically, providing a <strong>live URL</strong> once deployment is complete. You can then access, share, or make further modifications to your website.
                </Content1>
                <ImageContent img={imageConfig.Doc8Image2} altText={'Doc8Image2'} />
                <ImageContent img={imageConfig.Doc8Image3} altText={'Doc8Image3'} />
            </Creator>
        </>
    )
}

export default Doc8