import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
 
const Header = ({ currentUser }) => (
    <div className = 'header'>
        <Link to = '/' className = 'logo-container'>
             <Logo className = 'logo'></Logo>
        </Link>
        <div className = 'options'>
            <Link className = 'option' to = '/shop'>SHOP</Link>
            <Link className = 'option' to = '/shop'>CONTACT</Link>
            {
                currentUser ? 
                <div className='option display-name' onClick={() => auth.signOut()}>{currentUser.displayName}</div>
                :
                <Link to='/signin' className='option'>SIGN IN</Link>
            }
        </div>
    </div>
)

export default Header;

