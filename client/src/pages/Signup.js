import React, {useState} from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { Link } from 'react-router-dom';

function SignUp (props) {
    const [formState, setFormState] = useState({ email: '', password: ''});
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                email: formState.email,
                password: formState.password,
                firstName: formState.firstName,
                lastName: formState.lastName,
            },
        });
        const token=mutationResponse.data.addUser.token;
        Auth.login(token);
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // const successMessage = () => {
    //     return (
    //         <div className='success'
    //             style={{ display: submitted ? '' : 'none',}}>
    //                 <h2>successfully registered!</h2>
    //             </div>
    //     );
    // };

    return (
        <div className='form-align'>
            <h2 className='font-Poppins'>Sign Up</h2>
            <div className='successMessage'>
                {/* {successMessage()} */}
            </div>
            <form onSubmit={handleFormSubmit} action='#'>
                <div className='font-Poppins-light'>
                    <label htmlFor='firstName'>First Name</label>
                    <input className='input'
                    placeholder='First Name'
                    name='firstName'
                    type='firstName'
                    id='firstName'
                    onChange={handleChange}/>
                </div>
                <div className='font-Poppins-light'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input className='input'
                    placeholder='Last Name'
                    name='lastName'
                    type='lastName'
                    id='lastName'
                    onChange={handleChange}/>
                </div>
                <div className='font-Poppins-light'>
                    <label htmlFor='email'>Email</label>
                    <input className='input'
                    placeholder='youremail@email.com'
                    name='email'
                    type='email'
                    id='email'
                    onChange={handleChange}/>
                </div>
                <div className='font-Poppins-light'>
                    <label htmlFor='password'>Password</label>
                    <input className='input' placeholder='password'
                    name='password'
                    type='password'
                    id='password'
                    onChange={handleChange}/>
                </div>
                <button className='button' type='submit' value='Submit'>Submit</button>
            </form>
            <Link className='link font-Poppins-light' to="/login">Already have an account? Log in</Link>
        </div>
    );
}

export default SignUp;