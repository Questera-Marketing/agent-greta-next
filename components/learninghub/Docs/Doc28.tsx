'use client';

import { Content1, Creator, Heading1, HeroHeader, ImageContent, Topbar } from '../Modules'
import { imageConfig } from '../ImageConfig'

const Doc28 = () => {
    return (
        <>
            <Topbar text='How to Delete Your Project on Greta?' />
            <Creator tableOfContent={['How to Delete Your Project on Greta?', 'Step 1: Open the Project You Want to Delete', 'Step 2: Click on the Delete Option', 'Step 3: Confirm Deletion']}>
                <HeroHeader text='How to Delete Your Project on Greta?' />
                <Heading1>
                    Step 1: Open the Project You Want to Delete
                </Heading1>
                <Content1>
                    1. Log in to Greta
                </Content1>
                <Content1>
                    2. If you want to delete your project, select and open your project from the sidebar.
                </Content1>
                <ImageContent img={imageConfig.Doc28Image1} altText='Doc28Image1' />
                <Heading1>
                    Step 2: Click on the Delete Option
                </Heading1>
                <Content1>
                    3. Once the project is open in Preview Mode, look at the top of the screen.
                </Content1>
                <Content1>
                    4. You’ll see a “Delete” button — click on it.
                </Content1>
                <ImageContent img={imageConfig.Doc28Image2} altText='Doc28Image2' />
                <Heading1>
                    Step 3: Confirm Deletion
                </Heading1>
                <Content1>
                    5. A warning message will appear saying:
                    <br />
                    “This action will permanently delete the project and cannot be undone.”.
                </Content1>
                <Content1>
                    6. Click on “Delete Project” to confirm.
                </Content1>
                <ImageContent img={imageConfig.Doc28Image3} altText='Doc28Image3' />
                <Content1>
                    <b>Done!</b>
                </Content1>
                <Content1>
                    7. Your project will now be permanently removed from your Greta history.
                </Content1>
                <ImageContent img={imageConfig.Doc28Image4} altText='Doc28Image4' />
            </Creator>
        </>
    )
}

export default Doc28