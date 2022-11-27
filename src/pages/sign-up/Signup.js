import Photo from '../../assets/images/login-photo.jpg'
import Logo from '../../assets/images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import { useAuth } from '../../contexts/AuthContext';

const Signup = () => {

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { register, currentUser } = useAuth();
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return toast.error('Passwords do not match');
    }

    try {
        setLoading(true);
        const user = await register(emailRef.current.value, passwordRef.current.value, nameRef.current.value);
        navigate('/');
    } catch (err) {
        const arr = err.message.split(/ (.*)/)
        const str = arr[1].split(' ').slice(0, -1).join(' ');
        toast.error(str);
    }
    setLoading(false);
  }

  return (
    <div className='sign-up' id='sign-up'>
      <div className='left-container'>
        <Toaster position='top-right' />
        <div className='back-photo'>
          <img src={Photo} alt='login-photo' />
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
          <div className='title'>
            <h2>Create an account</h2>
            <span>Get started with a 30-day trial</span>
          </div>
          <div className='form-group'>
            <label>Name</label>
            <input ref={nameRef} type="text" required />
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input ref={emailRef} type="email" required />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input ref={passwordRef} type='password' required />
          </div>
          <div className='form-group'>
            <label>Confirm Password</label>
            <input ref={passwordConfirmRef} type='password' required />
          </div>
          <div id='check'>
            <input type='checkbox' />
            <label>I agree with all terms and conditions</label>
          </div>
          <div id='btn'>
            <button disabled={loading} type='submit'>Create Account</button>
          </div>
        </form>
        <div className='go-signup'>
          <span>Already have an account? </span><Link id='sign-link' to='/login'>Sign In</Link>
        </div>
      </div>
    </div>
  )
}

export default Signup