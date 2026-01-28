'use client';

import { imageConfig } from '../ImageConfig'
import { Content1, Content2, Creator, Heading1, Heading2, HeroHeader, ImageContent, ListContent, Topbar } from '../Modules'

const Doc43 = () => {
    return (
        <>
            <Topbar text='How do I use the Model Selector to switch between different AI models?' />
            <Creator tableOfContent={["How do I use the Model Selector to switch between different AI models?", "Step-by-Step Guide:", "Key Benefits:"]}>
                <HeroHeader text='How do I use the Model Selector to switch between different AI models?' />
                <Content1>
                    The Model Selector gives you complete control to choose the AI model that best fits your specific task—whether you need frontend design expertise, complex logic reasoning, or backend development capabilities. Each model has unique strengths and different credit costs.
                    <br />
                    <div className="w-full aspect-video rounded-xl overflow-hidden my-6 border border-[#27272A]">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/8zNpNYcgWcU?si=lUuQK96_PkmqhnLC"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </Content1>
                <Heading1>
                    Step-by-Step Guide:
                </Heading1>
                <Heading2>
                    1. Access the Model Selector
                </Heading2>
                <ListContent
                    listData={[
                        `At the bottom of the chat interface, click on "Tools"`,
                        <>
                            Hover over "Default" to reveal the model options
                        </>,
                        `Click to open the Model Selector dropdown`
                    ]}
                />
                <ImageContent img={imageConfig.Doc43Image1} altText='Doc43Image1' />
                <Heading2>
                    2. Browse Available Models
                </Heading2>
                <ListContent
                    listData={[
                        `View all available models (Claude 4, Gemini, Grok, etc.)`,
                        <>
                            Each model displays its credit cost clearly
                        </>,
                        <>
                            See which models are optimized for specific tasks:
                            <br />
                            <ul>
                                <li>Frontend design - Better for UI/UX and visual elements</li>
                                <li>Backend logic - Optimized for functionality and code structure</li>
                                <li>Complex reasoning - Ideal for sophisticated problem-solving</li>
                            </ul>
                        </>
                    ]}
                />
                <Heading2>
                    3. Select Your Model
                </Heading2>
                <ListContent
                    listData={[
                        `Click on any model to select it`,
                        <>
                            The change takes effect immediately
                        </>,
                        `You'll see the selected model displayed in the tools section`,
                    ]}
                />
                <Heading2>
                    4. Learn More About Models
                </Heading2>
                <ListContent
                    listData={[
                        `At the bottom of the selector, click "Learn More"`,
                        <>
                            This takes you to the AI Models page under Settings
                        </>,
                        <>
                            Explore detailed information about each model's:
                            <br />
                            <ul>
                                <li>Specific strengths and specialties</li>
                                <li>Recommended use cases and tasks</li>
                                <li>Performance characteristics</li>
                                <li>Credit cost breakdowns</li>
                            </ul>
                        </>
                    ]}
                />
                <ImageContent img={imageConfig.Doc43Image2} altText='Doc43Image2' />
                <Heading2>
                    5. Experiment and Optimize
                </Heading2>
                <ListContent
                    listData={[
                        `Try different models for different types of tasks`,
                        <>
                            Note which models work best for your specific projects
                        </>,
                        `Balance credit costs with performance needs`
                    ]}
                />
                <Heading1>
                    Key Benefits:
                </Heading1>
                <ListContent
                    listData={[
                        `Total Control: Choose the exact AI capability you need`,
                        <>
                            Cost Optimization: Select models based on your credit budget
                        </>,
                        `Task Specialization: Match the model to your specific requirements`,
                        `Continuous Learning: We regularly add new models and capabilities`
                    ]}
                />
                <Content1>
                    Pro Tip: Bookmark the AI Models page in Settings to quickly reference model strengths and costs as you work on different types of projects!
                </Content1>
                <Content1>
                    The Model Selector transforms Greta from a one-size-fits-all tool into your personalized AI development partner, giving you precision control over every aspect of your building experience!
                </Content1>
            </Creator>
        </>
    )
}

export default Doc43