import {useEffect, useState} from "react";
import {getPosts} from "../../services/API";
import Post from "../post/Post";
import PostDetails from "../post-details/PostDetails";
import {Route} from "react-router-dom";

export default function Posts() {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(value => {
            setPosts([...value.data])
        })
    }, []);
    return (
        <div>
            {posts.map(value => <Post key={value.id} item={value}/>)}
            <Route path={'/posts/:id'} component={PostDetails}/>
        </div>
    );
}