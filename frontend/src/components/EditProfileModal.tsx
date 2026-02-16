import React from "react";

interface Props {
    onClose: () => void;
}

const EditProfileModal: React.FC<Props> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6">

                {/* HEADER */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Edit Profile</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-xl"
                    >
                        ✕
                    </button>
                </div>

                {/* FORM */}
                <div className="space-y-4">

                    <div>
                        <label className="text-sm text-gray-600">Full Name</label>
                        <input
                            type="text"
                            defaultValue="John Doe"
                            className="w-full mt-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Email</label>
                        <input
                            type="email"
                            defaultValue="john.doe@example.com"
                            className="w-full mt-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Learning Language</label>
                        <select className="w-full mt-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                            <option>English</option>
                            <option disabled>සිංහල (Coming Soon)</option>
                            <option disabled>தமிழ் (Coming Soon)</option>
                        </select>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Current Level</label>
                        <select className="w-full mt-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                            <option>Beginner</option>
                            <option selected>Intermediate</option>
                            <option>Advanced</option>
                        </select>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Bio</label>
                        <textarea
                            rows={3}
                            placeholder="Tell us about yourself..."
                            className="w-full mt-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                </div>

                {/* FOOTER BUTTONS */}
                <div className="flex justify-end gap-3 mt-6">
                    <button
                        onClick={onClose}
                        className="border px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                    >
                        Cancel
                    </button>

                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                        Save Changes
                    </button>
                </div>

            </div>
        </div>
    );
};

export default EditProfileModal;