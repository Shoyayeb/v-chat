import React from 'react';

const Login = ({ token, setToken, handleLogin }) => {

    return (
        <div className=' mt-32 flex flex-col items-center'>
            <form className='w-9/12 md:w-5/12 flex flex-col items-center gap-5' onSubmit={(e) => {
                e.preventDefault();
                handleLogin(token);
            }}>
                <input type="text" className=' w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm my-5' value={token} onChange={(e) => setToken(e.target.value)} />
                <button className=' rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700 w-2/6 mx-auto'>Login</button>
            </form>
        </div>

    );
};

export default Login;