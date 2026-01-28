'use client';

import { imageConfig } from '../ImageConfig'
import { Content1, Creator, Heading1, HeroHeader, ImageContent, Topbar } from '../Modules'

const Doc23 = () => {
    return (
        <>
            <Topbar text='How can I integrate Stripe payments into my website using Greta?' />
            <Creator tableOfContent={['How can I integrate Stripe payments into my website using Greta?', 'Step 1: Select Stripe as a Payment Component', 'Step 2: Enter Your Secret Key', 'Step 3: Add Payment Plans', 'Step 4: Preview and Launch Your Website']} >
                <HeroHeader text='How can I integrate Stripe payments into my website using Greta?' />
                <Content1>
                    Setting up Stripe on your website with Greta is simple and seamless. Follow these four steps to enable payments and customize your payment plans:
                </Content1>
                <Heading1>
                    Step 1: Select Stripe as a Payment Component
                </Heading1>
                <ImageContent img={imageConfig.Doc23Image1} altText={'Doc23Image1'} />
                <Content1>
                    After building your website with Greta, you will see a list of suggested components to enhance your site. Select <strong>Stripe</strong> from the list to enable online payments. A tab will open asking for your <strong>Secret Key</strong>, which is required to connect your Stripe account.
                </Content1>

                <Heading1>
                    Step 2: Enter Your Secret Key
                </Heading1>

                <ImageContent img={imageConfig.Doc23Image2} altText={'Doc23Image2'} />

                <Content1>
                    To proceed, you need to enter your <strong>Stripe Secret Key</strong>. If you don’t have it, click on <strong>"How to get it"</strong> within the same tab to find instructions on retrieving it from your Stripe account. Once you enter the key, Stripe integration will be activated on your website.
                </Content1>

                <Heading1>
                    Step 3: Add Payment Plans
                </Heading1>

                <ImageContent img={imageConfig.Doc23Image3} altText={'Doc23Image3'} />

                <Content1>
                    To configure payments, click <strong>"Add"</strong> on the bottom of the page. You can now set up different payment options by entering details such as the <strong>plan name, amount, currency, and payment type</strong>. If you're offering a <strong>subscription-based plan</strong>, select whether it should be billed <strong>monthly or yearly</strong>. After entering these details, click <strong>"Submit"</strong> to save your payment plans.
                </Content1>

                <Heading1>
                    Step 4: Preview and Launch Your Website
                </Heading1>

                <ImageContent img={imageConfig.Doc23Image4} altText={'Doc23Image4'} />

                <Content1>
                    Once your payment setup is complete, your website will automatically reload. You can now preview how the payment options appear on your site to ensure everything is working correctly. With Stripe successfully integrated, your website is ready to accept secure online payments.
                </Content1>
            </Creator>
        </>
    )
}

export default Doc23