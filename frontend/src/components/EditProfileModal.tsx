import React, { useEffect, useState } from "react";

interface Props {
    onClose: () => void;
}

const EditProfileModal: React.FC<Props> = ({ onClose }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);

        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") handleClose();
        };

        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    const handleClose = () => {
        setShow(false);
        setTimeout(() => onClose(), 200); // wait animation
    };

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-200 ${show ? "bg-black/40 opacity-100" : "bg-black/0 opacity-0"
                }`}
            onClick={handleClose}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 transition-all duration-200 ${show ? "scale-100 opacity-100" : "scale-95 opacity-0"
                    }`}
            >
                {/* HEADER */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Edit Profile</h2>
                    <button onClick={handleClose}>✕</button>
                </div>

                {/* FORM */}
                <div className="space-y-4">
                    <div>
                        <label className="text-sm text-gray-600">Full Name</label>
                        <input
                            type="text"
                            defaultValue="John Doe"
                            className="w-full mt-1 border rounded-lg px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Email</label>
                        <input
                            type="email"
                            defaultValue="john.doe@example.com"
                            className="w-full mt-1 border rounded-lg px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Learning Language</label>
                        <select className="w-full mt-1 border rounded-lg px-3 py-2">
                            <option>English</option>
                            <option disabled>සිංහල (Coming Soon)</option>
                            <option disabled>தமிழ் (Coming Soon)</option>
                        </select>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">
                            Current Level (Auto-calculated)
                        </label>
                        <div className="w-full mt-1 border rounded-lg px-3 py-2 bg-gray-100 text-gray-600">
                            Intermediate (System Generated)
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                            Level is generated automatically by the system.
                        </p>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Bio</label>
                        <textarea
                            rows={3}
                            className="w-full mt-1 border rounded-lg px-3 py-2 resize-none"
                        />
                    </div>
                </div>

                {/* FOOTER */}
                <div className="flex justify-end gap-3 mt-6">
                    <button
                        onClick={handleClose}
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