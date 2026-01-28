'use client';

import { imageConfig } from '../ImageConfig'
import { Content1, Content2, Creator, Heading1, Heading2, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules'

const Doc49 = () => {
    return (
        <>
            <Topbar text='How to Invite Team Members and Manage Access?' />
            <Creator
                tableOfContent={[
                    'How to Invite Team Members and Manage Access?',
                    'Step 1: Open Team Settings',
                    'Step 2: Invite a Team Member',
                    'Step 3: Understand Controller Status',
                    'Step 4: Transfer Access to an Editor',
                    'Step 5: Take Back Control',
                ]}
            >
                <HeroHeader text='How to Invite Team Members and Manage Access?' />

                <Content1>
                    This guide explains how to invite team members to your Greta project,
                    assign roles, transfer contribution access to editors, and take back control
                    whenever required.
                </Content1>

                <Heading1>
                    Step 1: Open Team Settings
                </Heading1>
                <Content1>
                    1. Log in to Greta and open the project you want to collaborate on.
                </Content1>
                <Content1>
                    2. Click on <b>Settings</b> in the top-right corner of the project.
                </Content1>
                <Content1>
                    3. Navigate to the <b>Team</b> tab.
                </Content1>

                <ImageContent
                    img={imageConfig.Doc49Image1}
                    altText='Invite team members in Greta'
                />

                <Heading1>
                    Step 2: Invite a Team Member
                </Heading1>
                <Content1>
                    4. In the Team section, you will see an input field labeled <b>Enter email address</b>.
                </Content1>
                <Content1>
                    5. Enter the email address of the person you want to invite.
                </Content1>
                <Content1>
                    6. Select a role from the dropdown:
                    <br />• <b>Editor</b> - Can contribute when access is granted
                    <br />• <b>Viewer</b> - Read-only access
                </Content1>
                <Content1>
                    7. Click <b>Invite team member</b>.
                </Content1>

                <Content1>
                    8. Once invited, the user will appear in the team list with their assigned role and status.
                </Content1>

                <Heading1>
                    Step 3: Understand Controller Status
                </Heading1>
                <Content1>
                    9. At the top of the Team section, you will see the <b>Current Controller</b> banner.
                </Content1>
                <Content1>
                    10. This indicates who currently has contribution access to the project.
                </Content1>
                <Content1>
                    11. When the Owner is in control, editors cannot send messages or make changes.
                </Content1>
                <Content1>
                    <b>Important:</b> Editors can only send messages and make code changes when they have control.
                    Without control, the project is in read-only mode for them.
                </Content1>

                <Heading1>
                    Step 4: Transfer Access to an Editor
                </Heading1>
                <Content1>
                    12. In the team members table, locate the Editor you want to give access to.
                </Content1>
                <Content1>
                    13. Click the <b>Transfer</b> button under the Control column.
                </Content1>
                <Content1>
                    14. Once transferred:
                    <br />• The Editor becomes the <b>Current Controller</b>
                    <br />• The Editor can send messages and contribute
                    <br />• The project becomes locked for others, including the Owner
                </Content1>

                <ImageContent
                    img={imageConfig.Doc49Image2}
                    altText='Transfer access to editor in Greta'
                />

                <Heading1>
                    Step 5: Take Back Control
                </Heading1>
                <Content1>
                    15. When an Editor is in control, the Owner will see a <b>Take Back Control</b> button.
                </Content1>
                <Content1>
                    16. Click <b>Take Back Control</b> to reclaim contribution access.
                </Content1>
                <Content1>
                    17. Once control is taken back:
                    <br />• The Owner becomes the Current Controller
                    <br />• Editors return to read-only mode
                </Content1>

                <Content1>
                    <b>Done!</b>
                </Content1>
                <Content1>
                    You now know how to invite team members, transfer contribution access,
                    and manage control effectively using Greta’s Team feature.
                </Content1>
            </Creator>
        </>
    )
}

export default Doc49