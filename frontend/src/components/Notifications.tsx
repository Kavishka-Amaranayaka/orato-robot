import React, { useState } from 'react';

const Notifications = () => {
    const [notifs, setNotifs] = useState({
        emotionAlerts: true,
        voiceAlerts: false,
        weeklyReport: true,
        newFeatures: true,
    });

    const toggleNotif = (key: keyof typeof notifs) => {
        setNotifs(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const notificationItems = [
        {
            id: 'emotionAlerts',
            title: 'Real-time Emotion Alerts',
            desc: 'Get instant feedback on emotion changes',
            active: notifs.emotionAlerts
        },
        {
            id: 'voiceAlerts',
            title: 'Voice Feedback Alerts',
            desc: 'Receive spoken feedback notifications',
            active: notifs.voiceAlerts
        },
        {
            id: 'weeklyReport',
            title: 'Weekly Progress Report',
            desc: 'Summary of your training sessions',
            active: notifs.weeklyReport
        },
        {
            id: 'newFeatures',
            title: 'New Feature Notifications',
            desc: 'Stay updated with latest features',
            active: notifs.newFeatures
        }
    ];

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-sm border border-slate-100 dark:border-slate-800">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-8">Notification Preferences</h3>

                <div className="space-y-4">
                    {notificationItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between p-6 rounded-[2rem] hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all"
                        >
                            <div>
                                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-[15px]">{item.title}</h4>
                                <p className="text-slate-400 text-sm font-medium">{item.desc}</p>
                            </div>

                            {/* Toggle Switch */}
                            <button
                                onClick={() => toggleNotif(item.id as keyof typeof notifs)}
                                className={`w-14 h-7 rounded-full transition-all duration-300 relative flex items-center px-1 ${item.active ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-700'
                                    }`}
                            >
                                <div className={`w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 transform ${item.active ? 'translate-x-7' : 'translate-x-0'
                                    }`} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Notifications;