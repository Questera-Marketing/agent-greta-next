'use client';

import { imageConfig } from '../ImageConfig'
import { Content1, Creator, HeroHeader, ImageContent, Topbar } from '../Modules'

const Doc20 = () => {
    return (
        <>
            <Topbar text='What are the different subscription plans offered by Greta?' />
            <Creator>
                <HeroHeader text='What are the different subscription plans offered by Greta?' />
                <Content1>
                    You can view Greta’s subscription plans by navigating to <strong>Settings</strong> and selecting the <strong>Pricing & Plans</strong> tab.
                </Content1>
                <ImageContent img={imageConfig.Doc20Image1} altText={'Doc20Image1'} />
                <Content1>
                    <ul className='list-disc ml-6'>
                        <li className='mb-2'>
                            Greta offers <strong>four subscription plans</strong> to suit different user needs. Each plan provides a specific number of credits per month, which can be used to access Greta’s features. Below is a detailed breakdown:
                        </li>
                        <ul className='ml-6' style={{listStyleType: 'circle'}}>
                            <li>
                                The <strong>Starter Plan</strong> is free and provides 50 credits per month, making it ideal for hobbyists or users exploring Greta’s features.
                            </li>
                            <li>
                                The <strong>Growth Plan</strong> costs $20 and includes 250 credits per month, offering greater flexibility and functionality.
                            </li>
                            <li>
                                The <strong>Scale Plan</strong> at $50, which provides 750 credits per month  and is labeled as the most popular choice for users needing a higher volume of credits.
                            </li>
                            <li>
                                The <strong>Enterprise Plan</strong> at $200 grants 3000 credits per month, ensuring maximum scalability and access to advanced support.
                            </li>
                        </ul>
                    </ul>
                </Content1>
            </Creator>
        </>
    )
}

export default Doc20