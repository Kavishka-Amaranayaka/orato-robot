import React from "react";
import { MdLanguage, MdTrackChanges } from "react-icons/md";
import { FaTrophy, FaUsers } from "react-icons/fa";

const features = [
    {
        icon: <MdLanguage size={26} color="#1a9e6b" />,
        title: "Multiple Languages",
        desc: "Learn Spanish, French, German, and many more languages with comprehensive lessons.",
    },
    {
        icon: <MdTrackChanges size={26} color="#1a9e6b" />,
        title: "Personalized Learning",
        desc: "Set your own goals and learn at your own pace with adaptive difficulty.",
    },
    {
        icon: <FaTrophy size={24} color="#1a9e6b" />,
        title: "Gamification",
        desc: "Earn points, badges, and compete on leaderboards to stay motivated.",
    },
    {
        icon: <FaUsers size={24} color="#1a9e6b" />,
        title: "Community Support",
        desc: "Join millions of learners worldwide and practice with native speakers.",
    },
];

const WhatMakesUsDifferent: React.FC = () => {
    return (
        <section className="bg-[#f8fffe] py-16 px-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-extrabold text-[#0d2d2a] text-center mb-10">
                    What Makes Us Different
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {features.map((f) => (
                        <div
                            key={f.title}
                            className="bg-white rounded-2xl p-7 flex gap-5 items-start shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-200"
                        >
                            <div className="bg-[#e6f9f0] rounded-xl w-14 h-14 flex items-center justify-center shrink-0">
                                {f.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#0d2d2a] mb-2">{f.title}</h3>
                                <p className="text-[#5a7a72] text-sm leading-relaxed">{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatMakesUsDifferent;