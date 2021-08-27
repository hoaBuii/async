import React from 'react';

const Posts = ({posts}) => {
    return(
        <ul>
            {
                (posts && posts.length!==0) 
                && posts.map((post, i)=>{
                    <li key={i}>{post.title}</li>
                })
            }
        </ul>
    );
}


export default Posts;