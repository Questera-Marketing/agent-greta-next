'use client';

import { imageConfig } from '../ImageConfig'
import { Content1, Creator, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules'

const Doc21 = () => {
    return (
        <>
            <Topbar text="Is there a free trial available, and what features are accessible during the trial period?" />
            <Creator>
                <HeroHeader text="Is there a free trial available, and what features are accessible during the trial period?" />
                <ImageContent img={imageConfig.Doc21Image1} altText="Doc21Image1" />
                <Content1>
                    Yes, Greta offers a <strong>free trial</strong> through the <strong>Starter Plan</strong>, which is available to all users at no cost. During this trial, you receive <strong>50 credits per month</strong>, allowing you to explore Greta’s features with limited access.
                </Content1>
                <Content1>
                    With the Starter Plan, you can:
                </Content1>
                <ListContent
                    listData={[
                        'Create and test projects using Greta’s tools.',
                        'Access basic features to understand how the platform works.',
                        'Work within the credit limit, which may restrict advanced functionalities.'
                    ]}
                />
                <Content1>
                    If you require more credits or additional features, you can upgrade to a <strong>paid plan</strong> at any time through the <strong>Plans & Pricing</strong> section in <strong>Settings</strong>.
                </Content1>
            </Creator>
        </>
    )
}

export default Doc21