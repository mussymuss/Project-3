import React from 'react';
import { Button } from '../../components/Button';
import { Link, useLocation } from 'react-router-dom';
import { user as userAPI } from '../../utils/API';

const Navbar = props => {

	const signout = () => {
		userAPI
			.signout()
			.then(() => props.setUser({}))
			.catch(e => { throw e });
	};

	// get location from react router location hook
	let location = useLocation();
	
	console.group('navbar')
	console.info(`🌎 page rendered at path: '${location.pathname}'`, "\n");
	console.info('🤖 user', props.user);
	console.groupEnd();

		return (
			<nav className="navbar"
				style={{color: 'white',  backgroundColor:"#0A0A23"}}
			>
			<Link to="/" style={{ color: '#FFF' }} className="navbar-brand" >Edward</Link>
            { props.user._id 
               ? <Button theme='dark' onClick={signout}>
                    <i className='fa fa-sign-out fa-1x' aria-hidden='true'></i>
                 </Button>
               : location.pathname === '/signup' 
                  ? <Link to='/login'><Button>Login</Button></Link>
				      : <Link to='/signup'><Button theme='primary'>Signup</Button></Link> }
			
			</nav>
		);
};
export default Navbar;