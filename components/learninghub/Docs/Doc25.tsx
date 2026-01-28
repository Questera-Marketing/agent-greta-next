'use client';

import React from 'react'
import { Content1, Creator, Heading1, HeroHeader, ImageContent, Topbar } from '../Modules'
import { imageConfig } from '../ImageConfig'

const Doc25 = () => {
    return (
        <>
            <Topbar text='How can I add a help hub and customize the components on my website using Greta?' />
            <Creator tableOfContent={['How can I add a help hub and customize the components on my website using Greta?', 'Step 1: Select the Help Hub Component', 'Step 2: Access Plgos to Edit the Help Hub Page', 'Step 3: Navigate to "All Campaigns" in Plgos', 'Step 4: Customize the Help Hub Components']}>
                <HeroHeader text='How can I add a help hub and customize the components on my website using Greta?' />
                <Content1>
                Find out how to add and customize a help hub on your website using Greta’s authentication features, follow these four steps:
                </Content1>
                <Heading1>
                    Step 1: Select the Help Hub Component
                </Heading1>
                <Content1>
                    <ol className='list-decimal ml-6'>
                        <li>After setting up your website with <b>Greta</b>, you’ll see a list of <b>suggested components</b> above the prompt tab.</li>
                        <li>Look for the <b>Help Hub Component</b> and <b>click on</b> it to integrate it into your website.</li>
                        <li>Once selected, <b>Greta will automatically add the Help Hub</b> to your site. This feature allows your visitors to access FAQs, chat support, updates, and other important resources.</li>
                    </ol>
                </Content1>
                <ImageContent img={imageConfig.Doc25Image1} altText={'Doc25Image1'} />

                <Heading1>
                    Step 2: Access Plgos to Edit the Help Hub Page
                </Heading1>

                <Content1>
                    <ol className='list-decimal ml-6'>
                        <li>To customize the <b>Help Hub</b>, you need to <b>log in to Plgos</b>.</li>
                        <li>Use the <b>same login credentials</b> that you used for Greta.</li>
                        <li>Once logged in, you’ll have full control over your <b>Help Hub settings</b>.</li>
                    </ol>
                </Content1>

                <ImageContent img={imageConfig.Doc24Image3} altText={'Doc24Image3'} />

                <Heading1>
                    Step 3: Navigate to "All Campaigns" in Plgos
                </Heading1>

                <Content1>
                   <ol className='list-decimal ml-6'>
                    <li>On the <b>left side of the Plgos dashboard</b>, click on <b>"All Campaigns"</b>.</li>
                    <li>This will show a list of all active campaigns, including the <b>Help Hub campaign</b> running on your website.</li>
                    <li>Click on the <b>Help Hub campaign</b> to start editing.</li>
                   </ol>
                </Content1>

                <ImageContent img={imageConfig.Doc25Image2} altText={'Doc25Image2'} />

                <Heading1>
                    Step 4: Customize the Help Hub Components
                </Heading1>

                

                <Content1>
                    <ol className='list-decimal ml-6'>
                        <li>
                            <b>Update the FAQ Page –</b> Add, remove, or edit frequently asked questions to provide accurate answers.
                            <ImageContent img={imageConfig.Doc25Image3} altText={'Doc25Image3'} />
                        </li>
                        <br />
                        <li>
                            <b>Manage Updates & Tasks –</b> Share important announcements, product updates, and to-do lists.
                            <ImageContent img={imageConfig.Doc25Image4} altText={'Doc25Image4'} />
                            <ImageContent img={imageConfig.Doc25Image5} altText={'Doc25Image5'} />
                        </li>
                        <br />
                        <li>
                            <b>Edit the Chatbot Home Page –</b> Modify the chatbot’s welcome message, responses, and tone.
                            <ImageContent img={imageConfig.Doc25Image6} altText={'Doc25Image6'} />
                        </li>
                        <br />
                        <li>
                            <b>Add Documents to the Knowledge Base –</b> Upload helpful documents so the AI chatbot can <b>give more precise and accurate answers</b> to users.
                            <ImageContent img={imageConfig.Doc25Image7} altText={'Doc25Image7'} />
                            <ImageContent img={imageConfig.Doc25Image8} altText={'Doc25Image8'} />
                        </li>
                    </ol>
                </Content1>
            </Creator>
        </>
    )
}

export default Doc25