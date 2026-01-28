'use client';

import { imageConfig } from '../ImageConfig'
import { Content1, Content2, Creator, Heading1, Heading2, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules'

const Doc46 = () => {
    return (
        <>
            <Topbar text='credits roll out and expiry policy' />
            <Creator tableOfContent={["credits roll out and expiry policy"]}>
                <HeroHeader text='credits roll out and expiry policy' />
                <Content1>
                    For detailed information about credit types, expiration periods, and usage policies, check our official documentation:
                </Content1>
                <Content1>
                    <a href="https://docs.questera.ai/greta/greta-credit-rollout-and-expiry-policy" target='_blank'>https://docs.questera.ai/greta/greta-credit-rollout-and-expiry-policy</a>
                </Content1>
            </Creator>
        </>
    )
}

export default Doc46