'use client';

import { imageConfig } from '../ImageConfig'
import { Content1, Creator, Heading1, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules'

const Doc13 = () => {
    return (
        <>
            <Topbar text='How to integrate Netlify with my Greta project ?' />
            <Creator
                tableOfContent={[
                    'How to integrate Netlify with my Greta project ?',
                    'Step 1: Create & Deploy Your Greta Website',
                    'Step 2: Claim the Site via Netlify',
                    'Step 3: Add a Custom Domain',
                    'Step 4: Configure DNS Settings',
                    'Step 5: Verify and Finalize'
                ]}
            >
                <HeroHeader text='How to integrate Netlify with my Greta project ?' />
                <Heading1>
                    Step 1: Create & Deploy Your Greta Website
                </Heading1>
                <Content1>
                    1. Go to Greta and <b>create your website</b>.
                </Content1>
                <Content1>
                    2. Once you're done, click the <b>“Deploy”</b> button.
                </Content1>
                <Content1>
                    3. Greta will now build and deploy your site.
                </Content1>
                <ImageContent img={imageConfig.Doc13Image1} altText='Doc13Image1' />
                <Heading1>
                    Step 2: Claim the Site via Netlify
                </Heading1>
                <Content1>
                    4. After deployment, you’ll see a <b>“Claim”</b> button on the top-right.
                </Content1>
                <ImageContent img={imageConfig.Doc13Image2} altText='Doc13Image2' />
                <Content1>
                    5. Click on <b>“Claim Site Now”</b> – this will redirect you to Netlify.
                </Content1>
                <Content1>
                    6. On Netlify, click <b>“Claim App Now”</b> to take ownership of the deployed site.
                </Content1>
                <ImageContent img={imageConfig.Doc13Image3} altText='Doc13Image3' />
                <Heading1>
                    Step 3: Add a Custom Domain
                </Heading1>
                <Content1>
                    7. On Netlify, go to the <b>“Domain Management”</b> section.
                </Content1>
                <ImageContent img={imageConfig.Doc13Image4} altText='Doc13Image4' />
                <Content1>
                    8. Click <b>“Add a domain”</b> → then choose <b>“Add a domain you already own”</b>.
                </Content1>
                <ImageContent img={imageConfig.Doc13Image5} altText='Doc13Image5' />
                <Content1>
                    9. Enter your <b>custom domain</b> (e.g., yourdomain.com) or a <b>subdomain</b> (e.g., app.yourdomain.com).
                </Content1>
                <ImageContent img={imageConfig.Doc13Image6} altText='Doc13Image6' />
                <Heading1>
                    Step 4: Configure DNS Settings
                </Heading1>
                <Content1>
                    10. Once you add your domain, Netlify will show you two key pieces of info:
                </Content1>
                <ListContent
                    listData={[
                        <b>Host</b>,
                        <b>Value</b>
                    ]}
                />
                <ImageContent img={imageConfig.Doc13Image7} altText='Doc13Image7' />
                <Content1>
                    11. Copy these values and <b>go to your DNS provider</b> (e.g., GoDaddy, Namecheap, Cloudflare).
                </Content1>
                <Content1>
                    12. In your DNS provider's dashboard
                </Content1>
                <ListContent
                    listData={[
                        <>Add a <b>CNAME record</b> using the <b>Host/Name</b> and <b>Value/Target</b> Netlify provided.</>
                    ]}
                />
                <Content1>
                    13. Save the changes
                </Content1>
                <ImageContent img={imageConfig.Doc13Image8} altText='Doc13Image8' />
                <Heading1>
                    Step 5: Verify and Finalize
                </Heading1>
                <Content1>
                    14. Go back to Netlify and click <b>“Verify”</b> or <b>“Refresh”</b>.
                </Content1>
                <ImageContent img={imageConfig.Doc13Image9} altText='Doc13Image9' />
                <Content1>
                    15. Once verified, your Greta website will now be <b>live on your own custom domain</b>.
                </Content1>
            </Creator>
        </>
    )
}

export default Doc13