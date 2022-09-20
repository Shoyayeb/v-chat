import React, { useState } from 'react';
import { BsArrowRightCircle } from "react-icons/bs";
import { FiLoader } from "react-icons/fi";
import useAuth from './../../Hooks/useAuth';
const LoginRegister = () => {
    const { createPhoneUser, pass, setPass, loginLoader, otpSuccess, verifyOTP } = useAuth();
    const [phone, setPhone] = useState('');
    let loadingButton = <div></div>
    if (loginLoader && !otpSuccess) {
        loadingButton = <FiLoader className='icon icon-tabler icon-tabler-mail animate-spin absolute right-0 flex items-center p-1 mx-1 text-2xl z-10 rounded-full' width={18} height={18} />
    } else {
        loadingButton = <button className="absolute right-0 flex items-center p-1 mx-1 text-2xl z-10 rounded-full" onClick={() => createPhoneUser(phone)}><BsArrowRightCircle className='icon icon-tabler icon-tabler-mail' width={18} height={18} /></button>
    }
    return (
        <div className="flex flex-col min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-10">
            <div className="w-full max-w-md space-t-8 mb-5">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Sign up with your phone
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or{' '}
                        <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Join temporary room.
                        </a>
                    </p>
                </div>
                <form className="mt-8 space-t-6" onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    <div id="sign-in-button"></div>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div className='relative flex items-center justify-center'>
                            <label htmlFor="email-address" className="sr-only">
                                Phone Number
                            </label>
                            <input
                                onChange={(e) => setPhone(e.target.value)}
                                id="phone"
                                name="phone"
                                type="tel"
                                autoComplete="tel"
                                required
                                className="relative block w-full appearance-none  rounded-t-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Phone Number"
                            />
                            {otpSuccess ? '' : <div className='absolute right-0 flex items-center p-1 mx-1 text-2xl z-10 rounded-full'>
                                {loginLoader ? <FiLoader className='icon icon-tabler icon-tabler-mail animate-spin ' width={18} height={18} /> : <button onClick={() => createPhoneUser(phone)}><BsArrowRightCircle className='icon icon-tabler icon-tabler-mail' width={18} height={18} /></button>}</div>}
                        </div>
                    </div>
                </form>
                {otpSuccess ? <form onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    <div className='relative flex items-center justify-center transition delay-150 ease-in-out translate-y-5 -inset-y-5 duration-500'>
                        <label htmlFor="otp" className="sr-only">
                            OTP
                        </label>
                        <input
                            onChange={(e) => {
                                setPass(e.target.value);
                            }}
                            id="otp"
                            name="otp"
                            type="text"
                            inputMode="numeric"
                            autoComplete="one-time-code"
                            pattern="\d{6}"
                            maxLength={6}
                            required
                            className=" relative  w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder="OTP"
                        />
                        {loginLoader ?
                            <FiLoader className='icon icon-tabler icon-tabler-mail animate-spin absolute right-0 flex items-center p-1 mx-1 text-2xl z-10 rounded-full' width={18} height={18} /> : <button className='absolute right-0 flex items-center p-1 mx-1 text-2xl z-10 rounded-full' onClick={() => verifyOTP(pass)}><BsArrowRightCircle className='icon icon-tabler icon-tabler-mail ' width={18} height={18} /></button>}
                    </div>
                </form> : ''}
            </div>

            <div className="flex items-center justify-center">
                <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-base font-medium text-gray-900">
                    Remember me
                </label>
            </div>
        </div >

    );
};

export default LoginRegister;