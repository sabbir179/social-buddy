import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {

    const {postId} = useParams();
    const [post, setPost] = useState({});

    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then (res => res.json())
        .then (data => setPost(data));
    },[])
    console.log(post)
    return (
        <div>
            <p> User Id : {postId}</p> 
            <h5> Title: "{post.title}"</h5> 
            <h3> comments:"{post.body}" </h3>
        </div>
    );
};

export default PostDetail;