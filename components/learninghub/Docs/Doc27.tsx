'use client';

import { Content1, Creator, Heading1, HeroHeader, ImageContent, Topbar } from '../Modules'
import { imageConfig } from '../ImageConfig'

const Doc27 = () => {
    return (
        <>
            <Topbar text="How to Change Project Name on Greta?" />
            <Creator
                tableOfContent={[
                    'How to Change Project Name on Greta?',
                    'Step 1: Create or Open Your Project',
                    'Step 2: Find the Edit Icon',
                    'Step 3: Rename Your Project'
                ]}
            >
                <HeroHeader text='How to Change Project Name on Greta?' />
                <Heading1>
                    Step 1: Create or Open Your Project
                </Heading1>
                <Content1>
                    1. Log in to Greta
                </Content1>
                <Content1>
                    2. Create a new project or open an existing one from the history
                </Content1>
                <ImageContent img={imageConfig.Doc27Image1} altText='Doc27Image1' />
                <Heading1>
                    Step 2: Find the Edit Icon
                </Heading1>
                <Content1>
                    3. At the top-right corner of the screen, next to your project name, you'll see a pencil icon 🖉 (edit button).
                </Content1>
                <Content1>
                    4. Click on this edit icon.
                </Content1>
                <ImageContent img={imageConfig.Doc27Image2} altText='Doc27Image2' />
                <Heading1>
                    Step 3: Rename Your Project
                </Heading1>
                <Content1>
                    5. Type your new desired project name in the field.
                </Content1>
                <Content1>
                    6. Click on “Rename Project”.
                </Content1>
                <ImageContent img={imageConfig.Doc27Image3} altText='Doc27Image3' />
                <Content1>
                    <b>
                        Done!
                    </b>
                </Content1>
                <Content1>
                    7. Your project name is now successfully updated.
                </Content1>
                <ImageContent img={imageConfig.Doc27Image4} altText='Doc27Image4' />
            </Creator>
        </>
    )
}

export default Doc27