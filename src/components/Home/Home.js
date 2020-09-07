import React, { useEffect, useState } from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Post from '../Post/Post';
import { Grid } from '@material-ui/core';
const Home = () => {
    const [post, setPost] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data =>setPost(data))
    },[])
    return (
        <div>
            
            <img src="../image/banner.jpg" alt=""/>
            <h1>post: {post.length} </h1>
            {
                post.map(post => <Post post={post}></Post>)
            }
        </div>
    );
};

export default Home;