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

                {/* BODY PLACEHOLDER */}
                <p className="text-gray-500">
                    Profile form coming in next commits...
                </p>

            </div>
        </div>
    );
};

export default EditProfileModal;