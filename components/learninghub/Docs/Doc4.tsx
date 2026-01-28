'use client';

import React from 'react'
import { Content1, Creator, Heading1, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules'
import { imageConfig } from '../ImageConfig'

const Doc4 = () => {
    return (
        <>
            <Topbar text='How do you choose a template in greta?' />

            <Creator tableOfContent={['How do you choose a template in greta?', 'Step 1: Sign Up & Verify Your Account', 'Step 2: Select a pre-designed template', 'Step : 3 Preview the Template', 'Step 4: Customize the Website and Deployment']}>
                <HeroHeader text='How do you choose a template in greta?' />
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
                    Step 2: Select a pre-designed template
                </Heading1>

                <ListContent
                    listData={[
                        <>After logging in, you’ll be taken to the landing page which has different sections in it.</>,
                        <>In the center of the page,you can find a text field where you can enter your prompt to create a website. Here, you can start from scratch or choose from Greta’s <strong>pre-designed templates</strong> to match your needs.</>,
                    ]}
                />

                <ImageContent img={imageConfig.Doc4Image1} altText={'Doc4Image1'} />
                <Heading1>
                    Template Categories in Greta
                </Heading1>
                <Content1>
                    Greta offers templates tailored for different types of websites, such as:
                </Content1>
                <ListContent
                    listData={{
                        "Portfolio Websites": "Ideal for showcasing your work, resume, or creative projects.",
                        'Company Websites': 'Perfect for businesses looking for a professional online presence.',
                        'Landing Pages': 'Used for promotional or marketing campaigns.',
                        'Blogs and Personal Sites': 'Designed for writers, bloggers, and content creators.',
                        'E-commerce Templates': 'Suitable for online stores selling products or services.'
                    }}
                />
                <Content1>
                    And many more to come.
                </Content1>
                <Content1>
                    Each template comes with a predefined layout, typography, and color scheme that can be customized later.
                </Content1>

                <ImageContent img={imageConfig.Doc4Image2} altText={'Doc4Image2'} />

                <Heading1>
                    Step : 3 Preview the Template
                </Heading1>
                <ListContent
                    listData={[
                        <>Click on any template to open a <strong>real-time preview</strong>.</>,
                        <>This will give you a full view of the <strong>design, structure, and elements</strong> included in the template.</>
                    ]}
                />

                <ImageContent img={imageConfig.Doc4Image3} altText={'Doc4Image3'} />

                <Heading1>
                    Step 4: Customize the Website and Deployment
                </Heading1>

                <ListContent
                    listData={[
                        'After selecting a template, you can customize the website to your liking and needs. Modify text, images, layout, and colors to match your brand identity. You can also add or remove sections as required.',
                        'Greta  provides a range of advanced components to improve your website’s functionality and user experience.',
                        'Once Your customization is done and your website is ready, you can deploy it to make it live.',
                    ]}
                />

                <ImageContent img={imageConfig.Doc4Image4} altText={'Doc4Image4'} />
            </Creator>
        </>
    )
}

export default Doc4