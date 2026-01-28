'use client';

import { imageConfig } from '../ImageConfig'
import { Creator, Heading1, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules'

const Doc17 = () => {
    return (
        <>
            <Topbar text="What should you do if your website fails to deploy?" />
            <Creator>
                <HeroHeader text="What should you do if your website fails to deploy?" />
                <ListContent
                    listData={[
                        <>If your website fails to deploy, the quickest solution is to <strong>re-deploy or refresh</strong> the process. Sometimes, deployment issues occur due to temporary glitches, network delays, or minor build errors.</>
                    ]}
                />
                <Heading1>
                    Steps to Fix Deployment Issues:
                </Heading1>
                <ListContent
                    listData={{
                        'Refresh the Page': "A simple refresh can resolve temporary errors in the deployment dashboard.",
                        'Re-Deploy': <>Click the <strong>"Deploy"</strong> button again to restart the process. This can fix issues.</>
                    }}
                />
                <ImageContent img={imageConfig.Doc17Image1} altText="Doc17Image1" />
            </Creator>
        </>
    )
}

export default Doc17