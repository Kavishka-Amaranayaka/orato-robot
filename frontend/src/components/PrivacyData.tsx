import React from 'react';
import { Shield, Database, HelpCircle, ChevronRight } from 'lucide-react';


// For links to privacy policy, terms of service, and data download.
const PrivacyData: React.FC = () => {
    const handleDownloadData = (): void => {
        console.log('Data download feature requested');
    };

    const handlePrivacyPolicy = (): void => {
        window.open('/privacy-policy', '_blank');
    };

    const handleTermsOfService = (): void => {
        window.open('/terms-of-service', '_blank');
    };

    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            {/* Section Header */}
            <div className="flex items-center mb-6">
                <div className="bg-orange-100 rounded-full p-3 mr-4">
                    <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Privacy & Data</h2>
            </div>

            {/* Privacy Options */}
            <div className="space-y-2">
                {/* Download My Data */}
                <button
                    onClick={handleDownloadData}
                    className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                    <div className="flex items-center">
                        <Database className="w-5 h-5 text-gray-600 mr-3" />
                        <span className="text-base font-medium text-gray-900">Download My Data</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </button>

                {/* Privacy Policy */}
                <button
                    onClick={handlePrivacyPolicy}
                    className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                    <div className="flex items-center">
                        <Shield className="w-5 h-5 text-gray-600 mr-3" />
                        <span className="text-base font-medium text-gray-900">Privacy Policy</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </button>

                {/* Terms of Service */}
                <button
                    onClick={handleTermsOfService}
                    className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                    <div className="flex items-center">
                        <HelpCircle className="w-5 h-5 text-gray-600 mr-3" />
                        <span className="text-base font-medium text-gray-900">Terms of Service</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </button>
            </div>
        </div>
    );
};

export default PrivacyData;