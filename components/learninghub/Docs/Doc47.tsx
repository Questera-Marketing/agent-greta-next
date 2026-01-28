'use client';

import { Content1, Content2, Creator, Heading1, Heading2, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules'

const Doc47 = () => {
    return (
        <>
            <Topbar text='How can I get involved with the Greta community and access learning resources?' />
            <Creator >
                <HeroHeader text='How can I get involved with the Greta community and access learning resources?' />
                <Content1>
                    Join our growing community and access valuable resources through these channels:
                </Content1>
                <ListContent 
                    listData={{
                        "A Public Roadmap You Direct": <>Cast your votes and tell us what to build next. <a href="https://greta-roadmap.questera.ai/" target='_blank'>Cast Your Vote</a></>,
                        "Early Believers Affiliate Program": <>Join the fam, share Greta, and get rewarded. We're onboarding folks now. <a href="https://docs.google.com/forms/d/1MM7vm-_p-KiWsUKGjogiZgVMV8GUWEaJNnSbHXQeT-g/preview?edit_requested=true" target='_blank'>Apply to Join</a></>,
                        "The Greta Newsletter": <>Get regular insider updates, tips, and deep-dives sent straight to you. <a href="https://gretawithshubham.substack.com/" target='_blank'>Sign Up Here</a></>,
                        "Live Build-Together Webinars": <>Vibe code with us and special guests in real-time. Watch for the next one! <a href="https://luma.com/xv20tsbh/" target='_blank'>See Past & Upcoming Sessions</a></>,
                        "Expanded Tutorial Library": <>From basic setup to advanced Agent Mode, learn at your own pace. <a href="https://www.youtube.com/playlist?list=PL5wRj64cBUgw8k6bm1NVOE7ADLIoXxkEl" target='_blank'>Watch on YouTube</a></>,
                    }}
                />
            </Creator>
        </>
    )
}

export default Doc47