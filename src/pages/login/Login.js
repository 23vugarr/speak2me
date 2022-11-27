import Photo from '../../assets/images/login-photo.jpg'
import Logo from '../../assets/images/logo.png'
import GoogleLogo from '../../assets/images/google-logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast'

const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const { login, signWithGoogle } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate('/');
        } catch (err) {
            // const arr = err.message.split(/ (.*)/)
            // const str = arr[1].split(' ').slice(0, -1).join(' ');
            toast.error(err.message);
        }

        setLoading(false)
    }

    async function handleGoogle() {
        
        try {
            setLoading(true)
            await signWithGoogle();
            navigate('/');
        } catch (err) {
            // const arr = err.message.split(/ (.*)/)
            // const str = arr[1].split(' ').slice(0, -1).join(' ');
            toast.error(err.message);
        }
        setLoading(false)

    }

  return (
    <div className='login' id='login'>
            <div className='left-container'>
                <Toaster position='top-right' />
                <div className='back-photo'>
                    <img src={Photo} alt='login' />
                </div>
                <div className='info-container'>
                    <div className='logo-container'>
                        <div className='img-container'>
                            <img src={Logo} alt='logo' />
                        </div>
                        <h1>Speak2Me</h1>
                    </div>
                    <p className='info-text'>
                    Speak2Me is the best AI powered self-study tool to hone your English speaking skills. 
                    </p>
                    <div className='founders-container'>
                        <span>Farid, Vugar, Sabuhi, Oqtay</span> <br />
                        <span>Founders of Speak2Me platform</span>
                    </div>
                </div>
            </div>
            <div className='right-container'>
                <form onSubmit={handleSubmit}>
                    <h2>Sign In</h2>
                    <div className='form-group'>
                        <label>Email</label>
                        <input ref={emailRef} type="email" required />
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input ref={passwordRef} type='password' required />
                    </div>
                    <div id='check'>
                        <input type='checkbox' />
                        <label>Remember Me</label>
                    </div>
                    <div className='btn'>
                        <button disabled={loading} type='submit'>Login</button>
                    </div>
                </form>
                <div className='google-container'>
                    <div onClick={handleGoogle} id='google-btn'>
                        <div className='google-img'>
                            <img src={GoogleLogo} alt='google-login' />
                        </div>
                        <span>Sign In with Google</span>
                    </div>
                </div>
                <div className='go-signup'>
                    <span>New to Speak2Me? </span><Link id='sign-link' to='/signup'>Register</Link>
                </div>
            </div>
    </div>
  )
}

export default Login