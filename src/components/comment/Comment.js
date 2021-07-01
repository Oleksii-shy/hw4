import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
export default function Comment({item: {id, name, body}}) {
    return (
        <div>
            <hr/>
            {id}. {name} - <Link to={'/comments/' + id}>Details</Link>
            <p><i>{body}</i></p>
            <hr/>
        </div>
    );
}