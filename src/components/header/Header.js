import Logo from '../../assets/images/logo.png'
import Avatar from '../../assets/images/zelenski.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Header = () => {

    const { currentUser, logout } = useAuth();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleClick(e) {
        e.preventDefault();

        try {
            setLoading(true)
            await logout()
            console.log(currentUser);
            navigate('/login');
        } catch (err) {
            const arr = err.message.split(/ (.*)/)
            const str = arr[1].split(' ').slice(0, -1).join(' ');
            toast.error(str);
        }

        setLoading(false)
    }

  return (
    <div className='header' main='header'>
        <div className='header-container'>
            <Link to='/' className='header-left'>
                <div className='img-container'>
                    <img src={Logo} alt='logo' />
                </div>
                <h1>Speak2Me</h1>
            </Link>
            <div className='header-middle'>
                <ul>
                    <li><Link to='/price'><span id='dollar'>$</span> Go Premium</Link></li>
                    <li><Link to='/what-we-do'>What we do?</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                </ul>
            </div>
            <div className='header-right'>
                {currentUser ? (
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div className='avatar-container'>
                            <img src={Avatar} alt='avatar' />
                        </div>
                        <span>{currentUser.displayName}</span>
                        <button disabled={loading} onClick={handleClick} id='logout'>Logout</button>
                    </div>
                ) : (
                    <>
                        <div className='login-container'>
                            <Link to='/login'>Login</Link>
                        </div>
                        <div className='sign-container'>
                            <Link to='/signup'>Sign Up</Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    </div>
  )
}

export default Header