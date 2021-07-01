import {useEffect, useState} from "react";
import {getComment} from "../../services/API";

export default function CommentDetails({match: {params: {id}}}) {
    let [comment, setComment] = useState({});
    useEffect(() => {
        getComment(id).then(value => {
            setComment({...value.data});
        });
    }, [id]);
    return (
        <div>
            PostId - {comment.postId}, Email - <b>{comment.email}</b>
        </div>
    );
}