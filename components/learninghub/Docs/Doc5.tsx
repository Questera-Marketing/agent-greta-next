'use client';

import React from 'react'
import { Creator, Heading1, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules';
import { imageConfig } from '../ImageConfig';

const Doc5 = () => {
    return (
        <>
            <Topbar text='How can you customize the design and layout of your website?' />
            <Creator tableOfContent={['How can you customize the design and layout of your website?', 'Step 1: Define Your Website’s Design & Layout', 'Step 2: Add & Customize Components', 'Step 3: Optimize for Usability & Experience', 'Step 4: Preview & Deploy']}>
                <HeroHeader text='How can you customize the design and layout of your website?' />
                <Heading1>
                    Step 1: Define Your Website’s Design & Layout
                </Heading1>
                <ListContent
                    listData={[
                        'On the landing page, provide a detailed prompt describing how you want your website to look and function.',
                        'Ensure your prompt includes specific design preferences, such as color schemes, typography, layout structure, and any interactive elements.'
                    ]}
                />
                <ImageContent img={imageConfig.Doc5Image1} altText={'Doc5Image1'} />
                <Heading1>
                    Step 2: Add & Customize Components
                </Heading1>
                <ListContent
                    listData={[
                        'You can keep prompting with greta to further make customizations in the website and get your desired look and features on your website.',
                        'You can use the components provided by Questera to enhance your website’s layout, functionality and design.Customize each component according to your preferences to align with your brand and user needs.'
                    ]}
                />
                <ImageContent img={imageConfig.Doc5Image2} altText={'Doc5Image2'} />
                <ImageContent img={imageConfig.Doc5Image3} altText={'Doc5Image3'} />
                <Heading1>Step 3: Optimize for Usability & Experience</Heading1>
                <ListContent
                    listData={[
                        'Refine the design by adjusting layouts, spacing, and visual elements for a seamless user experience.',
                        'Ensure responsiveness across different devices for better accessibility.'
                    ]}
                />
                <Heading1>Step 4: Preview & Deploy</Heading1>
                <ListContent
                    listData={[
                        'Once satisfied with the customization, preview your website to check for any refinements needed.',
                        'After finalizing the design, proceed with deployment to make your website live.'
                    ]}
                />
            </Creator>
        </>
    )
}

export default Doc5;