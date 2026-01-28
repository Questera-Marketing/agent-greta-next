'use client';

import React from 'react'
import { Content1, Creator, Heading1, HeroHeader, ImageContent, Topbar } from '../Modules'
import { imageConfig } from '../ImageConfig'

const Doc24 = () => {
    return (
        <>
            <Topbar text='How can I add and customize the components on my website using Greta?' />
            <Creator tableOfContent={['How can I add and customize the components on my website using Greta?', 'Step 1: Select the Login Component', 'Step 2: Access Plgos to Edit the Login Page', 'Step 3: Locate the Login Campaign', 'Step 4: Edit and Save Your Login Page']}>
                <HeroHeader text='How can I add and customize the components on my website using Greta?' />
                <Content1>
                    Adding a  feature to your website with Greta is simple and customizable. Follow these four steps to integrate and edit the login page as per your needs:
                </Content1>
                <Heading1>
                    Step 1: Select the Login Component
                </Heading1>

                <ImageContent img={imageConfig.Doc24Image1} altText={'Doc24Image1'} />
                <Content1>
                    After prompting and building your website with Greta, you will see a list of suggested components above the prompt tab. Click on any component you want to integrate, for example clicking on login,  A login component will be added to your website automatically.
                </Content1>
                <ImageContent img={imageConfig.Doc24Image2} altText={'Doc24Image2'} />

                <Heading1>
                    Step 2: Access Plgos to Edit the Login Page
                </Heading1>

                <ImageContent img={imageConfig.Doc24Image3} altText={'Doc24Image3'} />

                <Content1>
                    If you want to customize the login page, you need to log in to <strong>PLGOS</strong>. Use the <strong>same credentials</strong> you used for Greta to sign in. Once logged in, you will be able to access and modify your login settings.
                </Content1>

                <Heading1>
                    Step 3: Locate the Login Campaign
                </Heading1>

                <ImageContent img={imageConfig.Doc24Image4} altText={'Doc24Image4'} />

                <Content1>
                    On the left side of the Plgos dashboard, click on <strong>"All Campaigns"</strong>. This will display a list of active campaigns, including the <strong>Login Campaign</strong> being used on your website.
                </Content1>

                <Heading1>
                    Step 4: Edit and Save Your Login Page
                </Heading1>

                <ImageContent img={imageConfig.Doc24Image5} altText={'Doc24Image5'} />

                <Content1>
                    Click on the <strong>theme</strong> to make changes according to your requirements. You can modify the design, text, and authentication settings as needed. Once you have customized the login page, save your changes, and they will be applied to your website instantly.
                </Content1>
            </Creator>
        </>
    )
}

export default Doc24