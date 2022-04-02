import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Post = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (

        <div>
            <h1>Every facebook post {posts.length}</h1>

            {
                posts.map(post => <Link
                    key={post.id}
                    to={`/posts/${post.id}`}
                >{post.id}</Link>)
            }
        </div>
    );
};

export default Post;