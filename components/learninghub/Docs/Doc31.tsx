'use client';

import { imageConfig } from '../ImageConfig'
import { Content1, Creator, Heading1, Heading2, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules'

const Doc31 = () => {
    return (
        <>
            <Topbar text='How do I organize my projects using folders?' />
            <Creator tableOfContent={['How do I organize my projects using folders?', 'Step-by-Step Guide:', 'Benefits of Using Folders:']}>
                <HeroHeader text='How do I organize my projects using folders?' />
                <Content1>
                    Project Folders are an organizational feature in Greta that helps you group and categorize your projects. This allows you to keep your workspace clutter-free and manage your work more efficiently, especially as you build more projects.
                </Content1>
                <Content1>
                    <div className="w-full aspect-video rounded-xl overflow-hidden my-6 border border-[#27272A]">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/r6cZ9WiXECU?si=paFOm2JlPMnhnxCA"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </Content1>
                <Heading1>
                    Step-by-Step Guide:
                </Heading1>
                <Heading2>
                    1. Access the Folders Section
                </Heading2>
                <ListContent
                    listData={[
                        "Open Greta and look at the left panel",
                        `Click on "Folders" in the navigation menu`
                    ]}
                />
                <ImageContent img={imageConfig.Doc31Image1} altText='Doc31Image1' />
                <Heading2>
                    2. Create a New Folder
                </Heading2>
                <ListContent
                    listData={[
                        `Click the "Create Folder" button`,
                        `Give your folder a descriptive name (e.g., "Client Projects", "Portfolio Sites", "Experiments")`,
                        'Click "Create" to confirm',
                        `You'll see a confirmation that the folder was created successfully`
                    ]}
                />
                <ImageContent img={imageConfig.Doc31Image2} altText='Doc31Image2' />
                <Heading2>
                    3. Move Projects to Folders
                </Heading2>
                <ListContent
                    listData={[
                        `Go to the "History" section below your chats`,
                        `Here you'll see all your existing projects listed`,
                        'Find the project you want to organize',
                        `Click the three dots (⋯) on the right side of the project entry`,
                        `Select "Move to Folder" from the dropdown menu`
                    ]}
                />
                <ImageContent img={imageConfig.Doc31Image3} altText='Doc31Image3' />

                <Heading2>
                    4. Choose Destination
                </Heading2>
                <Content1>
                    You'll see two options:
                </Content1>
                <ListContent
                    listData={[
                        `Select existing folder: Choose from folders you've already created`,
                        'Create new folder: Make a new folder directly from this menu',
                    ]}
                />
                <ListContent
                    listData={[
                        `Select the folder you created earlier`,
                        `The project will automatically be moved into that folder`
                    ]}
                />
                <ImageContent img={imageConfig.Doc31Image4} altText='Doc31Image4' />
                <Heading2>
                    5. Manage Your Organized Workspace
                </Heading2>
                <ListContent
                    listData={[
                        `You can move any number of projects into folders`,
                        `Create multiple folders for different categories (clients, project types, timelines)`,
                        `Access your folders anytime from the left panel`,
                        `Click on any folder to view only the projects inside it`
                    ]}
                />

                <Heading1>
                    Benefits of Using Folders:
                </Heading1>
                <ListContent
                    listData={[
                        `Reduces clutter on your main project screen`,
                        `Groups related projects together for easy access`,
                        `Improves workflow efficiency`,
                        `Makes it easier to find specific projects later`,
                        `Perfect for organizing by client, project type, or development stage`
                    ]}
                />
            </Creator>
        </>
    )
}

export default Doc31