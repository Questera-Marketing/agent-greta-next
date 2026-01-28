'use client';

import { imageConfig } from '../ImageConfig'
import { Content1, Creator, Heading1, Heading2, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules'

const Doc33 = () => {
    return (
        <>
            <Topbar text='How do I duplicate or clone an existing project?' />
            <Creator tableOfContent={['How do I duplicate or clone an existing project?', "What is Project Cloning?", 'Step-by-Step Guide:', 'When to Use Project Cloning:', 'Key Benefits:']}>
                <HeroHeader text='How do I duplicate or clone an existing project?' />
                <Content1>
                    <div className="w-full aspect-video rounded-xl overflow-hidden my-6 border border-[#27272A]">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/YFH6iLUSVhM?si=i-6yAo9rtEqVG6d3"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </Content1>
                <Heading1>
                    What is Project Cloning?
                </Heading1>
                <Content1>
                    Project cloning allows you to create an exact copy of an existing project. This is perfect when you want to reuse a project's structure, design, or functionality while making modifications without affecting your original work.
                </Content1>
                <Heading1>
                    Step-by-Step Guide:
                </Heading1>
                <Heading2>
                    1. Access Your Project History
                </Heading2>
                <ListContent
                    listData={[
                        "Log in to your Greta account",
                        `On the left-hand side panel, you'll see your Project History section`,
                        `This area lists all your previous and current projects`
                    ]}
                />
                <Heading2>
                    2. Select Project to Clone
                </Heading2>
                <ListContent
                    listData={[
                        `Browse through your project history`,
                        `Identify the project you want to duplicate`,
                        'Locate the three-dot menu (⋯) next to the project name',
                    ]}
                />
                <Heading2>
                    3. Initiate Cloning Process
                </Heading2>
                <ListContent
                    listData={[
                        `Click the three-dot menu to open options`,
                        `You'll see two options: Duplicate and Delete`,
                        'Select Duplicate to begin cloning',
                    ]}
                />
                <ImageContent img={imageConfig.Doc33Image1} altText='Doc33Image1' />

                <Heading2>
                    4. Completion and Access
                </Heading2>
                <ListContent
                    listData={[
                        `A new copy of your project is instantly created`,
                        'The cloned project automatically appears in your project history',
                        `You'll see the new project listed alongside your original`
                    ]}
                />
                <Heading2>
                    5. Work with Your Clone
                </Heading2>
                <ListContent
                    listData={[
                        `Open the cloned project by clicking on it`,
                        `Make any changes, edits, or customizations`,
                        `All modifications happen independently without affecting the original project`
                    ]}
                />
                <Heading1>
                    When to Use Project Cloning:
                </Heading1>
                <ListContent
                    listData={[
                        `Experiment with new features risk-free`,
                        `Use successful projects as templates for new work`,
                        `Test different design variations`,
                        `Create backups before major changes`
                    ]}
                />

                <Heading1>
                    Key Benefits:
                </Heading1>
                <ListContent
                    listData={[
                        `Saves time by reusing proven project structures`,
                        `Maintains original project integrity`,
                        `Enables safe experimentation`,
                        `Perfect for iterative design and development`,
                    ]}
                />
            </Creator>
        </>
    )
}

export default Doc33