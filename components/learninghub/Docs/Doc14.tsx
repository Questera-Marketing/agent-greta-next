'use client';

import { Content1, Creator, Heading1, HeroHeader, ListContent, Topbar } from '../Modules'

const Doc14 = () => {
    return (
        <>
            <Topbar text="How do you invite team members to collaborate on a project?" />
            <Creator>
                <HeroHeader text="How do you invite team members to collaborate on a project?" />
                <Content1>
                    Currently, Greta does not support direct team member invitations or multi-user collaboration within a project. However, if multiple people need to contribute, they can do so by logging into Greta using the same credentials as the project owner.
                </Content1>

                <Heading1>
                    How Team Members Can Collaborate:
                </Heading1>
                <ListContent
                    listData={[
                        'The project owner shares their Greta login credentials with team members.',
                        'Team members log in to Greta using these credentials.',
                        'They can access the project, make updates, and edit content as needed.',
                        'Once changes are made, the project can be rebuilt and deployed to reflect the updates.'
                    ]}
                    listType="ol"
                />
            </Creator>
        </>
    )
}

export default Doc14