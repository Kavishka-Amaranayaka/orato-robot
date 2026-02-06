import React, { useState } from 'react';
import { Shield, Key, ChevronRight, AlertTriangle, CheckCircle2, Mail, ArrowRight } from 'lucide-react';

const Security = () => {
    const [view, setView] = useState<'main' | 'change-password' | 'delete-account' | 'setup-2fa'>('main');
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [email, setEmail] = useState('');

    // Password change states
    const [passwords, setPasswords] = useState({ current: '', new: '', confirm: '' });
    const [error, setError] = useState('');

    // 2FA Setup States
    const [setupStep, setSetupStep] = useState<'email' | 'otp'>('email');
    const [otp, setOtp] = useState('');
    const [generatedOtp, setGeneratedOtp] = useState('');

    // Password Change Logic (With Strict Validation)
    const handlePasswordChange = () => {
        setError('');
        const { current, new: newPass, confirm } = passwords;

        if (!current || !newPass || !confirm) {
            setError('Please fill in all fields.');
            return;
        }

        if (newPass !== confirm) {
            setError('Passwords do not match.');
            return;
        }

        if (current === newPass) {
            setError('Current password cannot be used as the new password. Please retry.');
            return;
        }

        // Password validation: At least 6 chars, 1 letter, 1 number, 1 special char (!$@%)
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!$@%])[A-Za-z\d!$@%]{6,}$/;

        if (!passwordRegex.test(newPass)) {
            setError('Your password must be at least 6 characters and should include a combination of numbers, letters and special characters (!$@%).');
            return;
        }

        setIsSuccess(true);
    };

    // Two-Factor Authentication Logic
    const handleToggle2FA = () => {
        if (twoFactorEnabled) {
            setTwoFactorEnabled(false);
        } else {
            setIsSuccess(false);
            setSetupStep('email');
            setEmail('');
            setOtp('');
            setView('setup-2fa');
        }
    };

    const handleSend2FACode = () => {
        if (!email) return;
        const code = Math.floor(1000 + Math.random() * 9000).toString();
        setGeneratedOtp(code);
        alert(`Verification Code sent to ${email}: ${code}`);
        setSetupStep('otp');
    };

    const handleVerify2FACode = () => {
        if (otp === generatedOtp) {
            setIsSuccess(true);
            setTimeout(() => {
                setTwoFactorEnabled(true);
                setIsSuccess(false);
                setView('main');
            }, 2000);
        } else {
            alert("Incorrect code. Please try again.");
        }
    };

    if (view === 'delete-account') {
        return (
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-sm border border-slate-100 dark:border-slate-800 animate-in slide-in-from-right duration-500">
                <div className="flex justify-between items-center mb-8">
                    <button onClick={() => setView('main')} className="text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors">Cancel</button>
                    <h2 className="text-lg font-bold text-slate-800 dark:text-white">Delete my account</h2>
                    <div className="w-10"></div>
                </div>

                <div className="space-y-6">
                    <div className="flex items-start gap-4 p-5 bg-red-50/50 dark:bg-red-900/10 rounded-2xl border border-red-100 dark:border-red-900/20">
                        <AlertTriangle className="text-red-500 shrink-0" size={24} />
                        <div className="space-y-2">
                            <h3 className="font-bold text-red-600">Deleting your account will:</h3>
                            <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc ml-4 font-medium">
                                <li>Delete your account info and profile picture</li>
                                <li>Remove you from all training sessions</li>
                                <li>Wipe your history and backups</li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-slate-500 font-bold text-sm">Enter your email address to verify:</p>
                        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 p-5 flex items-center gap-4">
                            <Mail className="text-slate-400" size={20} />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="yourname@example.com"
                                className="bg-transparent flex-1 outline-none text-slate-800 dark:text-white font-medium"
                            />
                        </div>
                        <button
                            disabled={!email}
                            className={`w-full py-5 font-bold rounded-2xl border-2 transition-all ${email ? 'bg-white text-red-500 border-red-500 hover:bg-red-50' : 'bg-slate-50 text-slate-300 border-slate-100 cursor-not-allowed'
                                }`}
                        >
                            Delete my account
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    if (view === 'change-password') {
        return (
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-sm border border-slate-100 dark:border-slate-800 animate-in slide-in-from-right duration-500">
                <button
                    onClick={() => { setView('main'); setIsSuccess(false); setError(''); setPasswords({ current: '', new: '', confirm: '' }); }}
                    className="mb-6 text-sm font-bold text-blue-600 hover:underline flex items-center gap-1"
                >
                    ← Back to Security
                </button>

                {isSuccess ? (
                    <div className="flex flex-col items-center justify-center py-12 animate-in zoom-in duration-500">
                        <div className="bg-green-100 dark:bg-green-900/20 p-5 rounded-full mb-6">
                            <CheckCircle2 className="text-green-500 w-16 h-16" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Success!</h2>
                        <p className="text-slate-500 font-medium text-center mb-8">
                            New password successfully added.
                        </p>
                        <button
                            onClick={() => { setView('main'); setIsSuccess(false); setPasswords({ current: '', new: '', confirm: '' }); }}
                            className="px-8 py-3 bg-slate-900 dark:bg-white dark:text-black text-white font-bold rounded-full transition-all active:scale-95"
                        >
                            Done
                        </button>
                    </div>
                ) : (
                    <div className="animate-in fade-in duration-300">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Change password</h2>
                        <p className="text-slate-500 font-medium mb-8">
                            Your password must be at least 6 characters and should include a combination of numbers, letters and special characters (!$@%).
                        </p>

                        <div className="space-y-4 max-w-md">
                            <input
                                type="password"
                                placeholder="Current password"
                                value={passwords.current}
                                onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
                                className="w-full p-5 rounded-2xl border-2 border-slate-50 dark:border-slate-800 bg-slate-50/30 focus:border-blue-500 outline-none transition-all"
                            />
                            <input
                                type="password"
                                placeholder="New password"
                                value={passwords.new}
                                onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
                                className="w-full p-5 rounded-2xl border-2 border-slate-50 dark:border-slate-800 bg-slate-50/30 focus:border-blue-500 outline-none transition-all"
                            />
                            <input
                                type="password"
                                placeholder="Retype new password"
                                value={passwords.confirm}
                                onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                                className="w-full p-5 rounded-2xl border-2 border-slate-50 dark:border-slate-800 bg-slate-50/30 focus:border-blue-500 outline-none transition-all"
                            />

                            {error && (
                                <p className="text-red-500 text-sm font-bold animate-in fade-in slide-in-from-top-1">
                                    {error}
                                </p>
                            )}

                            <div className="py-4">
                                <button className="text-blue-600 font-bold hover:underline text-sm">Forgotten your password?</button>
                                <div className="flex items-start gap-3 mt-4">
                                    <input type="checkbox" id="logout-others" className="mt-1.5 w-5 h-5 accent-blue-600 cursor-pointer" defaultChecked />
                                    <label htmlFor="logout-others" className="text-slate-600 dark:text-slate-400 font-medium leading-tight text-sm cursor-pointer">
                                        Log out of other devices. Choose this if someone else used your account.
                                    </label>
                                </div>
                            </div>

                            <button
                                onClick={handlePasswordChange}
                                className="w-full py-5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-100 dark:shadow-none"
                            >
                                Change Password
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    if (view === 'setup-2fa') {
        return (
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-sm border border-slate-100 dark:border-slate-800 animate-in slide-in-from-right duration-500">
                <button
                    onClick={() => { setView('main'); setEmail(''); setOtp(''); }}
                    className="mb-6 text-sm font-bold text-slate-400 hover:text-slate-600 flex items-center gap-1"
                >
                    Cancel
                </button>

                {isSuccess ? (
                    <div className="flex flex-col items-center justify-center py-10 animate-in zoom-in">
                        <div className="bg-green-100 dark:bg-green-900/20 p-5 rounded-full mb-6">
                            <CheckCircle2 className="text-green-500 w-16 h-16" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Activated!</h2>
                        <p className="text-slate-500 text-center font-medium">Security checks will now appear randomly during login.</p>
                    </div>
                ) : (
                    <>
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                                {setupStep === 'email' ? "Verify Email" : "Enter Code"}
                            </h2>
                            <p className="text-slate-500 font-medium text-sm">
                                {setupStep === 'email'
                                    ? "To enable Two-Factor Authentication, please verify your email address first."
                                    : `Enter the 4-digit code sent to ${email}`
                                }
                            </p>
                        </div>
                        <div className="space-y-6">
                            {setupStep === 'email' ? (
                                <div className="space-y-4 animate-in fade-in">
                                    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 p-5 flex items-center gap-4">
                                        <Mail className="text-slate-400" size={20} />
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            className="bg-transparent flex-1 outline-none text-slate-800 dark:text-white font-medium"
                                        />
                                    </div>
                                    <button
                                        onClick={handleSend2FACode}
                                        disabled={!email}
                                        className={`w-full py-4 font-bold rounded-2xl flex items-center justify-center gap-2 transition-all ${email ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}
                                    >
                                        Send Code <ArrowRight size={18} />
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-4 animate-in slide-in-from-right">
                                    <div className="flex justify-center gap-3 my-4">
                                        <input
                                            type="text"
                                            maxLength={4}
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ''))}
                                            placeholder="0000"
                                            className="w-full text-center text-3xl tracking-[1em] font-bold p-5 rounded-2xl border-2 border-blue-100 dark:border-slate-700 focus:border-blue-500 outline-none bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white transition-all"
                                        />
                                    </div>
                                    <button
                                        onClick={handleVerify2FACode}
                                        disabled={otp.length !== 4}
                                        className={`w-full py-4 font-bold rounded-2xl transition-all ${otp.length === 4 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}
                                    >
                                        Verify & Enable
                                    </button>
                                    <button onClick={() => setSetupStep('email')} className="w-full text-sm font-bold text-slate-400 hover:text-slate-600">Wrong email? Go back</button>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-sm border border-slate-100 dark:border-slate-800">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                    <Shield className="text-blue-600 w-5 h-5" /> Security Settings
                </h3>

                <div className="space-y-4">
                    <div onClick={() => setView('change-password')} className="flex items-center justify-between p-6 rounded-3xl bg-slate-50/50 dark:bg-slate-800/50 border border-slate-50 dark:border-slate-800 cursor-pointer hover:border-blue-100 transition-all group">
                        <div className="flex items-center gap-4">
                            <Key className="text-slate-400 group-hover:text-blue-600 transition-colors" size={20} />
                            <span className="font-bold text-slate-700 dark:text-slate-200">Change Password</span>
                        </div>
                        <ChevronRight className="text-slate-300 group-hover:text-blue-600 transition-all" size={20} />
                    </div>

                    <div className="flex items-center justify-between p-6 rounded-3xl bg-slate-50/50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                        <div className="flex items-center gap-4">
                            <Shield className={twoFactorEnabled ? 'text-blue-600' : 'text-slate-400'} size={20} />
                            <div>
                                <h4 className="font-bold text-slate-700 dark:text-slate-200">Two-Factor Authentication</h4>
                                <p className="text-slate-400 text-xs font-medium mt-1">
                                    {twoFactorEnabled ? "Active. Security checks will appear randomly during login." : "Add extra security to your account"}
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={handleToggle2FA}
                            className={`w-12 h-6 rounded-full relative flex items-center px-1 transition-all ${twoFactorEnabled ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-700'}`}
                        >
                            <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-all ${twoFactorEnabled ? 'translate-x-6' : 'translate-x-0'}`} />
                        </button>
                    </div>

                    <div
                        onClick={() => setView('delete-account')}
                        className="flex items-center justify-between p-6 rounded-3xl bg-slate-50/50 dark:bg-slate-800/50 border border-slate-50 dark:border-slate-800 cursor-pointer hover:border-slate-200 transition-all group"
                    >
                        <div className="flex items-center gap-4">
                            <AlertTriangle className="text-slate-400 group-hover:text-slate-800 dark:group-hover:text-white transition-colors" size={20} />
                            <span className="font-bold text-slate-700 dark:text-slate-200">Delete Account</span>
                        </div>
                        <ChevronRight className="text-slate-300 group-hover:text-slate-800" size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Security;