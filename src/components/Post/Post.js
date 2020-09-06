import React, { useEffect, useState } from 'react';
import PostDetail from '../PostDetail/PostDetail';
import Comments from '../Comments/Comments';

const Post = () => {
    const [post, setPost] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data =>setPost(data))
    },[])

    return (
        <div>
           <h1>post: {post.length} </h1>
            <PostDetail></PostDetail>
            <Comments></Comments>
        </div>
    );
};

export default Post;