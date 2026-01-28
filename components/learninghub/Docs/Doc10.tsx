'use client';

import Link from 'next/link';
import { Content1, Creator, Heading1, HeroHeader, ListContent, Topbar } from '../Modules';

const Doc10 = () => {
    return (
        <>
            <Topbar text='What third-party services can I integrate with my Greta project?' />
            <Creator tableOfContent={['What third-party services can I integrate with my Greta project?', 'GitHub Integration (For Version Control & Collaboration)', 'Supabase Integration (For Database & Backend Services)', 'Netlify Integration (For Hosting & Deployment)']}>
                <HeroHeader text='What third-party services can I integrate with my Greta project?' />
                <Content1>
                    Greta allows seamless integration with <strong>GitHub, Supabase, and Netlify</strong> to enhance version control, database management, and website deployment. Here’s how you can integrate each service:
                </Content1>
                <Heading1>
                    GitHub Integration (For Version Control & Collaboration)
                </Heading1>
                <Content1>
                    GitHub helps you track changes, collaborate with team members, and manage your project's code efficiently.
                </Content1>
                <ListContent
                    listData={[
                        'Connect your GitHub account within Greta’s settings.',
                        'Export your project’s code to a GitHub repository.',
                        'Use GitHub for version control and collaboration.',
                        <><Link href='/learninghub/integrate-github' className="text-purple-400 hover:underline">Follow article</Link></>
                    ]}
                />
                <Heading1>
                    Supabase Integration (For Database & Backend Services)
                </Heading1>
                <Content1>
                    Supabase provides a powerful backend, including authentication and a PostgreSQL database, for dynamic websites.
                </Content1>
                <ListContent
                    listData={[
                        'Sign up for Supabase and create a new project.',
                        'Copy the API credentials from Supabase.',
                        'Add the credentials to Greta’s settings or within your project code to enable database functionality.',
                        <><Link href='/learninghub/integrate-supabase' className="text-purple-400 hover:underline">Follow article</Link></>
                    ]}
                />
                <Heading1>
                    Netlify Integration (For Hosting & Deployment)
                </Heading1>
                <Content1>
                    Netlify simplifies website hosting and offers continuous deployment options.
                </Content1>
                <ListContent
                    listData={[
                        'Export your Greta project and log in to Netlify.',
                        'Upload your project or connect your GitHub repository.',
                        'Configure deployment settings and go live with Netlify’s hosting.',
                        <><Link href='/learninghub/integrate-netlify' className="text-purple-400 hover:underline">Follow article</Link></>
                    ]}
                />
            </Creator>
        </>
    )
}

export default Doc10