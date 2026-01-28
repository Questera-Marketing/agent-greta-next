'use client';

import { imageConfig } from '../ImageConfig'
import { Content1, Creator, Heading1, HeroHeader, ImageContent, Topbar } from '../Modules'

const Doc7 = () => {
    return (
        <>
            <Topbar text="How do you  preview your website before deployment?" />
            <Creator tableOfContent={['How do you  preview your website before deployment?', 'Step 1: Initiating the Build Process', 'Step 2: Previewing the Website', 'Step 3: Preview and Deployment']}>
                <HeroHeader text="How do you  preview your website before deployment?" />
                <Heading1>
                    Step 1: Initiating the Build Process
                </Heading1>
                <Content1>
                    After entering a complete prompt on the landing page and clicking "Build," Greta begins generating the website. During this process, a real-time progress page is displayed, showing the creation steps and the underlying code.
                </Content1>
                <Heading1>
                    Step 2: Previewing the Website
                </Heading1>
                <Content1>
                    Once the website is fully generated, a live preview appears on the right side of the screen. Users can review the design, layout, and functionality directly within this preview window.
                </Content1>
                <ImageContent img={imageConfig.Doc7Image1} altText={'Doc7Image1'} />
                <Heading1>
                    Step 3: Preview and Deployment
                </Heading1>
                <Content1>
                    The button to the right of the "Preview" option allows you to toggle between different screen sizes. Clicking on it will expand the preview to a larger screen, helping you see the full website layout. Clicking it again will return the preview to a smaller screen within the interface. This is useful for testing responsiveness and viewing how the website appears on different screen sizes.Once satisfied with the final version, they can proceed with deployment.
                </Content1>
                <ImageContent img={imageConfig.Doc7Image2} altText={'Doc7Image2'} />
            </Creator>
        </>
    )
}

export default Doc7