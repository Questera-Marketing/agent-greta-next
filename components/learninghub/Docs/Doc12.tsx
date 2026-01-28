'use client';

import { Content2 } from '../../Blogs/components/Module'
import { imageConfig } from '../ImageConfig'
import { Content1, Creator, Heading1, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules'

const Doc12 = () => {
    return (
        <>
            <Topbar text='How to Integrate Supabase with Your Greta Project' />
            <Creator
                tableOfContent={[
                    'How to Integrate Supabase with Your Greta Project',
                    'Step 1: Create a Supabase Account',
                    'Step 2: Log in to Greta',
                    'Step 3: Start Supabase Integration',
                    'Step 4: Sign In to Supabase',
                    'Step 5: Choose Your Supabase Organization',
                ]}
            >
                <HeroHeader text='How to Integrate Supabase with Your Greta Project' />
                <Content1>
                    Follow these steps to seamlessly connect your Supabase account with any project in Greta.
                </Content1>
                
                <Heading1>
                    Step 1: Create a Supabase Account
                </Heading1>
                <Content1>
                    If you don't already have a Supabase account, follow these steps:
                </Content1>
                <Content1>
                    1. Go to <a href="https://supabase.com" target='_blank'>https://supabase.com</a>
                </Content1>
                <Content1>
                    2. Click <b>"Start your project"</b>.
                </Content1>
                <ImageContent img={imageConfig.Doc12Image1} altText='Doc12Image1' />
                <Content1 style={{ marginBottom: "24px" }}></Content1>
                <Content1>
                    3. You can <b>sign up</b> using either:
                    <div style={{ marginLeft: "20px", marginTop: "18px" }}>
                        <p style={{ marginBottom: "8px" }}><b>GitHub</b>, or</p>
                        <p style={{ marginBottom: "8px" }}><b>Email and Password</b>:</p>
                        <div style={{ marginLeft: "16px", marginTop: "14px" }}>
                            <p style={{ marginBottom: "4px" }}>- Enter your email and desired password.</p>
                            <p style={{ marginBottom: "4px" }}>- Click on the confirmation link sent to your email to verify your account.</p>
                        </div>
                    </div>
                </Content1>
                <ImageContent img={imageConfig.Doc12Image2} altText='Doc12Image2' />
                <Content1 style={{ marginBottom: "32px" }}></Content1>

                <Heading1>
                    Step 2: Log in to Greta
                </Heading1>
                <Content1>
                    1. Go to Greta
                </Content1>
                <Content1>
                    2. <b>Sign In</b> or <b>Sign Up</b> using your credentials.
                </Content1>
                <Content1>
                    3. Once inside the dashboard, either:
                    <div style={{ marginLeft: "20px", marginTop: "18px" }}>
                        <p style={{ marginBottom: "6px" }}>Create a <b>new project</b>, or</p>
                        <p style={{ marginBottom: "6px" }}>Select an existing one you want to connect with Supabase.</p>
                    </div>
                </Content1>
                <ImageContent img={imageConfig.Doc12Image3} altText='Doc12Image3' />
                <Content1 style={{ marginBottom: "32px" }}></Content1>

                <Heading1>
                    Step 3: Start Supabase Integration
                </Heading1>
                <Content1>
                    There are two ways you can access the Supabase integration:
                </Content1>
                <Content1>
                    <b>Option A: From Project Preview Mode</b>
                </Content1>
                <Content1 style={{ marginLeft: "16px", marginTop: "18px", marginBottom: "16px" }}>
                    <Content1>
                        1. Open your project in <b>Preview Mode</b>.
                    </Content1>
                    <Content1>
                        2. Go to the <b>top-right corner</b>, click the <b>"Supabase"</b> icon.
                    </Content1>
                    <Content1>
                        3. Click <b>"Connect Supabase."</b>
                    </Content1>
                </Content1>
                <ImageContent img={imageConfig.Doc12Image4} altText='Doc12Image4' />
                <Content1 style={{ marginBottom: "24px" }}></Content1>

                <Content1>
                    <b>Option B: From Settings</b>
                </Content1>
                <Content1 style={{ marginLeft: "16px", marginTop: "18px", marginBottom: "16px" }}>
                    <Content1>
                        1. Inside Greta, go to the <b>bottom-left corner</b> and click on <b>"Settings."</b>
                    </Content1>
                    <ImageContent img={imageConfig.Doc12Image5} altText='Doc12Image5' />
                    <Content1 style={{ marginBottom: "16px" }}></Content1>
                    <Content1>
                        2. Select the <b>"Integrations"</b> tab.
                    </Content1>
                    <Content1>
                        3. Find the <b>"Supabase Integration"</b> section.
                    </Content1>
                    <Content1>
                        4. Click <b>"Connect"</b>.
                    </Content1>
                </Content1>
                <ImageContent img={imageConfig.Doc12Image6} altText='Doc12Image6' />
                <Content1 style={{ marginBottom: "32px" }}></Content1>

                <Heading1>
                    Step 4: Sign In to Supabase
                </Heading1>
                <Content1>
                    1. A popup will appear asking for your Supabase login credentials.
                </Content1>
                <Content1>
                    2. Enter your <b>Supabase email and password</b>, then click <b>"Sign In."</b>
                </Content1>
                <ImageContent img={imageConfig.Doc12Image7} altText='Doc12Image7' />
                <Content1 style={{ marginBottom: "16px" }}></Content1>
                <Content1>
                    3. A second popup will appear — click <b>"Authorize Greta"</b> to grant access.
                </Content1>
                <ImageContent img={imageConfig.Doc12Image8} altText='Doc12Image8' />
                <Content1 style={{ marginBottom: "32px" }}></Content1>

                <Heading1>
                    Step 5: Choose Your Supabase Organization
                </Heading1>
                <Content1>
                    1. After authorization, Greta will show your Supabase organization email.
                </Content1>
                <ImageContent img={imageConfig.Doc12Image9} altText='Doc12Image9' />
                <Content1 style={{ marginBottom: "16px" }}></Content1>
                <Content1>
                    2. Click on your <b>organization email</b>.
                </Content1>
                <ImageContent img={imageConfig.Doc12Image10} altText='Doc12Image10' />
                <Content1 style={{ marginBottom: "16px" }}></Content1>
                <Content1>
                    3. A confirmation popup will appear — click <b>"Connect."</b>
                </Content1>
                <ImageContent img={imageConfig.Doc12Image11} altText='Doc12Image11' />
                <Content1 style={{ marginBottom: "32px" }}></Content1>

                <Content1>
                    <b>Done!</b>
                </Content1>
                <Content1>
                    Your selected Greta project is now successfully connected to Supabase.
                </Content1>
            </Creator>
        </>
    )
}

export default Doc12