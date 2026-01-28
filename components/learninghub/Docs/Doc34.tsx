'use client';

import { imageConfig } from '../ImageConfig'
import { Content1, Creator, Heading1, Heading2, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules'

const Doc34 = () => {
    return (
        <>
            <Topbar text='What is the project rollback feature and how do I use it?' />
            <Creator tableOfContent={['What is the project rollback feature and how do I use it?', 'Step-by-Step Guide:', 'Important Notes:']}>
                <HeroHeader text='What is the project rollback feature and how do I use it?' />
                <Content1>
                    The project rollback feature allows you to revert your project to any previous version, acting as a safety net for your work. If recent changes caused issues or you simply want to return to an earlier state, rollback lets you restore your project to exactly how it was at any saved point in history.
                </Content1>
                <Heading1>
                    Step-by-Step Guide:
                </Heading1>
                <Heading2>
                    1. Identify Need for Rollback
                </Heading2>
                <ListContent
                    listData={[
                        "Open the project you want to revert",
                        `In the chat area, Greta will recognize when you might need to go back`,
                        `Look for the "Revert to Previous Version?" prompt`
                    ]}
                />
                <ImageContent img={imageConfig.Doc34Image1} altText='Doc34Image1' />
                <Heading2>
                    2. Initiate Rollback Process
                </Heading2>
                <ListContent
                    listData={[
                        `Click "Go Back to Previous Version"`,
                        <>A warning message will appear:
                            <br />
                            "Your current changes will be lost if you proceed. This action will restore the previous version of your work."
                        </>,
                    ]}
                />
                <Heading2>
                    3. Confirm Rollback Action
                </Heading2>
                <ListContent
                    listData={[
                        <>A confirmation dialog will appear with the message:
                            <br />
                            "This action will delete all messages after this point. These changes are permanent and cannot be undone. Are you sure you want to continue?"
                        </>,
                        <>
                            You have two options:
                            <br />
                            <ul>
                                <li>"Confirm Rollback" - Proceed with the restoration</li>
                                <li>"Cancel" - Keep your current version and continue working</li>
                            </ul>
                        </>
                    ]}
                />

                <Heading2>
                    4. Execute Rollback
                </Heading2>
                <ListContent
                    listData={[
                        `Click "Confirm Rollback" to proceed`,
                        'Greta will begin loading the previous version',
                        `You'll see a loading indicator during the process`
                    ]}
                />
                <ImageContent img={imageConfig.Doc34Image2} altText='Doc34Image2' />
                <Heading2>
                    5. Completion
                </Heading2>
                <ListContent
                    listData={[
                        `Once loading completes, your project reverts to the previous version`,
                        'All changes made after that point are permanently removed',
                        `Your chat history is truncated to the rollback point`,
                        `You can continue working from this restored version`
                    ]}
                />
                <Heading1>
                    Important Notes:
                </Heading1>
                <ListContent
                    listData={[
                        `Rollback is permanent and cannot be undone`,
                        `All messages and changes after the rollback point are lost`,
                        `Always ensure you want to proceed before confirming`,
                        `Consider cloning your project before major changes as a backup`
                    ]}
                />
            </Creator>
        </>
    )
}

export default Doc34