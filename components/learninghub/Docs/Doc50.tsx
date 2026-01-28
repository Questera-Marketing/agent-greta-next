'use client';

import { imageConfig } from '../ImageConfig'
import { Content1, Content2, Creator, Heading1, Heading2, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules'

const Doc50 = () => {
    return (
        <>
            <Topbar text='Why is my project locked?' />
            <Creator
                tableOfContent={[
                    'Why is my project locked?',
                    'What does Project Locked mean?',
                    'When does a project get locked?',
                    'How to unlock the project',
                    'Who can unlock the project?',
                ]}
            >
                <HeroHeader text='Why is my project locked?' />

                <Content1>
                    If you see your project in a locked (read-only) state and cannot send messages
                    or make changes, don’t worry — this is expected behavior when using Greta’s Team feature.
                </Content1>

                <Content1>
                    This guide explains why your project is locked, what it means,
                    and how to regain access.
                </Content1>

                <Heading1>
                    What does Project Locked mean?
                </Heading1>
                <Content1>
                    A locked project means that <b>someone else currently has contribution control</b>.
                </Content1>
                <Content1>
                    Greta allows only <b>one active contributor at a time</b> to avoid conflicting changes.
                </Content1>
                <Content1>
                    When a project is locked:
                </Content1>
                <Content1>
                    • You can view the project  
                    • You cannot send messages or modify code  
                    • The lock is temporary and fully reversible
                </Content1>

                <ImageContent
                    img={imageConfig.Doc50Image1}
                    altText='Project locked in Greta'
                />

                <Heading1>
                    When does a project get locked?
                </Heading1>
                <Content1>
                    Your project can be locked in the following situations:
                </Content1>
                <Content1>
                    1. When the <b>Owner transfers access</b> to an Editor.
                </Content1>
                <Content1>
                    2. When an <b>Editor is actively contributing</b> to the project.
                </Content1>
                <Content1>
                    3. When you are an Editor and the <b>Owner has control</b>.
                </Content1>

                <Content1>
                    In all cases, the lock simply indicates that someone else is currently
                    the <b>Current Controller</b>.
                </Content1>

                <Heading1>
                    How to unlock the project
                </Heading1>
                <Content1>
                    The way to unlock the project depends on your role.
                </Content1>

                <Content1>
                    <b>If you are the Project Owner:</b>
                </Content1>
                <Content1>
                    4. Go to <b>Project Settings → Team</b>.
                </Content1>
                <Content1>
                    5. Look for the banner showing <b>Current Controller</b>.
                </Content1>
                <Content1>
                    6. Click <b>Take Back Control</b>.
                </Content1>
                <Content1>
                    7. You will instantly regain contribution access.
                </Content1>

                <ImageContent
                    img={imageConfig.Doc49Image2}
                    altText='Take back control in Greta'
                />

                <Heading1>
                    Who can unlock the project?
                </Heading1>
                <Content1>
                    • The <b>Owner</b> can always unlock the project by taking back control.
                </Content1>
                <Content1>
                    • Editors <b>cannot unlock</b> the project themselves.
                </Content1>
                <Content1>
                    • Viewers always remain in read-only mode.
                </Content1>

                <Content1>
                    <b>Important:</b> The Owner is always the final authority and can override
                    any active editor at any time.
                </Content1>

                <Content1>
                    <b>That’s it!</b>
                </Content1>
                <Content1>
                    A locked project is not an error — it’s a safety feature that ensures
                    smooth collaboration without conflicts.
                </Content1>
            </Creator>
        </>
    )
}

export default Doc50