import React from 'react';

const SignUp = () => {
    return (
        <div>
            <form className='bg-red-600'>
                <input type="text" />
                <input type="file" name="image" id="image" className='bg-blue-500' />
            </form>
        </div>
    );
};

export default SignUp;