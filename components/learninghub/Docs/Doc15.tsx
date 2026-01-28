'use client';

import React from 'react'
import { Content1, Creator, Heading1, HeroHeader, ListContent, Topbar } from '../Modules'

const Doc15 = () => {
    return (
        <>
            <Topbar text='What permission levels can be assigned to different users?' />
            <Creator>
                <HeroHeader text='What permission levels can be assigned to different users?' />
                <Heading1>
                    Permission Levels for Users in Greta
                </Heading1>
                <Content1>
                    Greta is designed to provide a seamless and intuitive experience for building and deploying websites. However, when it comes to user roles and permissions, it currently does not support multi-user access with different permission levels. This means that all users working on a Greta project must use the same login credentials, granting them equal access to all functionalities.
                </Content1>
                <Heading1>
                    How User Permissions Work in Greta
                </Heading1>
                <Content1>
                    Unlike traditional collaboration tools that offer roles such as "Admin," "Editor," or "Viewer," Greta does not differentiate user access levels. Any user with the project owner’s credentials can:
                </Content1>
                <ListContent
                    listData={[
                        'Edit and update the project.',
                        'Modify settings and configurations.',
                        'Deploy changes to the live website.'
                    ]}
                />
            </Creator>
        </>
    )
}

export default Doc15