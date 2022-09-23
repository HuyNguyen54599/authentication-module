import React from 'react';
import RegisterForm from '../RegisterForm';

function Register() {
    const handleSubmit = (value) => {
        console.log('Form submit', value);
    };

    return <RegisterForm onSubmit={handleSubmit} />;
}

export default Register;
