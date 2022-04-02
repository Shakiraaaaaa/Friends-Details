import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])

    return (
        <div>
            <h1>Detail of Bondhu: {friendId}</h1>
            <h2>Name:{friends.name}</h2>
            <h3>Email:{friends.email}</h3>\
            <h4>Website:{friends.website}</h4>
            <h5>City:{friends.address?.city}</h5>
        </div>
    );
};

export default FriendDetail;