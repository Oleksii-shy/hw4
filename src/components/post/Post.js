import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import PostDetails from "../post-details/PostDetails";
export default function Post({item}) {
    return (
        <div>
            <hr/>
            {item.id}. {item.title} - <Link to={{
                pathname: '/posts/' + item.id,
                state: item
        }}>Details</Link>
            <div><i>{item.body}</i></div>
            <hr/>
        </div>
    );
}