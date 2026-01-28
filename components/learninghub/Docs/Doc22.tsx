'use client';

import { imageConfig } from '../ImageConfig'
import { Content1, Creator, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules'

const Doc22 = () => {
    return (
        <>
            <Topbar text="Are there specific actions or tasks that reward credits?" />
            <Creator>
                <HeroHeader text="Are there specific actions or tasks that reward credits?" />
                <Content1>
                    Greta allows users to earn free credits by completing specific tasks. These tasks help you get familiar with the platform while rewarding you with credits that can be used for various features.
                </Content1>
                <ImageContent img={imageConfig.Doc22Image1} altText="Doc22Image1" />
                <ListContent
                    listData={[
                        'Here are the four tasks that can earn you free credits:'
                    ]}
                />
                <ImageContent img={imageConfig.Doc22Image2} altText="Doc22Image2" />
                <ListContent
                    listData={{
                        'Complete Your Profile': 'Earn 10 credits by filling out your profile details.',
                        'Connect Your GitHub Account': "Link your GitHub account to Greta and get 10 credits instantly.",
                        'Deploy your website to netlify': 'Deploy your website to netlify and earn 10 credits as a reward.',
                        'Create 5 apps on greta': 'Successfully deploy 5 websites on greta and earn 50 credits.'
                    }}
                />
                <Content1>
                    To start earning credits, navigate to the Credits section at the bottom left of your screen and complete these tasks. If you need more credits beyond these rewards, you can purchase them by going to Settings &gt; Plans & Pricing and selecting a suitable credit package.
                </Content1>
                <ImageContent img={imageConfig.Doc22Image3} altText="Doc22Image3" />
            </Creator>
        </>
    )
}

export default Doc22