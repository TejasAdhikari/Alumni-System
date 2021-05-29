import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid, Typography, Paper, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import decode from 'jwt-decode';

import { Link } from 'react-router-dom';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';


import { getPosts } from '../../actions/posts';
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
  
const Profile = () => {
    //const [currentId, setCurrentId] = useState(0);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        history.push('/');

        setUser(null);
    };

    // useEffect(() => {
    //     dispatch(getPosts());
    // }, [currentId, dispatch]);

    useEffect(() => {
        const token = user?.token;

        // JWT ...
        if(token){
            const decodedToken = decode(token);

            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    if (!user?.result) {
        return(
          <Paper>
            <Typography variant="h6" align="center">
              Please Sign In
            </Typography>
          </Paper>
        )
    }

    return(
        <Grow in>
            <div style={{display:"flex", justifyContent:"space-around", margin:"18px 0px", borderBottom:"1px solid grey"}}>
                <div>
                    <img style={{width: "160px", height:"160px", borderRadius:"80px"}} 
                        src={user?.result?.imageUrl ? user?.result?.imageUrl : "https://images.unsplash.com/photo-1555103067-ff09c48881ef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdoaXRlfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
                    />
                </div>
                <div style={{fontFamily: "Open Sans"}}>
                    <div style={{display: "flex"}}>
                        <h2>{user.result?.name}</h2>
                        <Button style={{margin: "15px"}} component={Link} to="/edit" ><EditOutlinedIcon/></Button>
                    </div>
                    
                    <div>
                        <h5>{user.result?.email}</h5>
                    </div>
                </div>
            </div>
        </Grow>
        
    );
};
  
export default Profile;

