import React from 'react';
import { Link } from 'react-router-dom';
import '../CustomLink/CustomLink'
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1>Welcome to React Router</h1>

            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='friends'>Friends</CustomLink>
            <CustomLink to='about'>About</CustomLink>
            <Link to="/posts">Posts</Link>


        </div>
    );
};

export default Header;