import React, { useState, useEffect } from 'react'
import {SideBarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebtnWrap, SidebarRoute, SidebarLink} from './styles';
import { Typography } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

const Sidebar = ({ isOpen, toggle }) => {

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
        <SideBarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/" onClick={toggle}>
                        <Typography>
                            Home
                        </Typography>
                    </SidebarLink>
                    <SidebarLink to="/profile" onClick={toggle}>
                        <Typography>
                            Profile
                        </Typography> 
                    </SidebarLink>
                    <SidebarLink to="/create" onClick={toggle}>
                        <Typography>
                            Create Post
                        </Typography> 
                    </SidebarLink>
                    <SidebarLink to="/aboutus" onClick={toggle}>
                        <Typography>
                            About Us
                        </Typography>
                    </SidebarLink>
                </SidebarMenu>
                <SidebtnWrap>
                    {user?.result ? (
                        <SidebarRoute onClick={logout} to="/">
                            <Typography>Log Out</Typography>
                        </SidebarRoute>
                    ) : (
                        <SidebarRoute to="/auth">
                            <Typography>Sign In</Typography>
                        </SidebarRoute>
                    )}
                    
                </SidebtnWrap>
            </SidebarWrapper>
        </SideBarContainer>
    )
}

export default Sidebar
