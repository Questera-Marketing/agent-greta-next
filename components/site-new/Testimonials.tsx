"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Heart, Quote, Star } from "lucide-react";
import { useRef } from "react";

const reviews = [
    {
        name: "rocketboy007",
        heading: "Best purchase I ever had on appsumo. Launched 14 webapps with greta so far.",
        quote: "Initially I was hesitant to buy Greta as I was not finding any use case thinking it might not add that much value, but I was wrong. This turned out to be my best purchase on appsumo so far. I built 10 inhouse work related and 4 public apps so far with greta. I am amazed with the output . Only thing I am eagerly waiting for is MCP integration with NoCodebackend or direct connection with the same . Thank you Greta team for developing such an amazing product.",
        gradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/20"
    },
    {
        name: "robertleitinger",
        heading: "Solid Lovable alternative!",
        quote: "Greta is really a very good alternative to Lovable, and in the last few months there have been many new updates that have significantly improved the tool. Even Gemini 3.0 Pro has been integrated as of today – very impressive! Of course, there are occasional issues, and desired changes are not always implemented satisfactorily on the first prompt, but that’s the nature of vibe coding tools, and I run into the same problems with tools like Lovable. Overall, though, it’s a really solid vibe coding tool!",
        gradient: "from-cyan-500/20 via-blue-500/10 to-indigo-500/20"
    },
    {
        name: "vincekika",
        heading: "Learning curve and responsiveness",
        quote: "I’m surprised at the negative reviews with respect to Questera’s response time to queries about Greta. I have so far had a totally different and brilliant experience and have not had any inconsistencies or delays in this regard. The team have always responded timeously by email or with invitations to join them on live video calls. I had a video call yesterday with 2 members of their team. They have been very responsive and actually very helpful. I am completely new to app and web development employing tools like Greta. I have yet to paste any prompts as I think it’s imperative I secure a profound understanding of how Greta interfaces and works with GitHub and Supabase in particular. Regarding the bad reviews I have seen with particular reference to Greta’s functionality, I wonder if the results one obtains from Greta’s output is dependent on how well one constructs his or her prompts. I wonder whether adopting Markdown formatting language generated in ChatGPT will make a difference to the output. I will soon find out with my first project. Although I was a tad bit disappointed to read that Greta is currently unable to deliver industry standard applications, I remain somewhat optimistic and loyal if I may add, as an early adopter, because it is a fledgling pre-seed tool and I feel it has a huge potential to be a great tool and before you ask or wonder, I live in England and I do not have any relationship or affiliations with the founders of Greta or their team nor have I received any incentive for dropping this review. This is my objective review and personal opinion.",
        gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20"
    },
    {
        name: "Newbie_too",
        heading: "Very very Impressive. Flawless!",
        quote: "I am not a coder at all, but I have run software companies for thirty-odd years building complex apps, so have a good idea what is involved in creating apps. Albeit I had zero coding experience, I was able to build a reasonably complex app for planning sales strategies that allows users to enter various criteria about sales opportunities, decision makers, status of each etc. I provided a minimalistic prompt from which it inferred a lot, implementing things I'd not thought of i.e. it understood the intent of the app, that it was about sales, prospects buyers etc and created some sensible naming conventions in the UI that made it easier to understand. The UI was beautifully laid out. It also created a user dashboard and a user management framework, registration form, login etc. Created the links to Github and Supabase, Basically led me by the hand the entire way. At some points when compiling the app it failed and it then figured out workarounds, all without intervention from me. And the progress report it produces as it's doing all that is frankly mind-blowing. It reminds me of the dialog I used to have with my programmers. I simply instruct it in conversational English and it obligingly goes off and does it in seconds, rather than days/weeks. I've read some of the negative reviews and can only say, my experience is a total contrast. Greta performed flawlessly. The result has far exceeded my expectations and surpassed that of 90% of the 200 plus Deals I've bought on Appsumo. In summary: congratulations to the guys at Greta and...coders look to your laurels!",
        gradient: "from-orange-500/20 via-amber-500/10 to-yellow-500/20"
    },
    {
        name: "codemom",
        heading: "Great Alternative to Lovable",
        quote: "Greta just made my business 100x better and cooler. I now feel more confident in raising our prices because our product is just so much cooler! Thank you also to the team. They are very responsive and professional.",
        gradient: "from-pink-500/20 via-rose-500/10 to-red-500/20"
    },
    {
        name: "RHTDD",
        heading: "A Promising Tool with Great Potential",
        quote: "Greta shows significant promise, particularly with its effective use of AI prompts. While it has some bugs and challenges with complex backend tasks, its core functionality is strong. I am excited to support its growth and look forward to future enhancements, such as more SEO-friendly options like Server-Side Rendering and a drag-and-drop feature to simplify editing. With these improvements, I believe Greta can become a top-tier development tool.",
        gradient: "from-blue-500/20 via-violet-500/10 to-purple-500/20"
    }
];

// 3D Tilt Card Component
function TestimonialCard({ review, index }: { review: typeof reviews[0]; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((e.clientX - centerX) / rect.width);
        y.set((e.clientY - centerY) / rect.height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative group cursor-pointer h-full"
        >
            {/* Card with 3D depth layers */}
            <div className="relative p-6 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 bg-linear-to-br from-gray-900/80 to-black/90 backdrop-blur-sm h-full flex flex-col"
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-linear-to-br ${review.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />

                {/* Floating geometric shapes for 3D effect */}
                <div
                    className="absolute top-4 right-4 w-20 h-20 rounded-full bg-linear-to-br from-white/5 to-transparent blur-xl group-hover:scale-150 transition-transform duration-700"
                    style={{ transform: "translateZ(20px)" }}
                />
                <div
                    className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-linear-to-tr from-white/5 to-transparent blur-lg group-hover:scale-125 transition-transform duration-500"
                    style={{ transform: "translateZ(15px)" }}
                />

                {/* Quote icon with 3D pop */}
                <div
                    className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity"
                    style={{ transform: "translateZ(30px)" }}
                >
                    <Quote className="w-12 h-12 text-white" />
                </div>

                {/* Content layer */}
                <div className="relative z-10 flex flex-col flex-1" style={{ transform: "translateZ(40px)" }}>
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                    </div>

                    {/* Heading */}
                    <h3 className="text-white font-semibold text-base mb-3 line-clamp-2">{review.heading}</h3>

                    {/* Quote */}
                    <p className="text-gray-300 leading-relaxed text-sm line-clamp-4 flex-1">"{review.quote}"</p>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-4 mt-4 border-t border-white/10">
                        {/* Avatar with gradient background */}
                        <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${review.gradient} flex items-center justify-center border border-white/10 shadow-lg`}>
                            <span className="text-lg font-bold text-white">
                                {review.name.charAt(0)}
                            </span>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                                {review.name}
                            </h4>
                            <p className="text-sm text-gray-500">Appsumo User</p>
                        </div>
                    </div>
                </div>

                {/* Bottom shine effect */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
            </div>
        </motion.div>
    );
}

export default function Testimonials() {
    return (
        <section className="py-24 bg-black text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-6"
                    >
                        <Heart className="w-4 h-4" />
                        <span>TESTIMONIALS</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-4 font-serif"
                    >
                        Built for Visionaries. <span className="italic font-normal text-gray-400">Loved by Builders.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        Don't take our word for it. Here's what people are shipping with Greta.
                    </motion.p>
                </div>

                <div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    style={{ perspective: "1000px" }}
                >
                    {reviews.map((review, index) => (
                        <TestimonialCard key={index} review={review} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
