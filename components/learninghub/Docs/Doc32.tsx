'use client';

import { imageConfig } from '../ImageConfig'
import { Content1, Creator, Heading1, Heading2, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules'

const Doc32 = () => {
    return (
        <>
            <Topbar text='How do I rename or delete a project?' />
            <Creator tableOfContent={['How do I rename or delete a project?', 'Deleting a Project:']}>
                <HeroHeader text='How do I rename or delete a project?' />
                <Content1>
                    Renaming a Project:
                    <div className="w-full aspect-video rounded-xl overflow-hidden my-6 border border-[#27272A]">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/UEELsDFj-x4?si=JbXS0HQ-2R00mFzF"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </Content1>
                <Content1>
                    1. Navigate to your project dashboard
                    <br />
                    2. Locate the project you want to rename
                    <br />
                    3. Click the three-dot menu on the project card
                </Content1>
                <ImageContent img={imageConfig.Doc32Image1} altText='Doc32Image1' />
                <Content1>
                    4. Select "Rename" from the dropdown menu
                    <br />
                    5. Enter the new project name in the text field
                    <br />
                    6. Press Enter or click "Save" to confirm
                    <br />
                    7. The project card will immediately update with the new name
                </Content1>
                <ImageContent img={imageConfig.Doc32Image2} altText='Doc32Image2' />

                <Heading1>
                    Deleting a Project:
                </Heading1>
                <Content1>
                    1. From your dashboard, find the project to delete
                    <br />
                    2. Click the three-dot menu on the project card
                    <br />
                    3. Select "Delete" from the options
                </Content1>
                <ImageContent img={imageConfig.Doc32Image3} altText='Doc32Image3' />
                <Content1>
                    4. A confirmation dialog will appear asking you to confirm
                    <br />
                    5. Read the warning: "This action cannot be undone. All project data will be permanently lost."
                    <br />
                    6. Click "Confirm Delete" to proceed or "Cancel" to keep the project
                    <br />
                    7. The project will be immediately removed from your dashboard
                </Content1>
                <ImageContent img={imageConfig.Doc32Image4} altText='Doc32Image4' />
            </Creator>
        </>
    )
}

export default Doc32