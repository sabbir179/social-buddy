import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments'
import './PostDetail.css'
const PostDetail = () => {

    const {postId} = useParams();
    const [post, setPost] = useState({});

    const [comments, setComments] = useState([]);

    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then (res => res.json())
        .then (data => setPost(data));
    },[])

    // for comments 
    
    useEffect(() => {
        const url1 = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(url1)
        .then (res => res.json())
        .then (data => setComments(data));
    }, [])
        console.log(comments)
    return (
        <div>
            <div className="posts">
                <p> post Id : {postId}</p> 
                <h5> Title: "{post.title}"</h5> 
                <h3> comments:"{post.body}" </h3>
            </div>
            <div className="comments">
            <p>Comments for this title</p>
            
                {
                    comments.map(comment => <Comments comment={comment}></Comments>  )
                }
                
            </div>
        </div>
    );
};

export default PostDetail;