'use client';

import { imageConfig } from '../ImageConfig'
import { Content1, Content2, Creator, Heading1, Heading2, HeroHeader, ImageContent, ListContent, TableContent, Topbar } from '../Modules'

const Doc48 = () => {
    return (
        <>
            <Topbar text='What is the Team feature?' />
            <Creator
                tableOfContent={[
                    'What is the Team feature?',
                    'Team Roles in Greta',
                    // 'Inviting Team Members',
                    'Contribution Control (Transfer & Take Back)',
                    'Project Locking Behavior',
                    'Credits & Billing',
                    'Integrations & Ownership',
                    'Project Permissions Comparison Table',
                    'Why Team Feature Matters',
                ]}
            >
                <HeroHeader text='What is the Team feature?' />
                <Content1>
                    The Team feature in Greta allows project owners to collaborate seamlessly with others while maintaining full control over the project.
                    It enables structured collaboration by defining clear roles, permissions, and contribution ownership — ensuring security,
                    accountability, and smooth teamwork.
                </Content1>
                <Content1>
                    With Teams, owners can invite collaborators, control who can actively contribute to the project at any given time,
                    and manage integrations, credits, and deployments centrally.
                </Content1>

                <Heading1>Team Roles in Greta</Heading1>

                <Heading2>1. Owner</Heading2>
                <Content1>
                    The Owner is the ultimate authority of the project. Each project has only one Owner.
                </Content1>
                <ListContent
                    listData={[
                        'Full control over the project',
                        'Can invite, remove, and manage team members',
                        'Controls integrations, credits, and deployments',
                        'Can transfer contribution access to editors and take it back anytime',
                    ]}
                />

                <Heading2>2. Editor</Heading2>
                <Content1>
                    Editors are collaborators who can contribute to the project when access is granted by the Owner.
                </Content1>
                <ListContent
                    listData={[
                        'Can contribute code only when given control',
                        'Cannot invite or manage other team members',
                        'Cannot transfer access to other editors',
                        'Work within the Owner’s project environment and integrations',
                    ]}
                />

                <Heading2>3. Viewer</Heading2>
                <Content1>
                    Viewers are read-only participants and act as an audience to the project.
                </Content1>
                <ListContent
                    listData={[
                        'Can view the project',
                        'Cannot make code changes',
                        'Cannot access integrations or settings',
                        'Ideal for demos, reviews, or audits',
                    ]}
                />

                {/* <Heading1>Inviting Team Members</Heading1>
                <ListContent
                    listData={[
                        'Project Owners can invite anyone by entering their email address',
                        'Owner assigns a role (Editor or Viewer)',
                        'Roles can be changed anytime in the future',
                        'Team members can be removed at any time',
                        'Editors cannot invite or manage team members',
                    ]}
                /> */}

                <Heading1>Contribution Control (Transfer & Take Back)</Heading1>
                <Content1>
                    Greta follows a single-active-contributor model to avoid conflicts and ensure clarity during collaboration.
                </Content1>
                <ListContent
                    listData={[
                        'By default, the Owner has contribution control',
                        'Owner can transfer control to any Editor',
                        'Only one person can actively contribute at a time',
                        'Owner can instantly take back control from an Editor',
                    ]}
                />

                <Heading1>Project Locking Behavior</Heading1>

                <Heading2>When Owner Has Control</Heading2>
                <ListContent
                    listData={[
                        'Editors see the project in a locked (read-only) state',
                        'Editors can view the project but cannot contribute',
                    ]}
                />

                <Heading2>When an Editor Has Control</Heading2>
                <ListContent
                    listData={[
                        'Owner sees the project in a locked state',
                        'Owner cannot contribute at that moment',
                        'Owner can override and reclaim control at any time',
                    ]}
                />

                <Content1>
                    The Owner is always the final authority in the project.
                </Content1>

                <Heading1>Credits & Billing</Heading1>
                <ListContent
                    listData={[
                        'All credits are deducted from the Owner’s account',
                        'Credits are deducted even when Editors make code changes',
                        'Editors do not consume their own credits in collaborative projects',
                    ]}
                />
                <Content1>
                    This keeps billing centralized and simple.
                </Content1>

                <Heading1>Integrations & Ownership</Heading1>

                <Heading2>GitHub</Heading2>
                <ListContent
                    listData={[
                        'Only Owners can connect GitHub repositories',
                        'Only Owners can push or pull code',
                        'Editors cannot link their own GitHub accounts',
                    ]}
                />

                <Heading2>Supabase</Heading2>
                <ListContent
                    listData={[
                        'Supabase is connected only by the Owner',
                        'Editors can use the connected Supabase project in code',
                        'Editors cannot view Supabase credentials or account details',
                    ]}
                />

                <Heading2>Netlify Deployment</Heading2>
                <ListContent
                    listData={[
                        'Editors can deploy the project',
                        'Only Owners can undeploy or cancel deployments',
                    ]}
                />

                <Heading2>Analytics (Google Analytics)</Heading2>
                <ListContent
                    listData={[
                        'Analytics configuration is Owner-only',
                        'Editors cannot add or modify analytics settings',
                    ]}
                />

                {/* <Heading1>Project Permissions</Heading1>

                <Heading2>Owner-Only Actions</Heading2>
                <ListContent
                    listData={[
                        'Edit the project name or delete the project',
                        'Download the project code',
                        'Share the project on social media',
                        'Save project as template',
                        'Change project visibility (Public/Private)',
                        'Manage team members (invite, remove, change roles)',
                        'Connect/disconnect integrations (GitHub, Supabase, Analytics)',
                        'Push/pull code to GitHub',
                        'Undeploy from Netlify',
                    ]}
                />

                <Heading2>Owner & Editor Actions (Require Code Control)</Heading2>
                <Content1>
                    These actions require both the appropriate role AND active code control:
                </Content1>
                <ListContent
                    listData={[
                        'Send messages to AI',
                        'Edit code files',
                        'Use inspect feature',
                        'Rebuild project',
                        'Deploy & Re-deploy to Netlify',
                        'Rollback to previous messages',
                        'Toggle Agent Mode',
                        'Change AI model',
                    ]}
                /> */}

                <Heading2>Personal Organization</Heading2>
                <ListContent
                    listData={[
                        'All users (Owner, Editor, Viewer) can organize projects in their own folders',
                        'Folder organization is personal and does not affect other team members',
                        'Each user can move projects to different folders independently',
                    ]}
                />

                <Heading1>Project Permissions Comparison Table</Heading1>
                <TableContent
                    columns={['Feature', 'Owner', 'Editor', 'Viewer']}
                    data={[
                        { Feature: 'View project', Owner: '✅', Editor: '✅', Viewer: '✅' },
                        { Feature: 'Contribute code', Owner: '✅', Editor: '✅ When given control', Viewer: '❌' },
                        { Feature: 'Discussion', Owner: '✅', Editor: '✅ When given control', Viewer: '❌' },
                        { Feature: 'Code edit', Owner: '✅', Editor: '✅ When given control', Viewer: '❌' },
                        { Feature: 'Inspect', Owner: '✅', Editor: '✅ When given control', Viewer: '❌' },
                        { Feature: 'Deploy', Owner: '✅', Editor: '✅ When given control', Viewer: '❌' },
                        { Feature: 'Change Agent Mode', Owner: '✅', Editor: '✅ When given control', Viewer: '❌' },
                        { Feature: 'Change AI models', Owner: '✅', Editor: '✅ When given control', Viewer: '❌' },
                        { Feature: 'Manage Knowledge Base', Owner: '✅', Editor: '✅ When given control', Viewer: '❌' },
                        // { Feature: 'Manage Secret Keys', Owner: '✅', Editor: '✅ When given control', Viewer: '❌' },
                        { Feature: 'Undeploy', Owner: '✅', Editor: '❌', Viewer: '❌' },
                        { Feature: 'Claim site', Owner: '✅', Editor: '❌', Viewer: '❌' },
                        { Feature: 'Edit project name, project visibility', Owner: '✅', Editor: '❌', Viewer: '❌' },
                        { Feature: 'Delete project', Owner: '✅', Editor: '❌', Viewer: '❌' },
                        { Feature: 'Download code', Owner: '✅', Editor: '❌', Viewer: '❌' },
                        { Feature: 'Share on social media', Owner: '✅', Editor: '❌', Viewer: '❌' },
                        { Feature: 'Invite/manage team', Owner: '✅', Editor: '❌', Viewer: '❌' },
                        { Feature: 'Integrations', Owner: '✅', Editor: '❌', Viewer: '❌' },
                        { Feature: 'Manage credits', Owner: '✅', Editor: '❌', Viewer: '❌' },
                        { Feature: 'Transfer and reclaim control', Owner: '✅', Editor: '❌', Viewer: '❌' },
                    ]}
                />

                <Heading1>Why Team Feature Matters</Heading1>
                <ListContent
                    listData={[
                        'Safe and controlled collaboration',
                        'Clear ownership and accountability',
                        'Conflict-free development',
                        'Centralized billing and integrations',
                        'Enterprise-ready permission handling',
                    ]}
                />

                <Content1>
                    The Team feature makes collaboration in Greta powerful yet controlled, giving Owners confidence
                    while enabling Editors to contribute efficiently without stepping on each other's work.
                </Content1>
            </Creator>
        </>
    )
}



export default Doc48