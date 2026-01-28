'use client';

import { Content1, Creator, HeroHeader, ListContent, Topbar } from '../Modules'

const Doc6 = () => {
    return (
        <>
            <Topbar text='What components and modules can you use in Greta?' />
            <Creator>
                <HeroHeader text='What components and modules can you use in Greta?' />
                <Content1>
                    Greta provides a highly flexible development environment where you can add and customize <strong>any component</strong> to suit your project needs. It is powered by <strong>PLG OS</strong>, which offers a comprehensive library of <strong>full-stack components</strong> that cover various aspects of development, including:
                </Content1>
                <ListContent
                    listData={{
                        'Frontend Components': "Ready-to-use UI elements for seamless design.",
                        'Backend Components': 'Pre-built server-side functions to speed up development.',
                        'Analytics': 'Tools to track and analyze user behavior and performance.',
                        'Remote Configuration': 'Manage app settings dynamically without redeployment.'
                    }}
                />
                <Content1>
                    To explore the full range of available components, visit <a href='https://www.plgos.com/sdk-components' target='_blank'>PLG OS SDK Components</a>. You can also log in at <a href='https://www.plgos.com/' target='_blank'>plgos.com</a> for more details and access the complete library.
                </Content1>
            </Creator>
        </>
    )
}

export default Doc6;