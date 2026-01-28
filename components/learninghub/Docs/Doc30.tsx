'use client';

import { imageConfig } from '../ImageConfig'
import { Content1, Creator, Heading1, HeroHeader, ImageContent, Topbar } from '../Modules'

const Doc30 = () => {
    return (
        <>
            <Topbar text='How to integrate Supabase with your desired project?' />
            <Creator tableOfContent={['How to integrate Supabase with your desired project?', 'Step 1: Create a Supabase Account', 'Step 2: Create a Project on Greta', 'Step 3: Start Supabase Integration', 'Step 4: Sign In to Supabase', 'Step 5: Choose Your Supabase Organization']}>
                <HeroHeader text='How to integrate Supabase with your desired project?' />
                <Heading1>
                    Step 1: Create a Supabase Account
                </Heading1>
                <Content1>
                    1. Go to <a href="https://supabase.com" target='_blank'>Supabase</a>.
                </Content1>
                <Content1>
                    2. If you don't have an account  click on Don't have an account? <a href="https://supabase.com/dashboard/sign-up?returnTo=%2Forganizations" target='_blank'>Sign Up Now</a>
                </Content1>
                <ImageContent img={imageConfig.Doc30Image1} altText='Doc30Image1' />
                <Content1>
                    3. Sign up using either:
                    <div style={{ marginLeft: "12px" }}>
                        <p><b>GitHub</b></p>
                        <p>
                            <b>
                                OR
                            </b>
                        </p>
                        <p>
                            <b>Email and Password</b>
                        </p>
                        Enter your details, submit, and confirm your email via the link sent by Supabase.
                    </div>
                </Content1>
                <ImageContent img={imageConfig.Doc30Image2} altText='Doc30Image2' />
                <Heading1>
                    Step 2: Create a Project on Greta
                </Heading1>
                <Content1>
                    4. Log in to Greta.
                </Content1>
                <Content1>
                    5. <b>Create a new project</b> you wish to connect with Supabase.
                </Content1>
                <ImageContent img={imageConfig.Doc30Image3} altText='Doc30Image3' />
                <Heading1>
                    Step 3: Start Supabase Integration
                </Heading1>
                <Content1>
                    6. Once the project is open in <b>Preview Mode</b>, go to the <b>top-right corner</b>.
                </Content1>
                <Content1>
                    7. Click on the <b>“Supabase”</b> option → then click <b>“Connect Supabase”</b>.
                </Content1>
                <ImageContent img={imageConfig.Doc30Image4} altText='Doc30Image4' />
                <Heading1>
                    Step 4: Sign In to Supabase
                </Heading1>
                <Content1>
                    8. A popup will appear asking for your <b>Supabase login</b>.
                </Content1>
                <Content1>
                    9. Enter your <b>Supabase email and password</b>, then click <b>“Sign In”</b>.
                </Content1>
                <ImageContent img={imageConfig.Doc30Image5} altText='Doc30Image5' />
                <Content1>
                    10. A second popup will appear asking for authorization — click <b>“Authorize Greta”</b>.
                </Content1>
                <ImageContent img={imageConfig.Doc30Image6} altText='Doc30Image6' />
                <Heading1>
                    Step 5: Choose Your Supabase Organization
                </Heading1>
                <Content1>
                    11. Once authorized, Greta will display your <b>Supabase organization email</b>.
                </Content1>
                <ImageContent img={imageConfig.Doc30Image7} altText='Doc30Image7' />
                <Content1>
                    12. Click on your email — another popup will appear.
                </Content1>
                <Content1>
                    13. Click <b>“Connect”</b>.
                </Content1>
                <ImageContent img={imageConfig.Doc30Image8} altText='Doc30Image8' />
                <Content1>
                    <b>Done!</b>
                </Content1>
                <Content1>
                    14. Your selected Greta project is now <b>successfully connected to Supabase</b>.
                    <br />
                    You can now use Supabase for <b>auth, data syncing, and more</b>.
                </Content1>
                <ImageContent img={imageConfig.Doc30Image9} altText='Doc30Image9' />
            </Creator>
        </>
    )
}

export default Doc30