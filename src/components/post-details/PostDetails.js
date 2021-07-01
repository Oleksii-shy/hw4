import {useEffect, useState} from "react";

export default function PostDetails({location: {state}}) {
    let [post, setPost] = useState({});
    useEffect(() => {
        setPost({...state});
    }, [state]);
    return (
        <div>
            PostId - {post.id}, UserId - {post.userId}
            <p>{post.body}</p>
        </div>
    );
}