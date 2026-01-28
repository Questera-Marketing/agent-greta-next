'use client';

import { imageConfig } from '../ImageConfig'
import { Content1, Creator, Heading1, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules'

const Doc16 = () => {
    return (
        <>
            <Topbar text="How do you manage multiple projects within Greta?" />
            <Creator tableOfContent={['How do you manage multiple projects within Greta?', 'Create and Switch Projects', 'Keep Your Work Organized', 'Find Your Projects Anytime']}>
                <HeroHeader text="How do you manage multiple projects within Greta?" />
                <Content1>
                    Greta makes it easy to manage multiple projects efficiently. Here’s how you can do it:
                </Content1>
                <ImageContent img={imageConfig.Doc16Image1} altText="Doc16Image1" />
                <Heading1>
                    Create and Switch Projects
                </Heading1>
                <ListContent
                    listData={[
                        'You can create separate projects. Switching between projects is simple, allowing you to focus on what’s important at the moment.'
                    ]}
                />
                <Heading1>
                    Keep Your Work Organized
                </Heading1>
                <ListContent
                    listData={[
                        'Each project has its own set of documents, tasks, and updates.',
                        'This helps you manage different workflows without any confusion.'
                    ]}
                />
                <Heading1>
                    Find Your Projects Anytime
                </Heading1>
                <ListContent
                    listData={[
                        <>All the projects you create will be saved in the <strong>History</strong> section.</>,
                        <>You can easily revisit, edit, and continue working on them whenever needed.</>
                    ]}
                />
            </Creator>
        </>
    )
}

export default Doc16