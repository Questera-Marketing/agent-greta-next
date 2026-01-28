'use client';

import { imageConfig } from '../ImageConfig'
import { Content1, Content2, Creator, Heading1, Heading2, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules'

const Doc35 = () => {
    return (
        <>
            <Topbar text='Open router BYOK' />
            <Creator tableOfContent={['Open router BYOK', 'How BYOK Works in Greta:', 'Key Benefits:','Usage Scenarios:','Important Notes:']}>
                <HeroHeader text='Open router BYOK' />
                <Content1>
                    BYOK (Bring Your Own Key) is a feature that allows you to connect your own API key from third-party providers like OpenRouter instead of relying solely on Greta's built-in credit system. This gives you more flexibility and control over the AI models you use and how you're billed for them.
                </Content1>
                <ImageContent img={imageConfig.Doc35Image1} altText='Doc35Image1' />
                <Heading1>
                    How BYOK Works in Greta:
                </Heading1>
                <Heading2>
                    Access Requirements:
                </Heading2>
                <ListContent
                    listData={[
                        "Enterprise Users: Get BYOK for FREE - no additional purchase required",
                        `Non-Enterprise Users: Can enable BYOK by purchasing the OpenRouter Add-on for $5`,
                    ]}
                />
                <ImageContent img={imageConfig.Doc35Image2} altText='Doc35Image2' />
                <Heading2>
                    Setup Process:
                </Heading2>
                <Content2>
                    1. Enable BYOK
                </Content2>
                <ListContent
                    listData={[
                        `For non-enterprise users: Purchase the OpenRouter Add-on first`,
                        <>Enterprise users can skip straight to setup</>,
                    ]}
                />
                <Content2>
                    2. Configure Your API Key
                </Content2>
                <ListContent
                    listData={[
                        `Go to Settings → Integrations`,
                        <>Find the OpenRouter section</>,
                        <>Enter your personal OpenRouter API key</>,
                        <>Save the configuration</>,
                    ]}
                />
                <ImageContent img={imageConfig.Doc35Image3} altText='Doc35Image3' />
                <Content2>
                    3. How It Works
                </Content2>
                <ListContent
                    listData={[
                        `Once configured, Greta routes all model requests through your OpenRouter key`,
                        <>All billing for model usage happens directly on your OpenRouter account</>,
                        <>You get access to ALL OpenRouter-supported models within Greta</>,
                    ]}
                />
                <Heading1>
                    Key Benefits:
                </Heading1>
                <Heading2>
                    Model Flexibility
                </Heading2>
                <ListContent
                    listData={[
                        <>Access to dozens of different AI models</>,
                        <>Choose models optimized for specific tasks</>,
                        <>Experiment with different model providers</>,
                        <>Stay current with the latest model releases</>,
                    ]}
                />
                <Heading2>
                    Billing Control
                </Heading2>
                <ListContent
                    listData={[
                        <>Direct billing through your OpenRouter account</>,
                        <>Transparent pricing per use</>,
                        <>No reliance on Greta's credit system for model costs</>,
                        <>Potential cost savings depending on usage patterns</>,
                    ]}
                />
                <Heading1>
                    Usage Scenarios:
                </Heading1>
                <ListContent
                    listData={[
                        <>Perfect for heavy users who want more billing flexibility</>,
                        <>Ideal for teams with existing OpenRouter accounts</>,
                        <>Great for developers who need specific model capabilities</>,
                        <>Excellent for cost-conscious users who want direct control over AI expenses</>,
                    ]}
                />
                <Heading1>
                    Important Notes:
                </Heading1>
                <ListContent
                    listData={[
                        <>You still need Greta credits for platform features and functionality</>,
                        <>BYOK only covers the AI model usage costs</>,
                        <>Your API key is securely stored and only used for your account</>,
                        <>You can switch back to Greta's default models at any time</>,
                    ]}
                />
                <Content1>
                    BYOK transforms Greta into an even more powerful platform by giving you complete control over which AI models you use and how you pay for them!
                </Content1>
            </Creator>
        </>
    )
}

export default Doc35