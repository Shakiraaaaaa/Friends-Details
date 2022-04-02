import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { name, username, id } = props.friend;
    const navigate = useNavigate();
    const showFriendDetails = () => {
        const path = `/friends/${id}`;
        navigate(path);
    }
    return (
        <div>
            <h1>Name: {name}</h1>
            <Link to={'/friend/' + id}>show details</Link>
            <button onClick={showFriendDetails}>{username}</button>

        </div >
    );
};

export default Friend;