import { useState } from "react"
import { auth } from "../firebase" 
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"


const SignIn = () => {
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')

    const onSubmitSingnIn = async (e) => {
        e.preventDefault()
        if(!email||!password){
            setEmail('please enter Email or password')
        }
        try{
            const userCredential = await signInWithEmailAndPassword(auth,email,password)
            console.log(userCredential.user.email)
            navigate('/')
        }catch(e){
            setError(e.message)
        }

    }

    return(
        <div>
            <div className="p-4">
                <center>
                <h1>SignIn</h1>
                <form onSubmit={onSubmitSingnIn} autoComplete="off" className='m-5 form p-5 d-flex flex-column justify-center align-items-center'>
                        <div>
                            <input value={email} placeholder='Enter Email' type='email' onChange={(e) => setEmail(e.target.value)}/>
                        </div> <br/>
                        <div>
                        <input value={password} placeholder='password' type='password' onChange={(e) => setPassword(e.target.value)}/>
                        </div> <br/>
                        <button className='btn btn-outline-primary' type='submit'>SignIn</button>
                </form>
                <div>
                    <p>{error}</p>
                    <a href="/register">Register</a>
                </div>
                </center>
            </div>
        </div>
    )
}

export default SignIn