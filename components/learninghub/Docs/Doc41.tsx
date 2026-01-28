'use client';

import { imageConfig } from '../ImageConfig'
import { Content1, Content2, Creator, Heading1, Heading2, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules'

const Doc41 = () => {
    return (
        <>
            <Topbar text='How do I select specific files to commit to GitHub?' />
            <Creator>
                <HeroHeader text='How do I select specific files to commit to GitHub?' />
                <ImageContent img={imageConfig.Doc41Image1} altText='Doc41Image1' />
                <Heading2>
                    To select specific files to commit to GitHub:
                </Heading2>
                <ListContent
                    listData={[
                        `Click Project Settings on the right side`,
                        <>
                            Go to the Integrations tab
                        </>,
                        `Check if GitHub is connected to your project`,
                        `Click Push the latest code`,
                        `You'll see "Select files to push" - choose specific files or "Select all"`,
                        `Click Push to commit to GitHub`
                    ]}
                    listType='ol'
                />
                <Content1>
                    It's that simple and easy!
                </Content1>
            </Creator>
        </>
    )
}

export default Doc41