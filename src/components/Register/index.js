import React, { useState } from 'react';
import {createUserWithEmailAndPassword,GoogleAuthProvider ,signInWithPopup} from 'firebase/auth';
import {auth} from '../firebase'
import { useNavigate } from 'react-router-dom';
import './index.css'

const Register = () => {
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        if(!email|| !password){
            setError("please enter Email or password")
            return
        }
        try{
            const userCredential = await createUserWithEmailAndPassword(auth,email,password)
            console.log("new user is registered")
            setEmail('')
            setPassword('')
            navigate('/signin')
        }catch(e){
            setError(e.message)
        }
    }

    const provider = new GoogleAuthProvider();
    const signInWithGoogle = async() => {
        try{
            const result = await signInWithPopup(auth,provider)
            console.log(result.user)
        }catch(e){
            console.log("error", e.message)
        }
    }

    return(
        <div className='cart-container'>
            <center>
                <h1>Register</h1>
               <form onSubmit={onSubmitHandler} autoComplete="off" className='m-5 form p-5 d-flex flex-column justify-center align-items-center'>
                    <div>
                        <input value={email} placeholder='Enter Email' type='email' onChange={(e) => setEmail(e.target.value)}/>
                    </div> <br/>
                    <div>
                    <input value={password} placeholder='password' type='password' onChange={(e) => setPassword(e.target.value)}/>
                    </div> <br/>
                    <button className='btn btn-outline-primary' type='submit'>Submit</button>
               </form>
               <div>
                    <button onClick={signInWithGoogle}>Google signIn</button>
               </div>
               <div>
                <p>{error}</p>
                <a href='/signin'>SignIn</a>
               </div>
            </center>
        </div>
    )
}

export default Register