'use client';

import { Creator, HeroHeader, ListContent, Topbar } from '../Modules'

const Doc9 = () => {
    return (
        <>
            <Topbar text="How can you publish updates and changes to your deployed website?" />
            <Creator>
                <HeroHeader text="How can you publish updates and changes to your deployed website?" />
                <ListContent
                    listData={{
                        'Modify the Prompt': 'Make the necessary updates by refining or editing your original prompt.',
                        'Rebuild the Website': <>Click <strong>"Build"</strong> again to regenerate the website with the updated content and design.</>,
                        'Preview the Changes': 'Review the live preview on the right side to ensure all modifications are correctly applied.',
                        'Deploy the Updated Version': <>Click <strong>"Deploy"</strong> to publish the latest version of your website. Greta will replace the old version with the new one automatically.</>
                    }}
                />
            </Creator>
        </>
    )
}

export default Doc9