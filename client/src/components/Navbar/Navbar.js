import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './styles';
import { Typography } from '@material-ui/core';
//import useStyles from './styles';
//import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';

const Navbar = ({ toggle }) => {
    //const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        history.push('/');

        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        // JWT ...
        if(token){
            const decodedToken = decode(token);

            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <>
            <Nav>
                {user?.result ? (
                    <NavLink to='/profile' activeStyle>
                        <Typography>{user?.result.name}</Typography>
                    </NavLink>                    
                    ) : ( null
                )}
                
                <Bars onClick={toggle}/>
                <NavMenu>
                    <NavLink to='/' exact activeStyle>
                        <Typography>Home</Typography>
                    </NavLink>
                </NavMenu>
                {user?.result ? (
                    <NavMenu>
                        <NavLink to='/create' exact activeStyle>
                            <Typography>Create Post</Typography>
                        </NavLink>
                    </NavMenu>
                    ) : null
                }
                <NavMenu>
                    <NavLink to='/aboutus' exact activeStyle>
                        <Typography>About Us</Typography>
                    </NavLink>
                </NavMenu>

                {user?.result ? (
                    <NavBtn onClick={logout}>
                        <NavBtnLink to='/'><Typography>Logout</Typography></NavBtnLink>
                    </NavBtn>
                ) : (
                    <NavBtn>
                        <NavBtnLink to='/auth'><Typography>Sign In</Typography></NavBtnLink>
                    </NavBtn>
                )}
            </Nav>
        </>
    );
}

export default Navbar;


{/* <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h5" align="center">Alumni System</Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {user?.result ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                        <Typography component={Link} to="/profile" className={classes.userName} variant="h6">{user?.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} onClick={logout} color="primary">Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar> */}